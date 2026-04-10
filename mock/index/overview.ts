import type { MockCollection, MockPage } from '@/mock/types'

const data = {
  section: "首页概览",
  description: "首页正文与栏目摘要。",
  items: [
    {
      id: "信息工程系-index-1a4669bd",
      title: "信息工程系",
      slug: "index-htm",
      group: "index",
      sourcePath: "mock/output/信息工程系__index__1a4669bd.md",
      sourceUrl: "http://www.lncc.edu.cn/xxx/index.htm",
      sourceTitle: "信息工程系",
      publishedAt: "2025/10/27",
      category: "index",
      excerpt: null,
      body: "[新闻通知](xwtz.htm)\n\n2025/10/27 [关于校学术委员会委员候选人推荐公示](info/1011/1793.htm)\n\n2025/04/24 [信息工程系成功举办《数据产业剖 ...](info/1011/1703.htm)\n\n2025/04/16 [瞄准国货国用人才需求 ，交专第一...](info/1011/1653.htm)\n\n2025/03/28 [喜报|信息工程系学生在第十八届全...](info/1011/1663.htm)\n\n2024/08/29 [信息工程系利用对外营收购买鼠标 ...](info/1011/1642.htm)\n\n2024/07/19 [喜报|我系学生荣获2024年东北三省...](info/1011/1693.htm)\n\n2024/07/18 [喜报 | 我系学生荣获2024年一带一...](info/1011/1673.htm)\n\n2024/06/15 [开展优秀校友职业生涯规划系列讲座](info/1011/1607.htm)\n\n2024/05/24 [学校首期AI启航——大模型应用校 ...](info/1011/1605.htm)\n\n[党团建设](dtjs.htm)\n\n2024/09/02 [信息工程系党总支开展8月份主题党...](info/1022/1753.htm)\n\n2024/07/18 [“小信鸽”雷锋志愿服务队期末表 ...](info/1022/1743.htm)\n\n2024/07/18 [弘扬干字精神 争当攻坚先锋——信...](info/1022/1733.htm)\n\n2024/07/02 [信息工程系校友分会成立](info/1022/1713.htm)\n\n2024/06/21 [党总支开展六月主题党日活动](info/1022/1624.htm)\n\n2024/06/15 [我系成功举办“美育润心”心灵拼 ...](info/1022/1602.htm)\n\n2024/05/30 [“心光璀璨，筑梦未来”5•25“心...](info/1022/1603.htm)\n\n2024/05/29 [教工党支部开展五月份主题党日活动](info/1022/1628.htm)\n\n2024/05/27 [“知敬畏、存戒惧、守底线”学生 ...](info/1022/1604.htm)\n\n[创业就业](zsjy.htm)\n\n2024/06/15 [毕业生就业证明材料递交流程](info/1023/1504.htm)\n\n2024/09/11 [信息工程系引领2024级新生探索科 ...](info/1023/1763.htm)\n\n2024/06/15 [党委书记任冰率队走访沈阳人工智 ...](info/1023/1619.htm)\n\n2024/04/07 [我校在华为ICT大赛2023-2024全国 ...](info/1023/1620.htm)\n\n2023/12/12 [我校代表队荣获第二届全国工业和 ...](info/1023/1621.htm)\n\n2023/11/13 [多专业贡献才智——交专设计智能 ...](info/1023/1622.htm)\n\n2021/06/02 [我系师生在第十五届“挑战杯”辽 ...](info/1023/1359.htm)\n\n2021/05/19 [我系科研团队自主研发的学生体温 ...](info/1023/1352.htm)\n\n2021/03/26 [【置顶】信息系创新创业工作框架](info/1023/1241.htm)",
      headings: [],
      paragraphs: [],
      links: [
        {
          label: "新闻通知",
          url: "xwtz.htm",
          isExternal: false
        },
        {
          label: "关于校学术委员会委员候选人推荐公示",
          url: "info/1011/1793.htm",
          isExternal: false
        },
        {
          label: "信息工程系成功举办《数据产业剖 ...",
          url: "info/1011/1703.htm",
          isExternal: false
        },
        {
          label: "瞄准国货国用人才需求 ，交专第一...",
          url: "info/1011/1653.htm",
          isExternal: false
        },
        {
          label: "喜报|信息工程系学生在第十八届全...",
          url: "info/1011/1663.htm",
          isExternal: false
        },
        {
          label: "信息工程系利用对外营收购买鼠标 ...",
          url: "info/1011/1642.htm",
          isExternal: false
        },
        {
          label: "喜报|我系学生荣获2024年东北三省...",
          url: "info/1011/1693.htm",
          isExternal: false
        },
        {
          label: "喜报 | 我系学生荣获2024年一带一...",
          url: "info/1011/1673.htm",
          isExternal: false
        },
        {
          label: "开展优秀校友职业生涯规划系列讲座",
          url: "info/1011/1607.htm",
          isExternal: false
        },
        {
          label: "学校首期AI启航——大模型应用校 ...",
          url: "info/1011/1605.htm",
          isExternal: false
        },
        {
          label: "党团建设",
          url: "dtjs.htm",
          isExternal: false
        },
        {
          label: "信息工程系党总支开展8月份主题党...",
          url: "info/1022/1753.htm",
          isExternal: false
        },
        {
          label: "“小信鸽”雷锋志愿服务队期末表 ...",
          url: "info/1022/1743.htm",
          isExternal: false
        },
        {
          label: "弘扬干字精神 争当攻坚先锋——信...",
          url: "info/1022/1733.htm",
          isExternal: false
        },
        {
          label: "信息工程系校友分会成立",
          url: "info/1022/1713.htm",
          isExternal: false
        },
        {
          label: "党总支开展六月主题党日活动",
          url: "info/1022/1624.htm",
          isExternal: false
        },
        {
          label: "我系成功举办“美育润心”心灵拼 ...",
          url: "info/1022/1602.htm",
          isExternal: false
        },
        {
          label: "“心光璀璨，筑梦未来”5•25“心...",
          url: "info/1022/1603.htm",
          isExternal: false
        },
        {
          label: "教工党支部开展五月份主题党日活动",
          url: "info/1022/1628.htm",
          isExternal: false
        },
        {
          label: "“知敬畏、存戒惧、守底线”学生 ...",
          url: "info/1022/1604.htm",
          isExternal: false
        },
        {
          label: "创业就业",
          url: "zsjy.htm",
          isExternal: false
        },
        {
          label: "毕业生就业证明材料递交流程",
          url: "info/1023/1504.htm",
          isExternal: false
        },
        {
          label: "信息工程系引领2024级新生探索科 ...",
          url: "info/1023/1763.htm",
          isExternal: false
        },
        {
          label: "党委书记任冰率队走访沈阳人工智 ...",
          url: "info/1023/1619.htm",
          isExternal: false
        },
        {
          label: "我校在华为ICT大赛2023-2024全国 ...",
          url: "info/1023/1620.htm",
          isExternal: false
        },
        {
          label: "我校代表队荣获第二届全国工业和 ...",
          url: "info/1023/1621.htm",
          isExternal: false
        },
        {
          label: "多专业贡献才智——交专设计智能 ...",
          url: "info/1023/1622.htm",
          isExternal: false
        },
        {
          label: "我系师生在第十五届“挑战杯”辽 ...",
          url: "info/1023/1359.htm",
          isExternal: false
        },
        {
          label: "我系科研团队自主研发的学生体温 ...",
          url: "info/1023/1352.htm",
          isExternal: false
        },
        {
          label: "【置顶】信息系创新创业工作框架",
          url: "info/1023/1241.htm",
          isExternal: false
        }
      ],
      images: [],
      blocks: [
        {
          type: "paragraph",
          value: "[新闻通知](xwtz.htm)"
        },
        {
          type: "paragraph",
          value: "2025/10/27 [关于校学术委员会委员候选人推荐公示](info/1011/1793.htm)"
        },
        {
          type: "paragraph",
          value: "2025/04/24 [信息工程系成功举办《数据产业剖 ...](info/1011/1703.htm)"
        },
        {
          type: "paragraph",
          value: "2025/04/16 [瞄准国货国用人才需求 ，交专第一...](info/1011/1653.htm)"
        },
        {
          type: "paragraph",
          value: "2025/03/28 [喜报|信息工程系学生在第十八届全...](info/1011/1663.htm)"
        },
        {
          type: "paragraph",
          value: "2024/08/29 [信息工程系利用对外营收购买鼠标 ...](info/1011/1642.htm)"
        },
        {
          type: "paragraph",
          value: "2024/07/19 [喜报|我系学生荣获2024年东北三省...](info/1011/1693.htm)"
        },
        {
          type: "paragraph",
          value: "2024/07/18 [喜报 | 我系学生荣获2024年一带一...](info/1011/1673.htm)"
        },
        {
          type: "paragraph",
          value: "2024/06/15 [开展优秀校友职业生涯规划系列讲座](info/1011/1607.htm)"
        },
        {
          type: "paragraph",
          value: "2024/05/24 [学校首期AI启航——大模型应用校 ...](info/1011/1605.htm)"
        },
        {
          type: "paragraph",
          value: "[党团建设](dtjs.htm)"
        },
        {
          type: "paragraph",
          value: "2024/09/02 [信息工程系党总支开展8月份主题党...](info/1022/1753.htm)"
        },
        {
          type: "paragraph",
          value: "2024/07/18 [“小信鸽”雷锋志愿服务队期末表 ...](info/1022/1743.htm)"
        },
        {
          type: "paragraph",
          value: "2024/07/18 [弘扬干字精神 争当攻坚先锋——信...](info/1022/1733.htm)"
        },
        {
          type: "paragraph",
          value: "2024/07/02 [信息工程系校友分会成立](info/1022/1713.htm)"
        },
        {
          type: "paragraph",
          value: "2024/06/21 [党总支开展六月主题党日活动](info/1022/1624.htm)"
        },
        {
          type: "paragraph",
          value: "2024/06/15 [我系成功举办“美育润心”心灵拼 ...](info/1022/1602.htm)"
        },
        {
          type: "paragraph",
          value: "2024/05/30 [“心光璀璨，筑梦未来”5•25“心...](info/1022/1603.htm)"
        },
        {
          type: "paragraph",
          value: "2024/05/29 [教工党支部开展五月份主题党日活动](info/1022/1628.htm)"
        },
        {
          type: "paragraph",
          value: "2024/05/27 [“知敬畏、存戒惧、守底线”学生 ...](info/1022/1604.htm)"
        },
        {
          type: "paragraph",
          value: "[创业就业](zsjy.htm)"
        },
        {
          type: "paragraph",
          value: "2024/06/15 [毕业生就业证明材料递交流程](info/1023/1504.htm)"
        },
        {
          type: "paragraph",
          value: "2024/09/11 [信息工程系引领2024级新生探索科 ...](info/1023/1763.htm)"
        },
        {
          type: "paragraph",
          value: "2024/06/15 [党委书记任冰率队走访沈阳人工智 ...](info/1023/1619.htm)"
        },
        {
          type: "paragraph",
          value: "2024/04/07 [我校在华为ICT大赛2023-2024全国 ...](info/1023/1620.htm)"
        },
        {
          type: "paragraph",
          value: "2023/12/12 [我校代表队荣获第二届全国工业和 ...](info/1023/1621.htm)"
        },
        {
          type: "paragraph",
          value: "2023/11/13 [多专业贡献才智——交专设计智能 ...](info/1023/1622.htm)"
        },
        {
          type: "paragraph",
          value: "2021/06/02 [我系师生在第十五届“挑战杯”辽 ...](info/1023/1359.htm)"
        },
        {
          type: "paragraph",
          value: "2021/05/19 [我系科研团队自主研发的学生体温 ...](info/1023/1352.htm)"
        },
        {
          type: "paragraph",
          value: "2021/03/26 [【置顶】信息系创新创业工作框架](info/1023/1241.htm)"
        }
      ]
    }
  ]
} satisfies MockCollection<MockPage>

export default data
