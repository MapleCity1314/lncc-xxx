import SubPageLayout from '@/components/SubPageLayout'
import { SectionLandingPageContent } from '@/app/(frontend)/_components/SectionLandingPage'
import { partnersPageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionLayout } from '@/app/(frontend)/_lib/section-layouts'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

const SECTION_KEY = 'partners'
const SECTION_PATH = '/partners'

export function generateMetadata() {
  return getSectionMetadata('partners')
}

export default function PartnersPage() {
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
    >
      <SectionLandingPageContent {...partnersPageContent} />
    </SubPageLayout>
  )
}
