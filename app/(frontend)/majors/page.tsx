import { notFound } from 'next/navigation'
import ContentDetail from '@/components/ContentDetail'
import MajorSectionList from '@/components/MajorSectionList'
import SubPageLayout from '@/components/SubPageLayout'
import {
  buildSpecializationMenu,
  getSpecializationLandingPath,
  resolveSectionPath,
} from '@/app/(frontend)/_lib/content'
import { majorsSection } from '@/data/content'
import { getContentEntryMetadata, getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  const landingPath = getSpecializationLandingPath(majorsSection)
  if (!landingPath) {
    return getSectionMetadata('majors')
  }

  const segments = landingPath.replace(/^\/majors\//, '').split('/')
  const resolved = resolveSectionPath(majorsSection, segments)
  const entry = resolved.entry

  if (!entry) {
    return getSectionMetadata('majors')
  }

  return getContentEntryMetadata({
    title: entry.title,
    description: entry.summary,
    path: '/majors',
    sectionLabel: majorsSection.sidebar.title,
    publishedAt: entry.publishedAt,
    imagePath: entry.metadata?.heroImage,
  })
}

export default function MajorsPage() {
  const landingPath = getSpecializationLandingPath(majorsSection)
  if (!landingPath) {
    notFound()
  }

  const segments = landingPath.replace(/^\/majors\//, '').split('/')
  const resolved = resolveSectionPath(majorsSection, segments)
  const entry = resolved.entry

  if (!entry?.mdxComponent) {
    notFound()
  }

  return (
    <SubPageLayout
      heroTitle={entry.metadata?.heroTitle ?? majorsSection.hero.title}
      heroSubtitle={entry.metadata?.heroSubtitle ?? majorsSection.hero.subtitle}
      heroImage={entry.metadata?.heroImage ?? majorsSection.hero.image}
      sidebarTitle={majorsSection.sidebar.title}
      sidebarSubtitle={majorsSection.sidebar.subtitle}
      menuItems={buildSpecializationMenu(majorsSection, landingPath)}
      breadcrumbs={[
        ...majorsSection.breadcrumbs,
        {
          label: entry.title,
        },
      ]}
    >
      <div className="space-y-10">
        <div className="mb-8 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
          <h2 className="text-2xl font-normal tracking-widest text-slate-800">{entry.title}</h2>
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        </div>
        <ContentDetail entry={entry} />
        <MajorSectionList sections={entry.sections} />
      </div>
    </SubPageLayout>
  )
}
