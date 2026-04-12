import SectionLandingPage from '@/app/(frontend)/_components/SectionLandingPage'
import { enrollmentPageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('enrollment')
}

export default function EnrollmentPage() {
  return <SectionLandingPage {...enrollmentPageContent} />
}
