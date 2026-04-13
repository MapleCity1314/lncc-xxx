import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams } from '@/app/(frontend)/_lib/content'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { trainingSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  return getSectionMetadata('training')
}

export function generateStaticParams() {
  return getSectionStaticParams(trainingSection)
}

export default function TrainingNodePage({ params }: Props) {
  return <SectionTreePage section={trainingSection} segments={params.slug ?? []} />
}
