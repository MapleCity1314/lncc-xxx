'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import headerLinks, { isHeaderLinkActive } from '@/components/header-links'

gsap.registerPlugin(useGSAP)

export default function HeaderNav() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const items = gsap.utils.toArray<HTMLElement>('.gsap-nav-reveal')

      if (prefersReducedMotion) {
        gsap.set(items, { clearProps: 'all', opacity: 1 })
        return
      }

      gsap.set(items, {
        opacity: 0,
        willChange: 'opacity',
      })

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.9,
          ease: 'power3.out',
        },
      })

      timeline.to(items, {
        opacity: 1,
        stagger: 0.08,
        clearProps: 'willChange',
      })
    },
    { scope: navRef },
  )

  return (
    <nav
      ref={navRef}
      aria-label="主导航"
      className="hidden items-center gap-5 whitespace-nowrap xl:flex 2xl:gap-6"
    >
      {headerLinks.map((item) => {
        const active = isHeaderLinkActive(pathname, item.href)

        return (
          <div key={item.href} className="group relative py-2">
            <div className="gsap-nav-reveal">
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'relative block py-1 text-[clamp(0.98rem,0.46vw+0.82rem,1.15rem)] font-semibold tracking-[0.04em] transition-colors',
                  active ? 'text-white' : 'text-white/80 hover:text-white',
                ].join(' ')}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={[
                    'absolute inset-x-0 -bottom-1 h-px rounded-full bg-sky-400 transition-opacity',
                    active ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                />
              </Link>
            </div>

            {item.children && item.children.length > 0 ? (
              <div className="absolute left-0 top-full z-20 invisible origin-top-left -translate-y-2 scale-95 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                <div className="flex w-max min-w-[150px] flex-col rounded-2xl bg-white/95 p-1.5 shadow-xl ring-1 ring-black/5 backdrop-blur-md">
                  {item.children.map((child) => (
                    <Link
                      key={`${item.href}:${child.label}`}
                      href={child.href}
                      target={child.isExternal ? '_blank' : undefined}
                      rel={child.isExternal ? 'noreferrer noopener' : undefined}
                      className="block rounded-xl px-4 py-2.5 text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-sky-600 focus-visible:bg-slate-100 focus-visible:text-sky-600 focus-visible:outline-none"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )
      })}
    </nav>
  )
}