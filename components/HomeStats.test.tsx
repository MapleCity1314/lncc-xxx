import { render, screen } from '@testing-library/react'
import type React from 'react'
import { describe, expect, it, vi } from 'vitest'
import HomeStats from '@/components/HomeStats'

vi.mock('framer-motion', async () => {
  const React = await import('react')

  type MotionProps<T extends HTMLElement = HTMLDivElement> = React.HTMLAttributes<T> & {
    initial?: unknown
    transition?: unknown
    variants?: unknown
    viewport?: unknown
    whileInView?: unknown
  }

  function stripMotionProps<T extends HTMLElement>(props: MotionProps<T>) {
    const elementProps = { ...props }

    delete elementProps.initial
    delete elementProps.transition
    delete elementProps.variants
    delete elementProps.viewport
    delete elementProps.whileInView

    return elementProps
  }

  return {
    motion: {
      div: ({ children, ...props }: MotionProps<HTMLDivElement>) => {
        return <div {...stripMotionProps(props)}>{children}</div>
      },
    },
  }
})

describe('HomeStats', () => {
  it('renders the modular statistics banner with dividers', () => {
    const { container } = render(<HomeStats />)

    const section = container.querySelector('[data-home-stats="section"]')
    const grid = container.querySelector('[data-home-stats="grid"]')

    expect(section).toBeInTheDocument()
    expect(section?.className).toContain('border-b')
    expect(section?.className).toContain('from-neutral-50/80')
    expect(grid?.className).toContain('divide-y')
    expect(grid?.className).toContain('md:divide-x')
    expect(screen.getByText('40+')).toBeInTheDocument()
    expect(screen.getByText('载办学沉淀')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('实训覆盖率')).toBeInTheDocument()
    expect(screen.getByText('TOP')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('省内专业排名')).toBeInTheDocument()
  })
})
