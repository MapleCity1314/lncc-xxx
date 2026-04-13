import Link from 'next/link'
import type { ContentCategory } from '@/data/content/types'

type SectionCategoryGridProps = {
  categories: ContentCategory[]
  sectionSlug: string
}

function getCategoryCaption(category: ContentCategory) {
  if (category.children && category.children.length > 0) {
    return `${category.children.length} 个子栏目`
  }

  if (category.entries && category.entries.length > 0) {
    return `${category.entries.length} 个内容`
  }

  return '内容持续更新中'
}

export default function SectionCategoryGrid({ categories, sectionSlug }: SectionCategoryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/${sectionSlug}/${category.slug}`}
          className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 transition-all hover:border-sky-400 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {getCategoryCaption(category)}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-600">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}
