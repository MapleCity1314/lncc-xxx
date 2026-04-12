import { fireEvent, render, screen } from '@testing-library/react'
import type React from 'react'
import { describe, expect, it, vi } from 'vitest'
import MobileMenu from '@/components/mobile-menu'

const pathnameState = {
  value: '/',
}

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

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: {
    button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props} />,
    div: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
    nav: (props: React.HTMLAttributes<HTMLElement>) => <nav {...props} />,
  },
}))

vi.mock('@/components/search-button', () => ({
  default: ({ onClick, className }: { onClick?: () => void; className?: string }) => (
    <button type="button" className={className} onClick={onClick}>
      搜索
    </button>
  ),
}))

describe('header navigation mobile menu', () => {
  it('shows submenu entries inside the fullscreen mobile menu', () => {
    render(<MobileMenu onSearchClick={() => undefined} />)

    fireEvent.click(screen.getByRole('button', { name: '打开菜单' }))

    expect(screen.getByRole('link', { name: /首页/ })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: '新闻公告' })).toHaveAttribute('href', '/news')
    expect(screen.getByRole('link', { name: '组织机构' })).toHaveAttribute(
      'href',
      '/teachers/organization',
    )
  })

  it('keeps 本系概况 as a direct mobile entry without submenu items', () => {
    render(<MobileMenu onSearchClick={() => undefined} />)

    fireEvent.click(screen.getByRole('button', { name: '打开菜单' }))

    expect(screen.getByRole('link', { name: '本系概况' })).toHaveAttribute('href', '/about')
    expect(screen.queryByRole('link', { name: '系部介绍' })).not.toBeInTheDocument()
  })
})
