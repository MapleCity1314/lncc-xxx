import { notFound } from 'next/navigation'
import { getDetailMetadata } from '@/app/(frontend)/_lib/metadata'
import { pageContent } from '@/app/(frontend)/_lib/route-placeholders'
import homepageArticles from '@/mock/articles/homepage'

type Params = {
  slug: string
}

function findArticle(slug: string) {
  return homepageArticles.items.find((item) => item.slug === slug)
}

export function generateMetadata({ params }: { params: Params }) {
  const article = findArticle(params.slug)
  if (!article) {
    notFound()
  }

  return getDetailMetadata('news', article)
}

export function generateStaticParams() {
  return homepageArticles.items.map((item) => ({ slug: item.slug }))
}

export default function NewsDetailPage({ params }: { params: Params }) {
  const article = findArticle(params.slug)

  if (!article) {
    notFound()
  }

  const bodyParagraphs =
    article.paragraphs.length > 0
      ? article.paragraphs
      : article.body.split(/\n+/).filter((segment) => segment.trim())

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-10">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          {pageContent.news.title}
        </p>
        <div className="space-y-3">
          <h1 className="text-balance text-3xl font-semibold text-zinc-950">
            {article.title}
          </h1>
          <p className="text-base leading-7 text-zinc-600">
            {article.excerpt ?? pageContent.news.summary}
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            <span>类别：{article.category ?? article.group ?? '资讯'}</span>
            {article.publishedAt ? <span>时间：{article.publishedAt}</span> : null}
          </div>
        </div>
      </header>

      <article className="space-y-5 text-base leading-7 text-zinc-700">
        {bodyParagraphs.map((paragraph, index) => (
          <p key={`${params.slug}-${index}`}>{paragraph}</p>
        ))}
      </article>

      {article.sourceUrl ? (
        <footer className="border-t border-zinc-200 pt-4 text-sm text-zinc-500">
          <p>
            原始来源：
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-blue-600 hover:text-blue-700"
            >
              {article.sourceTitle ?? article.sourceUrl}
            </a>
          </p>
        </footer>
      ) : null}
    </main>
  )
}
