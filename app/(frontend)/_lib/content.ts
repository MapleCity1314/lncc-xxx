import type { BreadcrumbLink } from '@/data/content/types'
import type { ContentCategory, ContentEntry, SectionContent } from '@/data/content/types'
import type { SubPageMenuItem } from '@/components/SubPageLayout'

export type MenuItemWithActive = (SectionContent['menu'][number] & { isActive?: boolean })

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
    isActive: currentPath !== `/${section.slug}` && currentPath === item.href,
  }))
}

function isMenuItemActive(href: string, currentPath: string) {
  if (href === currentPath) {
    return true
  }

  return currentPath.startsWith(`${href}/`)
}

export function buildSiblingMenu(section: SectionContent, segments: string[]): SubPageMenuItem[] {
  const activePath = `/${section.slug}/${segments.join('/')}`
  const parentTrail = findParentCategoryTrail(section.categories, segments)
  const siblings = parentTrail.length === 0
    ? section.categories
    : parentTrail.at(-1)?.children ?? section.categories
  const baseSegments = parentTrail.map((node) => node.slug)

  return siblings.map((node) => {
    const href = `/${section.slug}/${[...baseSegments, node.slug].join('/')}`

    return {
      label: node.title,
      href,
      isActive: activePath === href || activePath.startsWith(`${href}/`),
    }
  })
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
    const directEntry = findEntryBySlug(section, segments[0])
    if (directEntry) {
      return {
        currentNode: directEntry.category ?? currentNode,
        entry: directEntry.entry,
        trail: directEntry.trail,
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

export function getAllSectionStaticParams(section: SectionContent) {
  const params: { slug: string[] }[] = []

  function walk(node: ContentCategory, ancestors: string[]) {
    const currentPath = [...ancestors, node.slug]
    params.push({ slug: currentPath })

    if (node.children) {
      node.children.forEach((child) => walk(child, currentPath))
    }

    if (node.entries) {
      node.entries.forEach((entry) => {
        if (entry.mdxComponent) {
          params.push({ slug: [...currentPath, entry.slug] })
        }
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

export const getSectionStaticParams = getAllSectionStaticParams

export function flattenEntries(section: SectionContent): ContentEntry[] {
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

export function findEntryBySlug(section: SectionContent, slug: string): EntryMatch | undefined {
  return findEntryInTree(section.categories, (entry) => entry.slug === slug)
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
  const entries = flattenEntries(section)

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

function findEntryInTree(
  categories: ContentCategory[],
  predicate: (entry: ContentEntry) => boolean,
  accumulated: ContentCategory[] = [],
): EntryMatch | undefined {
  for (const category of categories) {
    const trail = [...accumulated, category]
    const entry = category.entries?.find(predicate)
    if (entry) {
      return {
        entry,
        category,
        trail,
      }
    }

    const childMatch = category.children
      ? findEntryInTree(category.children, predicate, trail)
      : undefined
    if (childMatch) {
      return childMatch
    }
  }

  return undefined
}

function findParentCategoryTrail(
  categories: ContentCategory[],
  segments: string[],
): ContentCategory[] {
  if (segments.length <= 1) {
    return []
  }

  const parentSegments = segments.slice(0, -1)
  const parentTrail: ContentCategory[] = []
  let currentNodes = categories

  for (const segment of parentSegments) {
    const next = currentNodes.find((node) => node.slug === segment)
    if (!next) {
      return []
    }

    parentTrail.push(next)
    currentNodes = next.children ?? []
  }

  return parentTrail
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
