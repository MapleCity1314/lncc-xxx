import { render } from '@testing-library/react'
import React, { type AnchorHTMLAttributes, type HTMLAttributes, type ImgHTMLAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Header from '@/components/header'

vi.mock('next/image', () => ({
  default: ({
    alt,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & {
    src: string
    width: number
    height: number
  }) => React.createElement('img', { alt, ...props }),
}))

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock('framer-motion', () => ({
  motion: {
    div: (props: HTMLAttributes<HTMLDivElement> & {
      animate?: unknown
      initial?: unknown
      transition?: unknown
    }) => {
      const { children, ...rest } = props

      delete rest.animate
      delete rest.initial
      delete rest.transition

      return <div {...rest}>{children}</div>
    },
  },
  useReducedMotion: () => true,
}))

vi.mock('@/components/header-nav', () => ({
  default: () => <nav aria-label="desktop navigation" />,
}))

vi.mock('@/components/mobile-menu', () => ({
  default: () => <button type="button">mobile menu</button>,
}))

vi.mock('@/components/search-button', () => ({
  default: ({ onClick, className }: { onClick?: () => void; className?: string }) => (
    <button type="button" className={className} onClick={onClick}>
      search
    </button>
  ),
}))

vi.mock('@/components/search-overlay', () => ({
  default: ({ isOpen }: { isOpen: boolean }) => (
    <div data-testid="search-overlay" data-open={isOpen} />
  ),
}))

describe('Header', () => {
  it('stays pinned to the viewport top without reserving layout space', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header')

    expect(header).not.toBeNull()
    expect(header?.className).toMatch(/\bfixed\b/)
    expect(header?.className).toMatch(/\binset-x-0\b/)
    expect(header?.className).toMatch(/\btop-0\b/)
    expect(header?.className).not.toMatch(/\bbg-neutral-900\b/)
  })
})
