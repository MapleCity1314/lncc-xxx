'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { withBasePath } from '@/app/(frontend)/_lib/base-path'
import HeaderNav from '@/components/header-nav'
import MobileMenu from '@/components/mobile-menu'
import SearchButton from '@/components/search-button'
import SearchOverlay from '@/components/search-overlay'

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/40 via-black/16 to-transparent" />

        <div className="relative mx-auto flex h-[var(--header-height)] w-full max-w-[min(100%,1680px)] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12 2xl:px-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -18, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 0.48,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="shrink-0"
          >
            <Link href="/" aria-label="信息工程系首页" className="block">
              <Image
                src={withBasePath('/image/logo/logo.png')}
                alt="信息工程系标识"
                width={1855}
                height={576}
                fetchPriority="high"
                loading="eager"
                sizes="(max-width: 640px) 248px, (max-width: 1024px) 320px, 400px"
                className="h-[4.5rem] w-auto object-contain sm:h-[5.2rem] lg:h-[6rem] xl:h-[6.6rem]"
              />
            </Link>
          </motion.div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
            <HeaderNav />
            <div className="hidden xl:flex">
              <SearchButton
                onClick={() => setSearchOpen(true)}
                className="size-11 bg-white/10 text-white/90 hover:bg-white/16"
              />
            </div>
            <MobileMenu onSearchClick={() => setSearchOpen(true)} />
          </div>
        </div>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
