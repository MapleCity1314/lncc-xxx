<div align="center">

<img src="public/image/logo/main-logo.png" alt="学校 Logo" height="60"/>
&nbsp;&nbsp;&nbsp;
<img src="public/image/logo/logo.png" alt="信息工程系 Logo" height="60"/>

# 信息工程系官方网站

**LNCC Department of Information Engineering**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![Static Export](https://img.shields.io/badge/部署方式-静态导出-2563eb?style=flat-square)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

*理性、可信、现代 — 专为高职院系官网设计的信息展示平台*

</div>

---

## 目录

- [信息工程系官方网站](#信息工程系官方网站)
  - [目录](#目录)
  - [项目简介](#项目简介)
  - [技术栈](#技术栈)
  - [功能模块](#功能模块)
  - [目录结构](#目录结构)
  - [快速开始](#快速开始)
  - [开发规范](#开发规范)
    - [组件约定](#组件约定)
    - [静态导出约束](#静态导出约束)
    - [命名规范](#命名规范)
  - [构建与部署](#构建与部署)
  - [多人协作](#多人协作)
    - [认领任务](#认领任务)
    - [提交规范](#提交规范)
    - [提交前检查](#提交前检查)
    - [合并策略](#合并策略)
  - [设计语言](#设计语言)

---

## 项目简介

本仓库是**信息工程系**官方网站的前端源码。网站面向在校生、招生对象、家长及行业合作伙伴，提供系部概况、专业介绍、师资队伍、教研科研、实训基地、校企合作、招生就业及校友会等全量信息。

- **纯静态站点**：`output: 'export'`，无 Node.js 运行时，可托管于任意静态服务器
- **无后端依赖**：所有数据以 TypeScript 文件形式存放于 `data/`，构建时注入
- **双层视觉策略**：首页强氛围感（大图 Hero + 动效），内页强信息层级（浅背景 + 精准排版）

---

## 技术栈

| 层级 | 技术 | 版本 |
|---|---|---|
| 框架 | Next.js (App Router) | 16 |
| UI 库 | React | 19 |
| 样式 | Tailwind CSS | v4 |
| 语言 | TypeScript | 5 |
| 动画 | GSAP + Framer Motion | 3 / 12 |
| 包管理 | pnpm | 10 |
| 测试 | Vitest + Testing Library | 3 |

> Tailwind v4 不使用 `tailwind.config.ts`，所有设计 token 在 `app/globals.css` 的 `@theme` 块中定义。

---

## 功能模块

```
首页 /               ← Banner 轮播 · 新闻公告 · 专业概览 · 快捷入口
本系概况 /about      ← 系部介绍 · 发展历程 · 办学特色 · 荣誉成果
专业设置 /majors     ← 专业列表 · 专业详情（课程/就业/成果/师资）
师资队伍 /teachers   ← 教师列表（职称筛选）· 教师详情
教研科研 /research   ← 成果/项目/论文/专利（分类筛选 + 分页）
实训基地 /training   ← 校内/校外基地 · 图片 Lightbox
校企合作 /partners   ← 企业 Logo 墙 · 合作项目 · 合作模式
招生就业 /enrollment ← 招生政策/计划/简章 · 就业率 · 附件下载
新闻公告 /news       ← 新闻列表（分页）· 新闻详情
校友会 /alumni       ← 校友展示（专业/届次筛选）· 校友活动图集
```

---

## 目录结构

```
/                               # 项目根（@/* 别名指向此处）
├── app/
│   ├── layout.tsx              # 根 Layout（html / body）
│   ├── globals.css             # Tailwind v4 入口 + @theme 设计 token
│   ├── not-found.tsx           # 自定义 404 页面
│   ├── global-error.tsx        # 全局错误边界
│   └── (frontend)/             # 路由组（不影响 URL）
│       ├── page.tsx            # /
│       ├── about/
│       ├── majors/[slug]/
│       ├── teachers/[id]/
│       ├── news/[slug]/
│       ├── research/
│       ├── training/
│       ├── partners/
│       ├── enrollment/
│       └── alumni/
├── components/                 # 共享组件（PascalCase .tsx）
├── data/                       # 静态数据文件（唯一数据源）
│   ├── types.ts                # 全量 TypeScript 接口
│   └── *.ts                    # 各实体数据文件
├── public/
│   ├── media/                  # 图片（WebP，sharp 压缩）
│   └── attachments/            # 可下载附件
├── docs/
│   └── tasks.md                # 任务卡（任务认领与验收）
├── AGENTS.md                   # 工程约束（所有贡献者必读）
└── DESIGN.md                   # 视觉设计规范
```

**文件行数上限**

| 类型 | 上限 | 超出时 |
|---|---|---|
| `components/*.tsx` | 200 行 | 拆分子组件 |
| `app/**/page.tsx` | 150 行 | 提取 section 组件 |
| `data/*.ts` | 500 行 | 按子域拆分 |

---

## 快速开始

**环境要求**：Node.js ≥ 20，pnpm ≥ 10

```bash
# 克隆仓库
git clone <repo-url>
cd lncc-xxx

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

**其他常用命令**

```bash
pnpm build        # 生产构建 → 产物在 out/
pnpm lint         # ESLint 检查
pnpm test         # Vitest 单元测试
npx tsc --noEmit  # TypeScript 类型检查
npx serve out     # 本地预览静态产物
```

---

## 开发规范

> 详细规范见 [`AGENTS.md`](./AGENTS.md)，以下为核心摘要。

### 组件约定

```tsx
// Server Component（默认，无需指令）
export default function TeacherCard({ name, title }: Props) {
  return <div>...</div>
}

// Client Component（仅在需要 useState / useRouter 时添加）
'use client'
export default function TagFilter({ options, paramKey }: Props) {
  const router = useRouter()
  // ...
}
```

- **默认 Server Component**，仅在需要交互状态时添加 `'use client'`
- 使用 `type` 定义 Props，不用 `interface`
- 所有 import 使用 `@/*` 别名，禁止相对路径 `../../`
- 组件不直接 import `data/`，数据由父页面以 props 传入

### 静态导出约束

| 约束 | 原因 |
|---|---|
| 筛选/分页只能在客户端 | `output: 'export'` 无 Node.js 运行时 |
| 动态路由必须导出 `generateStaticParams` | 静态导出需枚举全部路径 |
| `next/image` 必须 `unoptimized: true` | 静态导出不支持图片优化 API |
| 禁止 `/api/*` 路由 | 纯静态站点 |

### 命名规范

| 类型 | 规范 | 示例 |
|---|---|---|
| 组件文件 | PascalCase | `TeacherCard.tsx` |
| 工具函数 | kebab-case | `format-date.ts` |
| 数据文件 | camelCase | `teachers.ts` |
| 测试文件 | 同名 + `.test.tsx` | `TeacherCard.test.tsx` |

---

## 构建与部署

```bash
# 1. 构建
pnpm build
# → 生成 out/ 纯静态目录

# 2. 本地预览（模拟 Nginx 静态托管）
npx serve out

# 3. 上传到服务器
scp -r out/ user@server:/var/www/lncc/
```

**上线前检查清单**

- [ ] `out/` 目录完整，所有动态路由 `.html` 文件均已生成
- [ ] `public/media/` 图片均为 WebP 格式，移动端宽度 ≤ 800px
- [ ] Nginx 配置 trailing slash：`try_files $uri $uri/ $uri.html =404`

---

## 多人协作

### 认领任务

1. 打开 [`docs/tasks.md`](./docs/tasks.md) 选择状态为 `🟢 Ready` 的任务
2. 在团队频道声明任务 ID，避免撞车
3. 创建功能分支：

```bash
git checkout -b feat/C-01-richtext-renderer
# feat/<task-id>-<short-desc>
# fix/<task-id>-<short-desc>
# chore/<task-id>-<short-desc>
```

### 提交规范

```
<type>(<scope>): <subject>

feat(C-01): add RichTextRenderer with prose typography
fix(C-09): pause carousel correctly on hover
data(teachers): add 3 sample teacher records
```

### 提交前检查

```bash
pnpm build          # 必须通过
npx tsc --noEmit    # 无类型错误
pnpm lint           # 无 lint 错误
```

### 合并策略

- PR 合并使用 **Squash and Merge**，保持 `main` 历史线性整洁
- 合并后删除远程功能分支
- 冲突由 PR 作者解决，不由 Reviewer 处理

---

## 设计语言

> 完整设计规范见 [`DESIGN.md`](./DESIGN.md)

**色彩体系**

| Token | 值 | 用途 |
|---|---|---|
| `--color-primary-600` | `#2563eb` | 主要操作、激活态、链接强调 |
| `--color-primary-700` | `#1d4ed8` | Hover 态、标题重点 |
| `--color-neutral-900` | `#0f172a` | 深色底层、首页 Hero 覆盖层 |
| `--color-neutral-50` | `#f8fafc` | 页面背景 |

**字体**：阿里巴巴普惠体 / Noto Sans SC，中文内容为视觉主层，英文为辅助说明

**双层视觉策略**

- **首页**：大图 Hero + 深色叠加层 + 强对比标题 + 入场动效
- **内页**：浅色背景 + 清晰层级 + 稳定间距 + 信息优先

---

<div align="center">

Built with Next.js 16 · React 19 · Tailwind CSS v4

</div>
