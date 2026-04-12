import type { MetadataRoute } from 'next'
import { getAbsoluteUrl } from '@/app/(frontend)/_lib/metadata'
import { majorDetailEntries, newsDetailEntries } from '@/app/(frontend)/_lib/route-placeholders'

export const dynamic = 'force-static'

const STATIC_ROUTES = [
  '/',
  '/about',
  '/majors',
  '/teachers',
  '/research',
  '/training',
  '/police',
  '/partners',
  '/enrollment',
  '/alumni',
  '/news',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const detailRoutes = [
    ...majorDetailEntries.map((item) => `/majors/${item.slug}`),
    ...newsDetailEntries.map((item) => `/news/${item.slug}`),
  ]

  return [
    ...STATIC_ROUTES.map((route) => ({ url: getAbsoluteUrl(route) })),
    ...detailRoutes.map((route) => ({ url: getAbsoluteUrl(route) })),
  ]
}
