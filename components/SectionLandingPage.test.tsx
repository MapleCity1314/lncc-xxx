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

describe('section landing pages', () => {
  it('renders research anchors for each submenu section', () => {
    render(<ResearchPage />)

    expect(screen.getByRole('link', { name: '教研项目' })).toHaveAttribute(
      'href',
      '#teaching-projects',
    )
    expect(screen.getByRole('heading', { name: '成果获奖' })).toHaveAttribute('id', 'awards')
  })

  it('renders training anchors for internal and external bases', () => {
    render(<TrainingPage />)

    expect(screen.getByRole('link', { name: '校内实训基地' })).toHaveAttribute(
      'href',
      '#internal-bases',
    )
    expect(screen.getByRole('heading', { name: '校外实训基地' })).toHaveAttribute(
      'id',
      'external-bases',
    )
  })

  it('renders police anchors for the six lifecycle sections', () => {
    render(<PolicePage />)

    expect(screen.getByRole('link', { name: '入学军训' })).toHaveAttribute(
      'href',
      '#admission-training',
    )
    expect(screen.getByRole('heading', { name: '相关政策' })).toHaveAttribute('id', 'policies')
  })

  it('renders partner anchors for companies and updates', () => {
    render(<PartnersPage />)

    expect(screen.getByRole('link', { name: '合作企业' })).toHaveAttribute('href', '#companies')
    expect(screen.getByRole('heading', { name: '合作动态' })).toHaveAttribute('id', 'updates')
  })

  it('renders enrollment actions with external admissions and job links', () => {
    render(<EnrollmentPage />)

    expect(screen.getByRole('link', { name: '招生信息' })).toHaveAttribute(
      'href',
      'https://www.lncc.edu.cn/xsc/',
    )
    expect(screen.getByRole('link', { name: '招聘信息' })).toHaveAttribute(
      'href',
      'http://www.lncc.edu.cn/xsjy/',
    )
    expect(screen.getByRole('heading', { name: '就业服务' })).toHaveAttribute(
      'id',
      'employment-services',
    )
  })

  it('renders alumni anchors for profiles, services, and alumni info', () => {
    render(<AlumniPage />)

    expect(screen.getByRole('link', { name: '校友风采' })).toHaveAttribute('href', '#profiles')
    expect(screen.getByRole('heading', { name: '校友信息' })).toHaveAttribute(
      'id',
      'alumni-info',
    )
  })
})
