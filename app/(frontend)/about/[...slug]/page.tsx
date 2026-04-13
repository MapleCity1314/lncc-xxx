import { notFound } from 'next/navigation'
import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import AboutContent from '@/components/AboutContent'
import SubPageLayout from '@/components/SubPageLayout'
import { aboutSection } from '@/data/content'
import aboutOverview from '@/mock/about/overview'

type Props = {
  params: {
    slug?: string[]
  }
}

const aboutEntry = aboutOverview.items[0]
const supportedSegments = new Set(
  aboutEntry ? ['overview', aboutEntry.slug] : ['overview'],
)

export function generateMetadata() {
  return getSectionMetadata('about')
}

export function generateStaticParams() {
  return [{ slug: ['overview'] }]
}

export default function AboutNodePage({ params }: Props) {
  const segments = params.slug ?? []

  if (!aboutEntry || segments.length !== 1 || !supportedSegments.has(segments[0])) {
    notFound()
  }

  return (
    <SubPageLayout
      heroTitle={aboutSection.hero.title}
      heroSubtitle={aboutSection.hero.subtitle}
      heroImage={aboutSection.hero.image}
      sidebarTitle={aboutSection.sidebar.title}
      sidebarSubtitle={aboutSection.sidebar.subtitle}
      menuItems={[]}
      breadcrumbs={[
        ...aboutSection.breadcrumbs,
        {
          label: aboutEntry.title,
        },
      ]}
      hideSidebar
    >
      <AboutContent
        title={aboutEntry.title}
        publishedAt={aboutEntry.publishedAt ?? '长期更新'}
        paragraphs={aboutEntry.paragraphs}
      />
    </SubPageLayout>
  )
}
