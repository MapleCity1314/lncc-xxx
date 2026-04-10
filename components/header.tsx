import Image from 'next/image'
import Link from 'next/link'
import HeaderNav from '@/components/header-nav'
import MobileMenu from '@/components/mobile-menu'
import SearchButton from '@/components/search-button'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/35 via-black/12 to-transparent" />

      <div className="relative mx-auto flex h-[84px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-white">
          <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
            <Image
              src="/image/logo/logo.png"
              alt="信息工程系标志"
              fill
              sizes="48px"
              className="object-contain"
            />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-[16px] font-semibold tracking-[0.08em] text-white">
              信息工程系
            </span>
            <span className="mt-0.5 hidden truncate text-[11px] uppercase tracking-[0.22em] text-white/70 sm:block">
              Information Engineering Department
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <HeaderNav />
          <SearchButton className="hidden size-10 bg-white/10 text-white/90 hover:bg-white/16 xl:inline-flex" />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
