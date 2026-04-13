import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { policeSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('police')
}

export default function PolicePage() {
  return <SectionTreePage section={policeSection} />
}
