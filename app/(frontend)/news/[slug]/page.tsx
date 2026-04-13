import { notFound } from 'next/navigation'
import SubPageLayout from '@/components/SubPageLayout'
import ContentDetail from '@/components/ContentDetail'
import { newsSection } from '@/data/content'
import { getContentEntryMetadata } from '@/app/(frontend)/_lib/metadata'
import { buildMenuWithState, flattenEntries } from '@/app/(frontend)/_lib/content'

type Params = {
  slug: string
}

function findNewsEntry(slug: string) {
  return flattenEntries(newsSection.slug).find((item) => item.slug === slug)
}

export function generateMetadata({ params }: { params: Params }) {
  const entry = findNewsEntry(params.slug)

  if (!entry) {
    notFound()
  }

  return getContentEntryMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/news/${entry.slug}`,
    sectionLabel: newsSection.sidebar.title,
    publishedAt: entry.publishedAt,
  })
}

export function generateStaticParams() {
  return flattenEntries(newsSection.slug).map((entry) => ({ slug: entry.slug }))
}

export default function NewsDetailPage({ params }: { params: Params }) {
  const entry = findNewsEntry(params.slug)

  if (!entry) {
    notFound()
  }

  const menuItems = buildMenuWithState(newsSection, `/news/${params.slug}`)
  const breadcrumbs = [
    ...newsSection.breadcrumbs,
    {
      label: newsSection.categories[0]?.title ?? newsSection.sidebar.title,
      href: '/news',
    },
    { label: entry.title },
  ]

  return (
    <SubPageLayout
      heroTitle={newsSection.hero.title}
      heroSubtitle={newsSection.hero.subtitle}
      heroImage={newsSection.hero.image}
      sidebarTitle={newsSection.sidebar.title}
      sidebarSubtitle={newsSection.sidebar.subtitle}
      menuItems={menuItems}
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-10">
        <div className="mb-8 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
          <h2 className="text-2xl font-normal tracking-widest text-slate-800">
            {entry.title}
          </h2>
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        </div>

        <ContentDetail entry={entry} />
      </div>
    </SubPageLayout>
  )
}
