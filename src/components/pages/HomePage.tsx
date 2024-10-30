'use client'

import { BuildsSmallList } from '@/components/BuildsSmallList'
import { ContactSmallList } from '@/components/ContactSmallList'
import { CrewSmallList } from '@/components/CrewSmallList'
import { GamesSmallList } from '@/components/GamesSmallList'
import { HeroSection } from '@/components/hero-section'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HistoryPage } from './HistoryPage'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export function HomePage() {
  return (
    <motion.div
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={sectionVariants}
        className="bg-[#2a2a2a] rounded-xl p-6 md:p-8"
      >
        <HeroSection />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#2a2a2a] rounded-xl p-6 md:p-8"
      >
        <HistoryPage short />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#a27a50] rounded-xl p-6 md:p-8"
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/jogos/wakfu/membros"
              className="inline-block focus-visible:outline-none"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Tripulação do Wakfu
              </h2>
            </Link>
          </motion.div>
        </div>
        <CrewSmallList game="wakfu" href="/jogos/wakfu/membros" />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#2a2a2a] rounded-xl p-6 md:p-8"
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/jogos/waven/membros"
              className="inline-block focus-visible:outline-none"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-[#e6d7c3]">
                Tripulação do Waven
              </h2>
            </Link>
          </motion.div>
        </div>
        <CrewSmallList game="waven" href="/jogos/waven/membros" />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#2a2a2a] rounded-xl p-6 md:p-8"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/jogos"
            className="inline-block focus-visible:outline-none"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#e6d7c3]">
              Presentes em
            </h2>
          </Link>
        </motion.div>
        <GamesSmallList />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#2a2a2a] rounded-xl p-6 md:p-8"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/jogos/waven/builds"
            className="inline-block focus-visible:outline-none"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#e6d7c3]">
              Builds do Waven
            </h2>
          </Link>
        </motion.div>
        <BuildsSmallList />
      </motion.section>

      <motion.div variants={sectionVariants}>
        <ContactSmallList />
      </motion.div>
    </motion.div>
  )
}
