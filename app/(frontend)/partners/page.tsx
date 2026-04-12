import SectionLandingPage from '@/app/(frontend)/_components/SectionLandingPage'
import { partnersPageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('partners')
}

export default function PartnersPage() {
  return <SectionLandingPage {...partnersPageContent} />
}
