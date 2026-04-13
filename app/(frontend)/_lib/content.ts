import type { BreadcrumbLink } from '@/data/content/types'
import { contentSections } from '@/data/content'
import type { ContentCategory, ContentEntry, SectionContent } from '@/data/content/types'
import type { SubPageMenuItem } from '@/components/SubPageLayout'

export type MenuItemWithActive = (SectionContent['menu'][number] & { isActive?: boolean })

export function getSectionBySlug(slug: string): SectionContent | undefined {
  return contentSections[slug]
}

export function buildMenuWithState(section: SectionContent, currentPath: string): MenuItemWithActive[] {
  return section.menu.map((item) => ({
    ...item,
    isActive: isMenuItemActive(item.href, currentPath),
  }))
}

export function buildSpecializationMenu(
  section: SectionContent,
  currentPath: string,
): SubPageMenuItem[] {
  const specializationCategory = section.categories.find((node) => node.slug === 'specializations')
  if (!specializationCategory) {
    return []
  }

  const entries = specializationCategory.entries ?? []
  const items = entries.map<SubPageMenuItem>((entry) => ({
    label: entry.title,
    href: `/${section.slug}/${specializationCategory.slug}/${entry.slug}`,
  }))

  items.push({
    label: '计算机基础教研室',
    href: `/${section.slug}`,
  })

  return items.map((item) => ({
    ...item,
    isActive: currentPath === item.href,
  }))
}

function isMenuItemActive(href: string, currentPath: string) {
  if (href === currentPath) {
    return true
  }

  return currentPath.startsWith(`${href}/`)
}

export type ResolvedSectionPath = {
  currentNode?: ContentCategory
  entry?: ContentEntry
  trail: ContentCategory[]
  leftoverSegments: string[]
}

export function resolveSectionPath(section: SectionContent, segments: string[]): ResolvedSectionPath {
  const trail: ContentCategory[] = []
  let currentNodes = section.categories
  let consumed = 0

  while (consumed < segments.length) {
    const next = currentNodes?.find((node) => node.slug === segments[consumed])
    if (!next) {
      break
    }

    trail.push(next)
    consumed += 1
    currentNodes = next.children ?? []
  }

  const leftover = segments.slice(consumed)
  const currentNode = trail.at(-1)
  let entry: ContentEntry | undefined

  if (currentNode && leftover.length === 1) {
    entry = currentNode.entries?.find((item) => item.slug === leftover[0])
  }

  if (!entry && segments.length > 0) {
    const aliasMatch = findEntryBySegments(section, segments)
    if (aliasMatch) {
      return {
        currentNode: aliasMatch.category ?? currentNode,
        entry: aliasMatch.entry,
        trail: aliasMatch.trail,
        leftoverSegments: [],
      }
    }
  }

  if (!entry && segments.length === 1) {
    const directEntry = findEntryBySlug(section.slug, segments[0])
    if (directEntry) {
      const trail = directEntry.categorySlug
        ? findCategoryTrail(section.categories, directEntry.categorySlug) ?? []
        : []
      return {
        currentNode: trail.at(-1) ?? currentNode,
        entry: directEntry,
        trail,
        leftoverSegments: [],
      }
    }
  }

  return {
    currentNode,
    entry,
    trail,
    leftoverSegments: leftover,
  }
}

export function buildBreadcrumbs(
  section: SectionContent,
  trail: ContentCategory[],
  entry?: ContentEntry,
  actualPathSegments: string[] = [],
): BreadcrumbLink[] {
  const breadcrumbs: BreadcrumbLink[] = [...section.breadcrumbs]
  const pathSegments: string[] = []

  for (const node of trail) {
    pathSegments.push(node.slug)
    breadcrumbs.push({
      label: node.title,
      href: `/${section.slug}/${pathSegments.join('/')}`,
    })
  }

  if (entry) {
    breadcrumbs.push({
      label: entry.title,
      href: actualPathSegments.length > 0 ? `/${section.slug}/${actualPathSegments.join('/')}` : undefined,
    })
  }

  return breadcrumbs
}

export function getSectionStaticParams(sectionSlug: string) {
  const section = getSectionBySlug(sectionSlug)
  if (!section) {
    return []
  }

  const params: { slug: string[] }[] = []

  function walk(node: ContentCategory, ancestors: string[]) {
    const currentPath = [...ancestors, node.slug]
    params.push({ slug: currentPath })

    if (node.children) {
      node.children.forEach((child) => walk(child, currentPath))
    }

    if (node.entries) {
      node.entries.forEach((entry) => {
        params.push({ slug: [...currentPath, entry.slug] })
        if (entry.aliasSlugs) {
          entry.aliasSlugs.forEach((alias) => {
            params.push({ slug: alias })
          })
        }
      })
    }
  }

  section.categories.forEach((category) => walk(category, []))
  return params
}

export function flattenEntries(sectionSlug: string): ContentEntry[] {
  const section = getSectionBySlug(sectionSlug)
  if (!section) {
    return []
  }

  const entries: ContentEntry[] = []

  function walk(node: ContentCategory) {
    if (node.entries) {
      entries.push(...node.entries)
    }

    node.children?.forEach(walk)
  }

  section.categories.forEach(walk)
  return entries
}

export function findEntryBySlug(sectionSlug: string, slug: string) {
  const entries = flattenEntries(sectionSlug)
  return entries.find((entry) => entry.slug === slug)
}

type EntryMatch = {
  entry: ContentEntry
  category?: ContentCategory
  trail: ContentCategory[]
}

function findEntryBySegments(section: SectionContent, segments: string[]): EntryMatch | undefined {
  if (!segments.length) {
    return undefined
  }

  const key = segments.join('/')
  const entries = flattenEntries(section.slug)

  for (const entry of entries) {
    if (entry.aliasSlugs?.some((alias) => alias.join('/') === key)) {
      const trail = entry.categorySlug
        ? findCategoryTrail(section.categories, entry.categorySlug) ?? []
        : []
      return {
        entry,
        category: trail.at(-1) ?? undefined,
        trail,
      }
    }
  }

  return undefined
}

function findCategoryTrail(
  categories: ContentCategory[],
  targetSlug: string,
  accumulated: ContentCategory[] = [],
): ContentCategory[] | null {
  for (const category of categories) {
    const nextTrail = [...accumulated, category]
    if (category.slug === targetSlug) {
      return nextTrail
    }

    if (category.children) {
      const childTrail = findCategoryTrail(category.children, targetSlug, nextTrail)
      if (childTrail) {
        return childTrail
      }
    }
  }

  return null
}
