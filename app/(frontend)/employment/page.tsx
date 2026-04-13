import SubPageLayout from '@/components/SubPageLayout'
import SectionEntryList from '@/components/SectionEntryList'
import { employmentSection } from '@/data/content/employment'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { buildMenuWithState } from '@/app/(frontend)/_lib/content'

export function generateMetadata() {
  return getSectionMetadata('employment')
}

export default function EmploymentPage() {
  const menuItems = buildMenuWithState(employmentSection, '/employment')
  const entries = employmentSection.categories[0]?.entries ?? []

  return (
    <SubPageLayout
      heroTitle={employmentSection.hero.title}
      heroSubtitle={employmentSection.hero.subtitle}
      heroImage={employmentSection.hero.image}
      sidebarTitle={employmentSection.sidebar.title}
      sidebarSubtitle={employmentSection.sidebar.subtitle}
      menuItems={menuItems}
      breadcrumbs={employmentSection.breadcrumbs}
    >
      <div className="space-y-10">
        <div className="mb-12 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
          <h2 className="text-2xl font-normal tracking-widest text-slate-800">
            {employmentSection.categories[0]?.title ?? employmentSection.sidebar.title}
          </h2>
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        </div>
        <SectionEntryList entries={entries} sectionSlug={employmentSection.slug} baseSegments={[]} />
      </div>
    </SubPageLayout>
  )
}
