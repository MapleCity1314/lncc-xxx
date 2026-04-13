import { render, screen } from '@testing-library/react'
import type React from 'react'
import { describe, expect, it, vi } from 'vitest'
import AlumniPage from '@/app/(frontend)/alumni/page'
import EnrollmentPage from '@/app/(frontend)/enrollment/page'
import PartnersPage from '@/app/(frontend)/partners/page'
import PolicePage from '@/app/(frontend)/police/page'
import ResearchPage from '@/app/(frontend)/research/page'
import TrainingPage from '@/app/(frontend)/training/page'

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

function expectHref(href: string) {
  const links = screen.getAllByRole('link')

  expect(links.some((link) => link.getAttribute('href') === href)).toBe(true)
}

describe('section tree pages', () => {
  it('renders research category routes for each submenu section', () => {
    render(<ResearchPage />)

    expectHref('/research/teaching-projects')
    expectHref('/research/awards')
  })

  it('renders training category routes for internal and external bases', () => {
    render(<TrainingPage />)

    expectHref('/training/internal-bases')
    expectHref('/training/external-bases')
  })

  it('renders police category routes for the six lifecycle sections', () => {
    render(<PolicePage />)

    expectHref('/police/admission-training')
    expectHref('/police/policies')
  })

  it('renders partner category routes for companies and updates', () => {
    render(<PartnersPage />)

    expectHref('/partners/companies')
    expectHref('/partners/updates')
  })

  it('renders enrollment directory routes before external admissions and job links', () => {
    render(<EnrollmentPage />)

    expectHref('/enrollment/admissions')
    expectHref('/enrollment/job-links')
  })

  it('renders alumni category routes for profiles, services, and alumni info', () => {
    render(<AlumniPage />)

    expectHref('/alumni/profiles')
    expectHref('/alumni/alumni-info')
  })
})
