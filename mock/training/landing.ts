import type { MockCollection, MockPage } from '@/mock/types'

const data = {
  section: "实训基地入口",
  description: "实训基地栏目入口页。",
  items: [
    {
      id: "实训基地-信息工程系-sxjd-92881cae",
      title: "实训基地-信息工程系",
      slug: "sxjd-htm",
      group: "sxjd",
      sourcePath: "mock/output/实训基地-信息工程系__sxjd__92881cae.md",
      sourceUrl: "http://www.lncc.edu.cn/xxx/sxjd.htm",
      sourceTitle: "实训基地-信息工程系",
      publishedAt: "2022年03月08日",
      category: "sxjd",
      excerpt: "- [[信息工程系]](?urltype=tree.TreeTempUrl&wbtreeid=0) [信息工程系召开2022年“兴辽卓越”项目建设推进会](/system/defaultcontent.jsp)",
      body: "- [[信息工程系]](?urltype=tree.TreeTempUrl&wbtreeid=0)\n[信息工程系召开2022年“兴辽卓越”项目建设推进会](/system/defaultcontent.jsp)\n\n 2022年03月08日\n\n首页上页1下页尾页",
      headings: [],
      paragraphs: [
        "- [[信息工程系]](?urltype=tree.TreeTempUrl&wbtreeid=0) [信息工程系召开2022年“兴辽卓越”项目建设推进会](/system/defaultcontent.jsp)",
        "2022年03月08日"
      ],
      links: [
        {
          label: "信息工程系召开2022年“兴辽卓越”项目建设推进会",
          url: "/system/defaultcontent.jsp",
          isExternal: false
        }
      ],
      images: [],
      blocks: [
        {
          type: "paragraph",
          value: "- [[信息工程系]](?urltype=tree.TreeTempUrl&wbtreeid=0)"
        },
        {
          type: "paragraph",
          value: "[信息工程系召开2022年“兴辽卓越”项目建设推进会](/system/defaultcontent.jsp)"
        },
        {
          type: "paragraph",
          value: "2022年03月08日"
        },
        {
          type: "paragraph",
          value: "首页上页1下页尾页"
        }
      ]
    }
  ]
} satisfies MockCollection<MockPage>

export default data
