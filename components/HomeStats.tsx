'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const statsData = [
  {
    id: 's1',
    value: '40+',
    label: '载办学沉淀',
  },
  {
    id: 's2',
    value: '100%',
    label: '实训覆盖率',
  },
  {
    id: 's3',
    value: '10',
    label: '省内专业排名',
    prefix: 'TOP',
  },
]

const statsEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: statsEase } },
}

export default function HomeStats() {
  return (
    <section
      data-home-stats="section"
      className="relative border-b border-neutral-200/80 bg-gradient-to-b from-neutral-50/80 to-white py-12 sm:py-16"
      aria-label="专业建设数据"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-60" />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          data-home-stats="grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 divide-y divide-neutral-200/70 md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center justify-center py-8 md:py-4"
            >
              <div className="flex items-baseline text-5xl font-light tracking-tight text-neutral-900 tabular-nums sm:text-6xl">
                {stat.prefix ? (
                  <span className="mr-1.5 text-[0.5em] font-normal tracking-wide text-primary-600">
                    {stat.prefix}
                  </span>
                ) : null}
                {stat.value}
              </div>
              <div className="mt-4 flex flex-col items-center gap-3">
                <span className="text-[15px] tracking-widest text-neutral-500">{stat.label}</span>
                <span className="h-px w-6 bg-neutral-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
