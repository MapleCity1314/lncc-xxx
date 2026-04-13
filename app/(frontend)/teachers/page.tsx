import SubPageLayout from '@/components/SubPageLayout'
import { RoutePlaceholderContent } from '@/app/(frontend)/_components/RoutePlaceholder'
import { getSectionLayout } from '@/app/(frontend)/_lib/section-layouts'
import { pageContent } from '@/app/(frontend)/_lib/route-placeholders'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

const SECTION_KEY = 'teachers'
const SECTION_PATH = '/teachers'

export function generateMetadata() {
  return getSectionMetadata('teachers')
}

export default function TeachersPage() {
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
      <RoutePlaceholderContent {...pageContent.teachers} />
    </SubPageLayout>
  )
}
