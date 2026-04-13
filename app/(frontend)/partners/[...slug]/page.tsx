import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { partnersSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('partners')
}

export function generateStaticParams() {
  return getSectionStaticParams(partnersSection)
}

export default function PartnersNodePage({ params }: Props) {
  return <SectionTreePage section={partnersSection} segments={params.slug ?? []} />
}
