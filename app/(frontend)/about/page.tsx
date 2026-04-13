import { getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import AboutContent from '@/components/AboutContent'
import SubPageLayout from '@/components/SubPageLayout'
import { aboutSection } from '@/data/content'
import aboutOverview from '@/mock/about/overview'

export function generateMetadata() {
  return getSectionMetadata('about')
}

const aboutEntry = aboutOverview.items[0]

export default function AboutPage() {
  if (!aboutEntry) {
    return null
  }

  return (
    <SubPageLayout
      heroTitle={aboutSection.hero.title}
      heroSubtitle={aboutSection.hero.subtitle}
      heroImage={aboutSection.hero.image}
      sidebarTitle={aboutSection.sidebar.title}
      sidebarSubtitle={aboutSection.sidebar.subtitle}
      menuItems={[]}
      breadcrumbs={aboutSection.breadcrumbs}
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
