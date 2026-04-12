import { afterEach, describe, expect, it } from 'vitest'
import { withBasePath } from '@/app/(frontend)/_lib/base-path'

describe('withBasePath', () => {
  const originalBasePath = process.env.NEXT_PUBLIC_BASE_PATH

  afterEach(() => {
    process.env.NEXT_PUBLIC_BASE_PATH = originalBasePath
  })

  it('prefixes root-relative public assets when a base path is configured', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/lncc-xxx'

    expect(withBasePath('/image/logo/logo.png')).toBe(
      '/lncc-xxx/image/logo/logo.png',
    )
  })

  it('leaves already-prefixed and non-root paths unchanged', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/lncc-xxx'

    expect(withBasePath('/lncc-xxx/image/logo/logo.png')).toBe(
      '/lncc-xxx/image/logo/logo.png',
    )
    expect(withBasePath('https://example.com/logo.png')).toBe(
      'https://example.com/logo.png',
    )
  })

  it('leaves root-relative paths unchanged without a base path', () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH

    expect(withBasePath('/image/logo/logo.png')).toBe('/image/logo/logo.png')
  })
})
