export type MockCrawlEntry = {
  label: string
  url: string
  status: string
  title: string | null
  relativeOutputPath: string | null
  path: string
  topLevel: string
}

export type MockLink = {
  label: string
  url: string
  isExternal: boolean
}

export type MockImage = {
  alt: string
  url: string
}

export type MockBlock = {
  type: 'heading' | 'paragraph' | 'image' | 'tableRow'
  value: string
}

export type MockPage = {
  id: string
  title: string
  slug: string
  group: string
  sourcePath: string
  sourceUrl: string
  sourceTitle: string | null
  publishedAt: string | null
  category: string | null
  excerpt: string | null
  body: string
  headings: string[]
  paragraphs: string[]
  links: MockLink[]
  images: MockImage[]
  blocks: MockBlock[]
}

export type MockNavItem = {
  label: string
  url: string
  isExternal: boolean
  children?: MockNavItem[]
}

export type MockCollection<T> = {
  section: string
  description: string
  items: T[]
}
