export default function HomePage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
          Home
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
          首页内容区域已经接入独立的前台布局层。
        </h1>
        <p className="text-base leading-8 text-stone-600 sm:text-lg">
          现在 `header` 和 `footer` 由 `app/(frontend)/layout.tsx` 统一承载，
          中间页面内容会随路由切换动态替换，`app/layout.tsx` 只保留根节点职责。
        </p>
      </div>
    </section>
  );
}
