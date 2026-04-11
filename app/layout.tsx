import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const alibabaPuHuiSans = localFont({
  src: './fonts/alibaba-pu-hui-ti-light.ttf',
  variable: '--font-alibaba-puhui-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '辽宁交专信息工程系',
  description: '辽宁交专信息工程系官方网站',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${alibabaPuHuiSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
