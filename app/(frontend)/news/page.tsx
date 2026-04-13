import SubPageLayout from '@/components/SubPageLayout'
import SectionEntryList from '@/components/SectionEntryList'
import { newsSection } from '@/data/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { buildMenuWithState } from '@/app/(frontend)/_lib/content'

export function generateMetadata() {
  return getSectionMetadata('news')
}

export default function NewsPage() {
  const menuItems = buildMenuWithState(newsSection, '/news')
  const entries = newsSection.categories[0]?.entries ?? []

  return (
    <SubPageLayout
      heroTitle={newsSection.hero.title}
      heroSubtitle={newsSection.hero.subtitle}
      heroImage={newsSection.hero.image}
      sidebarTitle={newsSection.sidebar.title}
      sidebarSubtitle={newsSection.sidebar.subtitle}
      menuItems={menuItems}
      breadcrumbs={newsSection.breadcrumbs}
    >
      <div className="space-y-10">
        <div className="mb-12 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
          <h2 className="text-2xl font-normal tracking-widest text-slate-800">
            {newsSection.categories[0]?.title ?? newsSection.sidebar.title}
          </h2>
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        </div>

        <SectionEntryList entries={entries} sectionSlug={newsSection.slug} baseSegments={[]} />
      </div>
    </SubPageLayout>
  )
}
