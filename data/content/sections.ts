import aboutOverview from '@/mock/about/overview'
import alumniInfo from '@/mock/alumni/alumniInfo'
import alumniProfiles from '@/mock/alumni/alumniProfiles'
import alumniReturnServices from '@/mock/alumni/returnServices'
import enrollmentAdmissionsLinks from '@/mock/enrollment/admissionsLinks'
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
import researchLanding from '@/mock/research/landing'
import researchPapers from '@/mock/research/papers'
import researchProjects from '@/mock/research/researchProjects'
import researchTeachingProjects from '@/mock/research/teachingProjects'
import researchTextbooks from '@/mock/research/textbooks'
import teachersDoctors from '@/mock/teachers/doctors'
import teachersFaculty from '@/mock/teachers/faculty'
import teachersOrganization from '@/mock/teachers/organization'
import teachersProfessors from '@/mock/teachers/professors'
import trainingExternalBases from '@/mock/training/externalBases'
import trainingInternalBases from '@/mock/training/internalBases'
import type { MockCollection, MockLink, MockPage } from '@/mock/types'
import type { ContentCategory, ContentEntry, SectionContent } from './types'

const DEFAULT_HERO_IMAGE = '/image/banner/home-banner-3.jpg'

function getSummary(page: MockPage) {
  return (
    page.excerpt ??
    page.paragraphs.find((item) => item.trim().length > 0) ??
    '查看该栏目整理内容。'
  )
}

function mapPageEntries(collection: MockCollection<MockPage>): ContentEntry[] {
  return collection.items.map((item) => ({
    slug: item.slug,
    title: item.title,
    summary: getSummary(item),
    publishedAt: item.publishedAt ?? '',
    href: item.sourceUrl,
    isExternal: true,
    metadata: {
      category: item.category ?? collection.section,
    },
  }))
}

function mapLinkEntries(
  collection: MockCollection<MockLink>,
  categorySlug: string,
): ContentEntry[] {
  return collection.items.map((item, index) => ({
    slug: `${categorySlug}-${index + 1}`,
    title: item.label,
    summary: collection.description,
    publishedAt: '',
    href: item.url,
    isExternal: item.isExternal,
    metadata: {
      category: collection.section,
    },
  }))
}

function pageCategory(slug: string, collection: MockCollection<MockPage>): ContentCategory {
  return {
    slug,
    title: collection.section,
    description: collection.description,
    entries: mapPageEntries(collection),
  }
}

function linkCategory(slug: string, collection: MockCollection<MockLink>): ContentCategory {
  return {
    slug,
    title: collection.section,
    description: collection.description,
    entries: mapLinkEntries(collection, slug),
  }
}

function sectionContent(options: {
  slug: string
  title: string
  subtitle: string
  sidebarTitle: string
  sidebarSubtitle: string
  categories: ContentCategory[]
}): SectionContent {
  return {
    slug: options.slug,
    hero: {
      title: options.title,
      subtitle: options.subtitle,
      image: DEFAULT_HERO_IMAGE,
    },
    sidebar: {
      title: options.sidebarTitle,
      subtitle: options.sidebarSubtitle,
    },
    menu: options.categories.map((category) => ({
      label: category.title,
      href: `/${options.slug}/${category.slug}`,
    })),
    breadcrumbs: [
      { label: '首页', href: '/' },
      { label: options.title, href: `/${options.slug}` },
    ],
    categories: options.categories,
  }
}

export const aboutSection = sectionContent({
  slug: 'about',
  title: aboutOverview.section,
  subtitle: 'ABOUT DEPARTMENT',
  sidebarTitle: aboutOverview.section,
  sidebarSubtitle: 'Department Overview',
  categories: [pageCategory('overview', aboutOverview)],
})

export const teachersSection = sectionContent({
  slug: 'teachers',
  title: '师资队伍',
  subtitle: 'FACULTY & STAFF',
  sidebarTitle: '师资分类',
  sidebarSubtitle: 'Faculty & Staff',
  categories: [
    pageCategory('organization', teachersOrganization),
    pageCategory('faculty', teachersFaculty),
    pageCategory('professors', teachersProfessors),
    pageCategory('doctors', teachersDoctors),
  ],
})

export const researchSection = sectionContent({
  slug: 'research',
  title: researchLanding.section,
  subtitle: 'RESEARCH & TEACHING',
  sidebarTitle: researchLanding.section,
  sidebarSubtitle: 'Research & Teaching',
  categories: [
    pageCategory('teaching-projects', researchTeachingProjects),
    pageCategory('research-projects', researchProjects),
    pageCategory('papers', researchPapers),
    pageCategory('books', researchTextbooks),
    pageCategory('awards', researchAwards),
  ],
})

export const trainingSection = sectionContent({
  slug: 'training',
  title: '实训基地',
  subtitle: 'TRAINING BASES',
  sidebarTitle: '实训基地',
  sidebarSubtitle: 'Training Bases',
  categories: [
    pageCategory('internal-bases', trainingInternalBases),
    pageCategory('external-bases', trainingExternalBases),
  ],
})

export const partnersSection = sectionContent({
  slug: 'partners',
  title: '校企合作',
  subtitle: 'INDUSTRY PARTNERS',
  sidebarTitle: '校企合作',
  sidebarSubtitle: 'Industry Partners',
  categories: [
    pageCategory('companies', partnersCompanies),
    pageCategory('updates', partnersUpdates),
  ],
})

export const enrollmentSection = sectionContent({
  slug: 'enrollment',
  title: '招生就业',
  subtitle: 'ADMISSIONS & CAREER',
  sidebarTitle: '招生就业',
  sidebarSubtitle: 'Admissions & Career',
  categories: [
    linkCategory('admissions', enrollmentAdmissionsLinks),
    pageCategory('employment-services', enrollmentEmploymentServices),
    linkCategory('job-links', enrollmentEmploymentLinks),
    pageCategory('enterprise-visits', enrollmentEnterpriseVisits),
  ],
})

export const alumniSection = sectionContent({
  slug: 'alumni',
  title: '校友会',
  subtitle: 'ALUMNI SERVICES',
  sidebarTitle: '校友会',
  sidebarSubtitle: 'Alumni Services',
  categories: [
    pageCategory('profiles', alumniProfiles),
    pageCategory('return-services', alumniReturnServices),
    pageCategory('alumni-info', alumniInfo),
  ],
})

export const policeSection = sectionContent({
  slug: 'police',
  title: '警士直招',
  subtitle: 'POLICE RECRUITMENT',
  sidebarTitle: '警士直招',
  sidebarSubtitle: 'Police Recruitment',
  categories: [
    pageCategory('admission-training', militaryOnboarding),
    pageCategory('daily-study', militaryStudy),
    pageCategory('daily-drill', militaryTraining),
    pageCategory('daily-life', militaryLife),
    pageCategory('vacation-camp', militaryCamp),
    pageCategory('policies', militaryPolicies),
  ],
})
