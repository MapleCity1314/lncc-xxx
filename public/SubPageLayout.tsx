'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type MenuItem = {
  label: string
  enLabel?: string
  href: string
  isActive?: boolean
}

type SubPageLayoutProps = {
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  sidebarTitle: string
  sidebarSubtitle: string
  menuItems: MenuItem[]
  breadcrumbs: { label: string; href?: string }[]
  children: React.ReactNode
}

export default function SubPageLayout({
  heroTitle,
  heroSubtitle,
  heroImage,
  sidebarTitle,
  sidebarSubtitle,
  menuItems,
  breadcrumbs,
  children,
}: SubPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. 顶部 Hero 大图区域 */}
      <div className="relative h-[300px] w-full sm:h-[350px] lg:h-[400px]">
        <Image
          src={heroImage}
          alt={heroTitle}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        {/* 大图上的文字 */}
        <div className="absolute bottom-16 left-4 sm:left-10 lg:left-[calc((100vw-1440px)/2+2.5rem)]">
          <h1 className="text-4xl font-bold tracking-wider text-white sm:text-5xl">{heroTitle}</h1>
          <p className="mt-2 text-sm font-medium tracking-[0.2em] text-white/80 uppercase">{heroSubtitle}</p>
        </div>
      </div>

      {/* 2. 主体内容区 */}
      <div className="mx-auto flex max-w-[1440px] flex-col px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-10">
        
        {/* 左侧：浮动侧边栏 (大屏显示浮动，小屏自然堆叠) */}
        <aside className="relative z-10 -mt-10 w-full shrink-0 lg:-mt-20 lg:w-[260px] xl:w-[280px]">
          {/* 波浪形顶部修饰 (使用蓝色系底色) */}
          <div className="relative h-8 w-full overflow-hidden text-slate-900 sm:h-12">
            <svg viewBox="0 0 280 48" preserveAspectRatio="none" className="h-full w-full fill-current">
              <path d="M0 48h280V24c-35-15-75 5-110 5s-65-20-100-20S35 24 0 24v24z" />
            </svg>
          </div>

          {/* 侧边栏主体内容 */}
          <div className="flex flex-col bg-slate-900 pb-6 shadow-xl">
            {/* 侧边栏大标题 */}
            <div className="flex flex-col items-center justify-center border-b border-white/10 px-6 py-8 text-center">
              <h2 className="text-2xl font-bold tracking-widest text-white">{sidebarTitle}</h2>
              {sidebarSubtitle && (
                <span className="mt-1 text-xs text-slate-400 uppercase tracking-widest">{sidebarSubtitle}</span>
              )}
            </div>

            {/* 侧边栏菜单项 */}
            <nav className="flex flex-col">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={[
                    'group relative flex flex-col items-center justify-center border-b border-white/5 py-5 text-center transition-all',
                    item.isActive
                      ? 'bg-sky-600 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  ].join(' ')}
                >
                  <span className="text-lg font-medium tracking-wide">{item.label}</span>
                  {item.enLabel && (
                    <span className="mt-1 text-[11px] opacity-60 uppercase tracking-wider">{item.enLabel}</span>
                  )}
                  {/* 活动状态的左侧修饰条 */}
                  {item.isActive && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-sky-300" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* 右侧：内容区域 */}
        <main className="flex-1 pb-24 pt-8 lg:pt-10">
          {/* 面包屑导航 */}
          <div className="mb-10 flex items-center justify-end text-sm text-slate-500">
            <span className="mr-2">当前位置：</span>
            <div className="flex items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-slate-300">&gt;</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-sky-600">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 具体的页面内容插槽 */}
          <div>{children}</div>
        </main>
      </div>
    </div>
  )
}