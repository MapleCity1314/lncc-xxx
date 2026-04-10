import type { MockCollection, MockLink } from '@/mock/types'

const data = {
  section: "就业入口",
  description: "就业相关外链入口。",
  items: [
    {
      label: "招聘信息",
      url: "http://www.lncc.edu.cn/xsjy/",
      isExternal: true
    }
  ]
} satisfies MockCollection<MockLink>

export default data
