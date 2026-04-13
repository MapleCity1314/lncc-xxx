import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { alumniSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('alumni')
}

export function generateStaticParams() {
  return getSectionStaticParams(alumniSection)
}

export default function AlumniNodePage({ params }: Props) {
  return <SectionTreePage section={alumniSection} segments={params.slug ?? []} />
}
