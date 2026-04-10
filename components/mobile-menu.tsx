'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import headerLinks, { isHeaderLinkActive } from '@/components/header-links'
import SearchButton from '@/components/search-button'

export default function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null)
  const previousFocusedElementRef = useRef<HTMLElement | null>(null)
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
    if (!open) {
      return
    }

    const body = document.body
    const triggerButton = triggerButtonRef.current
    const lockCount = Number(body.dataset.menuLockCount ?? '0')

    if (lockCount === 0) {
      body.dataset.menuPreviousOverflow = body.style.overflow
      body.style.overflow = 'hidden'
    }

    body.dataset.menuLockCount = String(lockCount + 1)
    previousFocusedElementRef.current = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      if (!focusable || focusable.length === 0) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      const nextLockCount = Number(body.dataset.menuLockCount ?? '1') - 1

      if (nextLockCount <= 0) {
        body.style.overflow = body.dataset.menuPreviousOverflow ?? ''
        delete body.dataset.menuPreviousOverflow
        delete body.dataset.menuLockCount
      } else {
        body.dataset.menuLockCount = String(nextLockCount)
      }

      const restoreTarget =
        previousFocusedElementRef.current && document.contains(previousFocusedElementRef.current)
          ? previousFocusedElementRef.current
          : triggerButton

      restoreTarget?.focus()
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="xl:hidden">
      <div className="flex items-center gap-2">
        <SearchButton className="size-10 bg-white/10 text-white/90 hover:bg-white/16" />
        <button
          type="button"
          ref={triggerButtonRef}
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
          aria-controls="mobile-header-menu"
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

      {open ? (
        <div
          className="fixed inset-0 z-[70] bg-slate-950/96 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="移动端导航"
          ref={dialogRef}
          onClick={() => setOpen(false)}
        >
          <div
            id="mobile-header-menu"
            className="flex h-full flex-col px-5 pb-8 pt-5 sm:px-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                Menu
              </span>
              <button
                type="button"
                aria-label="关闭菜单"
                ref={closeButtonRef}
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  ×
                </span>
              </button>
            </div>

            <nav
              aria-label="移动端导航"
              className="mt-14 flex flex-1 flex-col gap-3 overflow-y-auto"
            >
              {headerLinks.map((item) => {
                const active = isHeaderLinkActive(pathname, item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={[
                      'rounded-2xl px-4 py-4 text-[22px] font-semibold tracking-[0.02em] transition-colors',
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-white/86 hover:bg-white/8 hover:text-white',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  )
}
