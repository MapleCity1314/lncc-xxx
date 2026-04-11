'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import HeaderNav from '@/components/header-nav'
import MobileMenu from '@/components/mobile-menu'
import SearchButton from '@/components/search-button'
import SearchOverlay from '@/components/search-overlay'

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/35 via-black/12 to-transparent" />

        <div className="relative mx-auto flex h-[104px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
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
                src="/image/logo/logo.png"
                alt="信息工程系标志"
                width={1855}
                height={576}
                preload
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 248px, 320px"
                className="h-16 w-auto object-contain sm:h-20 lg:h-[5.5rem]"
              />
            </Link>
          </motion.div>

          <div className="flex items-center gap-3 sm:gap-4">
            <HeaderNav />
            <div className="hidden xl:flex">
              <SearchButton
                onClick={() => setSearchOpen(true)}
                className="size-10 bg-white/10 text-white/90 hover:bg-white/16"
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
