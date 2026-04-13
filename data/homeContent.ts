import { employmentSection } from '@/data/content/employment'
import { newsSection } from '@/data/content/news'
import { partySection } from '@/data/content/party'
import type { ContentEntry } from '@/data/content/types'

export type NewsItem = {
  id: string
  title: string
  summary: string
  date: string
  href: string
}

export type ArticleItem = {
  id: string
  title: string
  category: string
  image: string
  date: string
  href: string
  summary?: string
}

function formatDisplayDate(date: string) {
  return date.replace(/-/g, '.')
}

function mapNewsItems(): NewsItem[] {
  const entries = newsSection.categories[0]?.entries ?? []

  return entries.map((entry) => ({
    id: entry.slug,
    title: entry.title,
    summary: entry.summary,
    date: formatDisplayDate(entry.publishedAt),
    href: `/news/${entry.slug}`,
  }))
}

function mapArticleItems(sectionSlug: 'party' | 'employment', entries: ContentEntry[]): ArticleItem[] {
  return entries.map((entry) => ({
    id: entry.slug,
    title: entry.title,
    category: entry.metadata?.category ?? '',
    image: entry.metadata?.heroImage ?? '/image/banner/home-banner-3.jpg',
    date: formatDisplayDate(entry.publishedAt),
    href: `/${sectionSlug}/${entry.slug}`,
    summary: entry.summary,
  }))
}

export const newsData: NewsItem[] = mapNewsItems()

export const partyData: ArticleItem[] = mapArticleItems(
  'party',
  partySection.categories[0]?.entries ?? [],
)

export const employmentData: ArticleItem[] = mapArticleItems(
  'employment',
  employmentSection.categories[0]?.entries ?? [],
)

export interface QuickLink {
  title: string
  href: string
}

export const quickLinks: QuickLink[] = [
  {
    title: '学校主页',
    href: 'https://www.lncc.edu.cn/',
  },
  {
    title: '系主任邮箱',
    href: 'mailto:jinlei@lncc.edu.cn',
  },
  {
    title: '招生咨询',
    href: 'https://work.weixin.qq.com/kfid/kfc9e4c15629b41719f',
  },
  {
    title: '就业咨询',
    href: 'https://work.weixin.qq.com/kfid/kfcb14e6aeeab797f25?service=https%3A%2F%2Fjy.ncss.cn%2Fcaslogin.html',
  },
  {
    title: '访企拓岗',
    href: 'https://login.chsi.com.cn/passport/login?service=https%3A%2F%2Fjy.ncss.cn%2Fcaslogin.html',
  },
]
