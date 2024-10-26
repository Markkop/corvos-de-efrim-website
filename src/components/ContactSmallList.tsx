'use client'

import { YoutubeWidget } from '@/components/youtube-widget'
import { videoList } from '@/lib/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ContactSmallList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start justify-center">
          <div className="w-full max-w-[320px]">
            <YoutubeWidget videos={videoList.slice(0, 6)} />
          </div>

          <div className="w-full max-w-[350px]">
            <iframe
              src="https://discord.com/widget?id=169261868836323328&theme=dark"
              width="100%"
              height="500"
              className="rounded-xl border-0 bg-[#1f1f1f]"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              title="Discord Server Widget"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
