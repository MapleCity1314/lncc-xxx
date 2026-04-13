import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { alumniSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('alumni')
}

export default function AlumniPage() {
  return <SectionTreePage section={alumniSection} />
}
