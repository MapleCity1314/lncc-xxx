export type NewsItem = {
  id: string
  title: string
  summary: string
  date: string
  href: string
}

export type ArticleItem = {
  id: string
  title: string
  category: string
  image: string
  date: string
  href: string
  summary?: string
}

export const newsData: NewsItem[] = [
  {
    id: 'n1',
    title: '信息工程系举办2024年度专业技能大赛表彰大会暨学风建设动员会',
    summary:
      '为表彰先进、树立典型，进一步激发广大同学学习专业技能的热情，我系于报告厅隆重举行年度技能大赛表彰大会。',
    date: '2024.04.10',
    href: '/news/1',
  },
  {
    id: 'n2',
    title: '关于开展“校园安全教育周”系列活动的通知',
    summary:
      '为切实增强我系师生安全防范意识，营造安全、和谐、稳定的校园环境，现决定开展安全教育周活动。',
    date: '2024.04.07',
    href: '/news/2',
  },
  {
    id: 'n3',
    title: '我系召开2023-2024学年第二学期期中教学检查工作部署会',
    summary:
      '根据学校教学工作整体部署，现将本学期期中教学检查具体时间安排及相关要求印发给你们。',
    date: '2024.04.03',
    href: '/news/3',
  },
  {
    id: 'n4',
    title: '教研动态：我系教师赴沈阳国际软件园开展深入调研与技术交流',
    summary:
      '为深化产教融合，推进校企合作，我系骨干教师团队前往高新技术产业园区开展实地走访与调研。',
    date: '2024.04.02',
    href: '/news/4',
  },
  {
    id: 'n5',
    title: '关于组织申报2024年度大学生创新创业训练计划项目的通知',
    summary: '为深化创新创业教育改革，强化创新创业能力训练，现启动2024年度大创项目申报工作。',
    date: '2024.03.31',
    href: '/news/5',
  },
]

export const partyData: ArticleItem[] = [
  {
    id: 'p1',
    title: '缅怀英烈志 薪火永相传——我系组织学生党员参加清明节祭奠志愿军英烈大会',
    category: '党建动态',
    image: '/image/police/police-study-1.jpg',
    date: '2024.04.07',
    href: '/party/1',
  },
  {
    id: 'p2',
    title: '倾听“生”音，同策同行——“我与书记面对面”座谈会圆满举行',
    category: '团学活动',
    image: '/image/police/police-life-1.jpg',
    date: '2024.04.08',
    href: '/party/2',
  },
  {
    id: 'p3',
    title: '筑牢反诈“防火墙” 护航青春成长路——联合属地分局成功举办防范电信网络诈骗讲座',
    category: '志愿服务',
    image: '/image/police/police-training-2.jpg',
    date: '2024.04.03',
    href: '/party/3',
  },
]

export const employmentData: ArticleItem[] = [
  {
    id: 'e1',
    title: '访企拓岗架金桥 产教融合促就业——信息工程系赴沈阳国际软件园专项走访纪实',
    category: '产教融合',
    summary:
      '为全面落实高校毕业生就业工作决策部署，精准对接行业人才需求，拓宽学生就业渠道，近日，创就业指导中心与信息工程系组建访企拓岗专项小队，赴沈阳国际软件园实地走访...',
    image: '/image/employment/employment-graduation-flow.jpg',
    date: '2024.04.10',
    href: '/employment/1',
  },
  {
    id: 'e2',
    title: '助学专升本，共筑升学梦——信息工程系举办优秀校友专升本经验分享会',
    category: '校友风采',
    summary:
      '为扎实做好专升本助学工作，帮助学生进一步明确报考方向、掌握备考方法，我系组织开展了优秀校友专升本经验分享会，特邀成功考取本科院校的毕业生回校交流...',
    image: '/image/major/ai/major-ai-cert-12.jpg',
    date: '2024.04.02',
    href: '/employment/2',
  },
  {
    id: 'e3',
    title: '我系成功举办“名企进校园”——东软集团2024届毕业生春季专场宣讲招聘会',
    category: '招聘动态',
    summary:
      '为切实做好2024届毕业生就业工作，搭建用人单位与毕业生双向选择的优质平台，4月1日下午，我系联合东软集团在大学生活动中心举办专场宣讲招聘会...',
    image: '/image/training/training-lab-1.jpg',
    date: '2024.04.01',
    href: '/employment/3',
  },
]
