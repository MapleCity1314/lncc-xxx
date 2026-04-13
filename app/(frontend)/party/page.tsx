import SubPageLayout from '@/components/SubPageLayout'
import SectionEntryList from '@/components/SectionEntryList'
import { partySection } from '@/data/content/party'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { buildMenuWithState } from '@/app/(frontend)/_lib/content'

export function generateMetadata() {
  return getSectionMetadata('party')
}

export default function PartyPage() {
  const menuItems = buildMenuWithState(partySection, '/party')
  const entries = partySection.categories[0]?.entries ?? []

  return (
    <SubPageLayout
      heroTitle={partySection.hero.title}
      heroSubtitle={partySection.hero.subtitle}
      heroImage={partySection.hero.image}
      sidebarTitle={partySection.sidebar.title}
      sidebarSubtitle={partySection.sidebar.subtitle}
      menuItems={menuItems}
      breadcrumbs={partySection.breadcrumbs}
    >
      <div className="space-y-10">
        <div className="mb-12 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
          <h2 className="text-2xl font-normal tracking-widest text-slate-800">
            {partySection.categories[0]?.title ?? partySection.sidebar.title}
          </h2>
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        </div>
        <SectionEntryList entries={entries} sectionSlug={partySection.slug} baseSegments={[]} />
      </div>
    </SubPageLayout>
  )
}
