import { notFound } from 'next/navigation'
import SubPageLayout from '@/components/SubPageLayout'
import ContentDetail from '@/components/ContentDetail'
import { employmentSection } from '@/data/content/employment'
import { getContentEntryMetadata } from '@/app/(frontend)/_lib/metadata'
import { buildMenuWithState, flattenEntries } from '@/app/(frontend)/_lib/content'

type Params = {
  slug: string
}

function findEmploymentEntry(slug: string) {
  return flattenEntries(employmentSection).find((item) => item.slug === slug)
}

export function generateMetadata({ params }: { params: Params }) {
  const entry = findEmploymentEntry(params.slug)

  if (!entry) {
    notFound()
  }

  return getContentEntryMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/employment/${entry.slug}`,
    sectionLabel: employmentSection.sidebar.title,
    publishedAt: entry.publishedAt,
  })
}

export function generateStaticParams() {
  return flattenEntries(employmentSection).map((entry) => ({ slug: entry.slug }))
}

export default function EmploymentDetailPage({ params }: { params: Params }) {
  const entry = findEmploymentEntry(params.slug)

  if (!entry) {
    notFound()
  }

  const menuItems = buildMenuWithState(employmentSection, `/employment/${entry.slug}`)
  const breadcrumbs = [
    ...employmentSection.breadcrumbs,
    {
      label: employmentSection.categories[0]?.title ?? employmentSection.sidebar.title,
      href: '/employment',
    },
    { label: entry.title },
  ]

  return (
    <SubPageLayout
      heroTitle={employmentSection.hero.title}
      heroSubtitle={employmentSection.hero.subtitle}
      heroImage={employmentSection.hero.image}
      sidebarTitle={employmentSection.sidebar.title}
      sidebarSubtitle={employmentSection.sidebar.subtitle}
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
