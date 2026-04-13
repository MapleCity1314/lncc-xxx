import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { enrollmentSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('enrollment')
}

export function generateStaticParams() {
  return getSectionStaticParams(enrollmentSection)
}

export default function EnrollmentNodePage({ params }: Props) {
  return <SectionTreePage section={enrollmentSection} segments={params.slug ?? []} />
}
