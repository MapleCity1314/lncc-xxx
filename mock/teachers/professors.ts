import type { MockCollection, MockPage } from '@/mock/types'

const data = {
  section: "教授风采",
  description: "教授风采页面。",
  items: [
    {
      id: "教授风采-信息工程系-jsfc1-e8f4d73d",
      title: "教授风采-信息工程系",
      slug: "szdw-jsfc1-htm",
      group: "szdw",
      sourcePath: "mock/output/教授风采-信息工程系__jsfc1__e8f4d73d.md",
      sourceUrl: "http://www.lncc.edu.cn/xxx/szdw/jsfc1.htm",
      sourceTitle: "教授风采-信息工程系",
      publishedAt: null,
      category: "szdw",
      excerpt: null,
      body: "|  |  |\n| --- | --- |\n| 图片关键词 | 岳经伟，男，生于1963年3月，1998年毕业于沈阳工业大学计算机应用专业，硕士学历，硕士学位，教授。1985年8月至今在辽宁省交通高等专科学校信息系任教。技术专长是智能楼宇、弱电工程。多年来一直承担“综合布线技术”等课程的理论与实践教学。 |\n| 图片关键词 | 吴学毅，男，1967年2月出生，锡伯族，1990年7月毕业于东北师范大学，1990年7月参加工作，教授、高级工程职称，网络工程师，锐捷网络工程师。近5年来，累计省部级以上及教学改革项目4项，主编教材5本，副主编教材7本，参编教材2本，主编3本校内讲义，发表论文9篇。 |\n|  |  |",
      headings: [],
      paragraphs: [],
      links: [],
      images: [],
      blocks: [
        {
          type: "tableRow",
          value: "|  |  |"
        },
        {
          type: "tableRow",
          value: "| --- | --- |"
        },
        {
          type: "tableRow",
          value: "| 图片关键词 | 岳经伟，男，生于1963年3月，1998年毕业于沈阳工业大学计算机应用专业，硕士学历，硕士学位，教授。1985年8月至今在辽宁省交通高等专科学校信息系任教。技术专长是智能楼宇、弱电工程。多年来一直承担“综合布线技术”等课程的理论与实践教学。 |"
        },
        {
          type: "tableRow",
          value: "| 图片关键词 | 吴学毅，男，1967年2月出生，锡伯族，1990年7月毕业于东北师范大学，1990年7月参加工作，教授、高级工程职称，网络工程师，锐捷网络工程师。近5年来，累计省部级以上及教学改革项目4项，主编教材5本，副主编教材7本，参编教材2本，主编3本校内讲义，发表论文9篇。 |"
        },
        {
          type: "tableRow",
          value: "|  |  |"
        }
      ]
    }
  ]
} satisfies MockCollection<MockPage>

export default data
