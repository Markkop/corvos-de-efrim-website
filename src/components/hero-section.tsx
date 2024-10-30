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
    src: '/images/bandeirada-juramento-1.webp',
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
    src: '/images/dance-club-1.webp',
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
      <motion.div
        className="space-y-6"
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
            <Link
              href="/jogos"
              className="focus-visible:outline-none"
              tabIndex={0}
              aria-label="Junte-se à nossa guilda"
            >
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
              tabIndex={0}
              aria-label="Entre no nosso servidor Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="xl:col-span-2 relative w-full h-[300px] md:h-[400px]"
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
      </motion.div>
    </div>
  )
}
