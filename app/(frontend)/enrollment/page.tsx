import SubPageLayout from '@/components/SubPageLayout'
import { SectionLandingPageContent } from '@/app/(frontend)/_components/SectionLandingPage'
import { enrollmentPageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionLayout } from '@/app/(frontend)/_lib/section-layouts'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

const SECTION_KEY = 'enrollment'
const SECTION_PATH = '/enrollment'

export function generateMetadata() {
  return getSectionMetadata('enrollment')
}

export default function EnrollmentPage() {
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
      <SectionLandingPageContent {...enrollmentPageContent} />
    </SubPageLayout>
  )
}
