import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import HomeHero from '@/components/HomeHero'

vi.mock('next/image', () => ({
  // Test mock: render next/image as a plain img in jsdom.
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: ComponentProps<'img'>) => <img {...props} alt={props.alt} />,
}))

vi.mock('framer-motion', async () => {
  const React = await import('react')

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
      ),
    },
    useReducedMotion: () => true,
  }
})

describe('HomeHero', () => {
  it('renders the fullscreen banner shell and headline', () => {
    const { container } = render(<HomeHero />)

    expect(container.querySelector('[data-home-hero="shell"]')).toBeInTheDocument()
    expect(container.querySelector('[data-home-hero="slide"]')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '辽宁交专信息工程系' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('立足交通行业，面向数字技术，构建理论与实践并重的人才培养体系。'),
    ).toBeInTheDocument()
  })

  it('renders manual carousel controls for all slides', () => {
    render(<HomeHero />)

    const controls = screen.getAllByRole('button', {
      name: /切换到第 .* 张首屏图片/,
    })

    expect(controls).toHaveLength(3)
    expect(controls[0]).toHaveAttribute('aria-pressed', 'true')
  })
})
