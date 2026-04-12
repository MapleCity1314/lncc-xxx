import { notFound } from 'next/navigation'
import { pageContent } from '@/app/(frontend)/_lib/route-placeholders'
import { getDetailMetadata } from '@/app/(frontend)/_lib/metadata'
import majorsPrograms from '@/mock/majors/programs'

type Params = {
  slug: string
}

function findMajor(slug: string) {
  return majorsPrograms.items.find((item) => item.slug === slug)
}

export function generateMetadata({ params }: { params: Params }) {
  const entry = findMajor(params.slug)
  if (!entry) {
    notFound()
  }

  return getDetailMetadata('majors', entry)
}

export function generateStaticParams() {
  return majorsPrograms.items.map((item) => ({ slug: item.slug }))
}

export default function MajorDetailPage({ params }: { params: Params }) {
  const entry = findMajor(params.slug)

  if (!entry) {
    notFound()
  }

  const bodyParagraphs =
    entry.paragraphs.length > 0
      ? entry.paragraphs
      : entry.body.split(/\n+/).filter((segment) => segment.trim())

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-10">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          {pageContent.majors.title}
        </p>
        <div className="space-y-3">
          <h1 className="text-balance text-3xl font-semibold text-zinc-950">
            {entry.title}
          </h1>
          <p className="text-base leading-7 text-zinc-600">
            {entry.excerpt ?? pageContent.majors.summary}
          </p>
        </div>
      </header>

      <article className="space-y-5 text-base leading-7 text-zinc-700">
        {bodyParagraphs.map((paragraph, index) => (
          <p key={`${params.slug}-${index}`}>{paragraph}</p>
        ))}
      </article>

      {entry.sourceUrl ? (
        <footer className="border-t border-zinc-200 pt-4 text-sm text-zinc-500">
          <p>
            原始来源：
            <a
              href={entry.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-blue-600 hover:text-blue-700"
            >
              {entry.sourceTitle ?? entry.sourceUrl}
            </a>
          </p>
        </footer>
      ) : null}
    </main>
  )
}
