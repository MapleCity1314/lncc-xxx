import type { MockCollection, MockLink } from '@/mock/types'

const data = {
  section: "首页快捷入口",
  description: "从首页正文和抓取结果归纳的快捷入口。",
  items: [
    {
      label: "招生咨询",
      url: "https://work.weixin.qq.com/kfid/kfc9e4c15629b41719f",
      isExternal: true
    },
    {
      label: "就业咨询",
      url: "https://work.weixin.qq.com/kfid/kfcb14e6aeeab797f25",
      isExternal: true
    },
    {
      label: "访企拓岗",
      url: "http://www.lncc.edu.cn/xxx/zsjy/fqtg.htm",
      isExternal: true
    },
    {
      label: "学校主页",
      url: "http://www.lncc.edu.cn/",
      isExternal: true
    }
  ]
} satisfies MockCollection<MockLink>

export default data
