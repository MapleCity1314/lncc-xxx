import { describe, expect, it } from 'vitest'
import type { SectionContent } from '@/data/content/types'
import {
  buildSpecializationMenu,
  buildSiblingMenu,
  getSpecializationLandingPath,
  getAllSectionStaticParams,
  resolveSectionPath,
} from '@/app/(frontend)/_lib/content'
import { majorsSection } from '@/data/content'

const section: SectionContent = {
  slug: 'research',
  hero: {
    title: 'Research',
    subtitle: 'RESEARCH',
    image: '/image/banner/home-banner-3.jpg',
  },
  sidebar: {
    title: 'Research',
    subtitle: 'Research',
  },
  menu: [
    { label: 'Teaching Projects', href: '/research/teaching-projects' },
    { label: 'Research Projects', href: '/research/research-projects' },
  ],
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
  ],
  categories: [
    {
      slug: 'teaching-projects',
      title: 'Teaching Projects',
      description: 'Teaching project list.',
      entries: [
        {
          slug: 'teaching-summary',
          title: 'Teaching Summary',
          summary: 'A teaching project summary.',
          publishedAt: '2024-01-01',
        },
      ],
    },
    {
      slug: 'research-projects',
      title: 'Research Projects',
      description: 'Research project list.',
      entries: [
        {
          slug: 'research-summary',
          title: 'Research Summary',
          summary: 'A research project summary.',
          publishedAt: '2024-01-02',
        },
      ],
    },
  ],
}

describe('resolveSectionPath', () => {
  it('resolves a slug-only entry path to the correct entry and breadcrumbs', () => {
    const resolved = resolveSectionPath(section, ['teaching-summary'])

    expect(resolved.entry?.title).toBe('Teaching Summary')
    expect(resolved.trail.map((node) => node.slug)).toEqual(['teaching-projects'])
    expect(resolved.leftoverSegments).toHaveLength(0)
  })
})

describe('shared section tree routing', () => {
  it('resolves non-majors sections through the same category tree model', () => {
    const resolved = resolveSectionPath(section, ['teaching-projects'])

    expect(resolved.currentNode?.slug).toBe('teaching-projects')
    expect(resolved.currentNode?.entries?.length).toBeGreaterThan(0)
    expect(resolved.leftoverSegments).toHaveLength(0)
  })

  it('builds a same-level sidebar menu for child category pages', () => {
    const menu = buildSiblingMenu(section, ['teaching-projects'])

    expect(menu.map((item) => item.href)).toContain('/research/teaching-projects')
    expect(menu.map((item) => item.href)).toContain('/research/research-projects')
    expect(menu.find((item) => item.href === '/research/teaching-projects')?.isActive).toBe(true)
  })

  it('includes non-majors category paths in static params', () => {
    const params = getAllSectionStaticParams(section)

    expect(params).toContainEqual({ slug: ['teaching-projects'] })
  })
})

describe('majors section routing', () => {
  it('keeps the majors landing route explicitly mapped to a specialization entry', () => {
    expect(majorsSection.hero.title).toBe('人才培养')
    expect(majorsSection.sidebar.title).toBe('专业设置')
    expect(majorsSection.breadcrumbs.at(-1)?.label).toBe('人才培养')
    expect(getSpecializationLandingPath(majorsSection)).toBe(
      '/majors/specializations/zysz-jsjwljs-htm',
    )
  })

  it('marks the configured specialization as active on the majors landing page', () => {
    const landingPath = getSpecializationLandingPath(majorsSection)

    expect(landingPath).toBe('/majors/specializations/zysz-jsjwljs-htm')

    const specializationMenu = buildSpecializationMenu(
      majorsSection,
      landingPath!,
    )

    expect(
      specializationMenu.find((item) => item.href === '/majors/specializations/zysz-jsjwljs-htm')
        ?.isActive,
    ).toBe(true)
    expect(
      specializationMenu.some((item) => item.label === '计算机基础教研室'),
    ).toBe(false)
  })
})
