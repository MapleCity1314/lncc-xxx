import type { MockCollection, MockPage } from '@/mock/types'

const data = {
  section: "教师风采",
  description: "教师风采页面。",
  items: [
    {
      id: "教师风采-信息工程系-jsfc-494bd2de",
      title: "教师风采-信息工程系",
      slug: "szdw-jsfc-htm",
      group: "szdw",
      sourcePath: "mock/output/教师风采-信息工程系__jsfc__494bd2de.md",
      sourceUrl: "http://www.lncc.edu.cn/xxx/szdw/jsfc.htm",
      sourceTitle: "教师风采-信息工程系",
      publishedAt: "2023-04-07 15:39:31",
      category: "szdw",
      excerpt: "# 教师风采",
      body: "# 教师风采\n\n发布日期：2023-04-07 15:39:31　|　责任编辑：信息系　|　文章作者：\n\n---",
      headings: [
        "教师风采"
      ],
      paragraphs: [
        "# 教师风采",
        "发布日期：2023-04-07 15:39:31 | 责任编辑：信息系 | 文章作者：",
        "---"
      ],
      links: [],
      images: [],
      blocks: [
        {
          type: "heading",
          value: "教师风采"
        },
        {
          type: "paragraph",
          value: "发布日期：2023-04-07 15:39:31 | 责任编辑：信息系 | 文章作者："
        },
        {
          type: "paragraph",
          value: "---"
        }
      ]
    }
  ]
} satisfies MockCollection<MockPage>

export default data
