import type { Metadata } from 'next'
import { pageContent } from './route-placeholders'

const SITE_TITLE = '辽宁交专信息工程系'
const SITE_DESCRIPTION =
  '辽宁交专信息工程系官方网站，介绍师资队伍、专业建设、教研科研、校企合作与新闻公告。'
const SITE_BASE_URL = new URL('https://www.lncc.edu.cn/xxx/')
const DEFAULT_IMAGE_PATH = '/image/banner/home-banner-1.jpg'
const TWITTER_HANDLE = '@lncc_info'
const TITLE_SUFFIX = 'LNCC'
const HOME_PAGE_TITLE = '首页'

export type SectionRoute = keyof typeof pageContent
export type DetailSection = 'news' | 'majors'

type BuildMetadataOptions = {
  title: string
  description: string
  path: string
  imagePath?: string
  sectionLabel?: string
  openGraphExtras?: Partial<Metadata['openGraph']>
  twitterExtras?: Partial<Metadata['twitter']>
}

type ContentEntryMetadataOptions = {
  title: string
  description?: string
  path: string
  imagePath?: string
  sectionLabel?: string
  publishedAt?: string
}

function normalizeRoute(route: string) {
  if (!route || route === '/') {
    return ''
  }

  return route.replace(/^\/+/, '').replace(/\/+$/, '')
}

function resolveShareImage(imagePath?: string) {
  if (imagePath && /^https?:\/\//.test(imagePath)) {
    return imagePath
  }

  const normalized = (imagePath ?? DEFAULT_IMAGE_PATH).replace(/^\/+/, '')
  return new URL(normalized, SITE_BASE_URL).href
}

function buildMetadata(options: BuildMetadataOptions): Metadata {
  const canonical = getAbsoluteUrl(options.path)
  const shareImage = resolveShareImage(options.imagePath)
  const imageAlt = options.sectionLabel
    ? `${options.sectionLabel} · ${options.title}`
    : `${SITE_TITLE} · ${options.title}`
  const formattedTitle = `${options.title} | ${TITLE_SUFFIX}`

  return {
    title: formattedTitle,
    description: options.description,
    metadataBase: SITE_BASE_URL,
    alternates: {
      canonical,
    },
    openGraph: {
      title: formattedTitle,
      description: options.description,
      url: canonical,
      siteName: SITE_TITLE,
      locale: 'zh-CN',
      images: [
        {
          url: shareImage,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      ...options.openGraphExtras,
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: formattedTitle,
      description: options.description,
      images: [shareImage],
      ...options.twitterExtras,
    },
  }
}

export function getSectionMetadata(section: SectionRoute): Metadata {
  const route = pageContent[section]
  const title = section === 'home' ? HOME_PAGE_TITLE : route.title
  const description = route.summary ?? SITE_DESCRIPTION
  return buildMetadata({
    title,
    description,
    path: route.routePath,
    sectionLabel: route.summary,
  })
}

export function getContentEntryMetadata(options: ContentEntryMetadataOptions) {
  const openGraphExtras: Partial<Metadata['openGraph']> = {
    type: 'article',
  }

  if (options.publishedAt) {
    openGraphExtras.publishedTime = options.publishedAt
  }

  return buildMetadata({
    title: options.title,
    description: options.description?.trim() ? options.description : SITE_DESCRIPTION,
    path: options.path,
    imagePath: options.imagePath,
    sectionLabel: options.sectionLabel,
    openGraphExtras,
  })
}

export function getAbsoluteUrl(route: string) {
  const normalized = normalizeRoute(route)
  return new URL(normalized, SITE_BASE_URL).href
}
