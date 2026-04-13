import AlumniSharing from '@/content/employment/alumni-sharing.mdx'
import CompanyOnCampus from '@/content/employment/company-on-campus.mdx'
import IndustryVisit from '@/content/employment/industry-visit-software-park.mdx'
import type { ContentCategory, ContentEntry, SectionContent } from './types'

const industryVisitEntry: ContentEntry = {
  slug: 'industry-visit-software-park',
  title: '访企拓岗架金桥 产教融合促就业——信息工程系赴沈阳国际软件园专项走访纪实',
  summary:
    '校企联合访企拓岗，听取企业岗位画像、实训需求，并商定共建平台与导师机制，撑起人才输出新通道。',
  publishedAt: '2024-04-10',
  mdxComponent: IndustryVisit,
  metadata: {
    category: '产教融合',
    heroImage: '/image/employment/employment-graduation-flow.jpg',
  },
}

const alumniSharingEntry: ContentEntry = {
  slug: 'alumni-sharing',
  title: '助学专升本，共筑升学梦——信息工程系举办优秀校友专升本经验分享会',
  summary:
    '专升本分享会聚焦复习规划、资源推荐与心态引导，校友与老师共同答疑，构建双通道升学机制。',
  publishedAt: '2024-04-02',
  mdxComponent: AlumniSharing,
  metadata: {
    category: '校友风采',
    heroImage: '/image/major/ai/major-ai-cert-12.jpg',
  },
}

const companyOnCampusEntry: ContentEntry = {
  slug: 'company-on-campus',
  title: '我系成功举办“名企进校园”——东软集团2024届毕业生春季专场宣讲招聘会',
  summary:
    '携手东软开展“名企进校园”宣讲会，聚焦智能制造、云计算岗位，并提供面试辅导与导师互动。',
  publishedAt: '2024-04-01',
  mdxComponent: CompanyOnCampus,
  metadata: {
    category: '招聘动态',
    heroImage: '/image/training/training-lab-1.jpg',
  },
}

const employmentCategory: ContentCategory = {
  slug: 'initiatives',
  title: '产教实践动态',
  description: '归档产教合作、校友升学与企业招聘的重要活动。',
  entries: [industryVisitEntry, alumniSharingEntry, companyOnCampusEntry],
}

export const employmentSection: SectionContent = {
  slug: 'employment',
  hero: {
    title: '产教融合与就业',
    subtitle: 'Integration & Employment',
    image: '/image/banner/home-banner-1.jpg',
  },
  sidebar: {
    title: '产教与就业',
    subtitle: 'Integration & Employment',
  },
  menu: [{ label: '产教动态', href: '/employment' }],
  breadcrumbs: [
    { label: '首页', href: '/' },
    { label: '产教融合与就业', href: '/employment' },
  ],
  categories: [employmentCategory],
}
