import homepageArticles from '@/mock/articles/homepage'
import aboutOverview from '@/mock/about/overview'
import alumniInfo from '@/mock/alumni/alumniInfo'
import alumniProfiles from '@/mock/alumni/alumniProfiles'
import alumniReturnServices from '@/mock/alumni/returnServices'
import alumniLanding from '@/mock/alumni/landing'
import enrollmentAdmissionsLinks from '@/mock/enrollment/admissionsLinks'
import enrollmentEmploymentLinks from '@/mock/enrollment/employmentLinks'
import enrollmentEmploymentServices from '@/mock/enrollment/employmentServices'
import enrollmentEnterpriseVisits from '@/mock/enrollment/enterpriseVisits'
import enrollmentLanding from '@/mock/enrollment/landing'
import employmentArticles from '@/mock/index/career'
import majorsLab from '@/mock/majors/lab'
import majorsLanding from '@/mock/majors/landing'
import majorsPrograms from '@/mock/majors/programs'
import militaryLanding from '@/mock/military/landing'
import militaryPolicies from '@/mock/military/policies'
import partnersCompanies from '@/mock/partners/companies'
import partnersLanding from '@/mock/partners/landing'
import partnersUpdates from '@/mock/partners/updates'
import researchAwards from '@/mock/research/awards'
import researchLanding from '@/mock/research/landing'
import researchPapers from '@/mock/research/papers'
import researchProjects from '@/mock/research/researchProjects'
import researchTeachingProjects from '@/mock/research/teachingProjects'
import researchTextbooks from '@/mock/research/textbooks'
import partyArticles from '@/mock/index/party'
import teachersDoctors from '@/mock/teachers/doctors'
import teachersFaculty from '@/mock/teachers/faculty'
import teachersLanding from '@/mock/teachers/landing'
import teachersOrganization from '@/mock/teachers/organization'
import teachersProfessors from '@/mock/teachers/professors'
import trainingExternalBases from '@/mock/training/externalBases'
import trainingInternalBases from '@/mock/training/internalBases'
import trainingLanding from '@/mock/training/landing'

export const majorDetailEntries = majorsPrograms.items.map((item) => ({
  slug: item.slug,
  title: item.title,
}))

export const newsDetailEntries = homepageArticles.items.map((item) => ({
  slug: item.slug,
  title: item.title,
}))

export const teacherDetailEntries = [
  {
    id: 'organization',
    title: teachersOrganization.section,
  },
  {
    id: 'faculty',
    title: teachersFaculty.section,
  },
  {
    id: 'professors',
    title: teachersProfessors.section,
  },
  {
    id: 'doctors',
    title: teachersDoctors.section,
  },
]

export const pageContent = {
  home: {
    title: '信息工程系站点路由总览',
    routePath: '/',
    summary:
      '首页当前只承担路由入口与信息架构验证，后续再按任务卡接入 Banner、新闻、专业与快捷入口等真实内容区块。',
    mockSources: [
      '@/mock/meta/navigation.ts',
      '@/mock/index/overview.ts',
      '@/mock/index/news.ts',
      '@/mock/index/quickLinks.ts',
    ],
    sampleLinks: [
      { href: '/about', label: '本系概况', description: aboutOverview.section },
      { href: '/majors', label: '专业设置', description: majorsLanding.section },
      { href: '/teachers', label: '师资队伍', description: teachersLanding.section },
      { href: '/news', label: '新闻公告', description: homepageArticles.section },
    ],
  },
  about: {
    title: '本系概况',
    routePath: '/about',
    summary: '静态页面占位已建立，后续将承接系部介绍、发展历程、办学特色与荣誉成果。',
    mockSources: ['@/mock/about/overview.ts'],
  },
  majors: {
    title: '专业设置',
    routePath: '/majors',
    summary: '列表页占位已建立，并预留到 `/majors/[slug]` 的静态详情入口。',
    mockSources: [
      '@/mock/majors/landing.ts',
      '@/mock/majors/programs.ts',
      '@/mock/majors/lab.ts',
    ],
    sampleLinks: majorDetailEntries.slice(0, 6).map((item) => ({
      href: `/majors/${item.slug}`,
      label: item.title,
      description: '专业详情静态参数样例',
    })),
  },
  teachers: {
    title: '师资队伍',
    routePath: '/teachers',
    summary: '列表页占位已建立，并预留到 `/teachers/[id]` 的详情入口。',
    mockSources: [
      '@/mock/teachers/landing.ts',
      '@/mock/teachers/organization.ts',
      '@/mock/teachers/faculty.ts',
      '@/mock/teachers/professors.ts',
      '@/mock/teachers/doctors.ts',
    ],
    sampleLinks: teacherDetailEntries.map((item) => ({
      href: `/teachers/${item.id}`,
      label: item.title,
      description: '详情占位参数样例',
    })),
  },
  research: {
    title: '教研科研',
    routePath: '/research',
    summary: '静态页面占位已建立，后续会接入分类筛选与分页等客户端行为。',
    mockSources: [
      '@/mock/research/landing.ts',
      '@/mock/research/researchProjects.ts',
      '@/mock/research/teachingProjects.ts',
      '@/mock/research/papers.ts',
      '@/mock/research/textbooks.ts',
      '@/mock/research/awards.ts',
    ],
  },
  training: {
    title: '实训基地',
    routePath: '/training',
    summary: '静态页面占位已建立，后续将接入校内外基地内容与图片展示。',
    mockSources: [
      '@/mock/training/landing.ts',
      '@/mock/training/internalBases.ts',
      '@/mock/training/externalBases.ts',
    ],
  },
  police: {
    title: '警士直招',
    routePath: '/police',
    summary: '当前先接入现有占位页体系，承接警士直招入口与政策类 mock 来源，避免根导航进入 404。',
    mockSources: [
      '@/mock/military/landing.ts',
      '@/mock/military/onboarding.ts',
      '@/mock/military/study.ts',
      '@/mock/military/training.ts',
      '@/mock/military/life.ts',
      '@/mock/military/camp.ts',
      '@/mock/military/policies.ts',
    ],
    sampleLinks: militaryPolicies.items.slice(0, 3).map((item) => ({
      href: item.sourceUrl,
      label: item.title,
      description: '原始政策来源，后续可接入站内详情页。',
    })),
  },
  partners: {
    title: '校企合作',
    routePath: '/partners',
    summary: '静态页面占位已建立，后续将接入合作企业、合作动态与项目内容。',
    mockSources: [
      '@/mock/partners/landing.ts',
      '@/mock/partners/companies.ts',
      '@/mock/partners/updates.ts',
    ],
  },
  enrollment: {
    title: '招生就业',
    routePath: '/enrollment',
    summary: '静态页面占位已建立，后续将接入招生信息、就业服务与访企拓岗内容。',
    mockSources: [
      '@/mock/enrollment/landing.ts',
      '@/mock/enrollment/admissionsLinks.ts',
      '@/mock/enrollment/employmentLinks.ts',
      '@/mock/enrollment/employmentServices.ts',
      '@/mock/enrollment/enterpriseVisits.ts',
    ],
  },
  alumni: {
    title: '校友会',
    routePath: '/alumni',
    summary: '静态页面占位已建立，后续将接入校友信息、返校服务与活动内容。',
    mockSources: [
      '@/mock/alumni/landing.ts',
      '@/mock/alumni/alumniProfiles.ts',
      '@/mock/alumni/alumniInfo.ts',
      '@/mock/alumni/returnServices.ts',
    ],
  },
  news: {
    title: '新闻公告',
    routePath: '/news',
    summary: '列表页占位已建立，并预留到 `/news/[slug]` 的静态详情入口。',
    mockSources: ['@/mock/articles/homepage.ts'],
    sampleLinks: newsDetailEntries.slice(0, 8).map((item) => ({
      href: `/news/${item.slug}`,
      label: item.title,
      description: '新闻详情静态参数样例',
    })),
  },
  party: {
    title: '党团建设',
    routePath: '/party',
    summary: '首页党团模块已接入站内详情页。',
    mockSources: ['@/mock/index/party.ts'],
    sampleLinks: partyArticles.items.slice(0, 3).map((item) => ({
      href: `/party/${item.slug}`,
      label: item.title,
      description: '党团详情静态参数样例',
    })),
  },
  employment: {
    title: '产教融合与就业',
    routePath: '/employment',
    summary: '首页产教与就业模块已接入站内详情页。',
    mockSources: ['@/mock/index/career.ts'],
    sampleLinks: employmentArticles.items.slice(0, 3).map((item) => ({
      href: `/employment/${item.slug}`,
      label: item.title,
      description: '产教就业详情静态参数样例',
    })),
  },
} as const

export const routeCounts = {
  about: aboutOverview.items.length,
  majors: majorDetailEntries.length + majorsLanding.items.length + majorsLab.items.length,
  teachers:
    teachersLanding.items.length +
    teachersOrganization.items.length +
    teachersFaculty.items.length +
    teachersProfessors.items.length +
    teachersDoctors.items.length,
  research:
    researchLanding.items.length +
    researchProjects.items.length +
    researchTeachingProjects.items.length +
    researchPapers.items.length +
    researchTextbooks.items.length +
    researchAwards.items.length,
  training:
    trainingLanding.items.length +
    trainingInternalBases.items.length +
    trainingExternalBases.items.length,
  police: militaryLanding.items.length + militaryPolicies.items.length,
  partners:
    partnersLanding.items.length +
    partnersCompanies.items.length +
    partnersUpdates.items.length,
  enrollment:
    enrollmentLanding.items.length +
    enrollmentAdmissionsLinks.items.length +
    enrollmentEmploymentLinks.items.length +
    enrollmentEmploymentServices.items.length +
    enrollmentEnterpriseVisits.items.length,
  alumni:
    alumniLanding.items.length +
    alumniProfiles.items.length +
    alumniInfo.items.length +
    alumniReturnServices.items.length,
  news: newsDetailEntries.length,
}
