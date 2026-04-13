import { describe, expect, it } from 'vitest'
import { majorsSection } from '@/data/content'
import { resolveSectionPath } from '@/app/(frontend)/_lib/content'

describe('resolveSectionPath', () => {
  it('resolves a slug-only specialization path to the correct entry and breadcrumbs', () => {
    const resolved = resolveSectionPath(majorsSection, ['zysz-jsjwljs-htm'])

    expect(resolved.entry?.title).toBe('计算机网络技术')
    expect(resolved.trail.map((node) => node.slug)).toEqual(['specializations'])
    expect(resolved.leftoverSegments).toHaveLength(0)
  })
})
