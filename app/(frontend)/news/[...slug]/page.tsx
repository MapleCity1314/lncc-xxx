import SectionTreePage from '@/app/(frontend)/_components/SectionTreePage'
import { getSectionStaticParams, resolveSectionPath } from '@/app/(frontend)/_lib/content'
import { getContentEntryMetadata, getSectionMetadata } from '@/app/(frontend)/_lib/metadata'
import { newsSection } from '@/data/content'

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata({ params }: Props) {
  const segments = params.slug ?? []
  const resolved = resolveSectionPath(newsSection, segments)

  if (resolved.entry) {
    return getContentEntryMetadata({
      title: resolved.entry.title,
      description: resolved.entry.summary,
      path: `/${newsSection.slug}/${segments.join('/')}`,
      sectionLabel: newsSection.sidebar.title,
      publishedAt: resolved.entry.publishedAt,
    })
  }

  return getSectionMetadata('news')
}

export function generateStaticParams() {
  return getSectionStaticParams(newsSection)
}

export default function NewsNodePage({ params }: Props) {
  return <SectionTreePage section={newsSection} segments={params.slug ?? []} />
}
