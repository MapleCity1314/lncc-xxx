import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { aboutSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('about')
}

export function generateStaticParams() {
  return getSectionStaticParams(aboutSection)
}

export default function AboutNodePage({ params }: Props) {
  return <SectionTreePage section={aboutSection} segments={params.slug ?? []} />
}
