import type { MajorSection } from '@/data/content/types'

type MajorSectionListProps = {
  sections?: MajorSection[]
}

export default function MajorSectionList({ sections = [] }: MajorSectionListProps) {
  if (sections.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
        正在整理该专业的详细内容，请关注后续更新。
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <header className="mb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{section.id}</p>
            <h3 className="text-2xl font-semibold text-slate-900">{section.title}</h3>
            <p className="text-sm text-slate-600">{section.description}</p>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {section.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
              >
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                {item.href ? (
                  <div className="mt-4">
                    <a
                      href={item.href}
                      className="text-sm font-medium text-sky-600 underline decoration-dotted underline-offset-2"
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                ) : (
                  <div className="mt-4 text-sm font-medium text-slate-500">{item.linkLabel}</div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
