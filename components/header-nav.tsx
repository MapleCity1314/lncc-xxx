'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import headerLinks, { isHeaderLinkActive } from '@/components/header-links'

export default function HeaderNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="主导航"
      className="hidden items-center gap-4 whitespace-nowrap xl:flex 2xl:gap-5"
    >
      {headerLinks.map((item) => {
        const active = isHeaderLinkActive(pathname, item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={[
              'relative py-2 text-[14px] font-medium tracking-[0.03em] transition-colors',
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
        )
      })}
    </nav>
  )
}
