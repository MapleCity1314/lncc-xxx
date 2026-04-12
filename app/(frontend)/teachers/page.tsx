import RoutePlaceholder from '@/app/(frontend)/_components/RoutePlaceholder'
import { pageContent } from '@/app/(frontend)/_lib/route-placeholders'

export default function TeachersPage() {
  return <RoutePlaceholder {...pageContent.teachers} />
}
