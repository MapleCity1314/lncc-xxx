import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { researchSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('research')
}

export default function ResearchPage() {
  return <SectionTreePage section={researchSection} />
}
