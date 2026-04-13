import CampusSecurity from '@/content/news/campus-security.mdx'
import SafetyWeek from '@/content/news/safety-week.mdx'
import type { ContentCategory, ContentEntry, SectionContent } from './types'

const securityEntry: ContentEntry = {
  slug: 'campus-security-week',
  title: '校园安全教育周系列报道',
  summary: '多维度安全教育矩阵点亮师生“守护线上线下”的学习路径。',
  publishedAt: '2024-04-10',
  mdxComponent: CampusSecurity,
  aliasSlugs: [['campus-security-week']],
  metadata: {
    category: '安全教育',
  },
}

const corridorEntry: ContentEntry = {
  slug: 'safety-corridor-initiative',
  title: '安全教育走廊：驻足·学习·反思',
  summary: '图文走廊联动多重互动，是安全教育周的温度面孔。',
  publishedAt: '2024-04-09',
  mdxComponent: SafetyWeek,
  aliasSlugs: [['safety-corridor-initiative']],
  metadata: {
    category: '安全提醒',
  },
}

const announcementCategory: ContentCategory = {
  slug: 'announcements',
  title: '最新公告与安全通知',
  description: '围绕安全教育与校园治理，每周甄选重要通知与项目动态。',
  entries: [securityEntry, corridorEntry],
}

export const newsSection: SectionContent = {
  slug: 'news',
  hero: {
    title: '新闻公告',
    subtitle: 'NEWS & UPDATES',
    image: '/image/banner/home-banner-3.jpg',
  },
  sidebar: {
    title: '新闻动态',
    subtitle: 'News & Updates',
  },
  menu: [
    { label: '新闻公告', href: '/news' },
    { label: '通知公示', href: '/news/announcements' },
  ],
  breadcrumbs: [
    { label: '首页', href: '/' },
    { label: '新闻公告', href: '/news' },
  ],
  categories: [announcementCategory],
}
