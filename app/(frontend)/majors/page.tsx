import { buildSpecializationMenu } from '@/app/(frontend)/_lib/content'
import SubPageLayout from '@/components/SubPageLayout'
import SectionCategoryGrid from '@/components/SectionCategoryGrid'
import { majorsSection } from '@/data/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('majors')
}

const SECTION_PATH = '/majors'

export default function MajorsPage() {
  const menuItems = buildSpecializationMenu(majorsSection, SECTION_PATH)

  return (
    <SubPageLayout
      heroTitle={majorsSection.hero.title}
      heroSubtitle={majorsSection.hero.subtitle}
      heroImage={majorsSection.hero.image}
      sidebarTitle={majorsSection.sidebar.title}
      sidebarSubtitle={majorsSection.sidebar.subtitle}
      menuItems={menuItems}
      breadcrumbs={majorsSection.breadcrumbs}
    >
      <div className="space-y-10">
        <div className="mb-12 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
          <h2 className="text-2xl font-normal tracking-widest text-slate-800">
            {majorsSection.sidebar.title}
          </h2>
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        </div>

        <SectionCategoryGrid categories={majorsSection.categories} sectionSlug={majorsSection.slug} />
      </div>
    </SubPageLayout>
  )
}
