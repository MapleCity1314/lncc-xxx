import SectionLandingPage from '@/app/(frontend)/_components/SectionLandingPage'
import { researchPageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('research')
}

export default function ResearchPage() {
  return <SectionLandingPage {...researchPageContent} />
}
