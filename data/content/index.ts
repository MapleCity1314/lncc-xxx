import { majorsSection } from './majors'
import { newsSection } from './news'
import type { SectionContent } from './types'

export { majorsSection, newsSection }

export const contentSections: Record<string, SectionContent> = {
  majors: majorsSection,
  news: newsSection,
}

export const sectionsList: SectionContent[] = [majorsSection, newsSection]
