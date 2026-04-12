import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: string
  code: string
  description: string
  actions: ReactNode
  detail?: string
  halo?: ReactNode
}

export default function StatusScreen({
  eyebrow,
  title,
  code,
  description,
  actions,
  detail,
  halo,
}: Props) {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgb(219_234_254_/_0.95),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#eef4ff_100%)] text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,_rgb(37_99_235_/_0.10),_transparent)]"
      />

      <section className="relative mx-auto flex min-h-dvh w-full max-w-6xl items-center px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid w-full gap-10 overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 p-8 shadow-[0_24px_80px_rgb(15_23_42_/_0.10)] backdrop-blur md:p-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-14 xl:p-14">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.24em] text-primary-700 uppercase">
                {eyebrow}
              </p>

              <div className="space-y-4">
                <p className="text-6xl font-semibold leading-none tracking-[-0.05em] text-slate-300 sm:text-7xl">
                  {code}
                </p>
                <h1 className="max-w-3xl text-balance text-4xl font-semibold text-slate-950 sm:text-5xl">
                  {title}
                </h1>
                <p className="max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              {actions}
            </div>

            {detail ? (
              <p className="rounded-2xl border border-primary-100 bg-primary-50/80 px-4 py-3 text-sm leading-7 text-primary-900">
                {detail}
              </p>
            ) : null}
          </div>

          <div className="flex justify-start lg:justify-end">
            {halo ?? (
              <div
                aria-hidden="true"
                className="h-40 w-40 rounded-full border border-primary-200/70 bg-white/75"
              />
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
