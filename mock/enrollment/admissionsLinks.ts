import type { MockCollection, MockLink } from '@/mock/types'

const data = {
  section: "招生入口",
  description: "招生相关外链入口。",
  items: [
    {
      label: "招生信息",
      url: "http://www.lncc.edu.cn/xsc/",
      isExternal: true
    }
  ]
} satisfies MockCollection<MockLink>

export default data
