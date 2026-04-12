import DetailPlaceholder from '@/app/(frontend)/_components/DetailPlaceholder'
import { newsDetailEntries } from '@/app/(frontend)/_lib/route-placeholders'

export async function generateStaticParams() {
  return newsDetailEntries.map((item) => ({ slug: item.slug }))
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const matched = newsDetailEntries.find((item) => item.slug === slug)

  return (
    <DetailPlaceholder
      title={matched?.title ?? '新闻详情占位页'}
      routePattern="/news/[slug]"
      paramLabel="slug"
      paramValue={slug}
      sourceNote="参数列表来自 @/mock/articles/homepage.ts，用于验证新闻详情页静态参数生成。"
      backHref="/news"
      backLabel="新闻公告"
    />
  )
}
