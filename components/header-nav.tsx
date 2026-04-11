'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
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
    { scope: navRef, dependencies: [pathname] }
  )

  return (
    <nav
      ref={navRef}
      aria-label="主导航"
      className="hidden items-center gap-4 whitespace-nowrap xl:flex 2xl:gap-5"
    >
      {headerLinks.map((item) => {
        const active = isHeaderLinkActive(pathname, item.href)

        return (
          <div key={item.href} className="overflow-hidden py-1">
            <div className="gsap-nav-reveal">
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'relative block py-2 text-[14px] font-semibold tracking-[0.03em] transition-colors',
                  active ? 'text-white' : 'text-white/80 hover:text-white',
                ].join(' ')}
              >
                {item.label}
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
        )
      })}
    </nav>
  )
}
