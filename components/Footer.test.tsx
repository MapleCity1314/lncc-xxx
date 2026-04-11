import type { AnchorHTMLAttributes, ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Footer from '@/components/Footer'
import siteSettings from '@/data/siteSettings'

vi.mock('next/image', () => ({
  // Test mock: replace Next Image with a plain img element for jsdom rendering.
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: ComponentProps<'img'>) => <img {...props} alt={props.alt} />,
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

describe('Footer', () => {
  it('renders the redesigned contact and copyright content', () => {
    render(<Footer />)

    expect(
      screen.getByRole('heading', { name: '常用链接 / Quick Links' }),
    ).toBeInTheDocument()
    expect(screen.getByText('地址')).toBeInTheDocument()
    expect(screen.getByText(siteSettings.address)).toBeInTheDocument()
    expect(screen.getByText('邮编')).toBeInTheDocument()
    expect(screen.getByText(siteSettings.postalCode)).toBeInTheDocument()
    expect(screen.getByText('电话')).toBeInTheDocument()
    expect(screen.getByText(siteSettings.telephone)).toBeInTheDocument()
    expect(screen.getByText(siteSettings.footerCopyright)).toBeInTheDocument()
    expect(
      screen.getByText('辽宁省交通高等专科学校 信息工程系'),
    ).toBeInTheDocument()
  })

  it('renders both footer logos with the new accessible alt text', () => {
    render(<Footer />)

    expect(screen.getByAltText('辽宁交专标识')).toBeInTheDocument()
    expect(screen.getByAltText('信息工程系标识')).toBeInTheDocument()
  })

  it('renders all quick links from site settings', () => {
    render(<Footer />)

    for (const link of siteSettings.footerLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })
})
