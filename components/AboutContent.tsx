type AboutContentProps = {
  title: string
  publishedAt: string
  paragraphs: readonly string[]
}

export default function AboutContent({ title, publishedAt, paragraphs }: AboutContentProps) {
  return (
    <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">本系概况</p>
        <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">{title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>发布日期：{publishedAt}</span>
        </div>
      </header>

      <div className="space-y-6 text-base leading-8 text-slate-700">
        {paragraphs.map((paragraph, index) => (
          <p key={`about-paragraph-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
