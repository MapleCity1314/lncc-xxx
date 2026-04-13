import AiInnovation from '@/content/majors/program-construction/ai-innovation.mdx'
import CurriculumInnovation from '@/content/majors/course-development/curriculum-innovation.mdx'
import RoadBridge from '@/content/majors/program-construction/road-bridge-engineering.mdx'
import TeachingOutcomes from '@/content/majors/teaching-achievement/learning-outcomes.mdx'
import ComputerNetwork from '@/content/majors/programs/computer-network.mdx'
import SoftwareTechnology from '@/content/majors/programs/software-technology.mdx'
import SoftwareTesting from '@/content/majors/programs/software-testing.mdx'
import CloudApplication from '@/content/majors/programs/cloud-app.mdx'
import AiApplication from '@/content/majors/programs/ai-application.mdx'
import DigitalMedia from '@/content/majors/programs/digital-media.mdx'
import FilmAnimation from '@/content/majors/programs/film-animation.mdx'
import type { ContentCategory, ContentEntry, SectionContent } from './types'

const roadBridgeEntry: ContentEntry = {
  slug: 'road-bridge-engineering',
  title: '道路桥梁工程技术专业群发展',
  summary: '聚焦桥梁结构、地铁隧道与道路养护的交叉能力，融合企业共建实训链路。',
  publishedAt: '2024-04-10',
  mdxComponent: RoadBridge,
  metadata: {
    category: '专业群建设 · 桥梁山水',
  },
}

const aiInnovationEntry: ContentEntry = {
  slug: 'ai-bridge-innovation',
  title: '智能化赋能专业群项目',
  summary: '“AI+桥梁”训练营将数字孪生与智能巡检融入专业群实践课题。',
  publishedAt: '2024-04-02',
  mdxComponent: AiInnovation,
  metadata: {
    category: '专业群建设 · 智能运维',
  },
}

const curriculumEntry: ContentEntry = {
  slug: 'curriculum-innovation',
  title: '课程群建设与数字化更新',
  summary: '课程以“基础-应用-提升”三级逻辑设计，辅以 AI 助教与标准能力指标。',
  publishedAt: '2024-03-28',
  mdxComponent: CurriculumInnovation,
  metadata: {
    category: '课程建设 · 数字化课列',
  },
}

const teachingEntry: ContentEntry = {
  slug: 'teaching-achievements',
  title: '教学成果与评价闭环',
  summary: '教学成果日、校企评价委员会与数据中台共同织就成果治理网络。',
  publishedAt: '2024-03-25',
  mdxComponent: TeachingOutcomes,
  metadata: {
    category: '教学成果 · 评价治理',
  },
}

const majorEntries: ContentEntry[] = [
  {
    slug: 'zysz-jsjwljs-htm',
    title: '计算机网络技术',
    summary: '网络部署、安全运维与云设施集成的实践型教学链。',
    publishedAt: '2024-04-12',
    mdxComponent: ComputerNetwork,
    metadata: {
      category: '专业方向 · 网络工程',
      heroTitle: '计算机网络技术',
      heroSubtitle: 'NETWORK ENGINEERING · SMART CONNECTIVITY',
      heroImage: '/image/training/training-lab-1.jpg',
    },
    categorySlug: 'specializations',
    aliasSlugs: [['zysz-jsjwljs-htm']],
    sections: [
      {
        id: 'network-overview',
        title: '专业概览',
        description: '聚焦工业与交通网络的部署、维护与安全攻防。',
        items: [
          {
            title: '实训方向',
            description: '多域网络构建 + 网络攻防 + 云原生网管。',
            linkLabel: '查看核心课程',
            href: '#',
          },
        ],
      },
      {
        id: 'network-career',
        title: '就业方向',
        description: '云网运维工程师 / 网络架构师。',
        items: [{ title: '校企合作', description: '与运营商共建实训室，引入HCIE认证训练。', linkLabel: '合作详情', href: '#' }],
      },
    ],
  },
  {
    slug: 'zysz-rjjs-htm',
    title: '软件技术',
    summary: '软件工程、自动化测试与敏捷交付的复合型能力训练。',
    publishedAt: '2024-03-30',
    mdxComponent: SoftwareTechnology,
    metadata: {
      category: '专业方向 · 软件工程',
      heroTitle: '软件技术',
      heroSubtitle: 'SOFTWARE ENGINEERING · SUSTAINABLE DELIVERY',
      heroImage: '/image/major/ai/major-ai-cert-12.jpg',
    },
    categorySlug: 'specializations',
    aliasSlugs: [['zysz-rjjs-htm']],
    sections: [
      {
        id: 'software-practice',
        title: '实践训练',
        description: '项目驱动、自动化测试与敏捷交付。',
        items: [
          {
            title: '典型课程',
            description: '软件工程、前端开发、DevOps 实践。',
            linkLabel: '课程介绍',
            href: '#',
          },
        ],
      },
      {
        id: 'software-platform',
        title: '平台生态',
        description: 'CI/CD + 自动化测试平台集成。',
        items: [
          {
            title: '研发平台',
            description: '与企业共建的代码托管 + 测试 + 发布链路。',
            linkLabel: '平台详情',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    slug: 'zysz-rjjs-rjcs-htm',
    title: '软件技术（软件测试）',
    summary: '自动化测试、性能调优与质量度量的实训型专业方向。',
    publishedAt: '2024-03-28',
    mdxComponent: SoftwareTesting,
    metadata: {
      category: '专业方向 · 自动化测试',
      heroTitle: '软件技术（软件测试）',
      heroSubtitle: 'SOFTWARE TESTING · QUALITY FIRST',
      heroImage: '/image/employment/employment-graduation-flow.jpg',
    },
    categorySlug: 'specializations',
    aliasSlugs: [['zysz-rjjs-rjcs-htm']],
    sections: [
      {
        id: 'testing-overview',
        title: '测试能力',
        description: '质量度量、自动化、性能保障。',
        items: [
          {
            title: '自建平台',
            description: '模拟业务系统，验证自动化脚本。',
            linkLabel: '平台介绍',
            href: '#',
          },
        ],
      },
      {
        id: 'testing-career',
        title: '行业需求',
        description: '面向金融、交通等行业的质量工程师。',
        items: [
          {
            title: '认证路径',
            description: 'ISTQB/CTFL + 国内企业认证课程。',
            linkLabel: '认证详情',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    slug: 'zysz-yjsjsyy-htm',
    title: '云计算技术应用',
    summary: '云架构部署、边缘计算与 DevOps 平台的技术融合。',
    publishedAt: '2024-03-25',
    mdxComponent: CloudApplication,
    metadata: {
      category: '专业方向 · 云计算',
      heroTitle: '云计算技术应用',
      heroSubtitle: 'CLOUD COMPUTING · LIVE OPERATIONS',
      heroImage: '/image/training/training-lab-1.jpg',
    },
    categorySlug: 'specializations',
    aliasSlugs: [['zysz-yjsjsyy-htm']],
    sections: [
      {
        id: 'cloud-architecture',
        title: '架构治理',
        description: '混合云编排 + 自动化运维。',
        items: [
          {
            title: '项目案例',
            description: '跨云调度与平台搭建。',
            linkLabel: '案例详情',
            href: '#',
          },
        ],
      },
      {
        id: 'cloud-cert',
        title: '云能力认证',
        description: 'AWS/Azure/阿里云认证通道。',
        items: [
          {
            title: '实验室',
            description: '云原生实训 + 云安全调度。',
            linkLabel: '实验室介绍',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    slug: 'zysz-rgznjsyy-htm',
    title: '人工智能技术应用',
    summary: 'AI+智能感知、决策与产业服务的综合性训练。',
    publishedAt: '2024-03-22',
    mdxComponent: AiApplication,
    metadata: {
      category: '专业方向 · 人工智能',
      heroTitle: '人工智能技术应用',
      heroSubtitle: 'AI INTEGRATION · INDUSTRIAL INTELLIGENCE',
      heroImage: '/image/major/ai/major-ai-cert-12.jpg',
    },
    categorySlug: 'specializations',
    aliasSlugs: [['zysz-rgznjsyy-htm']],
    sections: [
      {
        id: 'ai-solutions',
        title: 'AI 项目',
        description: '视觉、语音与工业智能模型部署。',
        items: [
          {
            title: '典型场景',
            description: '智慧管廊、巡检、质量判定模型。',
            linkLabel: '项目详情',
            href: '#',
          },
        ],
      },
      {
        id: 'ai-tools',
        title: 'AI 实验',
        description: '多模态数据集 + 工业模型训练。',
        items: [
          {
            title: '装备配套',
            description: 'GPU 集群 + AI 加速实验室。',
            linkLabel: '实验室介绍',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    slug: 'zysz-szmtjs-htm',
    title: '数字媒体技术',
    summary: '可视化、沉浸式媒体与数字传播的协同训练。',
    publishedAt: '2024-03-20',
    mdxComponent: DigitalMedia,
    metadata: {
      category: '专业方向 · 数字传媒',
      heroTitle: '数字媒体技术',
      heroSubtitle: 'DIGITAL MEDIA · IMMERSE & CREATE',
      heroImage: '/image/major/ai/major-ai-cert-12.jpg',
    },
    categorySlug: 'specializations',
    aliasSlugs: [['zysz-szmtjs-htm']],
    sections: [
      {
        id: 'media-creation',
        title: '多媒体创作',
        description: '可视化、动画、交互设计。',
        items: [
          {
            title: '创作工坊',
            description: '沉浸式内容制作 + VR 展示。',
            linkLabel: '创作详情',
            href: '#',
          },
        ],
      },
      {
        id: 'media-distribution',
        title: '内容传播',
        description: '品牌传播与多平台运营。',
        items: [
          {
            title: '行业合作',
            description: '与数字文化企业共创 IP。',
            linkLabel: '合作详情',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    slug: 'zysz-ysdh-htm',
    title: '影视动画',
    summary: '故事创作、角色建模与动画制作的沉浸式训练。',
    publishedAt: '2024-03-18',
    mdxComponent: FilmAnimation,
    metadata: {
      category: '专业方向 · 影视动画',
      heroTitle: '影视动画',
      heroSubtitle: 'FILM & ANIMATION · STORYCRAFT',
      heroImage: '/image/employment/employment-graduation-flow.jpg',
    },
    categorySlug: 'specializations',
    aliasSlugs: [['zysz-ysdh-htm']],
    sections: [
      {
        id: 'film-workflow',
        title: '制作流程',
        description: '从脚本到渲染的完整制作链。',
        items: [
          {
            title: '制作流水线',
            description: '故事创作、角色建模、特效合成。',
            linkLabel: '流程介绍',
            href: '#',
          },
        ],
      },
      {
        id: 'film-collab',
        title: '产业协作',
        description: '沈阳影视产业园实训 + 实习项目。',
        items: [
          {
            title: '成果展映',
            description: '参与实际项目，强化作品展示。',
            linkLabel: '展映详情',
            href: '#',
          },
        ],
      },
    ],
  },
]

const programGroupsCategory: ContentCategory = {
  slug: 'program-groups',
  title: '专业群建设实践',
  description: '立足道路桥梁与轨道交通，构建专业群协同、实训共建与企业导师体系。',
  entries: [roadBridgeEntry, aiInnovationEntry],
}

const courseDevelopmentCategory: ContentCategory = {
  slug: 'course-development',
  title: '课程体系建设',
  description: '课程与实践融合、数字教材、实训虚拟机与 AI 助教组成完整闭环。',
  entries: [curriculumEntry],
}

const teachingAchievementCategory: ContentCategory = {
  slug: 'teaching-achievement',
  title: '成果展示与评价',
  description: '构建成果展演、企业评审与数据驱动评价，让成果经得起行业检验。',
  entries: [teachingEntry],
}

const programConstructionCategory: ContentCategory = {
  slug: 'program-construction',
  title: '专业建设',
  description: '通过“专业群 + 课程 + 教学成果”三轨协同持续提升人才培养质量。',
  children: [programGroupsCategory],
}

const specializationCategory: ContentCategory = {
  slug: 'specializations',
  title: '专业列表',
  description: '紧贴计算机类专业方向，涵盖网络、软件、云计算与数字媒体实践。',
  entries: majorEntries,
}
export const majorsSection: SectionContent = {
  slug: 'majors',
  landingEntrySlug: 'zysz-jsjwljs-htm',
  hero: {
    title: '人才培养',
    subtitle: 'PROGRAM CONSTRUCTION',
    image: '/image/banner/home-banner-3.jpg',
  },
  sidebar: {
    title: '专业设置',
    subtitle: 'Specialization Directory',
  },
  menu: [
    { label: '专业建设', enLabel: 'Program Construction', href: '/majors/program-construction' },
    { label: '课程建设', enLabel: 'Curriculum Development', href: '/majors/course-development' },
    { label: '教学成果', enLabel: 'Teaching Achievement', href: '/majors/teaching-achievement' },
    { label: '专业方向', enLabel: 'Specializations', href: '/majors/specializations' },
  ],
  breadcrumbs: [
    { label: '首页', href: '/' },
    { label: '人才培养', href: '/majors' },
  ],
  categories: [
    programConstructionCategory,
    specializationCategory,
    courseDevelopmentCategory,
    teachingAchievementCategory,
  ],
}
