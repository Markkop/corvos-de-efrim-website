'use client'

import { DISCORD_INVITE_URL } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ImageViewer } from './ImageViewer'

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

const galleryImages = [
  {
    src: '/images/bandeirada-1.webp',
    alt: 'Captura de tela do evento Bandeirada',
  },
  {
    src: '/images/pool-party.png',
    alt: 'Captura de tela da festa na piscina',
  },
  {
    src: '/images/casamento-2017.png',
    alt: 'Evento de casamento de 2017',
  },
  {
    src: '/images/danca-das-cadeiras.png',
    alt: 'Evento do jogo dança das cadeiras',
  },
  {
    src: '/images/dance-club.webp',
    alt: 'Evento da boate',
  },
  {
    src: '/images/fashion-1-2-3-vai.gif',
    alt: 'Contagem regressiva do desfile de moda',
  },
  {
    src: '/images/fashion-fiu-fiu.gif',
    alt: 'Reações do desfile de moda',
  },
  {
    src: '/images/fashion-names.png',
    alt: 'Participantes do desfile de moda',
  },
]

export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <motion.div
        className="flex-1 space-y-6 md:max-w-[40%]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#e6d7c3]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Corvos de Efrim
        </motion.h1>
        <motion.p
          className="text-lg text-[#e6d7c3] opacity-90"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Uma guilda presente em Wakfu, Waven e outros jogos. Junte-se a nós em
          nossa jornada por aventuras e amizades duradouras!
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-[#a27a50] text-[#2a2a2a] px-6 py-3 rounded-full font-semibold text-lg transition-colors hover:bg-[#b28a60]"
          >
            <Link href="/recrutamento" className="focus-visible:outline-none">
              Junte-se a nós
            </Link>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-[#4a4a4a] text-[#e6d7c3] px-6 py-3 rounded-full font-semibold text-lg transition-colors hover:bg-[#5a5a5a]"
          >
            <Link
              href={DISCORD_INVITE_URL}
              className="focus-visible:outline-none"
            >
              Discord
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 relative w-full h-[300px] md:h-[400px] md:max-w-[60%]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ImageViewer
          images={galleryImages}
          width={800}
          height={600}
          variant="short"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2a2a2a] md:bg-none pointer-events-none" />
      </motion.div>
    </div>
  )
}
