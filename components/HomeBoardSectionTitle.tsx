type HomeBoardSectionTitleProps = {
  title: string
  subtitle: string
  id: string
}

export default function HomeBoardSectionTitle({
  title,
  subtitle,
  id,
}: HomeBoardSectionTitleProps) {
  return (
    <div className="mb-8 flex flex-col items-start border-b border-neutral-200 pb-3">
      <h2 id={id} className="text-balance text-3xl font-normal tracking-wide text-neutral-900">
        {title}
      </h2>
      <span className="mt-1 text-sm uppercase tracking-widest text-neutral-500">{subtitle}</span>
    </div>
  )
}
