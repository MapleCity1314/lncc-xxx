import HomeHero from '@/components/HomeHero'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('home')
}

export default function HomePage() {
  return <HomeHero />
}
