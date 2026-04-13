import { render, screen, within } from '@testing-library/react'
import type React from 'react'
import { describe, expect, it, vi } from 'vitest'
import HomeBoard from '@/components/HomeBoard'
import { employmentData, newsData, partyData } from '@/data/homeContent'

vi.mock('next/image', () => ({
  default: ({
    fill,
    priority,
    sizes,
    ...props
  }: React.ComponentProps<'img'> & {
    fill?: boolean
    priority?: boolean
    sizes?: string
  }) => (
    // Test mock: render next/image as a plain img in jsdom.
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} data-fill={fill} data-priority={priority} data-sizes={sizes} />
  ),
}))

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

vi.mock('framer-motion', async () => {
  const React = await import('react')

  type MotionProps<T extends HTMLElement = HTMLDivElement> = React.HTMLAttributes<T> & {
    animate?: unknown
    exit?: unknown
    initial?: unknown
    transition?: unknown
    variants?: unknown
    whileInView?: unknown
    viewport?: unknown
  }

  function removeMotionProps<T extends HTMLElement>(props: MotionProps<T>) {
    const variants = props.variants as
      | {
          hidden?: { y?: number }
          visible?: { transition?: { duration?: number; staggerChildren?: number } }
        }
      | undefined

    const motionAttrs = {
      'data-motion-y': variants?.hidden?.y,
      'data-motion-duration': variants?.visible?.transition?.duration,
      'data-motion-stagger': variants?.visible?.transition?.staggerChildren,
    }

    delete props.animate
    delete props.exit
    delete props.initial
    delete props.transition
    delete props.variants
    delete props.whileInView
    delete props.viewport

    return { ...props, ...motionAttrs }
  }

  return {
    motion: {
      div: ({ children, ...props }: MotionProps<HTMLDivElement>) => {
        return <div {...removeMotionProps(props)}>{children}</div>
      },
      section: ({ children, ...props }: MotionProps<HTMLElement>) => {
        return <section {...removeMotionProps(props)}>{children}</section>
      },
      ul: ({ children, ...props }: MotionProps<HTMLUListElement>) => {
        return <ul {...removeMotionProps(props)}>{children}</ul>
      },
      li: ({ children, ...props }: MotionProps<HTMLLIElement>) => {
        return <li {...removeMotionProps(props)}>{children}</li>
      },
    },
  }
})

describe('HomeBoard', () => {
  it('renders the new notice, party, and employment board content', () => {
    render(<HomeBoard employmentData={employmentData} newsData={newsData} partyData={partyData} />)

    expect(screen.getByRole('heading', { name: '党团建设' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '通知公告' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '产教融合与就业' })).toBeInTheDocument()
    expect(
      screen.getByText('信息工程系举办2024年度专业技能大赛表彰大会暨学风建设动员会'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('访企拓岗架金桥 产教融合促就业——信息工程系赴沈阳国际软件园专项走访纪实'),
    ).toBeInTheDocument()
    expect(screen.getByText(/校企联合访企拓岗/)).toBeInTheDocument()
    expect(
      within(screen.getByRole('region', { name: '通知公告' })).getByRole('link', {
        name: /查看更多公告/,
      }),
    ).toHaveAttribute('href', '/news')
    expect(screen.getByRole('link', { name: '探索更多资源 +' })).toHaveAttribute(
      'href',
      '/employment',
    )
  })

  it('routes every homepage content entry to a real detail page instead of placeholders', () => {
    render(<HomeBoard employmentData={employmentData} newsData={newsData} partyData={partyData} />)

    for (const href of [
      ...partyData.map((item) => item.href),
      ...newsData.map((item) => item.href),
      ...employmentData.map((item) => item.href),
    ]) {
      expect(href).toMatch(/^\/(party|news|employment)\//)
      expect(href).not.toContain('#')
    }
  })

  it('uses a more noticeable but restrained scroll reveal', () => {
    render(<HomeBoard employmentData={employmentData} newsData={newsData} partyData={partyData} />)

    expect(screen.getByRole('region', { name: '党团建设' })).toHaveAttribute('data-motion-y', '44')
    expect(screen.getByRole('region', { name: '通知公告' })).toHaveAttribute(
      'data-motion-duration',
      '0.72',
    )
    expect(screen.getByTestId('home-notice-list')).toHaveAttribute('data-motion-stagger', '0.08')
    expect(screen.getByTestId('home-employment-list')).toHaveAttribute(
      'data-motion-stagger',
      '0.1',
    )
  })
})
