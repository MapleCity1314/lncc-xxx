import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { newsSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('news')
}

export default function NewsPage() {
  return <SectionTreePage section={newsSection} />
}
