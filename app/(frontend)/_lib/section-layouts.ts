import type { SubPageBreadcrumb, SubPageMenuItem } from '@/components/SubPageLayout'
import type { SectionRoute } from '@/app/(frontend)/_lib/metadata'
import { pageContent } from '@/app/(frontend)/_lib/route-placeholders'

const DEFAULT_HERO_IMAGE = '/image/banner/home-banner-3.jpg'

type SectionNavItem = SubPageMenuItem & {
  defaultActive?: boolean
}

type SectionLayoutConfig = {
  heroSubtitle: string
  sidebarTitle: string
  sidebarSubtitle?: string
  heroImage?: string
  menuItems: SectionNavItem[]
  breadcrumbs?: SubPageBreadcrumb[]
}

const sectionLayouts: Partial<Record<SectionRoute, SectionLayoutConfig>> = {
  about: {
    heroSubtitle: 'ABOUT DEPARTMENT',
    sidebarTitle: '系部概况',
    sidebarSubtitle: 'Department Overview',
    menuItems: [
      { label: '系部介绍', href: '/about', defaultActive: true },
      { label: '发展沿革', href: '/about#history' },
      { label: '办学特色', href: '/about#features' },
    ],
  },
  majors: {
    heroSubtitle: 'PROGRAM CONSTRUCTION',
    sidebarTitle: '专业建设',
    menuItems: [
      { label: '专业建设动态', href: '/majors/program-construction', defaultActive: true },
      { label: '课程建设', href: '/majors/course-development' },
      { label: '教学成果', href: '/majors/teaching-achievement' },
      { label: '专业方向', href: '/majors/specializations' },
    ],
  },
  news: {
    heroSubtitle: 'NEWS & UPDATES',
    sidebarTitle: '新闻动态',
    menuItems: [
      { label: '新闻公告', href: '/news', defaultActive: true },
      { label: '最新通知', href: '/news/announcements' },
    ],
  },
  teachers: {
    heroSubtitle: 'FACULTY & STAFF',
    sidebarTitle: '师资分类',
    menuItems: [
      { label: '组织机构', href: '/teachers/organization', defaultActive: true },
      { label: '教师风采', href: '/teachers/faculty' },
      { label: '教授风采', href: '/teachers/professors' },
      { label: '博士风采', href: '/teachers/doctors' },
    ],
  },
  research: {
    heroSubtitle: 'RESEARCH & TEACHING',
    sidebarTitle: '教研科研',
    menuItems: [
      { label: '教研项目', href: '/research#teaching-projects', defaultActive: true },
      { label: '科研项目', href: '/research#research-projects' },
      { label: '学术论文', href: '/research#papers' },
      { label: '教材著作', href: '/research#textbooks' },
      { label: '成果获奖', href: '/research#awards' },
    ],
  },
  training: {
    heroSubtitle: 'TRAINING BASES',
    sidebarTitle: '实训基地',
    menuItems: [
      { label: '校内实训基地', href: '/training#internal-bases', defaultActive: true },
      { label: '校外实训基地', href: '/training#external-bases' },
    ],
  },
  partners: {
    heroSubtitle: 'INDUSTRY PARTNERS',
    sidebarTitle: '校企合作',
    menuItems: [
      { label: '合作企业', href: '/partners#companies', defaultActive: true },
      { label: '合作动态', href: '/partners#updates' },
    ],
  },
  enrollment: {
    heroSubtitle: 'ADMISSIONS & CAREER',
    sidebarTitle: '招生就业',
    menuItems: [
      { label: '招生咨询', href: '/enrollment#admissions', defaultActive: true },
      { label: '就业服务', href: '/enrollment#employment-services' },
      { label: '访企拓岗', href: '/enrollment#enterprise-visits' },
    ],
  },
  alumni: {
    heroSubtitle: 'ALUMNI SERVICES',
    sidebarTitle: '校友会',
    menuItems: [
      { label: '校友风采', href: '/alumni#profiles', defaultActive: true },
      { label: '返校服务', href: '/alumni#return-services' },
      { label: '校友信息', href: '/alumni#alumni-info' },
    ],
  },
  police: {
    heroSubtitle: 'POLICE RECRUITMENT',
    sidebarTitle: '警士直招',
    menuItems: [
      { label: '入学军训', href: '/police#admission-training', defaultActive: true },
      { label: '日常学习', href: '/police#daily-study' },
      { label: '日常训练', href: '/police#daily-drill' },
      { label: '日常生活', href: '/police#daily-life' },
      { label: '假期集训', href: '/police#vacation-camp' },
      { label: '相关政策', href: '/police#policies' },
    ],
  },
}

function stripHash(href: string) {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) {
    return href
  }
  return href.slice(0, hashIndex) || href
}

function isMenuItemActive(item: SectionNavItem, currentPath: string) {
  if (item.href === currentPath) {
    return true
  }

  const baseHref = stripHash(item.href)
  const hasHash = item.href.includes('#')

  if (hasHash && baseHref === currentPath && item.defaultActive) {
    return true
  }

  return !hasHash && baseHref === currentPath
}

export function getSectionLayout(section: SectionRoute, currentPath: string) {
  const baseConfig = sectionLayouts[section]
  const heroTitle = pageContent[section].title
  const heroSubtitle = baseConfig?.heroSubtitle ?? 'OVERVIEW'
  const heroImage = baseConfig?.heroImage ?? DEFAULT_HERO_IMAGE
  const sidebarTitle = baseConfig?.sidebarTitle ?? heroTitle
  const sidebarSubtitle = baseConfig?.sidebarSubtitle
  const breadcrumbs: SubPageBreadcrumb[] =
    baseConfig?.breadcrumbs ??
    [
      { label: '首页', href: '/' },
      { label: heroTitle, href: `/${section}` },
    ]
  const menuItems = (baseConfig?.menuItems ?? []).map((item) => ({
    label: item.label,
    href: item.href,
    isActive: isMenuItemActive(item, currentPath),
  }))

  return {
    heroTitle,
    heroSubtitle,
    heroImage,
    sidebarTitle,
    sidebarSubtitle,
    menuItems,
    breadcrumbs,
  }
}
