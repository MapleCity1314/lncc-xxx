import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { teachersSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('teachers')
}

export function generateStaticParams() {
  return getSectionStaticParams(teachersSection)
}

export default function TeachersNodePage({ params }: Props) {
  return <SectionTreePage section={teachersSection} segments={params.slug ?? []} />
}
