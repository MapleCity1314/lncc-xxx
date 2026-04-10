import type { MockCollection, MockNavItem } from '@/mock/types'

const data = {
  section: "站点导航",
  description: "根据首页与抓取索引整理的导航树。",
  items: [
    {
      label: "首页",
      url: "http://www.lncc.edu.cn/xxx/index.htm",
      isExternal: false,
      children: []
    },
    {
      label: "本系概况",
      url: "http://www.lncc.edu.cn/xxx/bxgk.htm",
      isExternal: false,
      children: []
    },
    {
      label: "专业设置",
      url: "http://www.lncc.edu.cn/xxx/zysz.htm",
      isExternal: false,
      children: [
        {
          label: "计算机网络技术",
          url: "http://www.lncc.edu.cn/xxx/zysz/jsjwljs.htm",
          isExternal: false
        },
        {
          label: "软件技术",
          url: "http://www.lncc.edu.cn/xxx/zysz/rjjs.htm",
          isExternal: false
        },
        {
          label: "软件技术(软件测试)",
          url: "http://www.lncc.edu.cn/xxx/zysz/rjjs_rjcs_.htm",
          isExternal: false
        },
        {
          label: "云计算技术应用",
          url: "http://www.lncc.edu.cn/xxx/zysz/yjsjsyy.htm",
          isExternal: false
        },
        {
          label: "人工智能技术应用",
          url: "http://www.lncc.edu.cn/xxx/zysz/rgznjsyy.htm",
          isExternal: false
        },
        {
          label: "数字媒体技术",
          url: "http://www.lncc.edu.cn/xxx/zysz/szmtjs.htm",
          isExternal: false
        },
        {
          label: "影视动画",
          url: "http://www.lncc.edu.cn/xxx/zysz/ysdh.htm",
          isExternal: false
        },
        {
          label: "计算机基础教研室",
          url: "http://www.lncc.edu.cn/xxx/zysz/jsjjcjys.htm",
          isExternal: false
        }
      ]
    },
    {
      label: "师资队伍",
      url: "http://www.lncc.edu.cn/xxx/szdw.htm",
      isExternal: false,
      children: [
        {
          label: "组织机构",
          url: "http://www.lncc.edu.cn/xxx/szdw/zzjg.htm",
          isExternal: false
        },
        {
          label: "教师风采",
          url: "http://www.lncc.edu.cn/xxx/szdw/jsfc.htm",
          isExternal: false
        },
        {
          label: "教授风采",
          url: "http://www.lncc.edu.cn/xxx/szdw/jsfc1.htm",
          isExternal: false
        },
        {
          label: "博士风采",
          url: "http://www.lncc.edu.cn/xxx/szdw/bsfc.htm",
          isExternal: false
        }
      ]
    },
    {
      label: "教研科研",
      url: "http://www.lncc.edu.cn/xxx/jyky.htm",
      isExternal: false,
      children: [
        {
          label: "教研项目",
          url: "http://www.lncc.edu.cn/xxx/jyky/jyxm.htm",
          isExternal: false
        },
        {
          label: "科研项目",
          url: "http://www.lncc.edu.cn/xxx/jyky/kyxm.htm",
          isExternal: false
        },
        {
          label: "学术论文",
          url: "http://www.lncc.edu.cn/xxx/jyky/xslw.htm",
          isExternal: false
        },
        {
          label: "教材著作",
          url: "http://www.lncc.edu.cn/xxx/jyky/jczz.htm",
          isExternal: false
        },
        {
          label: "成果获奖",
          url: "http://www.lncc.edu.cn/xxx/jyky/cghj.htm",
          isExternal: false
        }
      ]
    },
    {
      label: "实训基地",
      url: "http://www.lncc.edu.cn/xxx/sxjd.htm",
      isExternal: false,
      children: [
        {
          label: "校内实训基地",
          url: "http://www.lncc.edu.cn/xxx/sxjd/xnsxjd.htm",
          isExternal: false
        },
        {
          label: "校外实训基地",
          url: "http://www.lncc.edu.cn/xxx/sxjd/xwsxjd.htm",
          isExternal: false
        }
      ]
    },
    {
      label: "警士直招",
      url: "http://www.lncc.edu.cn/xxx/jszz.htm",
      isExternal: false,
      children: [
        {
          label: "入学军训",
          url: "http://www.lncc.edu.cn/xxx/jszz/rxjx.htm",
          isExternal: false
        },
        {
          label: "日常学习",
          url: "http://www.lncc.edu.cn/xxx/jszz/rcxx.htm",
          isExternal: false
        },
        {
          label: "日常训练",
          url: "http://www.lncc.edu.cn/xxx/jszz/rcxl.htm",
          isExternal: false
        },
        {
          label: "日常生活",
          url: "http://www.lncc.edu.cn/xxx/jszz/rcsh.htm",
          isExternal: false
        },
        {
          label: "假期集训",
          url: "http://www.lncc.edu.cn/xxx/jszz/jqjx.htm",
          isExternal: false
        },
        {
          label: "相关政策",
          url: "http://www.lncc.edu.cn/xxx/jszz/xgzc.htm",
          isExternal: false
        }
      ]
    },
    {
      label: "校企合作",
      url: "http://www.lncc.edu.cn/xxx/xqhz.htm",
      isExternal: false,
      children: [
        {
          label: "合作企业",
          url: "http://www.lncc.edu.cn/xxx/xqhz/hzqy.htm",
          isExternal: false
        },
        {
          label: "合作动态",
          url: "http://www.lncc.edu.cn/xxx/xqhz/hzdt.htm",
          isExternal: false
        }
      ]
    },
    {
      label: "招生就业",
      url: "http://www.lncc.edu.cn/xxx/zsjy.htm",
      isExternal: false,
      children: [
        {
          label: "就业服务",
          url: "http://www.lncc.edu.cn/xxx/zsjy/jyfw.htm",
          isExternal: false
        },
        {
          label: "访企拓岗",
          url: "http://www.lncc.edu.cn/xxx/zsjy/fqtg.htm",
          isExternal: false
        }
      ]
    },
    {
      label: "校友会",
      url: "http://www.lncc.edu.cn/xxx/xyh.htm",
      isExternal: false,
      children: [
        {
          label: "校友风采",
          url: "http://www.lncc.edu.cn/xxx/xyh/xyfc.htm",
          isExternal: false
        },
        {
          label: "返校服务",
          url: "http://www.lncc.edu.cn/xxx/xyh/fxfw.htm",
          isExternal: false
        },
        {
          label: "校友信息",
          url: "http://www.lncc.edu.cn/xxx/xyh/xyxx.htm",
          isExternal: false
        }
      ]
    }
  ]
} satisfies MockCollection<MockNavItem>

export default data
