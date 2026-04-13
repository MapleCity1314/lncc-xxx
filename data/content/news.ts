import InnovationTrainingProgramNotice from '@/content/news/innovation-training-program-notice.mdx'
import MidtermTeachingInspection from '@/content/news/midterm-teaching-inspection.mdx'
import ResearchParkExchange from '@/content/news/research-park-exchange.mdx'
import SafetyEducationWeekNotice from '@/content/news/safety-education-week-notice.mdx'
import SkillCompetitionCommendation from '@/content/news/skill-competition-commendation.mdx'
import type { ContentCategory, ContentEntry, SectionContent } from './types'

const announcementEntries: ContentEntry[] = [
  {
    slug: 'skill-competition-commendation',
    title: '信息工程系举办2024年度专业技能大赛表彰大会暨学风建设动员会',
    summary:
      '围绕技能竞赛表彰、学风建设部署与人才培养闭环推进，进一步强化以赛促学成效。',
    publishedAt: '2024-04-10',
    mdxComponent: SkillCompetitionCommendation,
    metadata: {
      category: '新闻速递',
    },
  },
  {
    slug: 'safety-education-week-notice',
    title: '关于开展“校园安全教育周”系列活动的通知',
    summary:
      '聚焦消防、网络、宿舍与实训安全，通过主题班会、演练和线上学习提升安全意识。',
    publishedAt: '2024-04-07',
    mdxComponent: SafetyEducationWeekNotice,
    metadata: {
      category: '通知公告',
    },
  },
  {
    slug: 'midterm-teaching-inspection',
    title: '我系召开2023-2024学年第二学期期中教学检查工作部署会',
    summary:
      '围绕课堂运行、实践教学、资料归档和学习反馈开展期中教学检查专项部署。',
    publishedAt: '2024-04-03',
    mdxComponent: MidtermTeachingInspection,
    metadata: {
      category: '教学管理',
    },
  },
  {
    slug: 'research-park-exchange',
    title: '教研动态：我系教师赴沈阳国际软件园开展深入调研与技术交流',
    summary:
      '面向岗位能力、课程更新和企业导师合作开展园区调研，推动产教融合走深走实。',
    publishedAt: '2024-04-02',
    mdxComponent: ResearchParkExchange,
    metadata: {
      category: '教研动态',
    },
  },
  {
    slug: 'innovation-training-program-notice',
    title: '关于组织申报2024年度大学生创新创业训练计划项目的通知',
    summary:
      '围绕专业特色项目申报、过程辅导与阶段验收，支持学生在真实项目中提升创新能力。',
    publishedAt: '2024-03-31',
    mdxComponent: InnovationTrainingProgramNotice,
    metadata: {
      category: '通知公告',
    },
  },
]

const announcementCategory: ContentCategory = {
  slug: 'announcements',
  title: '通知与新闻',
  description: '汇总系部新闻速递、教学动态和重要通知。',
  entries: announcementEntries,
}

export const newsSection: SectionContent = {
  slug: 'news',
  hero: {
    title: '新闻公告',
    subtitle: 'NEWS & UPDATES',
    image: '/image/banner/home-banner-3.jpg',
  },
  sidebar: {
    title: '新闻公告',
    subtitle: 'News & Updates',
  },
  menu: [
    { label: '新闻公告', href: '/news' },
    { label: '通知与新闻', href: '/news/announcements' },
  ],
  breadcrumbs: [
    { label: '首页', href: '/' },
    { label: '新闻公告', href: '/news' },
  ],
  categories: [announcementCategory],
}
