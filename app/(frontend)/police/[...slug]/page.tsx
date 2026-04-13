import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { policeSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('police')
}

export function generateStaticParams() {
  return getSectionStaticParams(policeSection)
}

export default function PoliceNodePage({ params }: Props) {
  return <SectionTreePage section={policeSection} segments={params.slug ?? []} />
}
