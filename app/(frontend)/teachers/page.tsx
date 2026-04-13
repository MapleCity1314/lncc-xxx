import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { teachersSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('teachers')
}

export default function TeachersPage() {
  return <SectionTreePage section={teachersSection} />
}
