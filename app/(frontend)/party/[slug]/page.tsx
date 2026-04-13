import { notFound } from 'next/navigation'
import SubPageLayout from '@/components/SubPageLayout'
import ContentDetail from '@/components/ContentDetail'
import { partySection } from '@/data/content/party'
import { getContentEntryMetadata } from '@/app/(frontend)/_lib/metadata'
import { buildMenuWithState, flattenEntries } from '@/app/(frontend)/_lib/content'

type Params = {
  slug: string
}

function findPartyEntry(slug: string) {
  return flattenEntries(partySection).find((item) => item.slug === slug)
}

export function generateMetadata({ params }: { params: Params }) {
  const entry = findPartyEntry(params.slug)

  if (!entry) {
    notFound()
  }

  return getContentEntryMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/party/${entry.slug}`,
    sectionLabel: partySection.sidebar.title,
    publishedAt: entry.publishedAt,
  })
}

export function generateStaticParams() {
  return flattenEntries(partySection).map((entry) => ({ slug: entry.slug }))
}

export default function PartyDetailPage({ params }: { params: Params }) {
  const entry = findPartyEntry(params.slug)

  if (!entry) {
    notFound()
  }

  const menuItems = buildMenuWithState(partySection, `/party/${entry.slug}`)
  const breadcrumbs = [
    ...partySection.breadcrumbs,
    {
      label: partySection.categories[0]?.title ?? partySection.sidebar.title,
      href: '/party',
    },
    { label: entry.title },
  ]

  return (
    <SubPageLayout
      heroTitle={partySection.hero.title}
      heroSubtitle={partySection.hero.subtitle}
      heroImage={partySection.hero.image}
      sidebarTitle={partySection.sidebar.title}
      sidebarSubtitle={partySection.sidebar.subtitle}
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
