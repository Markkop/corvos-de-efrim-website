'use client'

import { ContactSmallList } from '@/components/ContactSmallList'
import { CrewSmallList } from '@/components/CrewSmallList'
import { GamesSmallList } from '@/components/GamesSmallList'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
        className="relative flex h-[90vh] items-center justify-center bg-black bg-cover bg-center bg-no-repeat text-white rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0, 0.6) 0%,rgba(0,0,0,0.3) 100%), url(/images/dormor.png)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center p-8"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="~text-[2.5rem]/[4rem] mb-8 font-bold"
          >
            Corvos de Efrim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="~text-[1.125rem]/[1.5rem] mb-12 font-semibold max-w-2xl mx-auto"
          >
            Junte-se à nossa guilda e embarque numa aventura conosco!
          </motion.p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              className="inline-flex ~h-[3rem]/[3.5rem] items-center justify-center rounded-md border border-transparent bg-[#a27a50] ~px-[1.5rem]/[2rem] ~text-[1rem]/[1.25rem] font-medium text-white hover:bg-[#a27a50]/90"
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Entre no nosso Discord
              <Image
                className="ml-3"
                alt="Discord"
                height={28}
                src="/icons/discord.svg"
                width={28}
              />
            </Link>
          </motion.div>
        </motion.div>
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
