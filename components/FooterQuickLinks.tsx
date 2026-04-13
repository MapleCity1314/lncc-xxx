'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { quickLinks } from '@/data/homeContent'

const quickLinkIcons: ReactNode[] = [
  (
    <svg
      key="footer-icon-globe"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="size-8"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  ),
  (
    <svg
      key="footer-icon-mail"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="size-8"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  ),
  (
    <svg
      key="footer-icon-user"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="size-8"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
  (
    <svg
      key="footer-icon-earth"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="size-8"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  ),
  (
    <svg
      key="footer-icon-tablet"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="size-8"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  ),
]
export default function FooterQuickLinks() {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* 底部波浪水印修饰（贴合截图中的波纹底纹） */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden opacity-30">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-slate-100" fill="currentColor">
          <path d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-20">
          {quickLinks.map((item, index) => {
            const href = item.href
            const isMailto = href.startsWith('mailto:')
            return (
              <li key={item.title}>
                <Link
                  href={href}
                  target={isMailto ? undefined : '_blank'}
                  rel={isMailto ? undefined : 'noreferrer noopener'}
                  className="group flex flex-col items-center justify-center outline-none"
                >
                  {/*
                    用 Tailwind 巧妙实现"实线圈+外围虚线圈"的官网效果
                    ring: 内部实线圈 | outline: 外部虚线圈
                  */}
                  <div className="relative flex size-[120px] flex-col items-center justify-center gap-3 rounded-full bg-white ring-1 ring-slate-200 outline outline-1 outline-offset-4 outline-dashed outline-slate-300 transition-all duration-300 group-hover:bg-sky-50 group-hover:ring-sky-600/40 group-hover:outline-sky-600/40 group-focus-visible:ring-sky-500 group-focus-visible:outline-sky-500">
                    <div className="text-slate-500 transition-colors duration-300 group-hover:text-sky-600 group-hover:scale-110">
                      {quickLinkIcons[index]}
                    </div>
                    <span className="text-[15px] font-medium tracking-widest text-slate-700 transition-colors duration-300 group-hover:text-sky-700">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
