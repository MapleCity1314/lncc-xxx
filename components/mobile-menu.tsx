'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import headerLinks, { isHeaderLinkActive } from '@/components/header-links'
import SearchButton from '@/components/search-button'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, rotateX: -90 },
  show: {
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
}

type MobileMenuProps = {
  onSearchClick: () => void
}

export default function MobileMenu({ onSearchClick }: MobileMenuProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const lastPathnameRef = useRef(pathname)

  useEffect(() => {
    if (!open || pathname === lastPathnameRef.current) {
      lastPathnameRef.current = pathname
      return
    }

    lastPathnameRef.current = pathname

    const timer = window.setTimeout(() => {
      setOpen(false)
    }, 0)

    return () => window.clearTimeout(timer)
  }, [open, pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="xl:hidden">
      <div className="flex items-center gap-2">
        <SearchButton
          onClick={onSearchClick}
          className="size-10 bg-white/10 text-white/90 hover:bg-white/16"
        />
        <button
          type="button"
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span className="sr-only">{open ? '关闭菜单' : '打开菜单'}</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-slate-950/96 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="移动端导航"
          >
            <div className="flex h-full flex-col px-5 pb-8 pt-5 sm:px-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="关闭菜单"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80"
                >
                  <span aria-hidden="true" className="text-2xl leading-none">
                    ×
                  </span>
                </button>
              </div>

              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="show"
                aria-label="移动端导航"
                className="mt-14 flex flex-1 flex-col gap-3 overflow-y-auto [perspective:1000px]"
              >
                {headerLinks.map((item) => {
                  const active = isHeaderLinkActive(pathname, item.href)

                  return (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      className="[transform-origin:top_center]"
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => setOpen(false)}
                        className={[
                          'block rounded-2xl px-4 py-4 text-[22px] font-bold tracking-[0.02em] transition-colors',
                          active
                            ? 'bg-white/10 text-white'
                            : 'text-white/86 hover:bg-white/8 hover:text-white',
                        ].join(' ')}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
