'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useInView, useSpring, useTransform } from 'framer-motion'
import { withBasePath } from '@/app/(frontend)/_lib/base-path'

const heroEase: [number, number, number, number] = [0.21, 1, 0.36, 1]

const slides = [
  { src: '/image/banner/home-banner-1.jpg', alt: '校园环境' },
  { src: '/image/banner/home-banner-2.jpg', alt: '实训中心' },
  { src: '/image/banner/home-banner-3.jpg', alt: '学生活动' },
]

// 数字滚动组件：让底部的统计数据动起来
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 })
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString() + suffix)

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // 定义入场动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: heroEase } }
  }

  return (
    <section className="relative w-full bg-white">
      {/* 1. 上半部分：大 Banner 区 */}
      <div data-home-hero="shell" className="relative h-[82dvh] w-full overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            data-home-hero="slide"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src={withBasePath(slides[activeIndex].src)}
              alt={slides[activeIndex].alt}
              fill
              priority={activeIndex === 0}
              sizes="100vw"
              loading={activeIndex === 0 ? 'eager' : 'lazy'}
              className="object-cover"
            />
            {/* 更加细腻的渐变，确保文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="relative z-10 mx-auto h-full max-w-7xl px-8 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 系部名称标签：变小，作为前缀存在，解决重复感 */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="bg-sky-600 px-2 py-0.5 text-xs font-bold text-white tracking-wider">
              信息工程系
            </span>
            <div className="h-[1px] w-8 bg-sky-500/50" />
            <span className="text-sm font-medium tracking-[0.2em] text-sky-400">
              LIAONING PROVINCIAL COLLEGE OF COMMUNICATIONS
            </span>
          </motion.div>

          {/* 主标题：数智引领 · 交通强国 */}
          <motion.h1 
            variants={itemVariants}
            className="mt-4 text-balance text-6xl md:text-8xl font-bold tracking-tight text-white"
          >
            <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
              数智引领
            </span>
            <span className="mx-4 text-sky-500 opacity-80">·</span>
            <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
              交通强国
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-2xl text-xl md:text-2xl font-light text-slate-200 leading-relaxed border-l-2 border-sky-500/50 pl-6"
          >
            辽宁省交通高等专科学校 —— 构建理论与实践并重的人才培养体系，培养高素质技术技能人才。
          </motion.p>

          {/* 控制条 */}
          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative h-1 rounded-full overflow-hidden transition-all duration-500 ${
                  index === activeIndex ? 'w-16 bg-white/20' : 'w-4 bg-white/10'
                }`}
              >
                {index === activeIndex && (
                  <motion.div 
                    layoutId="progress"
                    className="absolute inset-0 bg-sky-500"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 2. 下半部分：白色背景统计区 */}
      <div data-home-hero="stats" className="relative z-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div data-home-hero="stats-grid" className="-mt-16 grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="group text-center">
              <div className="text-5xl font-bold text-slate-900 transition-colors group-hover:text-sky-600">
                <Counter value={40} suffix="+" />
              </div>
              <p className="mt-4 text-lg font-medium text-slate-500 tracking-widest uppercase">载办学沉淀</p>
              <div className="mx-auto mt-4 h-1 w-8 bg-slate-100 transition-all group-hover:w-16 group-hover:bg-sky-500" />
            </div>

            <div className="group text-center">
              <div className="text-5xl font-bold text-slate-900 transition-colors group-hover:text-sky-600">
                <Counter value={100} suffix="%" />
              </div>
              <p className="mt-4 text-lg font-medium text-slate-500 tracking-widest uppercase">实训覆盖率</p>
              <div className="mx-auto mt-4 h-1 w-8 bg-slate-100 transition-all group-hover:w-16 group-hover:bg-sky-500" />
            </div>

            <div className="group text-center">
              <div className="text-5xl font-bold text-slate-900 transition-colors group-hover:text-sky-600">
                <span className="text-3xl mr-1">TOP</span>
                <Counter value={10} />
              </div>
              <p className="mt-4 text-lg font-medium text-slate-500 tracking-widest uppercase">省内专业排名</p>
              <div className="mx-auto mt-4 h-1 w-8 bg-slate-100 transition-all group-hover:w-16 group-hover:bg-sky-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
