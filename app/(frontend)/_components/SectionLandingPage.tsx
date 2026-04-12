import Link from 'next/link'

type LandingLink = {
  href: string
  label: string
  isExternal?: boolean
}

type LandingItem = {
  description: string
  href?: string
  isExternal?: boolean
  meta?: string | null
  title: string
}

type LandingSection = {
  description: string
  id: string
  items: LandingItem[]
  title: string
}

type Props = {
  description: string
  links: LandingLink[]
  sections: LandingSection[]
  title: string
}

export default function SectionLandingPage({
  title,
  description,
  links,
  sections,
}: Props) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-12 md:px-10">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Section Overview
        </p>
        <div className="space-y-3">
          <h1 className="text-balance text-3xl font-semibold text-slate-950 md:text-4xl">
            {title}
          </h1>
          <p className="max-w-3xl text-pretty text-base leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </header>

      <nav
        aria-label={`${title} 页面分区导航`}
        className="flex flex-wrap gap-3 border-y border-slate-200 py-4"
      >
        {links.map((link) => (
          <Link
            key={`${link.href}:${link.label}`}
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noreferrer noopener' : undefined}
            className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="space-y-8">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15_23_42_/_0.06)] md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="space-y-2">
                <h2 id={section.id} className="text-2xl font-semibold text-slate-950">
                  {section.title}
                </h2>
                <p className="max-w-3xl text-sm leading-7 text-slate-600">
                  {section.description}
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {section.items.length} 条
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {section.items.map((item) =>
                item.href ? (
                  <Link
                    key={`${section.id}:${item.title}`}
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noreferrer noopener' : undefined}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-colors hover:border-slate-300 hover:bg-white"
                  >
                    <p className="text-base font-semibold text-slate-950">{item.title}</p>
                    {item.meta ? (
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                        {item.meta}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </Link>
                ) : (
                  <article
                    key={`${section.id}:${item.title}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <p className="text-base font-semibold text-slate-950">{item.title}</p>
                    {item.meta ? (
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                        {item.meta}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
