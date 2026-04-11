import type { SiteSettings } from '@/data/types'

const siteSettings: SiteSettings = {
  footerCopyright:
    'Copyright © 2012-2023 辽宁交专信息工程系 All Rights Reserved',
  address: '辽宁省沈阳市沈北新区沈北路102号',
  postalCode: '110122',
  telephone: '024-89708405',
  footerLogos: {
    primary: '/image/logo/logo.png',
    secondary: '/image/logo/main-logo.png',
  },
  footerLinks: [
    { label: '学校主页', href: '/', isExternal: false },
    { label: '系主任邮箱', href: '#', isExternal: false },
    { label: '招生咨询', href: '#', isExternal: false },
    { label: '就业咨询', href: '#', isExternal: false },
    { label: '访企拓岗', href: '#', isExternal: false },
  ],
}

export default siteSettings
