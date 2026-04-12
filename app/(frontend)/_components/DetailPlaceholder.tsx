import Link from 'next/link'

type Props = {
  title: string
  routePattern: string
  paramLabel: string
  paramValue: string
  sourceNote: string
  backHref: string
  backLabel: string
}

export default function DetailPlaceholder({
  title,
  routePattern,
  paramLabel,
  paramValue,
  sourceNote,
  backHref,
  backLabel,
}: Props) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12 md:px-10">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Dynamic Route Placeholder
        </p>
        <div className="space-y-2">
          <h1 className="text-balance text-3xl font-semibold text-zinc-950">
            {title}
          </h1>
          <p className="max-w-3xl text-pretty text-base leading-7 text-zinc-600">
            当前页面只完成动态路由占位，用于验证 App Router 路径、参数解析和后续页面接入点。
          </p>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-950">路由参数</h2>
          <dl className="mt-4 space-y-3 text-sm text-zinc-600">
            <div>
              <dt className="font-medium text-zinc-950">路由模式</dt>
              <dd>{routePattern}</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-950">{paramLabel}</dt>
              <dd className="break-all font-mono text-xs text-zinc-700">
                {paramValue}
              </dd>
            </div>
          </dl>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-950">占位来源</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600">{sourceNote}</p>
        </article>
      </section>

      <div>
        <Link
          href={backHref}
          className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          返回 {backLabel}
        </Link>
      </div>
    </main>
  )
}
