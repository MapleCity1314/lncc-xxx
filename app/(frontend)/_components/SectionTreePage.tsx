import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import ContentDetail from '@/components/ContentDetail'
import SectionCategoryGrid from '@/components/SectionCategoryGrid'
import SectionEntryList from '@/components/SectionEntryList'
import SubPageLayout from '@/components/SubPageLayout'
import type { SectionContent } from '@/data/content/types'
import type { SubPageMenuItem } from '@/components/SubPageLayout'
import {
  buildBreadcrumbs,
  buildMenuWithState,
  buildSiblingMenu,
  resolveSectionPath,
} from '@/app/(frontend)/_lib/content'

type SectionTreePageProps = {
  section: SectionContent
  segments?: string[]
}

function buildEntryMenu(
  section: SectionContent,
  baseSegments: string[],
  activeEntrySlug: string,
): SubPageMenuItem[] {
  const resolved = resolveSectionPath(section, baseSegments)
  const entries = resolved.currentNode?.entries ?? []

  return entries.map((entry) => {
    const href = entry.mdxComponent
      ? `/${section.slug}/${[...baseSegments, entry.slug].join('/')}`
      : entry.href ?? `/${section.slug}/${baseSegments.join('/')}`

    return {
      label: entry.title,
      href,
      isActive: entry.slug === activeEntrySlug,
    }
  })
}

export default function SectionTreePage({ section, segments = [] }: SectionTreePageProps) {
  const resolved = segments.length > 0
    ? resolveSectionPath(section, segments)
    : {
        currentNode: undefined,
        entry: undefined,
        trail: [],
        leftoverSegments: [],
      }

  if (resolved.leftoverSegments.length > 1 || (segments.length > 0 && !resolved.currentNode && !resolved.entry)) {
    notFound()
  }

  const currentPath = segments.length > 0
    ? `/${section.slug}/${segments.join('/')}`
    : `/${section.slug}`
  const baseSegments = resolved.trail.map((node) => node.slug)
  const menuItems = resolved.entry
    ? buildEntryMenu(section, baseSegments, resolved.entry.slug)
    : segments.length > 0
      ? buildSiblingMenu(section, baseSegments)
      : buildMenuWithState(section, currentPath)
  const breadcrumbs = segments.length > 0
    ? buildBreadcrumbs(section, resolved.trail, resolved.entry, segments)
    : section.breadcrumbs

  let body: ReactNode
  let heading = section.sidebar.title

  if (resolved.entry) {
    if (!resolved.entry.mdxComponent) {
      notFound()
    }

    heading = resolved.entry.title
    body = <ContentDetail entry={resolved.entry} />
  } else {
    const node = resolved.currentNode
    const categories = node?.children ?? section.categories
    const entries = node?.entries ?? []
    heading = node?.title ?? section.sidebar.title

    if (categories.length > 0) {
      body = <SectionCategoryGrid categories={categories} sectionSlug={section.slug} baseSegments={baseSegments} />
    } else if (entries.length > 0) {
      body = <SectionEntryList entries={entries} sectionSlug={section.slug} baseSegments={baseSegments} />
    } else {
      notFound()
    }
  }

  return (
    <SubPageLayout
      heroTitle={section.hero.title}
      heroSubtitle={section.hero.subtitle}
      heroImage={section.hero.image}
      sidebarTitle={section.sidebar.title}
      sidebarSubtitle={section.sidebar.subtitle}
      menuItems={menuItems}
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-10">
        <div className="mb-8 flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
          <h2 className="text-2xl font-normal tracking-widest text-slate-800">{heading}</h2>
          <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        </div>
        {body}
      </div>
    </SubPageLayout>
  )
}
