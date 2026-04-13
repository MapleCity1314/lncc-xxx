import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Footer from '@/components/Footer'
import siteSettings from '@/data/siteSettings'

vi.mock('next/image', () => ({
  // Test mock: replace Next Image with a plain img element for jsdom rendering.
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: ComponentProps<'img'>) => <img {...props} alt={props.alt} />,
}))

describe('Footer', () => {
  it('renders the compact brand and contact footer content', () => {
    render(<Footer />)

    expect(
      screen.getByText(`${siteSettings.address} ， ${siteSettings.postalCode}`),
    ).toBeInTheDocument()
    expect(
      screen.getByText(`联系电话：${siteSettings.telephone}`),
    ).toBeInTheDocument()
    expect(screen.getByText(siteSettings.footerCopyright)).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: '常用链接 / Quick Links' }),
    ).not.toBeInTheDocument()
  })

  it('renders both footer logos with compact accessible alt text', () => {
    render(<Footer />)

    expect(screen.getByAltText('辽宁省交通高等专科学校')).toBeInTheDocument()
    expect(screen.getByAltText('信息工程系')).toBeInTheDocument()
  })

  it('renders the footer logos in a compact horizontal brand row', () => {
    render(<Footer />)

    const brandRow = screen.getByTestId('footer-brand-row')

    expect(brandRow.className).toContain('items-center')
    expect(brandRow.className).toContain('gap-4')
    expect(brandRow.querySelectorAll('img')).toHaveLength(2)

    const schoolLogo = screen.getByAltText('辽宁省交通高等专科学校')
    const departmentLogo = screen.getByAltText('信息工程系')

    expect(schoolLogo.className).not.toContain('invert')
    expect(schoolLogo.className).not.toContain('brightness-0')
    expect(departmentLogo.className).not.toContain('invert')
    expect(departmentLogo.className).not.toContain('brightness-0')
    expect(departmentLogo.className).not.toContain('hidden')
    expect(departmentLogo.className).toContain('h-10')
    expect(schoolLogo).toHaveAttribute('loading', 'eager')
    expect(departmentLogo).toHaveAttribute('loading', 'eager')
  })

  it('uses the slate footer shell and icon contact layout', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const body = screen.getByTestId('footer-body')
    const contacts = screen.getByTestId('footer-contact-list')

    expect(footer.className).toContain('relative')
    expect(footer.className).toContain('bg-neutral-900')
    expect(body.className).toContain('md:flex-row')
    expect(body.className).toContain('md:items-end')
    expect(contacts.querySelectorAll('svg')).toHaveLength(2)
    expect(screen.queryByTestId('footer-accent-line')).not.toBeInTheDocument()
    expect(screen.queryByTestId('footer-watermark')).not.toBeInTheDocument()
  })

  it('removes quick links from the compact footer treatment', () => {
    render(<Footer />)

    for (const link of siteSettings.footerLinks) {
      expect(
        screen.queryByRole('link', { name: link.label }),
      ).not.toBeInTheDocument()
    }
  })
})
