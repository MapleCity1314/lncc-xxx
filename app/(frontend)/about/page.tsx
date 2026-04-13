import SubPageLayout from '@/components/SubPageLayout'
import { RoutePlaceholderContent } from '@/app/(frontend)/_components/RoutePlaceholder'
import { getSectionLayout } from '@/app/(frontend)/_lib/section-layouts'
import { pageContent } from '@/app/(frontend)/_lib/route-placeholders'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

const SECTION_KEY = 'about'
const SECTION_PATH = '/about'

export function generateMetadata() {
  return getSectionMetadata('about')
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
      <RoutePlaceholderContent {...pageContent.about} />
    </SubPageLayout>
  )
}
