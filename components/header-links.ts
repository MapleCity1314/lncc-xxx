export type HeaderSubLink = {
  href: string
  label: string
  isExternal?: boolean
}

export type HeaderLink = {
  children: HeaderSubLink[]
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
  {
    href: '/',
    label: '首页',
    children: [
      { href: '/news', label: '新闻公告' },
      { href: '/majors', label: '专业设置' },
      { href: '/enrollment', label: '招生就业' },
    ],
  },
  {
    href: '/about',
    label: '本系概况',
    children: [],
  },
  {
    href: '/majors',
    label: '专业设置',
    children: [
      { href: '/majors/zysz-jsjwljs-htm', label: '计算机网络技术' },
      { href: '/majors/zysz-rjjs-htm', label: '软件技术' },
      { href: '/majors/zysz-rjjs-rjcs-htm', label: '软件技术（软件测试）' },
      { href: '/majors/zysz-yjsjsyy-htm', label: '云计算技术应用' },
      { href: '/majors/zysz-rgznjsyy-htm', label: '人工智能技术应用' },
      { href: '/majors/zysz-szmtjs-htm', label: '数字媒体技术' },
      { href: '/majors/zysz-ysdh-htm', label: '影视动画' },
      { href: '/majors', label: '计算机基础教研室' },
    ],
  },
  {
    href: '/teachers',
    label: '师资队伍',
    children: [
      { href: '/teachers/organization', label: '组织机构' },
      { href: '/teachers/faculty', label: '教师风采' },
      { href: '/teachers/professors', label: '教授风采' },
      { href: '/teachers/doctors', label: '博士风采' },
    ],
  },
  {
    href: '/research',
    label: '教研科研',
    children: [
      { href: '/research#teaching-projects', label: '教研项目' },
      { href: '/research#research-projects', label: '科研项目' },
      { href: '/research#papers', label: '学术论文' },
      { href: '/research#books', label: '教材著作' },
      { href: '/research#awards', label: '成果获奖' },
    ],
  },
  {
    href: '/training',
    label: '实训基地',
    children: [
      { href: '/training#internal-bases', label: '校内实训基地' },
      { href: '/training#external-bases', label: '校外实训基地' },
    ],
  },
  {
    href: '/police',
    label: '警士直招',
    children: [
      { href: '/police#admission-training', label: '入学军训' },
      { href: '/police#daily-study', label: '日常学习' },
      { href: '/police#daily-drill', label: '日常训练' },
      { href: '/police#daily-life', label: '日常生活' },
      { href: '/police#vacation-camp', label: '假期集训' },
      { href: '/police#policies', label: '相关政策' },
    ],
  },
  {
    href: '/partners',
    label: '校企合作',
    children: [
      { href: '/partners#companies', label: '合作企业' },
      { href: '/partners#updates', label: '合作动态' },
    ],
  },
  {
    href: '/enrollment',
    label: '招生就业',
    children: [
      { href: 'https://www.lncc.edu.cn/xsc/', label: '招生信息', isExternal: true },
      { href: '/enrollment#employment-services', label: '就业服务' },
      { href: 'http://www.lncc.edu.cn/xsjy/', label: '招聘信息', isExternal: true },
      { href: '/enrollment#enterprise-visits', label: '访企拓岗' },
    ],
  },
  {
    href: '/alumni',
    label: '校友会',
    children: [
      { href: '/alumni#profiles', label: '校友风采' },
      { href: '/alumni#return-services', label: '返校服务' },
      { href: '/alumni#alumni-info', label: '校友信息' },
    ],
  },
]

export default headerLinks
