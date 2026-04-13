'use client'

import Link from 'next/link'
import SubPageLayout from './SubPageLayout'

// 模拟数据
const pageData = {
  hero: { title: '机构设置', subtitle: 'ORGANIZATION', image: '/image/campus-stone.jpg' },
  sidebar: { title: '教学机构', subtitle: 'Teaching Institutions' },
  menu: [
    { label: '教学机构', enLabel: 'Teaching Institutions', href: '/org/teaching', isActive: true },
    { label: '组织机构', enLabel: 'Organization', href: '/org/admin' },
  ],
  breadcrumbs: [{ label: '首页', href: '/' }, { label: '机构设置' }],
  categories: [
    '公路与铁道工程系', '汽车工程系', '低空技术与工程系',
    '建筑工程系', '机电工程系', '物流管理系',
    '信息工程系', '管理工程系', '轨道工程系'
  ]
}

export default function CategoryTemplate() {
  return (
    <SubPageLayout
      heroTitle={pageData.hero.title}
      heroSubtitle={pageData.hero.subtitle}
      heroImage={pageData.hero.image}
      sidebarTitle={pageData.sidebar.title}
      sidebarSubtitle={pageData.sidebar.subtitle}
      menuItems={pageData.menu}
      breadcrumbs={pageData.breadcrumbs}
    >
      {/* 中间带横线的栏目标题 */}
      <div className="mb-12 flex items-center justify-center gap-6">
        <div className="h-[1px] w-16 bg-slate-200 sm:w-24" />
        <h2 className="text-2xl font-normal tracking-widest text-slate-800">
          教学机构
        </h2>
        <div className="h-[1px] w-16 bg-slate-200 sm:w-24" />
      </div>

      {/* 虚线方框分类网格 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pageData.categories.map((cat, i) => (
          <Link
            key={i}
            href={`/org/teaching/${i}`}
            className="group flex h-16 items-center justify-center outline outline-1 outline-dashed outline-slate-300 bg-white transition-all duration-300 hover:bg-sky-50 hover:outline-sky-400"
          >
            <span className="text-[15px] font-medium text-slate-700 transition-colors group-hover:text-sky-700">
              {cat}
            </span>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  )
}