export type HeaderLink = {
  href: string
  label: string
}

export function isHeaderLinkActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

const headerLinks: HeaderLink[] = [
  { href: '/', label: '首页' },
  { href: '/about', label: '本系概况' },
  { href: '/majors', label: '专业设置' },
  { href: '/teachers', label: '师资队伍' },
  { href: '/research', label: '教研科研' },
  { href: '/training', label: '实训基地' },
  { href: '/police', label: '警士直招' },
  { href: '/partners', label: '校企合作' },
  { href: '/enrollment', label: '招生就业' },
  { href: '/alumni', label: '校友会' },
]

export default headerLinks
