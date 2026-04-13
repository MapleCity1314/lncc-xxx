import Link from 'next/link'

type SampleLink = {
  href: string
  label: string
  description?: string
}

type Props = {
  title: string
  routePath: string
  summary: string
  mockSources: readonly string[]
  sampleLinks?: readonly SampleLink[]
}

export function RoutePlaceholderContent({
  title,
  routePath,
  summary,
  mockSources,
  sampleLinks = [],
}: Props) {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Route Scaffold
        </p>
        <div className="space-y-2">
          <h1 className="text-balance text-3xl font-semibold text-zinc-950">{title}</h1>
          <p className="max-w-3xl text-pretty text-base leading-7 text-zinc-600">{summary}</p>
        </div>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-950">当前路由</h2>
        <p className="mt-3 font-mono text-sm text-zinc-700">{routePath}</p>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-950">参考的 mock 结构</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-600">
          {mockSources.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {sampleLinks.length > 0 ? (
        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-950">样例入口</h2>
          <ul className="mt-4 grid gap-3">
            {sampleLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl border border-zinc-200 px-5 py-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  <span className="block text-sm font-medium text-zinc-950">{link.label}</span>
                  {link.description ? (
                    <span className="mt-1 block text-sm leading-6 text-zinc-600">{link.description}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}

export default function RoutePlaceholder(props: Props) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12 md:px-10">
      <RoutePlaceholderContent {...props} />
    </main>
  )
}
