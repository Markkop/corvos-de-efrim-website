'use client'

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
        className="bg-[#2a2a2a] rounded-xl ~p-[1.5rem]/[2rem]"
      >
        <HeroSection />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#2a2a2a] rounded-xl ~p-[1.5rem]/[2rem]"
      >
        <HistoryPage short />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#a27a50] rounded-xl ~p-[1.5rem]/[2rem]"
      >
        <div className="text-center ~mb-[3rem]/[4rem]">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/tripulacao"
              className="inline-block focus-visible:outline-none"
            >
              <h2 className="~text-[2rem]/[3rem] font-bold ~mb-[1rem]/[1.5rem]">
                Tripulação Permanente
              </h2>
            </Link>
          </motion.div>
        </div>
        <CrewSmallList />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-[#2a2a2a] rounded-xl ~p-[1.5rem]/[2rem]"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/recrutamento"
            className="inline-block focus-visible:outline-none"
          >
            <h2 className="~text-[1.5rem]/[2rem] font-bold ~mb-[1rem]/[1.5rem] text-[#e6d7c3]">
              Presentes em
            </h2>
          </Link>
        </motion.div>
        <GamesSmallList />
      </motion.section>

      <motion.div variants={sectionVariants}>
        <ContactSmallList />
      </motion.div>
    </motion.div>
  )
}
