import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { researchSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('research')
}

export function generateStaticParams() {
  return getSectionStaticParams(researchSection)
}

export default function ResearchNodePage({ params }: Props) {
  return <SectionTreePage section={researchSection} segments={params.slug ?? []} />
}
