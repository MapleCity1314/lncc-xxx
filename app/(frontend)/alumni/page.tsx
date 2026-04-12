import SectionLandingPage from '@/app/(frontend)/_components/SectionLandingPage'
import { alumniPageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('alumni')
}

export default function AlumniPage() {
  return <SectionLandingPage {...alumniPageContent} />
}
