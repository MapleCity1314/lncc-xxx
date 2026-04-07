# 信息工程系网站 · 技术分析 v2.0

> 基于：Next.js App Router + `output: 'export'`（纯静态导出，无后端）

---

## 一、数据架构设计

### 1.1 数据存放位置

所有内容数据以 TypeScript 文件形式维护，位于 `data/`：

```
data/
├── types.ts           # 全量 TypeScript 接口定义
├── banners.ts
├── news.ts
├── majors.ts
├── teachers.ts
├── achievements.ts
├── research.ts
├── trainingBases.ts
├── partners.ts
├── enrollments.ts
├── employment.ts
├── alumni.ts
├── alumniActivities.ts
├── departmentInfo.ts  # 单例
└── siteSettings.ts    # 单例（快捷入口等）
```

静态资源（图片、附件）放于 `apps/web/public/`：
```
public/
├── media/      # 图片
└── attachments/  # 可下载附件
```

### 1.2 数据接口定义（`types.ts` 核心摘要）

```ts
export type MediaItem = {
  url: string       // 相对路径，e.g. '/media/foo.jpg'
  alt: string
  width: number
  height: number
}

export type NewsItem = {
  slug: string
  title: string
  coverImage?: MediaItem
  content: string   // HTML 字符串
  publishedAt: string  // ISO 8601
  tags: string[]
}

export type Major = {
  slug: string
  name: string
  editor: string
  publishedAt: string
  intro: string           // HTML
  goal: string            // HTML
  requirements: string    // HTML
  certifications: { name: string; description: string }[]
  courses: { name: string; description: string }[]
  skillDirections: string // HTML
  jobAbilities: string    // HTML
  practiceAbilities: string // HTML
  teacherIds: string[]    // 关联 Teacher.id
  achievementIds: string[] // 关联 Achievement.id
  partnerIds: string[]    // 关联 Partner.id
  jobs: { title: string; description: string }[]
  employmentUnits: { name: string }[]
  employmentDesc: string  // HTML
  gallery: MediaItem[]
  attachments: { name: string; url: string; mimeType: string }[]
}

export type Teacher = {
  id: string
  name: string
  avatar?: MediaItem
  title: string       // 职称
  education: string   // 学历
  direction: string   // HTML，教学方向
  achievements: string // HTML，成果展示
  contact?: string
  sortWeight: number
}

// ... 其余类型参照 requirements.md 中的数据模型
```

### 1.3 数据访问模式

页面直接 `import`，零运行时开销：

```ts
// app/(frontend)/majors/page.tsx
import majors from '@/data/majors'
import teachers from '@/data/teachers'

export default function MajorsPage() {
  return <MajorList items={majors} />
}
```

动态路由页面需要导出 `generateStaticParams`：

```ts
// app/(frontend)/majors/[slug]/page.tsx
import majors from '@/data/majors'

export function generateStaticParams() {
  return majors.map(m => ({ slug: m.slug }))
}

export default function MajorDetailPage({ params }: { params: { slug: string } }) {
  const major = majors.find(m => m.slug === params.slug)!
  return <MajorDetail data={major} />
}
```

---

## 二、路由规划

### 2.1 前台路由

```
/                          首页
/about                     本系概况
/majors                    专业列表
/majors/[slug]             专业详情
/teachers                  教师列表
/teachers/[id]             教师详情
/research                  教研科研
/training                  实训基地
/partners                  校企合作
/enrollment                招生就业
/alumni                    校友会
/news                      新闻列表
/news/[slug]               新闻详情
```

**共 13 个路由，6 个动态路由（均需 `generateStaticParams`）。**

### 2.2 无后台路由

纯静态导出模式下无 `/admin` 和 `/api/*`。内容更新通过修改 `/data/` 文件后重新 `next build` 完成。

---

## 三、静态导出配置

### 3.1 `next.config.ts` 关键配置

```ts
const nextConfig = {
  output: 'export',       // 静态导出，产物在 /out
  trailingSlash: true,    // Nginx 静态托管兼容
  images: {
    unoptimized: true,    // 静态导出不支持 Next.js Image 优化 API
  },
}
```

> **注意**：`unoptimized: true` 意味着放弃 Next.js 的自动图片压缩。需在数据准备阶段手动压缩图片（建议用 `sharp` 一次性处理后存入 `public/media/`）。

### 3.2 渲染策略总表

| 页面 | 策略 | 说明 |
|---|---|---|
| 首页 | SSG | 构建时生成，无动态数据 |
| 本系概况 | SSG | 同上 |
| 专业列表 | SSG | 同上 |
| 专业详情 | SSG + `generateStaticParams` | 按 slug 预构建全部页面 |
| 教师列表 | SSG | 同上 |
| 教师详情 | SSG + `generateStaticParams` | 按 id 预构建 |
| 新闻列表 | SSG | 同上 |
| 新闻详情 | SSG + `generateStaticParams` | 按 slug 预构建 |
| 科研/实训/校企/校友 | SSG | 同上 |
| 招生就业 | SSG | 同上 |

**所有页面均在构建时生成，运行时无服务端逻辑。**

### 3.3 筛选与分页

静态导出不支持服务端读取 `searchParams`（没有 Node.js 运行时）。

筛选（TagFilter）和分页（Pagination）改为**纯客户端实现**：
- 数据在构建时全量注入页面
- 客户端 JS 根据 URL `searchParams` 过滤渲染
- 使用 `'use client'` + `useSearchParams` + 本地过滤逻辑

---

## 四、关键技术决策

### 4.1 富文本渲染

内容以 HTML 字符串存储在 `/data/` 文件中，使用 `dangerouslySetInnerHTML` 渲染：

```ts
// components/RichTextRenderer.tsx
type Props = { html: string | null | undefined; className?: string }

export default function RichTextRenderer({ html, className }: Props) {
  if (!html) return null
  return (
    <div
      className={cn('prose prose-slate max-w-none', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
```

**注意**：内容由开发团队直接维护，不接受用户输入，无 XSS 风险。Tailwind `prose` 提供一致的排版样式。

### 4.2 图片处理

```ts
// next.config.ts
images: { unoptimized: true }
```

图片存入 `public/media/` 前需手动用 `sharp` 压缩，推荐格式为 WebP，移动端图片宽度控制在 800px 以内。

### 4.3 附件下载

附件文件放在 `public/attachments/`，数据文件中存相对路径：

```ts
attachments: [
  { name: '招生简章2025.pdf', url: '/attachments/招生简章2025.pdf', mimeType: 'application/pdf' }
]
```

`FileDownloadList` 组件用 `<a href={url} download>` 触发下载，无需服务端。

### 4.4 筛选的客户端实现示例

```tsx
// 教师列表页（客户端筛选示例）
'use client'
import { useSearchParams } from 'next/navigation'
import teachers from '@/data/teachers'

export default function TeachersPage() {
  const params = useSearchParams()
  const rank = params.get('rank')
  const filtered = rank ? teachers.filter(t => t.title === rank) : teachers
  return <TeacherGrid items={filtered} />
}
```

---

## 五、技术风险点

| 风险 | 等级 | 应对 |
|---|---|---|
| 静态导出不支持 `searchParams` 服务端读取 | 高 | 筛选/分页全部改为客户端实现 |
| 图片无自动优化（`unoptimized: true`） | 中 | 构建前用 `sharp` 脚本批量压缩 |
| 动态路由忘记导出 `generateStaticParams` | 高 | 构建时会报错，容易发现 |
| 数据文件维护成本（纯手工编辑 TS 文件） | 中 | 定义清晰 type，编辑器类型检查兜底 |
| 内容更新需重新构建部署 | 低 | 内容更新频率低，可接受；后续如需频繁更新可考虑引入 headless CMS |

---

*下一步：任务分工*
