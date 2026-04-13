import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type SubPageMenuItem = {
  label: string
  enLabel?: string
  href: string
  isActive?: boolean
}

export type SubPageBreadcrumb = {
  label: string
  href?: string
}

type SubPageLayoutProps = {
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  sidebarTitle: string
  sidebarSubtitle?: string
  menuItems: SubPageMenuItem[]
  breadcrumbs: SubPageBreadcrumb[]
  children: React.ReactNode
  hideSidebar?: boolean
}

export default function SubPageLayout({
  heroTitle,
  heroSubtitle,
  heroImage,
  sidebarTitle,
  sidebarSubtitle,
  menuItems,
  breadcrumbs,
  children,
  hideSidebar = false,
}: SubPageLayoutProps) {
  const containerClass = hideSidebar
    ? 'mx-auto flex max-w-[1100px] flex-col gap-0 px-4 sm:px-6 lg:px-10'
    : 'mx-auto flex max-w-[1440px] flex-col px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-10'

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[300px] w-full sm:h-[350px] lg:h-[400px]">
        <Image
          src={heroImage}
          alt={heroTitle}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute bottom-16 left-4 sm:left-10 lg:left-[calc((100vw-1440px)/2+2.5rem)]">
          <h1 className="text-4xl font-bold tracking-wider text-white sm:text-5xl">{heroTitle}</h1>
          <p className="mt-2 text-sm font-medium tracking-[0.2em] text-white/80 uppercase">{heroSubtitle}</p>
        </div>
      </div>

      <div className={containerClass}>
        {!hideSidebar && (
          <aside className="relative z-10 w-full shrink-0 sm:-mt-6 lg:-mt-12 lg:w-[260px] xl:w-[280px]">
            <div className="relative h-8 w-full overflow-hidden text-slate-900 sm:h-12">
              <svg viewBox="0 0 280 48" preserveAspectRatio="none" className="h-full w-full fill-current">
                <path d="M0 48h280V24c-35-15-75 5-110 5s-65-20-100-20S35 24 0 24v24z" />
              </svg>
            </div>

            <div className="flex flex-col bg-slate-900 pb-6 shadow-xl">
              <div className="flex flex-col items-center justify-center border-b border-white/10 px-6 py-8 text-center">
                <h2 className="text-2xl font-bold tracking-widest text-white">{sidebarTitle}</h2>
                {sidebarSubtitle && (
                  <span className="mt-1 text-xs text-slate-400 uppercase tracking-widest">{sidebarSubtitle}</span>
                )}
              </div>

              <nav className="flex flex-col">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      'group relative flex flex-col items-center justify-center border-b border-white/5 py-5 text-center transition-all',
                      item.isActive ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
                    ].join(' ')}
                  >
                    <span className="text-lg font-medium tracking-wide">{item.label}</span>
                    {item.enLabel && (
                      <span className="mt-1 text-[11px] opacity-60 uppercase tracking-wider">{item.enLabel}</span>
                    )}
                    {item.isActive && <span className="absolute left-0 top-0 h-full w-1 bg-sky-300" />}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        )}

        <main className={`${hideSidebar ? 'flex-1 pb-24 pt-10' : 'flex-1 pb-24 pt-8 lg:pt-12'}`}>
          <div className="mb-10 flex items-center justify-end text-sm text-slate-500">
            <span className="mr-2">当前位置：</span>
            <div className="flex items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={`${crumb.label}:${index}`}>
                  {index > 0 && <span className="text-slate-300">&gt;</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-sky-600">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700">{crumb.label}</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <div>{children}</div>
        </main>
      </div>
    </div>
  )
}
