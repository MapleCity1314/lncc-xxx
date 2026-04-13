import Link from 'next/link'
import type { ContentEntry } from '@/data/content/types'

type SectionEntryListProps = {
  entries: ContentEntry[]
  sectionSlug: string
  baseSegments: string[]
}

export default function SectionEntryList({ entries, sectionSlug, baseSegments }: SectionEntryListProps) {
  return (
    <div className="space-y-6">
      {entries.map((entry) => {
        const href = `/${sectionSlug}/${[...baseSegments, entry.slug].join('/')}`

        return (
          <Link
            key={entry.slug}
            href={href}
            className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-400 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900">{entry.title}</h3>
              <time className="text-sm text-slate-500">{entry.publishedAt}</time>
            </div>
            <p className="text-base leading-7 text-slate-600">{entry.summary}</p>
            {entry.metadata && entry.metadata.category && (
              <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {entry.metadata.category}
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}
