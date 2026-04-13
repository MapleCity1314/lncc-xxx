import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { trainingSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('training')
}

export default function TrainingPage() {
  return <SectionTreePage section={trainingSection} />
}
