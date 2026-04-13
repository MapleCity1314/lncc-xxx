import AntiFraudWall from '@/content/party/anti-fraud-wall.mdx'
import FaceToFaceWithSecretary from '@/content/party/face-to-face-with-secretary.mdx'
import MourningHeroes from '@/content/party/mourning-heroes.mdx'
import type { ContentCategory, ContentEntry, SectionContent } from './types'

const mourningEntry: ContentEntry = {
  slug: 'mourning-heroes',
  title: '缅怀英烈志 薪火永相传——我系组织学生党员参加清明节祭奠志愿军英烈大会',
  summary:
    '为践行红色传承，信息工程系在清明开展祭奠活动，学生党员在陵园表达敬意，并在交流中重申使命担当。',
  publishedAt: '2024-04-07',
  mdxComponent: MourningHeroes,
  metadata: {
    category: '党建动态',
    heroImage: '/image/police/police-study-1.jpg',
  },
}

const faceToFaceEntry: ContentEntry = {
  slug: 'face-to-face-with-secretary',
  title: '倾听“生”音，同策同行——“我与书记面对面”座谈会圆满举行',
  summary:
    '书记与学生代表在面对面对话中聚焦学习规划、实践资源与岗位准备，推动组织关怀落地。',
  publishedAt: '2024-04-08',
  mdxComponent: FaceToFaceWithSecretary,
  metadata: {
    category: '团学活动',
    heroImage: '/image/police/police-life-1.jpg',
  },
}

const antiFraudEntry: ContentEntry = {
  slug: 'anti-fraud-wall',
  title: '筑牢反诈“防火墙” 护航青春成长路——联合属地分局成功举办防范电信网络诈骗讲座',
  summary:
    '信息工程系联合属地分局开展反诈讲座，还原诈骗链路并普及实用防护技巧，扩大安全传播半径。',
  publishedAt: '2024-04-03',
  mdxComponent: AntiFraudWall,
  metadata: {
    category: '志愿服务',
    heroImage: '/image/police/police-training-2.jpg',
  },
}

const activitiesCategory: ContentCategory = {
  slug: 'activities',
  title: '党团活动',
  description: '记录党建引领下的主题活动、宣讲与志愿服务。',
  entries: [mourningEntry, faceToFaceEntry, antiFraudEntry],
}

export const partySection: SectionContent = {
  slug: 'party',
  hero: {
    title: '党团建设',
    subtitle: 'Party & Youth League',
    image: '/image/banner/home-banner-3.jpg',
  },
  sidebar: {
    title: '党团动态',
    subtitle: 'Party & Youth League',
  },
  menu: [{ label: '党建活动', href: '/party' }],
  breadcrumbs: [
    { label: '首页', href: '/' },
    { label: '党团建设', href: '/party' },
  ],
  categories: [activitiesCategory],
}
