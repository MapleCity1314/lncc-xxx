'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type SearchOverlayProps = {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer: number | undefined

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      timer = window.setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      if (timer) {
        window.clearTimeout(timer)
      }
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{
            y: 0,
            transition: {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.4,
              ease: [0.7, 0, 0.84, 0],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="站内搜索"
        >
          <div className="relative flex h-32 w-full shrink-0 items-center justify-end px-4 sm:px-6 lg:px-10">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              type="button"
              aria-label="关闭搜索"
              onClick={onClose}
              className="inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span aria-hidden="true" className="text-3xl leading-none">
                ×
              </span>
            </motion.button>
          </div>

          <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-4xl"
            >
              <div className="relative flex items-center border-b-2 border-white/20 pb-4 transition-colors focus-within:border-sky-400">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="输入关键词进行搜索..."
                  className="w-full bg-transparent text-3xl font-light text-white placeholder:text-white/30 focus:outline-none sm:text-5xl lg:text-6xl"
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      onClose()
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
