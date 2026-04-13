import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { aboutSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('about')
}

export default function AboutPage() {
  return <SectionTreePage section={aboutSection} />
}
