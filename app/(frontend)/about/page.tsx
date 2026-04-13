import SubPageLayout from '@/components/SubPageLayout'
import AboutContent from '@/components/AboutContent'
import { aboutOverview } from '@/data/aboutOverview'
import { getSectionLayout } from '@/app/(frontend)/_lib/section-layouts'
import { getContentEntryMetadata } from '@/app/(frontend)/_lib/metadata'

const SECTION_KEY = 'about'
const SECTION_PATH = '/about'

export function generateMetadata() {
  return getContentEntryMetadata({
    title: `${aboutOverview.title}`,
    description: aboutOverview.description,
    path: SECTION_PATH,
    sectionLabel: aboutOverview.title,
    publishedAt: aboutOverview.publishedAt,
  })
}

export default function AboutPage() {
  const layout = getSectionLayout(SECTION_KEY, SECTION_PATH)

  return (
    <SubPageLayout
      heroTitle={layout.heroTitle}
      heroSubtitle={layout.heroSubtitle}
      heroImage={layout.heroImage}
      sidebarTitle={layout.sidebarTitle}
      sidebarSubtitle={layout.sidebarSubtitle}
      menuItems={layout.menuItems}
      breadcrumbs={layout.breadcrumbs}
      hideSidebar
    >
      <AboutContent
        title={aboutOverview.title}
        publishedAt={aboutOverview.publishedAt}
        paragraphs={aboutOverview.paragraphs}
      />
    </SubPageLayout>
  )
}
