import SectionLandingPage from '@/app/(frontend)/_components/SectionLandingPage'
import { policePageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('police')
}

export default function PolicePage() {
  return <SectionLandingPage {...policePageContent} />
}
