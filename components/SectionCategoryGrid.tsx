import Link from 'next/link'
import type { ContentCategory } from '@/data/content/types'

type SectionCategoryGridProps = {
  categories: ContentCategory[]
  sectionSlug: string
  baseSegments?: string[]
}

function getCategoryCaption(category: ContentCategory) {
  if (category.children && category.children.length > 0) {
    return `${category.children.length} 个子栏目`
  }

  if (category.entries && category.entries.length > 0) {
    return `${category.entries.length} 篇文章`
  }

  return '内容持续更新'
}

export default function SectionCategoryGrid({
  categories,
  sectionSlug,
  baseSegments = [],
}: SectionCategoryGridProps) {
  return (
    // 采用 2列 或 3列 的紧凑网格
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/${sectionSlug}/${[...baseSegments, category.slug].join('/')}`}
          // 核心风格：无圆角、虚线边框、Hover变浅蓝底色和蓝边框
          className="group relative flex h-[88px] flex-col items-center justify-center bg-white px-4 outline outline-1 outline-dashed outline-slate-300 transition-all duration-300 hover:z-10 hover:bg-sky-50 hover:outline-sky-400"
        >
          {/* 主标题 */}
          <h3 className="text-[16px] font-medium tracking-wide text-slate-700 transition-colors group-hover:text-sky-700">
            {category.title}
          </h3>
          
          {/* 辅助信息（栏目/文章数量） */}
          <span className="mt-1.5 text-[12px] text-slate-400 transition-colors group-hover:text-sky-600/80">
            {getCategoryCaption(category)}
          </span>

          {/* 右下角极简的指示箭头 (Hover时显示，增加交互感，如果不喜欢可删) */}
          <div className="absolute bottom-2 right-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-4 text-sky-500" strokeWidth="1.5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
             </svg>
          </div>
        </Link>
      ))}
    </div>
  )
}
