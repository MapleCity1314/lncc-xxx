import DetailPlaceholder from '@/app/(frontend)/_components/DetailPlaceholder'
import { majorDetailEntries } from '@/app/(frontend)/_lib/route-placeholders'

export async function generateStaticParams() {
  return majorDetailEntries.map((item) => ({ slug: item.slug }))
}

export default async function MajorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const matched = majorDetailEntries.find((item) => item.slug === slug)

  return (
    <DetailPlaceholder
      title={matched?.title ?? '专业详情占位页'}
      routePattern="/majors/[slug]"
      paramLabel="slug"
      paramValue={slug}
      sourceNote="参数列表来自 @/mock/majors/programs.ts，用于验证静态导出的详情页路径。"
      backHref="/majors"
      backLabel="专业设置"
    />
  )
}
