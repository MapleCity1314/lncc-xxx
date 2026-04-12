import type { MockCollection, MockLink, MockPage } from '@/mock/types'
import alumniInfo from '@/mock/alumni/alumniInfo'
import alumniProfiles from '@/mock/alumni/alumniProfiles'
import alumniReturnServices from '@/mock/alumni/returnServices'
import enrollmentEmploymentLinks from '@/mock/enrollment/employmentLinks'
import enrollmentEmploymentServices from '@/mock/enrollment/employmentServices'
import enrollmentEnterpriseVisits from '@/mock/enrollment/enterpriseVisits'
import militaryCamp from '@/mock/military/camp'
import militaryLife from '@/mock/military/life'
import militaryOnboarding from '@/mock/military/onboarding'
import militaryPolicies from '@/mock/military/policies'
import militaryStudy from '@/mock/military/study'
import militaryTraining from '@/mock/military/training'
import partnersCompanies from '@/mock/partners/companies'
import partnersUpdates from '@/mock/partners/updates'
import researchAwards from '@/mock/research/awards'
import researchPapers from '@/mock/research/papers'
import researchProjects from '@/mock/research/researchProjects'
import researchTeachingProjects from '@/mock/research/teachingProjects'
import researchTextbooks from '@/mock/research/textbooks'
import trainingExternalBases from '@/mock/training/externalBases'
import trainingInternalBases from '@/mock/training/internalBases'

type SectionItem = {
  description: string
  href?: string
  isExternal?: boolean
  meta?: string | null
  title: string
}

type SectionConfig = {
  description: string
  id: string
  items: SectionItem[]
  title: string
}

type PageConfig = {
  description: string
  links: {
    href: string
    isExternal?: boolean
    label: string
  }[]
  sections: SectionConfig[]
  title: string
}

function getSummary(page: MockPage) {
  return (
    page.excerpt ??
    page.paragraphs.find((item) => item.trim().length > 0) ??
    '查看该分区整理内容。'
  )
}

function mapPageCollection(collection: MockCollection<MockPage>) {
  return collection.items.map((item) => ({
    title: item.title,
    description: getSummary(item),
    href: item.sourceUrl,
    isExternal: true,
    meta: item.publishedAt,
  }))
}

function mapLinkCollection(collection: MockCollection<MockLink>) {
  return collection.items.map((item) => ({
    title: item.label,
    description: collection.description,
    href: item.url,
    isExternal: item.isExternal,
    meta: null,
  }))
}

export const researchPageContent: PageConfig = {
  title: '教研科研',
  description: '聚合教研项目、科研项目、论文著作与成果获奖，二级菜单直接落到对应分区。',
  links: [
    { href: '#teaching-projects', label: '教研项目' },
    { href: '#research-projects', label: '科研项目' },
    { href: '#papers', label: '学术论文' },
    { href: '#books', label: '教材著作' },
    { href: '#awards', label: '成果获奖' },
  ],
  sections: [
    { id: 'teaching-projects', title: '教研项目', description: researchTeachingProjects.description, items: mapPageCollection(researchTeachingProjects) },
    { id: 'research-projects', title: '科研项目', description: researchProjects.description, items: mapPageCollection(researchProjects) },
    { id: 'papers', title: '学术论文', description: researchPapers.description, items: mapPageCollection(researchPapers) },
    { id: 'books', title: '教材著作', description: researchTextbooks.description, items: mapPageCollection(researchTextbooks) },
    { id: 'awards', title: '成果获奖', description: researchAwards.description, items: mapPageCollection(researchAwards) },
  ],
}

export const trainingPageContent: PageConfig = {
  title: '实训基地',
  description: '按校内、校外两类实训基地整理，子菜单跳转到对应分区。',
  links: [
    { href: '#internal-bases', label: '校内实训基地' },
    { href: '#external-bases', label: '校外实训基地' },
  ],
  sections: [
    { id: 'internal-bases', title: '校内实训基地', description: trainingInternalBases.description, items: mapPageCollection(trainingInternalBases) },
    { id: 'external-bases', title: '校外实训基地', description: trainingExternalBases.description, items: mapPageCollection(trainingExternalBases) },
  ],
}

export const policePageContent: PageConfig = {
  title: '警士直招',
  description: '将入学军训、日常学习训练与相关政策分区展示，保持单页静态导出。',
  links: [
    { href: '#admission-training', label: '入学军训' },
    { href: '#daily-study', label: '日常学习' },
    { href: '#daily-drill', label: '日常训练' },
    { href: '#daily-life', label: '日常生活' },
    { href: '#vacation-camp', label: '假期集训' },
    { href: '#policies', label: '相关政策' },
  ],
  sections: [
    { id: 'admission-training', title: '入学军训', description: militaryOnboarding.description, items: mapPageCollection(militaryOnboarding) },
    { id: 'daily-study', title: '日常学习', description: militaryStudy.description, items: mapPageCollection(militaryStudy) },
    { id: 'daily-drill', title: '日常训练', description: militaryTraining.description, items: mapPageCollection(militaryTraining) },
    { id: 'daily-life', title: '日常生活', description: militaryLife.description, items: mapPageCollection(militaryLife) },
    { id: 'vacation-camp', title: '假期集训', description: militaryCamp.description, items: mapPageCollection(militaryCamp) },
    { id: 'policies', title: '相关政策', description: militaryPolicies.description, items: mapPageCollection(militaryPolicies) },
  ],
}

export const partnersPageContent: PageConfig = {
  title: '校企合作',
  description: '合作企业与合作动态分别成区，避免所有二级菜单都落在同一占位页。',
  links: [
    { href: '#companies', label: '合作企业' },
    { href: '#updates', label: '合作动态' },
  ],
  sections: [
    { id: 'companies', title: '合作企业', description: partnersCompanies.description, items: mapPageCollection(partnersCompanies) },
    { id: 'updates', title: '合作动态', description: partnersUpdates.description, items: mapPageCollection(partnersUpdates) },
  ],
}

export const enrollmentPageContent: PageConfig = {
  title: '招生就业',
  description: '保留招生与招聘外链，同时把就业服务和访企拓岗整理到站内分区。',
  links: [
    { href: 'https://www.lncc.edu.cn/xsc/', label: '招生信息', isExternal: true },
    { href: '#employment-services', label: '就业服务' },
    { href: 'http://www.lncc.edu.cn/xsjy/', label: '招聘信息', isExternal: true },
    { href: '#enterprise-visits', label: '访企拓岗' },
  ],
  sections: [
    { id: 'employment-services', title: '就业服务', description: enrollmentEmploymentServices.description, items: mapPageCollection(enrollmentEmploymentServices) },
    { id: 'enterprise-visits', title: '访企拓岗', description: enrollmentEnterpriseVisits.description, items: mapPageCollection(enrollmentEnterpriseVisits) },
    { id: 'job-links', title: '招聘信息', description: enrollmentEmploymentLinks.description, items: mapLinkCollection(enrollmentEmploymentLinks) },
  ],
}

export const alumniPageContent: PageConfig = {
  title: '校友会',
  description: '将校友风采、返校服务、校友信息拆成三个稳定分区，供导航二级菜单直接命中。',
  links: [
    { href: '#profiles', label: '校友风采' },
    { href: '#return-services', label: '返校服务' },
    { href: '#alumni-info', label: '校友信息' },
  ],
  sections: [
    { id: 'profiles', title: '校友风采', description: alumniProfiles.description, items: mapPageCollection(alumniProfiles) },
    { id: 'return-services', title: '返校服务', description: alumniReturnServices.description, items: mapPageCollection(alumniReturnServices) },
    { id: 'alumni-info', title: '校友信息', description: alumniInfo.description, items: mapPageCollection(alumniInfo) },
  ],
}
