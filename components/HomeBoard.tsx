'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { withBasePath } from '@/app/(frontend)/_lib/base-path'
import HomeBoardEmploymentCard from '@/components/HomeBoardEmploymentCard'
import HomeBoardSectionTitle from '@/components/HomeBoardSectionTitle'
import type { ArticleItem, NewsItem } from '@/data/homeContent'

const boardEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: boardEase } },
}

const listReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const employmentReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: boardEase } },
}

type HomeBoardProps = {
  employmentData: ArticleItem[]
  newsData: NewsItem[]
  partyData: ArticleItem[]
}

export default function HomeBoard({ employmentData, newsData, partyData }: HomeBoardProps) {
  return (
    <div className="bg-white pb-24 pt-16 font-sans sm:pb-32 sm:pt-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={sectionReveal}
            aria-labelledby="home-party-heading"
            className="flex-1 lg:w-7/12"
          >
            <HomeBoardSectionTitle
              id="home-party-heading"
              title="党团建设"
              subtitle="Party & Youth League"
            />

            <Link
              href={partyData[0].href}
              className="group relative block w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b151b]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={withBasePath(partyData[0].image)}
                  alt={partyData[0].title}
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative bg-[#9b151b] p-5 text-white transition-colors duration-200 group-hover:bg-[#801015] sm:absolute sm:bottom-0 sm:left-0 sm:max-w-[85%] sm:p-6">
                <h3 className="line-clamp-2 text-balance text-lg font-medium leading-snug sm:text-xl">
                  {partyData[0].title}
                </h3>
                <p className="mt-3 text-sm tabular-nums text-white/80">{partyData[0].date}</p>
                <span className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-white/10 text-xl sm:-right-12 sm:bg-[#801015]">
                  →
                </span>
              </div>
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {partyData.slice(1, 3).map((item) => (
                <motion.div key={item.id} variants={itemReveal}>
                  <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b151b]"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={withBasePath(item.image)}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="line-clamp-2 text-balance text-base font-medium text-neutral-900 transition-colors group-hover:text-[#9b151b]">
                    {item.title}
                  </h3>
                  <p className="text-sm tabular-nums text-[#9b151b]">{item.date}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={sectionReveal}
            aria-labelledby="home-notice-heading"
            className="lg:w-5/12"
          >
            <HomeBoardSectionTitle
              id="home-notice-heading"
              title="通知公告"
              subtitle="Notice Announcement"
            />

            <motion.ul variants={listReveal} data-testid="home-notice-list" className="flex flex-col">
              {newsData.map((item) => (
                <motion.li
                  key={item.id}
                  variants={itemReveal}
                  className="border-b border-dashed border-neutral-200"
                >
                  <Link
                    href={item.href}
                    className="group flex min-h-20 flex-col gap-2 py-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b151b] sm:flex-row sm:items-start sm:gap-6"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 text-pretty text-[17px] font-medium leading-relaxed text-neutral-900 transition-colors group-hover:text-[#9b151b]">
                        {item.title}
                      </h3>
                      <p className="mt-2 hidden line-clamp-1 text-pretty text-sm leading-relaxed text-neutral-500 sm:block">
                        {item.summary}
                      </p>
                    </div>
                    <div className="shrink-0 pt-1 text-[15px] font-medium tabular-nums text-[#9b151b]">
                      {item.date}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8">
              <Link
                href="/news"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
              >
                查看更多公告
                <span className="flex size-6 items-center justify-center rounded-full border border-neutral-300">
                  ›
                </span>
              </Link>
            </div>
          </motion.section>
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={sectionReveal}
          aria-labelledby="home-employment-heading"
          className="mt-20 lg:mt-28"
        >
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-neutral-200 pb-3">
            <div className="flex flex-col items-start">
              <h2 id="home-employment-heading" className="text-balance text-3xl font-normal tracking-wide text-neutral-900">
                产教融合与就业
              </h2>
              <span className="mt-1 text-sm uppercase tracking-widest text-neutral-500">Integration & Employment</span>
            </div>
            <Link
              href="/employment"
              className="mb-1 hidden min-h-11 items-center text-sm text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600 sm:inline-flex"
            >
              探索更多资源 +
            </Link>
          </div>

          <motion.div variants={employmentReveal} data-testid="home-employment-list" className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {employmentData.map((item) => (
              <motion.div key={item.id} variants={itemReveal}>
                <HomeBoardEmploymentCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
