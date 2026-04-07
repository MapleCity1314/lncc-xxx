# 信息工程系网站 · 任务卡 v4.0

> 每张任务卡包含 Codex 执行所需的完整上下文。  
> 认领前先读 `AGENTS.md`，所有约定以该文件为准。  
> **技术栈：Next.js 16 + React 19 + Tailwind v4 + TypeScript，纯静态导出（`output: 'export'`），无后端。**

---

## 如何使用这份文档

1. 从 `🟢 Ready` 任务中认领一张
2. 将整张任务卡内容作为 Codex 的初始 prompt 上下文
3. 完成后对照验收标准自检
4. 开 PR，描述里写 `closes #TASK-ID`

---

## 项目结构约定

```
/                        # 项目根（@/* 别名指向此处）
├── app/
│   ├── layout.tsx       # 根 layout（html/body）
│   ├── globals.css      # Tailwind v4 入口 + 全局 token
│   └── (frontend)/      # 前台路由组
│       ├── page.tsx
│       ├── about/
│       ├── majors/
│       │   └── [slug]/
│       ├── teachers/
│       │   └── [id]/
│       ├── news/
│       │   └── [slug]/
│       ├── research/
│       ├── training/
│       ├── partners/
│       ├── enrollment/
│       └── alumni/
├── components/          # 全局共享组件
├── data/                # 静态数据文件（最终数据源）
│   ├── types.ts
│   ├── banners.ts
│   ├── news.ts
│   ├── majors.ts
│   └── ...
└── public/
    ├── media/           # 图片
    └── attachments/     # 可下载附件
```

---

## PHASE 0 · 基础设施

| ID | 任务 | 状态 |
|---|---|---|
| P0-01 | 初始化 Next.js 项目（已完成，平铺结构，非 monorepo） | ✅ Done |
| P0-02 | 补全 AGENTS.md 工程约束 | ✅ Done |
| P0-03 | 配置静态导出 + 全局 token（色彩、字体、间距） | 🟢 Ready |
| P0-04 | 全局 Layout + Header + Footer | 🟡 Blocked（等待 P0-03） |
| P0-05 | 定义全量数据 TypeScript 接口 + 初始数据文件 | 🟢 Ready |

---

### P0-03 · 配置静态导出 + 全局设计 Token

**状态**: 🟢 Ready

**涉及文件**
```
next.config.ts
app/globals.css
```

**实现要求**

`next.config.ts`：
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

`app/globals.css`（Tailwind v4 使用 `@theme` CSS 变量，不用 tailwind.config.ts）：
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  /* 色彩 token —— 蓝色系为主色，适合院系官网 */
  --color-primary-50:  #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-900: #1e3a8a;

  --color-neutral-50:  #f8fafc;
  --color-neutral-100: #f1f5f9;
  --color-neutral-200: #e2e8f0;
  --color-neutral-500: #64748b;
  --color-neutral-700: #334155;
  --color-neutral-900: #0f172a;

  /* 字体 */
  --font-sans: var(--font-geist-sans), 'Noto Sans SC', ui-sans-serif, system-ui, sans-serif;

  /* 间距（补充 Tailwind 默认值中常用的语义化名称） */
  --spacing-section: 4rem;   /* 页面区块上下间距 */
  --spacing-card: 1.5rem;    /* 卡片内边距 */
}
```

安装依赖：
```bash
npm install @tailwindcss/typography
```

**验收标准**
- [ ] `next build` 产物在 `out/` 目录，为纯静态文件
- [ ] `--color-primary-600` 等 token 在组件中可直接用 `text-primary-600` 引用
- [ ] `@tailwindcss/typography` 的 `prose` 类可正常生效

---

### P0-05 · 全量数据类型 + 初始数据文件

**状态**: 🟢 Ready

**涉及文件**
```
data/types.ts
data/banners.ts
data/news.ts
data/majors.ts
data/teachers.ts
data/achievements.ts
data/research.ts
data/trainingBases.ts
data/partners.ts
data/enrollments.ts
data/employment.ts
data/alumni.ts
data/alumniActivities.ts
data/departmentInfo.ts
data/siteSettings.ts
```

**`data/types.ts` 核心接口**
```ts
export type MediaItem = {
  url: string     // 相对路径，e.g. '/media/photo.webp'
  alt: string
  width: number
  height: number
}

export type NewsItem = {
  slug: string
  title: string
  coverImage?: MediaItem
  content: string         // HTML 字符串
  publishedAt: string     // ISO 8601 日期字符串
  tags: string[]
}

export type Major = {
  slug: string
  name: string
  editor: string
  publishedAt: string
  intro: string
  goal: string
  requirements: string
  certifications: { name: string; description: string }[]
  courses: { name: string; description: string }[]
  skillDirections: string
  jobAbilities: string
  practiceAbilities: string
  teacherIds: string[]
  achievementIds: string[]
  partnerIds: string[]
  jobs: { title: string; description: string }[]
  employmentUnits: { name: string }[]
  employmentDesc: string
  gallery: MediaItem[]
  attachments: { name: string; url: string; mimeType: string }[]
}

export type Teacher = {
  id: string
  name: string
  avatar?: MediaItem
  title: string
  education: string
  direction: string       // HTML
  achievements: string    // HTML
  contact?: string
  sortWeight: number
}

export type Achievement = {
  id: string
  title: string
  type: '竞赛' | '认证' | '科研' | '荣誉'
  description: string     // HTML
  image?: MediaItem
  majorSlug: string
  date: string
}

export type ResearchItem = {
  id: string
  title: string
  type: '科研成果' | '项目' | '论文' | '专利'
  description: string     // HTML
  publishedAt: string
  attachments: { name: string; url: string; mimeType: string }[]
}

export type TrainingBase = {
  id: string
  name: string
  type: '校内' | '校外'
  intro: string           // HTML
  gallery: MediaItem[]
  cooperationNote: string // HTML
}

export type Partner = {
  id: string
  name: string
  logo?: MediaItem
  cooperationMode: string // HTML
  projects: { title: string; description: string }[]
}

export type EnrollmentItem = {
  id: string
  title: string
  type: '政策' | '计划' | '简章'
  content: string         // HTML
  publishedAt: string
  attachments: { name: string; url: string; mimeType: string }[]
}

export type EmploymentData = {
  year: number
  rate: number            // 就业率，0~100
  analysis: string        // HTML
  units: { name: string }[]
}

export type AlumniItem = {
  id: string
  name: string
  avatar?: MediaItem
  graduationYear: number
  majorSlug: string
  bio: string
  tags: string[]
}

export type AlumniActivity = {
  id: string
  title: string
  date: string
  content: string         // HTML
  gallery: MediaItem[]
}

export type BannerItem = {
  id: string
  image: MediaItem
  title?: string
  href?: string           // 内部路径或外链
  isExternal?: boolean
}

export type DepartmentInfo = {
  intro: string           // HTML
  history: { year: number; title: string; content: string }[]
  features: { title: string; content: string }[]
  honors: { title: string; image?: MediaItem; description: string }[]
}

export type SiteSettings = {
  siteName: string
  quickLinks: { label: string; url: string; isExternal: boolean }[]
  footerText: string
  contactInfo: string     // HTML
}
```

每个数据文件导出对应类型的数组或单例，并填入 2-3 条占位数据（内容可为中文示例，供页面开发时验证布局）。

**验收标准**
- [ ] `data/types.ts` 全量接口定义，无 TypeScript 报错
- [ ] 所有 15 个数据文件存在并导出正确类型
- [ ] 每个数据文件至少有 2 条示例数据

---

## PHASE 1 · 通用组件

> 所有组件依赖 P0 全部完成。

---

### C-01 · RichTextRenderer

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/RichTextRenderer.tsx
```

**Props 接口**
```ts
type RichTextRendererProps = {
  html: string | null | undefined
  className?: string
}
```

**实现要求**
- Server Component，无 `'use client'`
- `html` 为空时返回 `null`
- `cn('prose prose-slate max-w-none', className)` 包裹，Tailwind Typography 提供排版

**安装依赖**（P0-03 中已完成）

**验收标准**
- [ ] 渲染段落、粗体、斜体、链接、内嵌图片样式正常
- [ ] `html` 为 `null` 时不报错
- [ ] 无 `'use client'`

---

### C-02 · ImageLightbox

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/ImageLightbox.tsx
```

**Props 接口**
```ts
type LightboxImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

type ImageLightboxProps = {
  images: LightboxImage[]
  className?: string
}
```

**实现要求**
- `'use client'` 组件
- 使用 `yet-another-react-lightbox`
- 缩略图用 `next/image`
- 点击图片打开 lightbox 并定位到对应索引

**安装依赖**
```bash
npm install yet-another-react-lightbox
```

**验收标准**
- [ ] 点击打开全屏 lightbox
- [ ] ESC 关闭，方向键切换
- [ ] 单张图片不显示切换箭头

---

### C-03 · FileDownloadList

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/FileDownloadList.tsx
```

**Props 接口**
```ts
type FileItem = {
  name: string
  url: string
  mimeType?: string
}

type FileDownloadListProps = {
  files: FileItem[]
  className?: string
}
```

**实现要求**
- Server Component
- 根据 `mimeType` 显示 `lucide-react` 图标：`application/pdf` → `FileText`，`image/*` → `Image`，`application/zip` → `Archive`，其余 → `File`
- `<a href={url} download target="_blank" rel="noopener">`
- 空数组返回 `null`

**安装依赖**
```bash
npm install lucide-react
```

**验收标准**
- [ ] 不同文件类型图标正确
- [ ] 点击触发下载
- [ ] 空数组不渲染 DOM

---

### C-04 · Timeline

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/Timeline.tsx
```

**Props 接口**
```ts
type TimelineItem = {
  year: number
  title: string
  content: string
}

type TimelineProps = {
  items: TimelineItem[]
  className?: string
}
```

**实现要求**
- Server Component
- 组件内按 `year` 升序排列
- 左侧竖线 + 圆形节点，纯 Tailwind

**验收标准**
- [ ] 年份升序正确
- [ ] 移动端不错位

---

### C-05 · Pagination

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/Pagination.tsx
```

**Props 接口**
```ts
type PaginationProps = {
  totalPages: number
  currentPage: number
  basePath: string   // e.g. '/news'，拼接 ?page=N
}
```

**实现要求**
- `'use client'`，使用 `useRouter` + `useSearchParams`
- 翻页修改 URL `?page=N`
- 展示上一页、最多 5 个页码（超出显示省略号）、下一页
- `totalPages <= 1` 时返回 `null`

**验收标准**
- [ ] 翻页后 URL 正确
- [ ] 第一页"上一页"禁用，最后一页"下一页"禁用
- [ ] 超出 7 页显示省略号

---

### C-06 · CardGrid

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/CardGrid.tsx
```

**Props 接口**
```ts
type CardGridProps = {
  children: React.ReactNode
  cols?: 1 | 2 | 3    // 默认 3
  className?: string
}
```

**实现要求**
- Server Component，纯布局
- 移动端单列，`md:` 起按 `cols` 分列

**验收标准**
- [ ] cols=1/2/3 桌面端分列正确
- [ ] 移动端始终单列

---

### C-07 · SectionHeader

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/SectionHeader.tsx
```

**Props 接口**
```ts
type SectionHeaderProps = {
  title: string
  description?: string
  action?: { label: string; href: string }
}
```

**实现要求**
- Server Component
- 左侧标题 + 可选描述，右侧可选链接

**验收标准**
- [ ] 有 action 时显示链接，无时不渲染占位
- [ ] 移动端不溢出

---

### C-08 · TagFilter

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/TagFilter.tsx
```

**Props 接口**
```ts
type TagFilterOption = {
  label: string
  value: string
}

type TagFilterProps = {
  options: TagFilterOption[]
  paramKey: string
  allLabel?: string   // 默认 '全部'
}
```

**实现要求**
- `'use client'`，通过 `useSearchParams` + `useRouter` 修改 URL 参数
- 不影响其他已有 searchParams
- **静态导出注意**：父页面也需为 `'use client'`，客户端读参数后过滤数据

**验收标准**
- [ ] 选中/取消切换 URL 参数正确
- [ ] 其他 URL 参数不丢失

---

### C-09 · BannerCarousel

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/BannerCarousel.tsx
```

**Props 接口**
```ts
import type { BannerItem } from '@/data/types'

type BannerCarouselProps = {
  items: BannerItem[]
}
```

**实现要求**
- `'use client'`
- 自动轮播 4s，鼠标悬停暂停
- 点击圆点切换
- 内部链接用 `next/link`，外链用 `target="_blank"`
- 图片用 `next/image`，`priority={true}`
- 单张时不显示圆点

**验收标准**
- [ ] 自动轮播 4s
- [ ] 悬停暂停，离开恢复
- [ ] 圆点与当前 banner 同步

---

### C-10 · TeacherCard

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/TeacherCard.tsx
```

**Props 接口**
```ts
type TeacherCardProps = {
  id: string
  name: string
  title: string
  avatarUrl?: string
}
```

**实现要求**
- Server Component
- 整张卡片为 `next/link` 跳转到 `/teachers/[id]`
- 无头像时显示姓名首字作为 fallback

**验收标准**
- [ ] 点击跳转正确
- [ ] 无头像 fallback 不裂图

---

### C-11 · Header

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/Header.tsx
```

**实现要求**
- Server Component（导航链接不需要交互状态）
- Logo 左置（显示"信息工程系"文字 + 可替换为图片）
- 导航链接：首页 / 本系概况 / 专业设置 / 师资队伍 / 教研科研 / 实训基地 / 校企合作 / 招生就业 / 校友会
- 移动端导航折叠（汉堡菜单），折叠按钮部分需要 `'use client'` 子组件
- 当前路径对应链接高亮（使用 `'use client'` + `usePathname`）

**验收标准**
- [ ] 桌面端导航横向展示
- [ ] 移动端折叠正常
- [ ] 当前页导航项高亮

---

### C-12 · Footer

**状态**: 🟡 Blocked（等待 P0）

**文件路径**
```
components/Footer.tsx
```

**实现要求**
- Server Component
- 显示 `siteSettings.footerText` 和 `siteSettings.contactInfo`（富文本）
- 版权信息

**验收标准**
- [ ] 内容正常显示
- [ ] 移动端不溢出

---

## PHASE 1 · 页面实现

> 每个页面任务依赖：P0 全部完成 + 任务卡中列出的组件完成。
> **静态导出约束**：需要筛选/分页的页面，数据在构建时全量注入，筛选逻辑在客户端完成。
> 所有动态路由页面必须导出 `generateStaticParams`。

---

### PG-01 · 首页 `/`

**依赖**: P0, C-06, C-07, C-09
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/page.tsx
```

**数据来源**
```ts
import banners from '@/data/banners'
import news from '@/data/news'
import majors from '@/data/majors'
import siteSettings from '@/data/siteSettings'
```

**区块顺序**
1. `<BannerCarousel items={banners} />`
2. `<SectionHeader title="新闻公告" action={{ label: '更多', href: '/news' }} />` + 新闻列表（前 5 条，标题 + 日期）
3. `<SectionHeader title="专业设置" />` + `<CardGrid cols={3}>` 专业卡片
4. 快捷入口（4 个按钮，数据来自 `siteSettings.quickLinks`）
5. 活动图片（`<CardGrid cols={3}>` + `<ImageLightbox>`）

**验收标准**
- [ ] 5 个区块全部渲染
- [ ] 移动端不破版
- [ ] 新闻标题点击跳转 `/news/[slug]`

---

### PG-02 · 本系概况 `/about`

**依赖**: P0, C-01, C-04, C-07
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/about/page.tsx
```

**数据来源**
```ts
import departmentInfo from '@/data/departmentInfo'
```

**区块顺序**
1. 系部介绍：`<RichTextRenderer html={departmentInfo.intro} />`
2. 发展历程：`<Timeline items={departmentInfo.history} />`
3. 办学特色：列表卡片
4. 荣誉成果：图片 + 文字卡片

**验收标准**
- [ ] 4 个区块全部渲染
- [ ] 时间线按年份升序

---

### PG-03 · 专业列表 `/majors`

**依赖**: P0, C-06, C-07
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/majors/page.tsx
```

**数据来源**
```ts
import majors from '@/data/majors'
```

**实现要求**
- 卡片展示：专业名称 + 简短介绍 + 跳转按钮
- 整张卡片跳转 `/majors/[slug]`

**验收标准**
- [ ] 所有专业渲染为卡片
- [ ] 点击跳转正确

---

### PG-04 · 专业详情 `/majors/[slug]`

**状态**: 🔵 Presto（字段最多，Presto 设计主导）

---

### PG-05 · 教师列表 `/teachers`

**依赖**: P0, C-07, C-08, C-10
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/teachers/page.tsx
```

**数据来源**
```ts
import teachers from '@/data/teachers'
```

**实现要求**
- `'use client'` 页面（需要客户端筛选）
- `<TagFilter paramKey="rank" options={职称列表} />` 放列表上方
- `useSearchParams` 读取 `rank` 参数，客户端过滤 teachers 数组
- `<CardGrid cols={3}><TeacherCard /></CardGrid>`

**验收标准**
- [ ] 职称筛选生效，列表客户端更新
- [ ] 无筛选时展示全部

---

### PG-06 · 教师详情 `/teachers/[id]`

**依赖**: P0, C-01, PG-05
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/teachers/[id]/page.tsx
```

**实现要求**
- 导出 `generateStaticParams`：
  ```ts
  import teachers from '@/data/teachers'
  export function generateStaticParams() {
    return teachers.map(t => ({ id: t.id }))
  }
  ```

**验收标准**
- [ ] 姓名、职称、头像、教学方向、成果展示全部渲染
- [ ] 富文本通过 `<RichTextRenderer>` 渲染

---

### PG-07 · 教研科研 `/research`

**依赖**: P0, C-05, C-07, C-08
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/research/page.tsx
```

**实现要求**
- `'use client'` 页面
- `<TagFilter paramKey="type" options={[科研成果, 项目, 论文, 专利]} />`
- 客户端按 type 过滤 + `<Pagination>`（每页 12 条）

**验收标准**
- [ ] 类型筛选 + 分页同时生效
- [ ] type 和 page 两个 URL 参数互不干扰

---

### PG-08 · 实训基地 `/training`

**依赖**: P0, C-01, C-02, C-07
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/training/page.tsx
```

**验收标准**
- [ ] 基地介绍富文本渲染
- [ ] 图片可 lightbox 放大
- [ ] 校内/校外分区展示

---

### PG-09 · 校企合作 `/partners`

**依赖**: P0, C-01, C-06, C-07
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/partners/page.tsx
```

**验收标准**
- [ ] 企业 Logo 墙
- [ ] 合作项目列表
- [ ] 合作模式富文本

---

### PG-10 · 招生就业 `/enrollment`

**依赖**: P0, C-01, C-03, C-07, C-08
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/enrollment/page.tsx
```

**实现要求**
- `'use client'` 页面，客户端按类型筛选招生信息

**验收标准**
- [ ] 招生信息分类筛选生效
- [ ] 附件下载正常
- [ ] 就业数据展示（就业率 + 分析）

---

### PG-11 · 新闻列表 `/news`

**依赖**: P0, C-05, C-07
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/news/page.tsx
```

**实现要求**
- `'use client'` 页面，每页 12 条，客户端分页

**验收标准**
- [ ] 分页正确
- [ ] 每条点击跳转 `/news/[slug]`

---

### PG-12 · 新闻详情 `/news/[slug]`

**依赖**: P0, C-01, PG-11
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/news/[slug]/page.tsx
```

**实现要求**
- 导出 `generateStaticParams`：
  ```ts
  import news from '@/data/news'
  export function generateStaticParams() {
    return news.map(n => ({ slug: n.slug }))
  }
  ```

**验收标准**
- [ ] 标题、发布时间、正文渲染完整
- [ ] 正文通过 `<RichTextRenderer>` 渲染

---

### PG-13 · 校友会 `/alumni`

**依赖**: P0, C-02, C-07, C-08
**状态**: 🟡 Blocked

**文件路径**
```
app/(frontend)/alumni/page.tsx
```

**实现要求**
- `'use client'` 页面，客户端按专业/届次筛选

**验收标准**
- [ ] 校友列表 + 筛选生效
- [ ] 校友活动图片可 lightbox 放大

---

## 认领规则

1. 认领前在群里声明 task ID，避免撞车
2. 分支命名：`feat/C-01-richtext-renderer`
3. 将整张任务卡作为 Codex 初始 context，`AGENTS.md` 作为系统约束
4. 自检验收标准全部通过后再开 PR
5. 不修改他人已合并的组件 props 接口，有需要先讨论

## 推荐认领顺序

**第一批**（P0 完成后立即开始，互不依赖）
- 队友 A：P0-03, P0-05（P0 剩余任务）
- 队友 B：等 P0 完成后：C-01, C-02, C-03, C-04
- 队友 C：等 P0 完成后：C-05, C-06, C-07, C-08, C-09, C-10, C-11, C-12

**第二批**（组件完成后）
- PG-11 新闻列表 → PG-12 新闻详情
- PG-03 专业列表
- PG-05 教师列表 → PG-06 教师详情

**第三批**
- 剩余页面自由认领，PG-04 专业详情不要认领（Presto 负责）

> P1 全部完成即为项目完成，无 Phase 2。
