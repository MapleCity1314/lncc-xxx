import HomeHero from '@/components/HomeHero'
import HomeFeaturePlaceholders from '@/components/HomeFeaturePlaceholders'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'

export function generateMetadata() {
  return getSectionMetadata('home')
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeaturePlaceholders />
    </>
  )
}
