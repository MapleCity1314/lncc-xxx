#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
从“官网链接汇总.md”中提取链接，抓取 HTML 网页正文，清洗后输出为 Markdown 文件。

特性：
1. 读取你整理好的 Markdown 链接汇总文件。
2. 自动提取其中的 URL。
3. 跳过 PDF、图片、邮箱、微信客服等非 HTML 页面。
4. 抓取页面并尽量抽取正文内容。
5. 将每个页面保存成独立的 .md 文件。
6. 默认输出目录 = 输入 md 文件所在目录。

用法：
    python scrape_lncc_links_to_md.py 官网链接汇总.md

可选：
    python scrape_lncc_links_to_md.py 官网链接汇总.md --output-dir ./output
    python scrape_lncc_links_to_md.py 官网链接汇总.md --delay 0.5 --timeout 20

依赖：
    pip install requests beautifulsoup4 markdownify lxml
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import time
from pathlib import Path
from typing import Iterable, List, Optional, Set, Tuple
from urllib.parse import unquote, urlparse

import requests
from bs4 import BeautifulSoup, Tag
from markdownify import markdownify as html_to_md


DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    )
}

SKIP_SUFFIXES = {
    ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
    ".zip", ".rar", ".7z", ".jpg", ".jpeg", ".png", ".gif", ".webp",
    ".mp4", ".mp3", ".avi", ".wmv", ".flv", ".apk"
}

SKIP_SCHEMES = {"mailto", "javascript"}

# 常见正文容器候选；辽宁高校站群常见模板也尽量覆盖
CONTENT_SELECTORS = [
    "#vsb_content",
    ".v_news_content",
    ".wp_articlecontent",
    ".news_content",
    ".content",
    ".article",
    ".article-content",
    ".detail-content",
    ".main-content",
    ".cont",
    ".ny_con",
    ".read",
    "article",
    "main",
]

REMOVE_TAGS = {
    "script", "style", "noscript", "iframe", "svg", "canvas", "form",
    "input", "button", "footer", "nav", "aside"
}

REMOVE_SELECTORS = [
    ".breadcrumb", ".crumb", ".position", ".share", ".bdsharebuttonbox",
    ".page", ".pagination", ".pager", ".next", ".prev", ".related",
    ".xg", ".xgxw", ".recommend", ".recommendation", ".sidebar",
    ".menu", ".subnav", ".top", ".bottom", ".header", ".footer",
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="抓取链接汇总中的 HTML 页面并转换为 Markdown")
    parser.add_argument("input_md", help="包含链接汇总的 Markdown 文件路径")
    parser.add_argument(
        "--output-dir",
        help="输出目录；默认与输入 md 文件所在目录一致",
        default=None,
    )
    parser.add_argument("--timeout", type=int, default=20, help="HTTP 超时时间，默认 20 秒")
    parser.add_argument("--delay", type=float, default=0.3, help="每次请求间隔秒数，默认 0.3")
    parser.add_argument(
        "--max-retries", type=int, default=2, help="失败重试次数，默认 2"
    )
    parser.add_argument(
        "--index-name",
        default="_crawl_index.json",
        help="索引文件名，默认 _crawl_index.json",
    )
    return parser.parse_args()


INLINE_MD_LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
RAW_URL_RE = re.compile(r"https?://[^\s)>\]]+")


def read_text_file(path: Path) -> str:
    for enc in ("utf-8", "utf-8-sig", "gbk", "gb18030"):
        try:
            return path.read_text(encoding=enc)
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError("unknown", b"", 0, 1, f"无法解码文件: {path}")



def extract_links(md_text: str) -> List[Tuple[str, str]]:
    """提取 (文本, URL)。若没有链接文本，则文本为空字符串。"""
    seen: Set[str] = set()
    results: List[Tuple[str, str]] = []

    for text, url in INLINE_MD_LINK_RE.findall(md_text):
        url = url.strip()
        if url and url not in seen:
            results.append((text.strip(), url))
            seen.add(url)

    for url in RAW_URL_RE.findall(md_text):
        url = url.strip()
        if url and url not in seen:
            results.append(("", url))
            seen.add(url)

    return results



def should_skip_url(url: str) -> Tuple[bool, str]:
    parsed = urlparse(url)
    scheme = parsed.scheme.lower()
    if scheme in SKIP_SCHEMES:
        return True, f"跳过 scheme={scheme}"

    lowered = url.lower()
    if any(lowered.endswith(suffix) for suffix in SKIP_SUFFIXES):
        return True, "跳过非 HTML 文件"

    if "work.weixin.qq.com" in lowered:
        return True, "跳过微信客服/外部表单链接"

    return False, ""



def get_with_retry(session: requests.Session, url: str, timeout: int, max_retries: int) -> requests.Response:
    last_err: Optional[Exception] = None
    for attempt in range(max_retries + 1):
        try:
            resp = session.get(url, headers=DEFAULT_HEADERS, timeout=timeout)
            resp.raise_for_status()
            return resp
        except Exception as exc:  # noqa: BLE001
            last_err = exc
            if attempt < max_retries:
                time.sleep(1.2 * (attempt + 1))
    assert last_err is not None
    raise last_err



def is_probably_html(resp: requests.Response, url: str) -> bool:
    content_type = (resp.headers.get("Content-Type") or "").lower()
    if "text/html" in content_type:
        return True
    if "application/xhtml+xml" in content_type:
        return True
    # 某些站点 content-type 配置不规范，依据 URL 粗略兜底
    path = urlparse(url).path.lower()
    if any(path.endswith(suffix) for suffix in SKIP_SUFFIXES):
        return False
    return True



def clean_dom(root: Tag) -> None:
    for tag_name in REMOVE_TAGS:
        for tag in root.find_all(tag_name):
            tag.decompose()

    for selector in REMOVE_SELECTORS:
        for tag in root.select(selector):
            tag.decompose()

    # 去除空白属性，减少 markdown 噪音
    for tag in root.find_all(True):
        keep_attrs = {}
        if tag.name == "a" and tag.get("href"):
            keep_attrs["href"] = tag.get("href")
        if tag.name == "img" and tag.get("src"):
            keep_attrs["src"] = tag.get("src")
            if tag.get("alt"):
                keep_attrs["alt"] = tag.get("alt")
        tag.attrs = keep_attrs



def text_density_score(tag: Tag) -> float:
    text = tag.get_text(" ", strip=True)
    if not text:
        return 0.0
    p_count = len(tag.find_all(["p", "br", "div", "li"]))
    link_text_len = sum(len(a.get_text(" ", strip=True)) for a in tag.find_all("a"))
    total_len = len(text)
    punctuation_bonus = sum(text.count(ch) for ch in "，。；：！？、“”‘’（）《》")
    score = total_len + punctuation_bonus * 8 + p_count * 30 - link_text_len * 0.6
    return score



def pick_content_node(soup: BeautifulSoup) -> Tag:
    for selector in CONTENT_SELECTORS:
        node = soup.select_one(selector)
        if node and len(node.get_text(" ", strip=True)) >= 80:
            return node

    # 回退：在 body 下找“文字密度最高”的块
    body = soup.body or soup
    candidates = body.find_all(["div", "section", "article", "main", "td"])
    best = None
    best_score = -1.0
    for tag in candidates:
        score = text_density_score(tag)
        if score > best_score:
            best_score = score
            best = tag
    return best or body



def extract_title(soup: BeautifulSoup, fallback: str, content_node: Optional[Tag] = None) -> str:
    title_candidates: List[str] = []

    if soup.title and soup.title.get_text(strip=True):
        title_candidates.append(soup.title.get_text(strip=True))

    for selector in ["h1", ".arti_title", ".Article_Title", ".title", ".news_title"]:
        node = soup.select_one(selector)
        if node:
            text = node.get_text(" ", strip=True)
            if text:
                title_candidates.append(text)

    if content_node:
        first_h = content_node.find(["h1", "h2", "h3"])
        if first_h:
            text = first_h.get_text(" ", strip=True)
            if text:
                title_candidates.append(text)

    title_candidates.append(fallback)

    for title in title_candidates:
        title = re.sub(r"\s+", " ", title).strip("-_| ")
        if title:
            return title
    return "untitled"



def normalize_markdown(md: str) -> str:
    md = md.replace("\r\n", "\n").replace("\r", "\n")
    md = re.sub(r"\n{3,}", "\n\n", md)
    md = re.sub(r"[ \t]+\n", "\n", md)
    md = re.sub(r"\n[ \t]+", "\n", md)

    # 移除明显模板残留
    noisy_lines = [
        r"^上一篇.*$",
        r"^下一篇.*$",
        r"^上一条.*$",
        r"^下一条.*$",
        r"^返回列表.*$",
        r"^打印.*$",
        r"^关闭窗口.*$",
    ]
    lines = md.split("\n")
    filtered = []
    for line in lines:
        striped = line.strip()
        if not striped:
            filtered.append("")
            continue
        if any(re.match(pat, striped) for pat in noisy_lines):
            continue
        filtered.append(line.rstrip())

    md = "\n".join(filtered)
    md = re.sub(r"\n{3,}", "\n\n", md).strip()
    return md



def sanitize_filename(name: str, max_len: int = 100) -> str:
    name = unquote(name)
    name = re.sub(r"[\\/:*?\"<>|\n\r\t]+", "_", name)
    name = re.sub(r"\s+", "_", name).strip("._ ")
    if not name:
        name = "untitled"
    return name[:max_len]



def build_output_name(url: str, title: str) -> str:
    parsed = urlparse(url)
    last_seg = Path(parsed.path).name or "index"
    stem = Path(last_seg).stem or "index"
    digest = hashlib.md5(url.encode("utf-8")).hexdigest()[:8]
    filename = f"{sanitize_filename(title)}__{sanitize_filename(stem)}__{digest}.md"
    return filename



def html_page_to_markdown(url: str, html: str, fallback_text: str = "") -> Tuple[str, str]:
    soup = BeautifulSoup(html, "lxml")
    content_node = pick_content_node(soup)
    clean_dom(content_node)
    title = extract_title(soup, fallback_text or url, content_node)

    md_body = html_to_md(
        str(content_node),
        heading_style="ATX",
        bullets="-",
        strip=["script", "style"],
    )
    md_body = normalize_markdown(md_body)

    header = [
        f"# {title}",
        "",
        f"- 原始链接: {url}",
        "",
    ]
    full_md = "\n".join(header) + (md_body or "") + "\n"
    return title, full_md



def save_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")



def main() -> int:
    args = parse_args()
    input_md = Path(args.input_md).expanduser().resolve()
    if not input_md.exists():
        print(f"[ERROR] 输入文件不存在: {input_md}", file=sys.stderr)
        return 1

    output_dir = (
        Path(args.output_dir).expanduser().resolve()
        if args.output_dir
        else input_md.parent.resolve()
    )
    output_dir.mkdir(parents=True, exist_ok=True)

    md_text = read_text_file(input_md)
    links = extract_links(md_text)
    if not links:
        print("[WARN] 未从输入 Markdown 中提取到任何链接")
        return 0

    session = requests.Session()
    index_items = []

    print(f"[INFO] 输入文件: {input_md}")
    print(f"[INFO] 输出目录: {output_dir}")
    print(f"[INFO] 提取到链接数: {len(links)}")

    for idx, (link_text, url) in enumerate(links, start=1):
        skip, reason = should_skip_url(url)
        if skip:
            print(f"[{idx}/{len(links)}] SKIP {url} | {reason}")
            index_items.append({
                "url": url,
                "text": link_text,
                "status": "skipped",
                "reason": reason,
            })
            continue

        try:
            print(f"[{idx}/{len(links)}] FETCH {url}")
            resp = get_with_retry(session, url, timeout=args.timeout, max_retries=args.max_retries)
            resp.encoding = resp.apparent_encoding or resp.encoding or "utf-8"

            if not is_probably_html(resp, url):
                print(f"[{idx}/{len(links)}] SKIP {url} | 响应不是 HTML")
                index_items.append({
                    "url": url,
                    "text": link_text,
                    "status": "skipped",
                    "reason": "响应不是 HTML",
                })
                continue

            title, md_content = html_page_to_markdown(url, resp.text, fallback_text=link_text)
            output_name = build_output_name(url, title)
            output_path = output_dir / output_name
            save_text(output_path, md_content)

            index_items.append({
                "url": url,
                "text": link_text,
                "status": "saved",
                "title": title,
                "output": str(output_path),
            })
            print(f"[{idx}/{len(links)}] OK   -> {output_path.name}")

        except Exception as exc:  # noqa: BLE001
            print(f"[{idx}/{len(links)}] FAIL {url} | {exc}", file=sys.stderr)
            index_items.append({
                "url": url,
                "text": link_text,
                "status": "failed",
                "reason": str(exc),
            })
        finally:
            if args.delay > 0:
                time.sleep(args.delay)

    index_path = output_dir / args.index_name
    save_text(index_path, json.dumps(index_items, ensure_ascii=False, indent=2))
    print(f"[INFO] 索引文件已写入: {index_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
