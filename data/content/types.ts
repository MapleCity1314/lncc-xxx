import type { ComponentType } from 'react'

export type MarkdownComponent = ComponentType<Record<string, unknown>>

export type MenuLink = {
  label: string
  enLabel?: string
  href: string
}

export type BreadcrumbLink = {
  label: string
  href?: string
}

export type ContentEntryMetadata = {
  category?: string
  heroTitle?: string
  heroSubtitle?: string
  heroImage?: string
  extraBreadcrumbs?: BreadcrumbLink[]
}

export type MajorSectionItem = {
  title: string
  description: string
  linkLabel: string
  href?: string
}

export type MajorSection = {
  id: string
  title: string
  description: string
  items: MajorSectionItem[]
}

export type ContentEntry = {
  slug: string
  title: string
  summary: string
  publishedAt: string
  mdxComponent?: MarkdownComponent
  href?: string
  isExternal?: boolean
  metadata?: ContentEntryMetadata
  categorySlug?: string
  aliasSlugs?: string[][]
  sections?: MajorSection[]
}

export type ContentCategory = {
  slug: string
  title: string
  description: string
  children?: ContentCategory[]
  entries?: ContentEntry[]
}

export type SectionContent = {
  slug: string
  hero: {
    title: string
    subtitle: string
    image: string
  }
  sidebar: {
    title: string
    subtitle: string
  }
  menu: MenuLink[]
  breadcrumbs: BreadcrumbLink[]
  categories: ContentCategory[]
}
