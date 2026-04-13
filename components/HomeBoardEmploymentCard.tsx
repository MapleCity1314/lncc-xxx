import Image from 'next/image'
import Link from 'next/link'
import { withBasePath } from '@/app/(frontend)/_lib/base-path'
import type { ArticleItem } from '@/data/homeContent'

type HomeBoardEmploymentCardProps = {
  item: ArticleItem
}

export default function HomeBoardEmploymentCard({ item }: HomeBoardEmploymentCardProps) {
  return (
    <article className="group flex flex-col">
      <Link
        href={item.href}
        className="relative block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
          <Image
            src={withBasePath(item.image)}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-5 flex flex-col items-start">
        <span className="mb-3 inline-block border border-neutral-200 px-2 py-0.5 text-xs text-neutral-500 transition-colors group-hover:border-[#9b151b]/30 group-hover:text-[#9b151b]">
          {item.category}
        </span>
        <Link
          href={item.href}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
        >
          <h3 className="line-clamp-2 text-balance text-[17px] font-medium leading-snug text-neutral-900 transition-colors hover:text-[#9b151b]">
            {item.title}
          </h3>
        </Link>
        <p className="mt-3 line-clamp-3 text-pretty text-sm leading-relaxed text-neutral-500">
          {item.summary}
        </p>
        <span className="mt-4 text-sm tabular-nums text-[#9b151b]">{item.date}</span>
      </div>
    </article>
  )
}
