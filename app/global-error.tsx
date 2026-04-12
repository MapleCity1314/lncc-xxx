'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import StatusHalo from '@/components/StatusHalo'
import StatusScreen from '@/components/StatusScreen'

type Props = {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

function actionClassName(variant: 'primary' | 'secondary') {
  if (variant === 'primary') {
    return 'inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
  }

  return 'inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
}

export default function GlobalError({ error, unstable_retry }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const detail = error.digest
    ? `错误摘要编号：${error.digest}`
    : '系统已进入全局兜底页，你可以重试一次，或返回首页重新开始浏览。'

  return (
    <html lang="zh-CN">
      <body className="min-h-dvh">
        <title>系统异常 | 信息工程系</title>
        <StatusScreen
          eyebrow="Global Error"
          code="500"
          title="页面暂时无法继续渲染"
          description="出现了未被当前路由捕获的异常。界面已切换到全局兜底状态，以保证你仍能继续导航。"
          detail={detail}
          halo={<StatusHalo />}
          actions={
            <>
              <button
                type="button"
                onClick={() => unstable_retry()}
                className={actionClassName('secondary')}
              >
                重新尝试
              </button>
              <Link href="/" className={actionClassName('primary')}>
                返回首页
              </Link>
            </>
          }
        />
      </body>
    </html>
  )
}
