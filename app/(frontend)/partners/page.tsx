import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { partnersSection } from '@/data/content'

export function generateMetadata() {
  return getSectionMetadata('partners')
}

export default function PartnersPage() {
  return <SectionTreePage section={partnersSection} />
}
