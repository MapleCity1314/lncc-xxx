import DetailPlaceholder from '@/app/(frontend)/_components/DetailPlaceholder'
import { teacherDetailEntries } from '@/app/(frontend)/_lib/route-placeholders'

export async function generateStaticParams() {
  return teacherDetailEntries.map((item) => ({ id: item.id }))
}

export default async function TeacherDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const matched = teacherDetailEntries.find((item) => item.id === id)

  return (
    <DetailPlaceholder
      title={matched?.title ?? '教师详情占位页'}
      routePattern="/teachers/[id]"
      paramLabel="id"
      paramValue={id}
      sourceNote="当前参数样例按 /mock/teachers 的目录结构归并，用于预留真实教师详情页接入点。"
      backHref="/teachers"
      backLabel="师资队伍"
    />
  )
}
