import type { ContentEntry } from '@/data/content/types'

type ContentDetailProps = {
  entry: ContentEntry
}

export default function ContentDetail({ entry }: ContentDetailProps) {
  const Body = entry.mdxComponent

  if (!Body) {
    return null
  }

  return (
    <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          {entry.metadata?.category ?? '专题解读'}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">{entry.title}</h1>
        <p className="text-sm text-slate-500">{entry.publishedAt}</p>
        <p className="mt-3 text-base leading-7 text-slate-600">{entry.summary}</p>
      </header>

      <article className="prose prose-slate prose-sky max-w-none prose-headings:font-semibold prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-table:border prose-td:border-t">
        <Body />
      </article>
    </section>
  )
}
