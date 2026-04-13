'use client'

import SubPageLayout from './SubPageLayout'

// 模拟数据
const pageData = {
  hero: { title: '人才培养', subtitle: 'PROGRAM CONSTRUCTION', image: '/image/campus-stone.jpg' },
  sidebar: { title: '专业建设', subtitle: 'Program Construction' },
  menu: [
    { label: '专业建设', enLabel: 'Program Construction', href: '/edu/programs', isActive: true },
    { label: '课程建设', enLabel: 'Curriculum Development', href: '/edu/courses' },
    { label: '教材建设', enLabel: 'Textbook Development', href: '/edu/books' },
    { label: '教学成果奖', enLabel: 'Teaching Achievement', href: '/edu/awards' },
  ],
  breadcrumbs: [{ label: '首页', href: '/' }, { label: '人才培养', href: '/edu' }, { label: '专业建设' }],
}

type ArticleTemplateProps = {
  // 未来这里接收 MDX 渲染出的 React 节点
  mdxContent?: React.ReactNode 
}

export default function ArticleTemplate({ mdxContent }: ArticleTemplateProps) {
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
        <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
        <h2 className="text-2xl font-normal tracking-widest text-slate-800">
          专业建设
        </h2>
        <div className="h-[1px] w-12 bg-slate-200 sm:w-20" />
      </div>

      {/* 
        富文本渲染区 
        使用 prose 类名，这会自动美化 h1-h6, p, table, ul, li 等 HTML 标签
        prose-sky 会将链接、引用等高亮色替换为主题蓝 
      */}
      <article className="prose prose-slate prose-sky max-w-none prose-headings:font-normal prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-table:border prose-td:border-t">
        
        {/* 这里是你传入的 MDX 内容，这里用硬编码模拟截图中的表格 */}
        {mdxContent ? mdxContent : (
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>年份</th>
                <th>专业群名称</th>
                <th>认定部门</th>
                <th>专业群包含专业</th>
                <th>专业群等级</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">2019</td>
                <td className="text-center font-bold">道路桥梁工程技术</td>
                <td className="text-center">教育部</td>
                <td>道路桥梁工程技术，道路养护与管理，城市轨道交通工程技术，地下与隧道工程技术，工程测量技术</td>
                <td className="text-center">中国特色“双高计划”高水平专业群</td>
              </tr>
              {/* 其他行... */}
            </tbody>
          </table>
        )}

      </article>
    </SubPageLayout>
  )
}