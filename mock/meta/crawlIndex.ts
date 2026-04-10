import type { MockCollection, MockCrawlEntry } from '@/mock/types'

const data = {
  section: "抓取索引",
  description: "标准化后的 crawl manifest。",
  items: [
    {
      label: "首页",
      url: "http://www.lncc.edu.cn/xxx/index.htm",
      status: "saved",
      title: "信息工程系",
      relativeOutputPath: "mock/output/信息工程系__index__1a4669bd.md",
      path: "index.htm",
      topLevel: "index"
    },
    {
      label: "本系概况",
      url: "http://www.lncc.edu.cn/xxx/bxgk.htm",
      status: "saved",
      title: "本系概况-信息工程系",
      relativeOutputPath: "mock/output/本系概况-信息工程系__bxgk__a88c000b.md",
      path: "bxgk.htm",
      topLevel: "bxgk"
    },
    {
      label: "专业设置",
      url: "http://www.lncc.edu.cn/xxx/zysz.htm",
      status: "saved",
      title: "专业设置-信息工程系",
      relativeOutputPath: "mock/output/专业设置-信息工程系__zysz__06a62904.md",
      path: "zysz.htm",
      topLevel: "zysz"
    },
    {
      label: "师资队伍",
      url: "http://www.lncc.edu.cn/xxx/szdw.htm",
      status: "saved",
      title: "师资队伍-信息工程系",
      relativeOutputPath: "mock/output/师资队伍-信息工程系__szdw__316cd2bf.md",
      path: "szdw.htm",
      topLevel: "szdw"
    },
    {
      label: "教研科研",
      url: "http://www.lncc.edu.cn/xxx/jyky.htm",
      status: "saved",
      title: "教研科研-信息工程系",
      relativeOutputPath: "mock/output/教研科研-信息工程系__jyky__8530b059.md",
      path: "jyky.htm",
      topLevel: "jyky"
    },
    {
      label: "实训基地",
      url: "http://www.lncc.edu.cn/xxx/sxjd.htm",
      status: "saved",
      title: "实训基地-信息工程系",
      relativeOutputPath: "mock/output/实训基地-信息工程系__sxjd__92881cae.md",
      path: "sxjd.htm",
      topLevel: "sxjd"
    },
    {
      label: "警士直招",
      url: "http://www.lncc.edu.cn/xxx/jszz.htm",
      status: "saved",
      title: "警士直招-信息工程系",
      relativeOutputPath: "mock/output/警士直招-信息工程系__jszz__316e28e8.md",
      path: "jszz.htm",
      topLevel: "jszz"
    },
    {
      label: "校企合作",
      url: "http://www.lncc.edu.cn/xxx/xqhz.htm",
      status: "saved",
      title: "校企合作-信息工程系",
      relativeOutputPath: "mock/output/校企合作-信息工程系__xqhz__a5102b69.md",
      path: "xqhz.htm",
      topLevel: "xqhz"
    },
    {
      label: "招生就业",
      url: "http://www.lncc.edu.cn/xxx/zsjy.htm",
      status: "saved",
      title: "招生就业-信息工程系",
      relativeOutputPath: "mock/output/招生就业-信息工程系__zsjy__a16b6267.md",
      path: "zsjy.htm",
      topLevel: "zsjy"
    },
    {
      label: "校友会",
      url: "http://www.lncc.edu.cn/xxx/xyh.htm",
      status: "saved",
      title: "校友会-信息工程系",
      relativeOutputPath: "mock/output/校友会-信息工程系__xyh__a41a6050.md",
      path: "xyh.htm",
      topLevel: "xyh"
    },
    {
      label: "计算机网络技术",
      url: "http://www.lncc.edu.cn/xxx/zysz/jsjwljs.htm",
      status: "saved",
      title: "计算机网络技术-信息工程系",
      relativeOutputPath: "mock/output/计算机网络技术-信息工程系__jsjwljs__2bda1cf4.md",
      path: "zysz/jsjwljs.htm",
      topLevel: "zysz"
    },
    {
      label: "高职三年制中职起点-计算机网络技术专业",
      url: "http://www.lncc.edu.cn/xxx/upload/01gaozhi3nianzhizhongzhiqidianrencaipeiyangfangan-jisuanjiwangluojishu.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "upload/01gaozhi3nianzhizhongzhiqidianrencaipeiyangfangan-jisuanjiwangluojishu.pdf",
      topLevel: "upload"
    },
    {
      label: "高职创新班-计算机网络技术专业",
      url: "http://www.lncc.edu.cn/xxx/02gaozhichuangxinbanrencaipeiyangfangan-jisuanjiwangluojishu.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "02gaozhichuangxinbanrencaipeiyangfangan-jisuanjiwangluojishu.pdf",
      topLevel: "02gaozhichuangxinbanrencaipeiyangfangan-jisuanjiwangluojishu.pdf"
    },
    {
      label: "中高职3+2-计算机网络技术专业",
      url: "http://www.lncc.edu.cn/xxx/03zhonggaozhi3jia2rencaipeiyangfangan-jisuanjiwangluojishu.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "03zhonggaozhi3jia2rencaipeiyangfangan-jisuanjiwangluojishu.pdf",
      topLevel: "03zhonggaozhi3jia2rencaipeiyangfangan-jisuanjiwangluojishu.pdf"
    },
    {
      label: "软件技术",
      url: "http://www.lncc.edu.cn/xxx/zysz/rjjs.htm",
      status: "saved",
      title: "软件技术-信息工程系",
      relativeOutputPath: "mock/output/软件技术-信息工程系__rjjs__e5a4ee3d.md",
      path: "zysz/rjjs.htm",
      topLevel: "zysz"
    },
    {
      label: "高职3年制人才培养方案-软件技术（软件测试方向）",
      url: "http://www.lncc.edu.cn/xxx/04gaozhi3nianzhirencaipeiyangfangan-ruanjianjishu-ruanjianceshifangxiang.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "04gaozhi3nianzhirencaipeiyangfangan-ruanjianjishu-ruanjianceshifangxiang.pdf",
      topLevel: "04gaozhi3nianzhirencaipeiyangfangan-ruanjianjishu-ruanjianceshifangxiang.pdf"
    },
    {
      label: "软件技术(软件测试)",
      url: "http://www.lncc.edu.cn/xxx/zysz/rjjs_rjcs_.htm",
      status: "saved",
      title: "软件技术(软件测试)-信息工程系",
      relativeOutputPath: "mock/output/软件技术(软件测试)-信息工程系__rjjs_rjcs__a2462324.md",
      path: "zysz/rjjs_rjcs_.htm",
      topLevel: "zysz"
    },
    {
      label: "04高职3年制人才培养方案-软件技术-软件测试方向",
      url: "http://www.lncc.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1417030048&wbfileid=45A0808BB5877EBFC923E35A9965F440",
      status: "saved",
      title: "附件下载",
      relativeOutputPath: "mock/output/附件下载__download__5ba208f0.md",
      path: "system/_content/download.jsp",
      topLevel: "system"
    },
    {
      label: "云计算技术应用",
      url: "http://www.lncc.edu.cn/xxx/zysz/yjsjsyy.htm",
      status: "saved",
      title: "云计算技术应用-信息工程系",
      relativeOutputPath: "mock/output/云计算技术应用-信息工程系__yjsjsyy__bae192b7.md",
      path: "zysz/yjsjsyy.htm",
      topLevel: "zysz"
    },
    {
      label: "高职三年制人才培养方案-云计算技术应用",
      url: "http://www.lncc.edu.cn/xxx/05gaozhi3nianzhirencaipeiyangfangan-yunjisuanjishuyingyong.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "05gaozhi3nianzhirencaipeiyangfangan-yunjisuanjishuyingyong.pdf",
      topLevel: "05gaozhi3nianzhirencaipeiyangfangan-yunjisuanjishuyingyong.pdf"
    },
    {
      label: "人工智能技术应用",
      url: "http://www.lncc.edu.cn/xxx/zysz/rgznjsyy.htm",
      status: "saved",
      title: "人工智能技术应用-信息工程系",
      relativeOutputPath: "mock/output/人工智能技术应用-信息工程系__rgznjsyy__56907e9c.md",
      path: "zysz/rgznjsyy.htm",
      topLevel: "zysz"
    },
    {
      label: "人工智能应用技术专业人才培养方案",
      url: "http://www.lncc.edu.cn/xxx/06gaozhi3nianzhizhuanyerencaipeiyangfangan-dashujuyingyongjishu.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "06gaozhi3nianzhizhuanyerencaipeiyangfangan-dashujuyingyongjishu.pdf",
      topLevel: "06gaozhi3nianzhizhuanyerencaipeiyangfangan-dashujuyingyongjishu.pdf"
    },
    {
      label: "数字媒体技术",
      url: "http://www.lncc.edu.cn/xxx/zysz/szmtjs.htm",
      status: "saved",
      title: "数字媒体技术-信息工程系",
      relativeOutputPath: "mock/output/数字媒体技术-信息工程系__szmtjs__39e35122.md",
      path: "zysz/szmtjs.htm",
      topLevel: "zysz"
    },
    {
      label: "数字媒体技术专业普通生人才培养方案",
      url: "http://www.lncc.edu.cn/xxx/08gaozhi3nianzhi2025jirencaipeiyangfangan-shuzimeitijishu.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "08gaozhi3nianzhi2025jirencaipeiyangfangan-shuzimeitijishu.pdf",
      topLevel: "08gaozhi3nianzhi2025jirencaipeiyangfangan-shuzimeitijishu.pdf"
    },
    {
      label: "数字媒体技术专业军士生人才培养方案",
      url: "http://www.lncc.edu.cn/xxx/07junshi2025jirencaipeiyangfangan-shuzimeitijishuzhuanye.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "07junshi2025jirencaipeiyangfangan-shuzimeitijishuzhuanye.pdf",
      topLevel: "07junshi2025jirencaipeiyangfangan-shuzimeitijishuzhuanye.pdf"
    },
    {
      label: "影视动画",
      url: "http://www.lncc.edu.cn/xxx/zysz/ysdh.htm",
      status: "saved",
      title: "影视动画-信息工程系",
      relativeOutputPath: "mock/output/影视动画-信息工程系__ysdh__7a8ec020.md",
      path: "zysz/ysdh.htm",
      topLevel: "zysz"
    },
    {
      label: "军士生影视动画专业人才培养方案",
      url: "http://www.lncc.edu.cn/xxx/09junshi2025jirencaipeiyangfangan-yingshidonghuazhuanye.pdf",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "09junshi2025jirencaipeiyangfangan-yingshidonghuazhuanye.pdf",
      topLevel: "09junshi2025jirencaipeiyangfangan-yingshidonghuazhuanye.pdf"
    },
    {
      label: "计算机基础教研室",
      url: "http://www.lncc.edu.cn/xxx/zysz/jsjjcjys.htm",
      status: "saved",
      title: "计算机基础教研室-信息工程系",
      relativeOutputPath: "mock/output/计算机基础教研室-信息工程系__jsjjcjys__e5429a37.md",
      path: "zysz/jsjjcjys.htm",
      topLevel: "zysz"
    },
    {
      label: "组织机构",
      url: "http://www.lncc.edu.cn/xxx/szdw/zzjg.htm",
      status: "saved",
      title: "组织机构-信息工程系",
      relativeOutputPath: "mock/output/组织机构-信息工程系__zzjg__0e85582c.md",
      path: "szdw/zzjg.htm",
      topLevel: "szdw"
    },
    {
      label: "教师风采",
      url: "http://www.lncc.edu.cn/xxx/szdw/jsfc.htm",
      status: "saved",
      title: "教师风采-信息工程系",
      relativeOutputPath: "mock/output/教师风采-信息工程系__jsfc__494bd2de.md",
      path: "szdw/jsfc.htm",
      topLevel: "szdw"
    },
    {
      label: "教授风采",
      url: "http://www.lncc.edu.cn/xxx/szdw/jsfc1.htm",
      status: "saved",
      title: "教授风采-信息工程系",
      relativeOutputPath: "mock/output/教授风采-信息工程系__jsfc1__e8f4d73d.md",
      path: "szdw/jsfc1.htm",
      topLevel: "szdw"
    },
    {
      label: "博士风采",
      url: "http://www.lncc.edu.cn/xxx/szdw/bsfc.htm",
      status: "saved",
      title: "博士风采-信息工程系",
      relativeOutputPath: "mock/output/博士风采-信息工程系__bsfc__ece0ebef.md",
      path: "szdw/bsfc.htm",
      topLevel: "szdw"
    },
    {
      label: "教研项目",
      url: "http://www.lncc.edu.cn/xxx/jyky/jyxm.htm",
      status: "saved",
      title: "教研项目-信息工程系",
      relativeOutputPath: "mock/output/教研项目-信息工程系__jyxm__7b0ce90b.md",
      path: "jyky/jyxm.htm",
      topLevel: "jyky"
    },
    {
      label: "信息工程系教科研项目统计  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1041/1414.htm",
      status: "saved",
      title: "信息工程系教科研项目统计-信息工程系",
      relativeOutputPath: "mock/output/信息工程系教科研项目统计-信息工程系__1414__2377b916.md",
      path: "info/1041/1414.htm",
      topLevel: "info"
    },
    {
      label: "2022年信息工程系学生技能大赛+教师技能大赛统计  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1041/1418.htm",
      status: "saved",
      title: "2022年信息工程系学生技能大赛+教师技能大赛统计-信息工程系",
      relativeOutputPath: "mock/output/2022年信息工程系学生技能大赛+教师技能大赛统计-信息工程系__1418__51557b6b.md",
      path: "info/1041/1418.htm",
      topLevel: "info"
    },
    {
      label: "2021年度信息工程系教师教研项目汇总  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1041/1066.htm",
      status: "saved",
      title: "2021年度信息工程系教师教研项目汇总-信息工程系",
      relativeOutputPath: "mock/output/2021年度信息工程系教师教研项目汇总-信息工程系__1066__8285eaec.md",
      path: "info/1041/1066.htm",
      topLevel: "info"
    },
    {
      label: "科研项目",
      url: "http://www.lncc.edu.cn/xxx/jyky/kyxm.htm",
      status: "saved",
      title: "科研项目-信息工程系",
      relativeOutputPath: "mock/output/科研项目-信息工程系__kyxm__50f5c6d9.md",
      path: "jyky/kyxm.htm",
      topLevel: "jyky"
    },
    {
      label: "2016年前完成科研项目  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1042/1068.htm",
      status: "saved",
      title: "2016年前完成科研项目-信息工程系",
      relativeOutputPath: "mock/output/2016年前完成科研项目-信息工程系__1068__98e18a49.md",
      path: "info/1042/1068.htm",
      topLevel: "info"
    },
    {
      label: "2021年信息工程系教师科研项目汇总  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1042/1394.htm",
      status: "saved",
      title: "2021年信息工程系教师科研项目汇总-信息工程系",
      relativeOutputPath: "mock/output/2021年信息工程系教师科研项目汇总-信息工程系__1394__95ae7bf4.md",
      path: "info/1042/1394.htm",
      topLevel: "info"
    },
    {
      label: "学术论文",
      url: "http://www.lncc.edu.cn/xxx/jyky/xslw.htm",
      status: "saved",
      title: "学术论文-信息工程系",
      relativeOutputPath: "mock/output/学术论文-信息工程系__xslw__5ec68b61.md",
      path: "jyky/xslw.htm",
      topLevel: "jyky"
    },
    {
      label: "2015年论文  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1043/1069.htm",
      status: "saved",
      title: "2015年论文-信息工程系",
      relativeOutputPath: "mock/output/2015年论文-信息工程系__1069__f6d3d8a4.md",
      path: "info/1043/1069.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系学术论文统计  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1043/1415.htm",
      status: "saved",
      title: "信息工程系学术论文统计-信息工程系",
      relativeOutputPath: "mock/output/信息工程系学术论文统计-信息工程系__1415__383d762c.md",
      path: "info/1043/1415.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系2018年教师发表学术论文和著作获奖情况  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1043/1217.htm",
      status: "saved",
      title: "信息工程系2018年教师发表学术论文和著作获奖情况-信息工程系",
      relativeOutputPath: "mock/output/信息工程系2018年教师发表学术论文和著作获奖情况-信息工程系__1217__84044f6b.md",
      path: "info/1043/1217.htm",
      topLevel: "info"
    },
    {
      label: "教材著作",
      url: "http://www.lncc.edu.cn/xxx/jyky/jczz.htm",
      status: "saved",
      title: "教材著作-信息工程系",
      relativeOutputPath: "mock/output/教材著作-信息工程系__jczz__aa139eb2.md",
      path: "jyky/jczz.htm",
      topLevel: "jyky"
    },
    {
      label: "《构成设计》第二批“十四五”职业教育国家规划教材申报材料  2025年03月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1044/1643.htm",
      status: "saved",
      title: "《构成设计》第二批“十四五”职业教育国家规划教材申报材料-信息工程系",
      relativeOutputPath: "mock/output/《构成设计》第二批“十四五”职业教育国家规划教材申报材料-信息工程系__1643__7a96683b.md",
      path: "info/1044/1643.htm",
      topLevel: "info"
    },
    {
      label: "2016年教材著作  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1044/1070.htm",
      status: "saved",
      title: "2016年教材著作-信息工程系",
      relativeOutputPath: "mock/output/2016年教材著作-信息工程系__1070__a9a5f9ce.md",
      path: "info/1044/1070.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系教材著作情况统计  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1044/1416.htm",
      status: "saved",
      title: "信息工程系教材著作情况统计-信息工程系",
      relativeOutputPath: "mock/output/信息工程系教材著作情况统计-信息工程系__1416__690d1248.md",
      path: "info/1044/1416.htm",
      topLevel: "info"
    },
    {
      label: "2021年度部门教师出版教材（著作）情况  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1044/1393.htm",
      status: "saved",
      title: "2021年度部门教师出版教材（著作）情况-信息工程系",
      relativeOutputPath: "mock/output/2021年度部门教师出版教材（著作）情况-信息工程系__1393__838434f1.md",
      path: "info/1044/1393.htm",
      topLevel: "info"
    },
    {
      label: "2018年度部门教师出版教材（著作）获奖情况  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1044/1216.htm",
      status: "saved",
      title: "2018年度部门教师出版教材（著作）获奖情况-信息工程系",
      relativeOutputPath: "mock/output/2018年度部门教师出版教材（著作）获奖情况-信息工程系__1216__d9b5c1d6.md",
      path: "info/1044/1216.htm",
      topLevel: "info"
    },
    {
      label: "成果获奖",
      url: "http://www.lncc.edu.cn/xxx/jyky/cghj.htm",
      status: "saved",
      title: "成果获奖-信息工程系",
      relativeOutputPath: "mock/output/成果获奖-信息工程系__cghj__5fbfa64b.md",
      path: "jyky/cghj.htm",
      topLevel: "jyky"
    },
    {
      label: "2015年取得主要教科研成果  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1480.htm",
      status: "saved",
      title: "2015年取得主要教科研成果-信息工程系",
      relativeOutputPath: "mock/output/2015年取得主要教科研成果-信息工程系__1480__421651f2.md",
      path: "info/1121/1480.htm",
      topLevel: "info"
    },
    {
      label: "2022年信息工程系学生技能大赛+系教师技能大赛统计  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1473.htm",
      status: "saved",
      title: "2022年信息工程系学生技能大赛+系教师技能大赛统计-信息工程系",
      relativeOutputPath: "mock/output/2022年信息工程系学生技能大赛+系教师技能大赛统计-信息工程系__1473__99bcbf18.md",
      path: "info/1121/1473.htm",
      topLevel: "info"
    },
    {
      label: "2018年度教育教学获奖情况（技能大赛类）  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1477.htm",
      status: "saved",
      title: "2018年度教育教学获奖情况（技能大赛类）-信息工程系",
      relativeOutputPath: "mock/output/2018年度教育教学获奖情况（技能大赛类）-信息工程系__1477__8f4a8e46.md",
      path: "info/1121/1477.htm",
      topLevel: "info"
    },
    {
      label: "2018年学生参加技能大赛获奖情况  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1478.htm",
      status: "saved",
      title: "2018年学生参加技能大赛获奖情况-信息工程系",
      relativeOutputPath: "mock/output/2018年学生参加技能大赛获奖情况-信息工程系__1478__acbd729f.md",
      path: "info/1121/1478.htm",
      topLevel: "info"
    },
    {
      label: "2020年技能大赛获奖统计  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1475.htm",
      status: "saved",
      title: "2020年技能大赛获奖统计-信息工程系",
      relativeOutputPath: "mock/output/2020年技能大赛获奖统计-信息工程系__1475__bf360e7f.md",
      path: "info/1121/1475.htm",
      topLevel: "info"
    },
    {
      label: "2019年度技能大赛获奖情况(国家级、省级)  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1476.htm",
      status: "saved",
      title: "2019年度技能大赛获奖情况(国家级、省级)-信息工程系",
      relativeOutputPath: "mock/output/2019年度技能大赛获奖情况(国家级、省级)-信息工程系__1476__f295a17b.md",
      path: "info/1121/1476.htm",
      topLevel: "info"
    },
    {
      label: "2021年技能大赛获奖统计  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1474.htm",
      status: "saved",
      title: "2021年技能大赛获奖统计-信息工程系",
      relativeOutputPath: "mock/output/2021年技能大赛获奖统计-信息工程系__1474__00f6a563.md",
      path: "info/1121/1474.htm",
      topLevel: "info"
    },
    {
      label: "2016年取得主要教科研成果  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1121/1479.htm",
      status: "saved",
      title: "2016年取得主要教科研成果-信息工程系",
      relativeOutputPath: "mock/output/2016年取得主要教科研成果-信息工程系__1479__fcab505f.md",
      path: "info/1121/1479.htm",
      topLevel: "info"
    },
    {
      label: "校内实训基地",
      url: "http://www.lncc.edu.cn/xxx/sxjd/xnsxjd.htm",
      status: "saved",
      title: "校内实训基地-信息工程系",
      relativeOutputPath: "mock/output/校内实训基地-信息工程系__xnsxjd__19dccd50.md",
      path: "sxjd/xnsxjd.htm",
      topLevel: "sxjd"
    },
    {
      label: "校外实训基地",
      url: "http://www.lncc.edu.cn/xxx/sxjd/xwsxjd.htm",
      status: "saved",
      title: "校外实训基地-信息工程系",
      relativeOutputPath: "mock/output/校外实训基地-信息工程系__xwsxjd__cd78d2c1.md",
      path: "sxjd/xwsxjd.htm",
      topLevel: "sxjd"
    },
    {
      label: "入学军训",
      url: "http://www.lncc.edu.cn/xxx/jszz/rxjx.htm",
      status: "saved",
      title: "入学军训-信息工程系",
      relativeOutputPath: "mock/output/入学军训-信息工程系__rxjx__5ccc2525.md",
      path: "jszz/rxjx.htm",
      topLevel: "jszz"
    },
    {
      label: "日常学习",
      url: "http://www.lncc.edu.cn/xxx/jszz/rcxx.htm",
      status: "saved",
      title: "日常学习-信息工程系",
      relativeOutputPath: "mock/output/日常学习-信息工程系__rcxx__f66cd650.md",
      path: "jszz/rcxx.htm",
      topLevel: "jszz"
    },
    {
      label: "日常训练",
      url: "http://www.lncc.edu.cn/xxx/jszz/rcxl.htm",
      status: "saved",
      title: "日常训练-信息工程系",
      relativeOutputPath: "mock/output/日常训练-信息工程系__rcxl__0143cdb5.md",
      path: "jszz/rcxl.htm",
      topLevel: "jszz"
    },
    {
      label: "日常生活",
      url: "http://www.lncc.edu.cn/xxx/jszz/rcsh.htm",
      status: "saved",
      title: "日常生活-信息工程系",
      relativeOutputPath: "mock/output/日常生活-信息工程系__rcsh__d0600986.md",
      path: "jszz/rcsh.htm",
      topLevel: "jszz"
    },
    {
      label: "假期集训",
      url: "http://www.lncc.edu.cn/xxx/jszz/jqjx.htm",
      status: "saved",
      title: "假期集训-信息工程系",
      relativeOutputPath: "mock/output/假期集训-信息工程系__jqjx__6e9515e4.md",
      path: "jszz/jqjx.htm",
      topLevel: "jszz"
    },
    {
      label: "相关政策",
      url: "http://www.lncc.edu.cn/xxx/jszz/xgzc.htm",
      status: "saved",
      title: "相关政策-信息工程系",
      relativeOutputPath: "mock/output/相关政策-信息工程系__xgzc__2c89ef33.md",
      path: "jszz/xgzc.htm",
      topLevel: "jszz"
    },
    {
      label: "关于对直招士官学生实行国家资助的政策  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1052/1078.htm",
      status: "saved",
      title: "关于对直招士官学生实行国家资助的政策-信息工程系",
      relativeOutputPath: "mock/output/关于对直招士官学生实行国家资助的政策-信息工程系__1078__5d0420a5.md",
      path: "info/1052/1078.htm",
      topLevel: "info"
    },
    {
      label: "直招士官政策规定  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1052/1077.htm",
      status: "saved",
      title: "直招士官政策规定-信息工程系",
      relativeOutputPath: "mock/output/直招士官政策规定-信息工程系__1077__427b75ac.md",
      path: "info/1052/1077.htm",
      topLevel: "info"
    },
    {
      label: "2019年报考定向培养士官须知  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1052/1242.htm",
      status: "saved",
      title: "2019年报考定向培养士官须知-信息工程系",
      relativeOutputPath: "mock/output/2019年报考定向培养士官须知-信息工程系__1242__07c4cc56.md",
      path: "info/1052/1242.htm",
      topLevel: "info"
    },
    {
      label: "合作企业",
      url: "http://www.lncc.edu.cn/xxx/xqhz/hzqy.htm",
      status: "saved",
      title: "合作企业-信息工程系",
      relativeOutputPath: "mock/output/合作企业-信息工程系__hzqy__770a3308.md",
      path: "xqhz/hzqy.htm",
      topLevel: "xqhz"
    },
    {
      label: "华为ICT产业学院建设介绍  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1025/1396.htm",
      status: "saved",
      title: "华为ICT产业学院建设介绍-信息工程系",
      relativeOutputPath: "mock/output/华为ICT产业学院建设介绍-信息工程系__1396__6e08e036.md",
      path: "info/1025/1396.htm",
      topLevel: "info"
    },
    {
      label: "我校与北方实验室（沈阳）股份有限公司举行校企合作签约仪式  2024年06月10日",
      url: "http://www.lncc.edu.cn/xxx/info/1025/1629.htm",
      status: "saved",
      title: "我校与北方实验室（沈阳）股份有限公司举行校企合作签约仪式-信息工程系",
      relativeOutputPath: "mock/output/我校与北方实验室（沈阳）股份有限公司举行校企合作签约仪式-信息工程系__1629__f8349796.md",
      path: "info/1025/1629.htm",
      topLevel: "info"
    },
    {
      label: "2021年信息工程系校企合作推进情况  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1025/1412.htm",
      status: "saved",
      title: "2021年信息工程系校企合作推进情况-信息工程系",
      relativeOutputPath: "mock/output/2021年信息工程系校企合作推进情况-信息工程系__1412__7932022f.md",
      path: "info/1025/1412.htm",
      topLevel: "info"
    },
    {
      label: "社会服务情况  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1025/1079.htm",
      status: "saved",
      title: "社会服务情况-信息工程系",
      relativeOutputPath: "mock/output/社会服务情况-信息工程系__1079__c4e1e358.md",
      path: "info/1025/1079.htm",
      topLevel: "info"
    },
    {
      label: "合作动态",
      url: "http://www.lncc.edu.cn/xxx/xqhz/hzdt.htm",
      status: "saved",
      title: "合作动态-信息工程系",
      relativeOutputPath: "mock/output/合作动态-信息工程系__hzdt__41986e67.md",
      path: "xqhz/hzdt.htm",
      topLevel: "xqhz"
    },
    {
      label: "招生信息",
      url: "http://www.lncc.edu.cn/xsc/",
      status: "saved",
      title: "学生工作处",
      relativeOutputPath: "mock/output/学生工作处__xsc__2b983331.md",
      path: "xsc/",
      topLevel: "xsc"
    },
    {
      label: "就业服务",
      url: "http://www.lncc.edu.cn/xxx/zsjy/jyfw.htm",
      status: "saved",
      title: "就业服务-信息工程系",
      relativeOutputPath: "mock/output/就业服务-信息工程系__jyfw__7f350238.md",
      path: "zsjy/jyfw.htm",
      topLevel: "zsjy"
    },
    {
      label: "灵活就业工作证明  2024年06月15日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1596.htm",
      status: "saved",
      title: "灵活就业工作证明-信息工程系",
      relativeOutputPath: "mock/output/灵活就业工作证明-信息工程系__1596__eadec59a.md",
      path: "info/1091/1596.htm",
      topLevel: "info"
    },
    {
      label: "灵活就业薪资证明  2024年06月15日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1595.htm",
      status: "saved",
      title: "灵活就业薪资证明-信息工程系",
      relativeOutputPath: "mock/output/灵活就业薪资证明-信息工程系__1595__84347fbe.md",
      path: "info/1091/1595.htm",
      topLevel: "info"
    },
    {
      label: "高校毕业生毕业去向说明  2024年06月15日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1594.htm",
      status: "saved",
      title: "高校毕业生毕业去向说明-信息工程系",
      relativeOutputPath: "mock/output/高校毕业生毕业去向说明-信息工程系__1594__f44f5199.md",
      path: "info/1091/1594.htm",
      topLevel: "info"
    },
    {
      label: "毕业生就业服务指导视频一  2024年06月15日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1545.htm",
      status: "saved",
      title: "毕业生就业服务指导视频一-信息工程系",
      relativeOutputPath: "mock/output/毕业生就业服务指导视频一-信息工程系__1545__6684cba5.md",
      path: "info/1091/1545.htm",
      topLevel: "info"
    },
    {
      label: "毕业就业指导服务视频二  2024年06月15日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1546.htm",
      status: "saved",
      title: "毕业就业指导服务视频二-信息工程系",
      relativeOutputPath: "mock/output/毕业就业指导服务视频二-信息工程系__1546__b8138346.md",
      path: "info/1091/1546.htm",
      topLevel: "info"
    },
    {
      label: "毕业生就业指导视频三  2024年06月15日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1547.htm",
      status: "saved",
      title: "毕业生就业指导视频三-信息工程系",
      relativeOutputPath: "mock/output/毕业生就业指导视频三-信息工程系__1547__4932d175.md",
      path: "info/1091/1547.htm",
      topLevel: "info"
    },
    {
      label: "毕业生就业证明材料递交流程  2024年06月15日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1593.htm",
      status: "saved",
      title: "毕业生就业证明材料递交流程-信息工程系",
      relativeOutputPath: "mock/output/毕业生就业证明材料递交流程-信息工程系__1593__a25c4d28.md",
      path: "info/1091/1593.htm",
      topLevel: "info"
    },
    {
      label: "关于做好2023届全省普通高校毕业生就业创业工作的通知  2023年03月18日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1600.htm",
      status: "saved",
      title: "关于做好2023届全省普通高校毕业生就业创业工作的通知-信息工程系",
      relativeOutputPath: "mock/output/关于做好2023届全省普通高校毕业生就业创业工作的通知-信息工程系__1600__ade3dc4a.md",
      path: "info/1091/1600.htm",
      topLevel: "info"
    },
    {
      label: "关于开展辽宁省“2023届高校毕业生就业促进月”活动的通知.pdf  2023年03月18日",
      url: "http://www.lncc.edu.cn/xxx/info/1091/1601.htm",
      status: "saved",
      title: "关于开展辽宁省“2023届高校毕业生就业促进月”活动的通知.pdf-信息工程系",
      relativeOutputPath: "mock/output/关于开展辽宁省“2023届高校毕业生就业促进月”活动的通知.pdf-信息工程系__1601__5ba982ac.md",
      path: "info/1091/1601.htm",
      topLevel: "info"
    },
    {
      label: "招聘信息",
      url: "http://www.lncc.edu.cn/xsjy/",
      status: "failed",
      title: null,
      relativeOutputPath: "",
      path: "xsjy/",
      topLevel: "xsjy"
    },
    {
      label: "访企拓岗",
      url: "http://www.lncc.edu.cn/xxx/zsjy/fqtg.htm",
      status: "saved",
      title: "访企拓岗-信息工程系",
      relativeOutputPath: "mock/output/访企拓岗-信息工程系__fqtg__dc657947.md",
      path: "zsjy/fqtg.htm",
      topLevel: "zsjy"
    },
    {
      label: "党委书记任冰率队走访沈阳人工智能中心  2024年06月05日",
      url: "http://www.lncc.edu.cn/xxx/info/1129/1630.htm",
      status: "saved",
      title: "党委书记任冰率队走访沈阳人工智能中心-信息工程系",
      relativeOutputPath: "mock/output/党委书记任冰率队走访沈阳人工智能中心-信息工程系__1630__72342029.md",
      path: "info/1129/1630.htm",
      topLevel: "info"
    },
    {
      label: "校军合作育人——我校警士管理学院与信息工程系深入武警部队开展专业警士人才培养质量提升调研活动  2023年12月20日",
      url: "http://www.lncc.edu.cn/xxx/info/1129/1637.htm",
      status: "saved",
      title: "校军合作育人——我校警士管理学院与信息工程系深入武警部队开展专业警士人才培养质量提升调研活动-信息工程系",
      relativeOutputPath: "mock/output/校军合作育人——我校警士管理学院与信息工程系深入武警部队开展专业警士人才培养质量提升调研活动-信息工程系__1637__43e94ed0.md",
      path: "info/1129/1637.htm",
      topLevel: "info"
    },
    {
      label: "金雷主任一行到沈阳远京科技有限公司进行企业走访  2023年04月24日",
      url: "http://www.lncc.edu.cn/xxx/info/1129/1556.htm",
      status: "saved",
      title: "金雷主任一行到沈阳远京科技有限公司进行企业走访-信息工程系",
      relativeOutputPath: "mock/output/金雷主任一行到沈阳远京科技有限公司进行企业走访-信息工程系__1556__238cf330.md",
      path: "info/1129/1556.htm",
      topLevel: "info"
    },
    {
      label: "访企拓岗电子台账  2023年04月05日",
      url: "http://www.lncc.edu.cn/xxx/info/1129/1552.htm",
      status: "saved",
      title: "访企拓岗电子台账-信息工程系",
      relativeOutputPath: "mock/output/访企拓岗电子台账-信息工程系__1552__79add2b5.md",
      path: "info/1129/1552.htm",
      topLevel: "info"
    },
    {
      label: "智能座舱产业调研  2023年03月21日",
      url: "http://www.lncc.edu.cn/xxx/info/1129/1540.htm",
      status: "saved",
      title: "智能座舱产业调研-信息工程系",
      relativeOutputPath: "mock/output/智能座舱产业调研-信息工程系__1540__f0544a6c.md",
      path: "info/1129/1540.htm",
      topLevel: "info"
    },
    {
      label: "走访企业深度洽谈，合作培养促进就业  2023年03月20日",
      url: "http://www.lncc.edu.cn/xxx/info/1129/1539.htm",
      status: "saved",
      title: "走访企业深度洽谈，合作培养促进就业-信息工程系",
      relativeOutputPath: "mock/output/走访企业深度洽谈，合作培养促进就业-信息工程系__1539__dfb7ac72.md",
      path: "info/1129/1539.htm",
      topLevel: "info"
    },
    {
      label: "校关于开展2023年校友相关活动的通知  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1074/1537.htm",
      status: "saved",
      title: "关于开展2023年校友相关活动的通知-信息工程系",
      relativeOutputPath: "mock/output/关于开展2023年校友相关活动的通知-信息工程系__1537__5e6454a6.md",
      path: "info/1074/1537.htm",
      topLevel: "info"
    },
    {
      label: "校校友会办公室2023年工作安排  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1074/1538.htm",
      status: "saved",
      title: "校友会办公室2023年工作安排-信息工程系",
      relativeOutputPath: "mock/output/校友会办公室2023年工作安排-信息工程系__1538__b3f271d6.md",
      path: "info/1074/1538.htm",
      topLevel: "info"
    },
    {
      label: "校我系召开2023年度校友工作推进会  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1074/1548.htm",
      status: "saved",
      title: "我系召开2023年度校友工作推进会-信息工程系",
      relativeOutputPath: "mock/output/我系召开2023年度校友工作推进会-信息工程系__1548__3eb89392.md",
      path: "info/1074/1548.htm",
      topLevel: "info"
    },
    {
      label: "校友风采",
      url: "http://www.lncc.edu.cn/xxx/xyh/xyfc.htm",
      status: "saved",
      title: "校友风采-信息工程系",
      relativeOutputPath: "mock/output/校友风采-信息工程系__xyfc__8004232a.md",
      path: "xyh/xyfc.htm",
      topLevel: "xyh"
    },
    {
      label: "软件技术专业优秀毕业生  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1126/1533.htm",
      status: "saved",
      title: "软件技术专业优秀毕业生-信息工程系",
      relativeOutputPath: "mock/output/软件技术专业优秀毕业生-信息工程系__1533__c201b313.md",
      path: "info/1126/1533.htm",
      topLevel: "info"
    },
    {
      label: "广告设计与制作优秀毕业生  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1126/1531.htm",
      status: "saved",
      title: "广告设计与制作优秀毕业生-信息工程系",
      relativeOutputPath: "mock/output/广告设计与制作优秀毕业生-信息工程系__1531__83eca1a2.md",
      path: "info/1126/1531.htm",
      topLevel: "info"
    },
    {
      label: "影视动画优秀毕业生  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1126/1532.htm",
      status: "saved",
      title: "影视动画优秀毕业生-信息工程系",
      relativeOutputPath: "mock/output/影视动画优秀毕业生-信息工程系__1532__72bad0bf.md",
      path: "info/1126/1532.htm",
      topLevel: "info"
    },
    {
      label: "计算机网络技术专业优秀毕业生  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1126/1535.htm",
      status: "saved",
      title: "计算机网络技术专业优秀毕业生-信息工程系",
      relativeOutputPath: "mock/output/计算机网络技术专业优秀毕业生-信息工程系__1535__042bf6ca.md",
      path: "info/1126/1535.htm",
      topLevel: "info"
    },
    {
      label: "数字媒体应用技术专业优秀毕业生  2023年04月07日",
      url: "http://www.lncc.edu.cn/xxx/info/1126/1534.htm",
      status: "saved",
      title: "数字媒体应用技术专业优秀毕业生-信息工程系",
      relativeOutputPath: "mock/output/数字媒体应用技术专业优秀毕业生-信息工程系__1534__bc71358f.md",
      path: "info/1126/1534.htm",
      topLevel: "info"
    },
    {
      label: "返校服务",
      url: "http://www.lncc.edu.cn/xxx/xyh/fxfw.htm",
      status: "saved",
      title: "返校服务-信息工程系",
      relativeOutputPath: "mock/output/返校服务-信息工程系__fxfw__fd71f8d7.md",
      path: "xyh/fxfw.htm",
      topLevel: "xyh"
    },
    {
      label: "校友信息",
      url: "http://www.lncc.edu.cn/xxx/xyh/xyxx.htm",
      status: "saved",
      title: "校友信息-信息工程系",
      relativeOutputPath: "mock/output/校友信息-信息工程系__xyxx__b1d9fe61.md",
      path: "xyh/xyxx.htm",
      topLevel: "xyh"
    },
    {
      label: "关于校学术委员会委员候选人推荐公示",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1793.htm",
      status: "saved",
      title: "关于校学术委员会委员候选人推荐公示-信息工程系",
      relativeOutputPath: "mock/output/关于校学术委员会委员候选人推荐公示-信息工程系__1793__0b7c43a2.md",
      path: "info/1011/1793.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系成功举办《数据产业剖析与人才培养》专题讲座",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1703.htm",
      status: "saved",
      title: "信息工程系成功举办《数据产业剖析与人才培养》专题讲座-信息工程系",
      relativeOutputPath: "mock/output/信息工程系成功举办《数据产业剖析与人才培养》专题讲座-信息工程系__1703__e65f65eb.md",
      path: "info/1011/1703.htm",
      topLevel: "info"
    },
    {
      label: "瞄准国货国用人才需求 ，交专第一期信创就业专班开班",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1653.htm",
      status: "saved",
      title: "瞄准国货国用人才需求 ，交专第一期信创就业专班开班-信息工程系",
      relativeOutputPath: "mock/output/瞄准国货国用人才需求_，交专第一期信创就业专班开班-信息工程系__1653__3533c873.md",
      path: "info/1011/1653.htm",
      topLevel: "info"
    },
    {
      label: "喜报|信息工程系学生在第十八届全国大学生信息安全竞赛半决赛中荣获三等奖",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1663.htm",
      status: "saved",
      title: "喜报|信息工程系学生在第十八届全国大学生信息安全竞赛（创新实践能力赛）暨第二届“长城杯”铁人三项赛（防护赛）半决赛中荣获三等奖-信息工程系",
      relativeOutputPath: "mock/output/喜报_信息工程系学生在第十八届全国大学生信息安全竞赛（创新实践能力赛）暨第二届“长城杯”铁人三项赛（防护赛）半决赛中荣获三等奖-信息工程系__1663__46ac9141.md",
      path: "info/1011/1663.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系利用对外营收购买鼠标、键盘等耗材保障开学任务",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1642.htm",
      status: "saved",
      title: "信息工程系利用对外营收购买鼠标、键盘等耗材，保障新学期开学各项教学任务顺利开展-信息工程系",
      relativeOutputPath: "mock/output/信息工程系利用对外营收购买鼠标、键盘等耗材，保障新学期开学各项教学任务顺利开展-信息工程系__1642__f8c7a456.md",
      path: "info/1011/1642.htm",
      topLevel: "info"
    },
    {
      label: "喜报|我系学生荣获2024年东北三省一区职业院校技能大赛一等奖",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1693.htm",
      status: "saved",
      title: "喜报|我系学生荣获2024年东北三省一区职业院校技能大赛“信息安全管理与评估”赛项一等奖-信息工程系",
      relativeOutputPath: "mock/output/喜报_我系学生荣获2024年东北三省一区职业院校技能大赛“信息安全管理与评估”赛项一等奖-信息工程系__1693__bed0660c.md",
      path: "info/1011/1693.htm",
      topLevel: "info"
    },
    {
      label: "喜报|我系学生荣获2024年一带一路暨金砖国家技能大赛辽宁省第一名",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1673.htm",
      status: "saved",
      title: "喜报 | 我系学生荣获2024年一带一路暨金砖国家技能发展与技术创新大赛 第二届企业信息系统安全赛项 辽宁省第一名-信息工程系",
      relativeOutputPath: "mock/output/喜报___我系学生荣获2024年一带一路暨金砖国家技能发展与技术创新大赛_第二届企业信息系统安全赛项_辽宁省第一名-信息工程系__1673__c4102ad5.md",
      path: "info/1011/1673.htm",
      topLevel: "info"
    },
    {
      label: "开展优秀校友职业生涯规划系列讲座",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1607.htm",
      status: "saved",
      title: "开展优秀校友职业生涯规划系列讲座-信息工程系",
      relativeOutputPath: "mock/output/开展优秀校友职业生涯规划系列讲座-信息工程系__1607__97e5b645.md",
      path: "info/1011/1607.htm",
      topLevel: "info"
    },
    {
      label: "学校首期AI启航——大模型应用校园之旅师生培训落地",
      url: "http://www.lncc.edu.cn/xxx/info/1011/1605.htm",
      status: "saved",
      title: "学校首期AI启航——大模型应用校园之旅师生培训落地-信息工程系",
      relativeOutputPath: "mock/output/学校首期AI启航——大模型应用校园之旅师生培训落地-信息工程系__1605__1fcf69de.md",
      path: "info/1011/1605.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系党总支开展8月份主题党日活动",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1753.htm",
      status: "saved",
      title: "信息工程系党总支开展8月份主题党日活动-信息工程系",
      relativeOutputPath: "mock/output/信息工程系党总支开展8月份主题党日活动-信息工程系__1753__3530e601.md",
      path: "info/1022/1753.htm",
      topLevel: "info"
    },
    {
      label: "“小信鸽”雷锋志愿服务队期末表彰大会圆满举行",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1743.htm",
      status: "saved",
      title: "“小信鸽”雷锋志愿服务队期末表彰大会圆满举行-信息工程系",
      relativeOutputPath: "mock/output/“小信鸽”雷锋志愿服务队期末表彰大会圆满举行-信息工程系__1743__e2d93bca.md",
      path: "info/1022/1743.htm",
      topLevel: "info"
    },
    {
      label: "弘扬干字精神 争当攻坚先锋——信息工程系学生党支部开展7月主题党日活动",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1733.htm",
      status: "saved",
      title: "弘扬干字精神 争当攻坚先锋——信息工程系学生党支部开展7月主题党日活动-信息工程系",
      relativeOutputPath: "mock/output/弘扬干字精神_争当攻坚先锋——信息工程系学生党支部开展7月主题党日活动-信息工程系__1733__57a2c498.md",
      path: "info/1022/1733.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系校友分会成立",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1713.htm",
      status: "saved",
      title: "信息工程系校友分会成立-信息工程系",
      relativeOutputPath: "mock/output/信息工程系校友分会成立-信息工程系__1713__948b51b2.md",
      path: "info/1022/1713.htm",
      topLevel: "info"
    },
    {
      label: "党总支开展六月主题党日活动",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1624.htm",
      status: "saved",
      title: "党总支开展六月主题党日活动-信息工程系",
      relativeOutputPath: "mock/output/党总支开展六月主题党日活动-信息工程系__1624__298fea67.md",
      path: "info/1022/1624.htm",
      topLevel: "info"
    },
    {
      label: "我系成功举办“美育润心”心灵拼图活动",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1602.htm",
      status: "saved",
      title: "我系成功举办“美育润心”心灵拼图活动-信息工程系",
      relativeOutputPath: "mock/output/我系成功举办“美育润心”心灵拼图活动-信息工程系__1602__6313d2b6.md",
      path: "info/1022/1602.htm",
      topLevel: "info"
    },
    {
      label: "“心光璀璨，筑梦未来”5•25“心运会”",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1603.htm",
      status: "saved",
      title: "“心光璀璨，筑梦未来”5•25“心运会”-信息工程系",
      relativeOutputPath: "mock/output/“心光璀璨，筑梦未来”5•25“心运会”-信息工程系__1603__21ae14e7.md",
      path: "info/1022/1603.htm",
      topLevel: "info"
    },
    {
      label: "教工党支部开展五月份主题党日活动",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1628.htm",
      status: "saved",
      title: "教工党支部开展五月份主题党日活动-信息工程系",
      relativeOutputPath: "mock/output/教工党支部开展五月份主题党日活动-信息工程系__1628__f45f7583.md",
      path: "info/1022/1628.htm",
      topLevel: "info"
    },
    {
      label: "“知敬畏、存戒惧、守底线”学生支部主题党日活动",
      url: "http://www.lncc.edu.cn/xxx/info/1022/1604.htm",
      status: "saved",
      title: "“知敬畏、存戒惧、守底线”学生支部主题党日活动-信息工程系",
      relativeOutputPath: "mock/output/“知敬畏、存戒惧、守底线”学生支部主题党日活动-信息工程系__1604__bb7dac59.md",
      path: "info/1022/1604.htm",
      topLevel: "info"
    },
    {
      label: "毕业生就业证明材料递交流程",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1504.htm",
      status: "saved",
      title: "毕业生就业证明材料递交流程-信息工程系",
      relativeOutputPath: "mock/output/毕业生就业证明材料递交流程-信息工程系__1504__cd41f887.md",
      path: "info/1023/1504.htm",
      topLevel: "info"
    },
    {
      label: "信息工程系引领2024级新生探索科技前沿企业参观活动",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1763.htm",
      status: "saved",
      title: "信息工程系引领2024级新生探索科技前沿：为期两天的企业参观活动圆满落幕-信息工程系",
      relativeOutputPath: "mock/output/信息工程系引领2024级新生探索科技前沿：为期两天的企业参观活动圆满落幕-信息工程系__1763__e2a7ff73.md",
      path: "info/1023/1763.htm",
      topLevel: "info"
    },
    {
      label: "党委书记任冰率队走访沈阳人工智能中心",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1619.htm",
      status: "saved",
      title: "党委书记任冰率队走访沈阳人工智能中心-信息工程系",
      relativeOutputPath: "mock/output/党委书记任冰率队走访沈阳人工智能中心-信息工程系__1619__ece22e9f.md",
      path: "info/1023/1619.htm",
      topLevel: "info"
    },
    {
      label: "我校在华为ICT大赛2023-2024全国总决赛中喜获佳绩",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1620.htm",
      status: "saved",
      title: "我校在华为ICT大赛2023-2024全国总决赛中喜获佳绩-信息工程系",
      relativeOutputPath: "mock/output/我校在华为ICT大赛2023-2024全国总决赛中喜获佳绩-信息工程系__1620__6e32e47f.md",
      path: "info/1023/1620.htm",
      topLevel: "info"
    },
    {
      label: "我校代表队荣获第二届全国工业和信息化技术技能大赛三等奖",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1621.htm",
      status: "saved",
      title: "我校代表队荣获第二届全国工业和信息化技术技能大赛学生组“5G+虚拟现实开发应用”赛项三等奖-信息工程系",
      relativeOutputPath: "mock/output/我校代表队荣获第二届全国工业和信息化技术技能大赛学生组“5G+虚拟现实开发应用”赛项三等奖-信息工程系__1621__a83e8cec.md",
      path: "info/1023/1621.htm",
      topLevel: "info"
    },
    {
      label: "多专业贡献才智——交专设计智能座舱伴手礼率先走出国门",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1622.htm",
      status: "saved",
      title: "多专业贡献才智——交专设计智能座舱伴手礼率先走出国门-信息工程系",
      relativeOutputPath: "mock/output/多专业贡献才智——交专设计智能座舱伴手礼率先走出国门-信息工程系__1622__bf96db16.md",
      path: "info/1023/1622.htm",
      topLevel: "info"
    },
    {
      label: "我系师生在第十五届“挑战杯”辽宁省大学生课外学术科技作品竞赛中取得佳绩",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1359.htm",
      status: "saved",
      title: "我系师生在第十五届“挑战杯”辽宁省大学生课外学术科技作品竞赛中取得佳绩-信息工程系",
      relativeOutputPath: "mock/output/我系师生在第十五届“挑战杯”辽宁省大学生课外学术科技作品竞赛中取得佳绩-信息工程系__1359__ff3777ce.md",
      path: "info/1023/1359.htm",
      topLevel: "info"
    },
    {
      label: "我系科研团队自主研发的学生体温动态监测系统已投入使用",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1352.htm",
      status: "saved",
      title: "我系科研团队自主研发的学生体温动态监测系统已投入使用-信息工程系",
      relativeOutputPath: "mock/output/我系科研团队自主研发的学生体温动态监测系统已投入使用-信息工程系__1352__9fba3aaa.md",
      path: "info/1023/1352.htm",
      topLevel: "info"
    },
    {
      label: "【置顶】信息系创新创业工作框架",
      url: "http://www.lncc.edu.cn/xxx/info/1023/1241.htm",
      status: "saved",
      title: "【置顶】信息系创新创业工作框架-信息工程系",
      relativeOutputPath: "mock/output/【置顶】信息系创新创业工作框架-信息工程系__1241__d0f0ec85.md",
      path: "info/1023/1241.htm",
      topLevel: "info"
    },
    {
      label: "学校主页",
      url: "http://www.lncc.edu.cn/",
      status: "saved",
      title: "辽宁省交通高等专科学校",
      relativeOutputPath: "mock/output/辽宁省交通高等专科学校__index__9d56d62d.md",
      path: "",
      topLevel: ""
    },
    {
      label: "招生咨询",
      url: "https://work.weixin.qq.com/kfid/kfc9e4c15629b41719f",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "kfid/kfc9e4c15629b41719f",
      topLevel: "kfid"
    },
    {
      label: "就业咨询",
      url: "https://work.weixin.qq.com/kfid/kfcb14e6aeeab797f25",
      status: "skipped",
      title: null,
      relativeOutputPath: "",
      path: "kfid/kfcb14e6aeeab797f25",
      topLevel: "kfid"
    },
    {
      label: "访企拓岗",
      url: "https://jy.ncss.cn/fqtgxd/2023/index.html",
      status: "saved",
      title: "登录_全国高校毕业生就业管理系统",
      relativeOutputPath: "mock/output/登录_全国高校毕业生就业管理系统__index__9e6c9e48.md",
      path: "fqtgxd/2023/index.html",
      topLevel: "fqtgxd"
    }
  ]
} satisfies MockCollection<MockCrawlEntry>

export default data
