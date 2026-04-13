import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { enrollmentSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('enrollment')
}

export default function EnrollmentPage() {
  return <SectionTreePage section={enrollmentSection} />
}
