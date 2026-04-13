import { majorsSection } from './majors'
import { newsSection } from './news'
import {
  aboutSection,
  alumniSection,
  enrollmentSection,
  partnersSection,
  policeSection,
  researchSection,
  teachersSection,
  trainingSection,
} from './sections'
import type { SectionContent } from './types'

export {
  aboutSection,
  alumniSection,
  enrollmentSection,
  majorsSection,
  newsSection,
  partnersSection,
  policeSection,
  researchSection,
  teachersSection,
  trainingSection,
}

export const contentSections: Record<string, SectionContent> = {
  about: aboutSection,
  alumni: alumniSection,
  enrollment: enrollmentSection,
  majors: majorsSection,
  news: newsSection,
  partners: partnersSection,
  police: policeSection,
  research: researchSection,
  teachers: teachersSection,
  training: trainingSection,
}

export const sectionsList: SectionContent[] = [
  aboutSection,
  majorsSection,
  newsSection,
  teachersSection,
  researchSection,
  trainingSection,
  partnersSection,
  enrollmentSection,
  alumniSection,
  policeSection,
]
