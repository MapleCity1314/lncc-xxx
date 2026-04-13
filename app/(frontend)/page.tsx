import HomeHero from '@/components/HomeHero'
import HomeStats from '@/components/HomeStats'
import HomeBoard from '@/components/HomeBoard'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { employmentData, newsData, partyData } from '@/data/homeContent'

export function generateMetadata() {
  return getSectionMetadata('home')
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeBoard employmentData={employmentData} newsData={newsData} partyData={partyData} />
    </>
  )
}
