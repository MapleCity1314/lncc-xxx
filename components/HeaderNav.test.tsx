import { render, screen } from '@testing-library/react'
import type React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import headerLinks from '@/components/header-links'
import HeaderNav from '@/components/header-nav'

const pathnameState = {
  value: '/',
}

const { timelineToMock, gsapSetMock, gsapTimelineMock } = vi.hoisted(() => {
  const timelineTo = vi.fn()
  const gsapSet = vi.fn()
  const gsapTimeline = vi.fn(() => ({
    to: timelineTo,
  }))

  return {
    timelineToMock: timelineTo,
    gsapSetMock: gsapSet,
    gsapTimelineMock: gsapTimeline,
  }
})

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock('next/navigation', () => ({
  usePathname: () => pathnameState.value,
}))

vi.mock('@gsap/react', async () => {
  const React = await import('react')

  return {
    useGSAP: (
      callback: () => void | (() => void),
      options?: { dependencies?: React.DependencyList },
    ) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      React.useEffect(() => callback(), options?.dependencies ?? [])
    },
  }
})

vi.mock('gsap', () => ({
  default: {
    registerPlugin: () => undefined,
    set: gsapSetMock,
    timeline: gsapTimelineMock,
    utils: {
      toArray: () => [{}, {}, {}],
    },
  },
}))

describe('HeaderNav', () => {
  afterEach(() => {
    pathnameState.value = '/'
    gsapSetMock.mockClear()
    gsapTimelineMock.mockClear()
    timelineToMock.mockClear()
  })

  it('updates active navigation without replaying the entry animation on pathname changes', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })

    const { rerender } = render(<HeaderNav />)

    expect(screen.getByRole('link', { name: '首页' })).toHaveAttribute('aria-current', 'page')
    expect(gsapTimelineMock).toHaveBeenCalledTimes(1)

    pathnameState.value = '/about'
    rerender(<HeaderNav />)

    expect(screen.getByRole('link', { name: '本系概况' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(gsapTimelineMock).toHaveBeenCalledTimes(1)
  })

  it('keeps root navigation href values unique', () => {
    const hrefs = headerLinks.map((item) => item.href)

    expect(new Set(hrefs).size).toBe(hrefs.length)
  })

  it('keeps about as a direct link without submenu children', () => {
    const aboutLink = headerLinks.find((item) => item.href === '/about')

    expect(aboutLink?.children).toEqual([])
  })

  it('renders desktop submenu links from the shared navigation data', () => {
    pathnameState.value = '/about'

    const { container } = render(<HeaderNav />)

    expect(
      container.querySelector(
        'a[href="/majors/specializations/zysz-jsjwljs-htm"]',
      ),
    ).not.toBeNull()
    expect(screen.getByRole('link', { name: '组织机构' })).toHaveAttribute(
      'href',
      '/teachers/organization',
    )
    expect(screen.getByRole('link', { name: '校友信息' })).toHaveAttribute(
      'href',
      '/alumni/alumni-info',
    )
  })

  it('maps submenu targets to distinct section anchors or external links', () => {
    const researchLink = headerLinks.find((item) => item.href === '/research')
    const trainingLink = headerLinks.find((item) => item.href === '/training')
    const policeLink = headerLinks.find((item) => item.href === '/police')
    const partnersLink = headerLinks.find((item) => item.href === '/partners')
    const enrollmentLink = headerLinks.find((item) => item.href === '/enrollment')
    const alumniLink = headerLinks.find((item) => item.href === '/alumni')

    expect(researchLink?.children.map((item) => item.href)).toEqual([
      '/research/teaching-projects',
      '/research/research-projects',
      '/research/papers',
      '/research/books',
      '/research/awards',
    ])
    expect(trainingLink?.children.map((item) => item.href)).toEqual([
      '/training/internal-bases',
      '/training/external-bases',
    ])
    expect(policeLink?.children.map((item) => item.href)).toEqual([
      '/police/admission-training',
      '/police/daily-study',
      '/police/daily-drill',
      '/police/daily-life',
      '/police/vacation-camp',
      '/police/policies',
    ])
    expect(partnersLink?.children.map((item) => item.href)).toEqual([
      '/partners/companies',
      '/partners/updates',
    ])
    expect(enrollmentLink?.children.map((item) => item.href)).toEqual([
      'https://www.lncc.edu.cn/xsc/',
      '/enrollment/employment-services',
      'http://www.lncc.edu.cn/xsjy/',
      '/enrollment/enterprise-visits',
    ])
    expect(enrollmentLink?.children.map((item) => item.isExternal)).toEqual([
      true,
      undefined,
      true,
      undefined,
    ])
    expect(alumniLink?.children.map((item) => item.href)).toEqual([
      '/alumni/profiles',
      '/alumni/return-services',
      '/alumni/alumni-info',
    ])
  })

  it('keeps submenu hidden until the root navigation group is hovered or focused', () => {
    pathnameState.value = '/about'

    const { container } = render(<HeaderNav />)

    const rootLink = Array.from(
      container.querySelectorAll<HTMLAnchorElement>('.gsap-nav-reveal > a'),
    ).find((element) => element.textContent === '专业设置')
    const submenuPanel = container.querySelector(
      '.absolute.left-0.top-full.z-20.invisible',
    )
    const submenuSurface = submenuPanel?.firstElementChild

    expect(rootLink?.className).toContain('relative block')
    expect(submenuPanel?.className).toContain('group-hover:visible')
    expect(submenuPanel?.className).toContain('group-focus-within:visible')
    expect(submenuPanel?.className).toContain('opacity-0')
    expect(submenuPanel?.className).toContain('group-hover:opacity-100')
    expect(submenuSurface?.className).toContain('bg-white/95')
  })
})

