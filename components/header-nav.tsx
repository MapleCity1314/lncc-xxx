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
        gsap.set(items, { clearProps: 'all', opacity: 1, yPercent: 0 })
        return
      }

      gsap.set(items, {
        yPercent: 120,
        opacity: 0,
        willChange: 'transform, opacity',
      })

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.9,
          ease: 'power4.out',
        },
      })

      timeline.to(items, {
        yPercent: 0,
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
          <div key={item.href} className="group/item relative py-1">
            <div className="overflow-hidden">
              <div className="gsap-nav-reveal">
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'peer/item group/link relative flex items-center gap-1.5 py-2 text-[clamp(0.98rem,0.46vw+0.82rem,1.15rem)] font-semibold tracking-[0.04em] transition-colors',
                    active ? 'text-white' : 'text-white/80 hover:text-white',
                  ].join(' ')}
                >
                  <span>{item.label}</span>
                  {item.children.length > 0 ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className="mt-px size-3 text-sky-200/80 transition-transform duration-200 group-hover/link:translate-y-0.5 group-focus-within/item:translate-y-0.5"
                    >
                      <path
                        d="M2.25 4.5 6 8.25 9.75 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </svg>
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute inset-x-0 -bottom-0.5 h-px rounded-full bg-sky-400 transition-opacity',
                      active ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                  />
                </Link>
              </div>
            </div>

            {item.children.length > 0 ? (
              <div className="absolute left-0 top-full z-20 min-w-full pt-0">
                <div className="pointer-events-none translate-y-1 bg-white opacity-0 transition-all duration-150 ease-out peer-hover/item:pointer-events-auto peer-hover/item:translate-y-0 peer-hover/item:opacity-100 hover:pointer-events-auto hover:translate-y-0 hover:opacity-100 group-focus-within/item:pointer-events-auto group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={`${item.href}:${child.label}`}
                      href={child.href}
                      target={child.isExternal ? '_blank' : undefined}
                      rel={child.isExternal ? 'noreferrer noopener' : undefined}
                      className="flex min-h-10 items-center whitespace-nowrap px-4 py-2 text-[clamp(0.98rem,0.46vw+0.82rem,1.15rem)] font-medium tracking-[0.04em] text-black transition-colors duration-150 hover:bg-slate-100 focus-visible:bg-slate-100 focus-visible:outline-none"
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
