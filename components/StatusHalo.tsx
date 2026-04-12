'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function StatusHalo() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="relative flex h-40 w-40 items-center justify-center rounded-full border border-primary-200/70 bg-white/75 shadow-[0_18px_50px_rgb(15_23_42_/_0.08)] backdrop-blur"
      >
        <div className="h-20 w-20 rounded-full bg-primary-500/12" />
      </div>
    )
  }

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
      className="relative flex h-40 w-40 items-center justify-center rounded-full border border-primary-200/70 bg-white/75 shadow-[0_18px_50px_rgb(15_23_42_/_0.08)] backdrop-blur"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.72, 0.4] }}
        transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute inset-4 rounded-full border border-primary-200/70"
      />
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="h-20 w-20 rounded-full bg-primary-500/14 shadow-[inset_0_0_0_1px_rgb(37_99_235_/_0.12)]"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, 6, 0], opacity: [0.26, 0.48, 0.26] }}
        transition={{ duration: 6.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute right-7 top-7 h-4 w-4 rounded-full bg-sky-300"
      />
    </motion.div>
  )
}
