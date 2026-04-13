import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import ContentDetail from '@/components/ContentDetail'
import SubPageLayout from '@/components/SubPageLayout'
import SectionCategoryGrid from '@/components/SectionCategoryGrid'
import SectionEntryList from '@/components/SectionEntryList'
import MajorSectionList from '@/components/MajorSectionList'
import { majorsSection } from '@/data/content'
import {
  buildBreadcrumbs,
  buildMenuWithState,
  buildSpecializationMenu,
  getSectionStaticParams,
  resolveSectionPath,
} from '@/app/(frontend)/_lib/content'
import {
  getContentEntryMetadata,
  getSectionMetadata,
} from '@/app/(frontend)/_lib/metadata'

export function generateMetadata({ params }: MajorPathProps) {
  const segments = params.slug ?? []
  const resolved = resolveSectionPath(majorsSection, segments)

  if (resolved.entry) {
    return getContentEntryMetadata({
      title: resolved.entry.title,
      description: resolved.entry.summary,
      path: `/${majorsSection.slug}/${segments.join('/')}`,
      sectionLabel: majorsSection.sidebar.title,
      publishedAt: resolved.entry.publishedAt,
    })
  }

  return getSectionMetadata('majors')
}

export function generateStaticParams() {
  return getSectionStaticParams('majors')
}

type MajorPathProps = {
  params: {
    slug?: string[]
  }
}

const SPECIALIZATION_CATEGORY_SLUG = 'specializations'

export default function MajorNodePage({ params }: MajorPathProps) {
  const segments = params.slug ?? []
  if (segments.length === 0) {
    notFound()
  }

  const resolved = resolveSectionPath(majorsSection, segments)

  if (!resolved.currentNode) {
    notFound()
  }

  if (resolved.leftoverSegments.length > 1) {
    notFound()
  }

  const currentPath = `/${majorsSection.slug}/${segments.join('/')}`
  const menuPath =
    resolved.entry?.categorySlug && !segments.includes(resolved.entry.categorySlug)
      ? `/${majorsSection.slug}/${resolved.entry.categorySlug}`
      : currentPath
  const menuItems = buildMenuWithState(majorsSection, menuPath)
  const breadcrumbs = buildBreadcrumbs(majorsSection, resolved.trail, resolved.entry, segments)
  const baseSegments = resolved.trail.map((node) => node.slug)

  const hasSpecializationEntry = resolved.entry?.categorySlug === SPECIALIZATION_CATEGORY_SLUG

  const specializationActivePath =
    hasSpecializationEntry && resolved.entry
      ? `/${majorsSection.slug}/${SPECIALIZATION_CATEGORY_SLUG}/${resolved.entry.slug}`
      : segments[0] === SPECIALIZATION_CATEGORY_SLUG
      ? `/${majorsSection.slug}/${SPECIALIZATION_CATEGORY_SLUG}`
      : `/${majorsSection.slug}`

  const shouldShowSpecializationMenu =
    segments[0] === SPECIALIZATION_CATEGORY_SLUG || hasSpecializationEntry

  const resolvedMenuItems = shouldShowSpecializationMenu
    ? buildSpecializationMenu(majorsSection, specializationActivePath)
    : menuItems

  let body: ReactNode
  let heading = resolved.currentNode.title
  const heroTitle = resolved.entry?.metadata?.heroTitle ?? majorsSection.hero.title
  const heroSubtitle = resolved.entry?.metadata?.heroSubtitle ?? majorsSection.hero.subtitle
  const heroImage = resolved.entry?.metadata?.heroImage ?? majorsSection.hero.image

  if (resolved.entry) {
    body = (
      <>
        <ContentDetail entry={resolved.entry} />
        {resolved.entry.sections && resolved.entry.sections.length > 0 && (
          <MajorSectionList sections={resolved.entry.sections} />
        )}
      </>
    )
    heading = resolved.entry.title
  } else if (resolved.currentNode.children && resolved.currentNode.children.length > 0) {
    body = (
      <SectionCategoryGrid
        categories={resolved.currentNode.children}
        sectionSlug={majorsSection.slug}
      />
    )
  } else if (resolved.currentNode.entries && resolved.currentNode.entries.length > 0) {
    body = (
      <SectionEntryList
        entries={resolved.currentNode.entries}
        sectionSlug={majorsSection.slug}
        baseSegments={baseSegments}
      />
    )
  } else {
    notFound()
  }

  return (
    <SubPageLayout
      heroTitle={heroTitle}
      heroSubtitle={heroSubtitle}
      heroImage={heroImage}
      sidebarTitle={majorsSection.sidebar.title}
      sidebarSubtitle={majorsSection.sidebar.subtitle}
      menuItems={resolvedMenuItems}
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
