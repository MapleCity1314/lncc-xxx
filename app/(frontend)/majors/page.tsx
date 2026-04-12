import RoutePlaceholder from '@/app/(frontend)/_components/RoutePlaceholder'
import { pageContent } from '@/app/(frontend)/_lib/route-placeholders'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('majors')
}

export default function MajorsPage() {
  return <RoutePlaceholder {...pageContent.majors} />
}
