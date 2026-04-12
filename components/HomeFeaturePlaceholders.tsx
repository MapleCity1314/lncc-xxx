const placeholders = [
  {
    title: '专业建设',
    description: '展示专业群方向、课程体系和实训条件，后续接入专业数据。',
  },
  {
    title: '教学科研',
    description: '承载教学成果、科研项目和竞赛成果，后续替换为真实列表。',
  },
  {
    title: '校企合作',
    description: '预留合作企业、就业服务和产教融合内容入口。',
  },
]

export default function HomeFeaturePlaceholders() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:items-start">
        <div>
          <p className="text-sm font-semibold text-primary-600">首屏内容占位</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-neutral-900 md:text-4xl">
            三个核心区域先建立结构
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-neutral-500">
            当前只放置组件和占位内容，后续可以按数据模块逐步替换为新闻、专业、合作或招生入口。
          </p>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {placeholders.map((item, index) => (
            <section
              key={item.title}
              aria-label={item.title}
              className="grid gap-4 py-8 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-8"
            >
              <div className="text-sm font-semibold tabular-nums text-primary-600">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-balance text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-base leading-7 text-neutral-500">
                  {item.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
