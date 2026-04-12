import SectionLandingPage from '@/app/(frontend)/_components/SectionLandingPage'
import { trainingPageContent } from '@/app/(frontend)/_lib/section-landing-content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('training')
}

export default function TrainingPage() {
  return <SectionLandingPage {...trainingPageContent} />
}
