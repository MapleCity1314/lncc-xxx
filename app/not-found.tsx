import Link from 'next/link'
import StatusHalo from '@/components/StatusHalo'
import StatusScreen from '@/components/StatusScreen'

function actionClassName(variant: 'primary' | 'secondary') {
  if (variant === 'primary') {
    return 'inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
  }

  return 'inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
}

export default function NotFound() {
  return (
    <StatusScreen
      eyebrow="Page Not Found"
      code="404"
      title="未找到你访问的页面"
      description="当前链接可能已变更、失效，或该内容尚未纳入静态发布。你可以返回首页，或继续浏览系部公开栏目。"
      detail="建议优先从首页重新进入，避免旧收藏链接或手动输入地址造成的路径偏差。"
      halo={<StatusHalo />}
      actions={
        <>
          <Link href="/" className={actionClassName('primary')}>
            返回首页
          </Link>
          <Link href="/news/" className={actionClassName('secondary')}>
            浏览新闻公告
          </Link>
        </>
      }
    />
  )
}
