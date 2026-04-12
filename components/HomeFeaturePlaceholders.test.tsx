import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HomeFeaturePlaceholders from '@/components/HomeFeaturePlaceholders'

describe('HomeFeaturePlaceholders', () => {
  it('renders three homepage placeholder regions', () => {
    render(<HomeFeaturePlaceholders />)

    expect(screen.getByRole('region', { name: '专业建设' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: '教学科研' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: '校企合作' })).toBeInTheDocument()
  })
})
