import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import HomeHero from '@/components/HomeHero'

vi.mock('next/image', () => ({
  // Test mock: render next/image as a plain img in jsdom.
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: ComponentProps<'img'> & {
    fill?: boolean
    fetchPriority?: 'high' | 'low' | 'auto'
    priority?: boolean
  }) => {
    const imgProps = { ...props }

    delete imgProps.fill
    delete imgProps.priority

    return <img {...imgProps} alt={imgProps.alt} />
  },
}))

vi.mock('framer-motion', async () => {
  const React = await import('react')

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      div: (props: React.HTMLAttributes<HTMLDivElement> & {
        animate?: unknown
        exit?: unknown
        initial?: unknown
        layoutId?: unknown
        transition?: unknown
        variants?: unknown
      }) => {
        const divProps = { ...props }

        delete divProps.animate
        delete divProps.exit
        delete divProps.initial
        delete divProps.layoutId
        delete divProps.transition
        delete divProps.variants

        return <div {...divProps}>{props.children}</div>
      },
      h1: (props: React.HTMLAttributes<HTMLHeadingElement> & {
        variants?: unknown
      }) => {
        const h1Props = { ...props }

        delete h1Props.variants

        return <h1 {...h1Props}>{props.children}</h1>
      },
      p: (props: React.HTMLAttributes<HTMLParagraphElement> & {
        variants?: unknown
      }) => {
        const paragraphProps = { ...props }

        delete paragraphProps.variants

        return <p {...paragraphProps}>{props.children}</p>
      },
      span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
        <span {...props}>{children}</span>
      ),
    },
    useInView: () => true,
    useReducedMotion: () => true,
    useSpring: () => ({ set: vi.fn() }),
    useTransform: () => '0',
  }
})

describe('HomeHero', () => {
  it('renders the banner shell and active slide', () => {
    const { container } = render(<HomeHero />)

    expect(container.querySelector('[data-home-hero="shell"]')).toBeInTheDocument()
    expect(container.querySelector('[data-home-hero="slide"]')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('loads the active hero image eagerly for LCP', () => {
    render(<HomeHero />)

    const activeSlide = screen.getByAltText('校园环境')

    expect(activeSlide).toHaveAttribute('loading', 'eager')
    expect(activeSlide).toHaveAttribute('fetchPriority', 'high')
    expect(activeSlide).not.toHaveAttribute('priority')
  })

  it('renders manual carousel controls for all slides', () => {
    render(<HomeHero />)

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('keeps statistics outside of the hero component', () => {
    const { container } = render(<HomeHero />)

    expect(container.querySelector('[data-home-hero="stats"]')).not.toBeInTheDocument()
  })
})
