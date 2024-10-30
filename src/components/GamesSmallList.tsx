'use client'

import { Card, CardContent } from '@/components/ui/card'
import { guildGames } from '@/lib/data'
import { cn } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export function GamesSmallList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
      <Card className="dark:bg-[#2a2a2a] text-[#e6d7c3]">
        <CardContent className="p-0">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {guildGames.map((game) => (
              <div key={game.name}>
                {game.name === 'Wakfu' ? (
                  <Link
                    href="/jogos/wakfu"
                    className="block focus:outline-none focus:ring-2 focus:ring-[#a27a50] rounded-lg"
                    aria-label={`Ver página da guilda em ${game.name}`}
                  >
                    <GameCard game={game} short />
                  </Link>
                ) : game.name === 'Waven' ? (
                  <Link
                    href="/jogos/waven"
                    className="block focus:outline-none focus:ring-2 focus:ring-[#a27a50] rounded-lg"
                    aria-label={`Ver página da guilda em ${game.name}`}
                  >
                    <GameCard game={game} short />
                  </Link>
                ) : game.link ? (
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-[#a27a50] rounded-lg"
                    aria-label={`Ver página da guilda em ${game.name}`}
                  >
                    <GameCard game={game} short />
                  </a>
                ) : (
                  <GameCard game={game} short />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface GameCardProps {
  game: (typeof guildGames)[0]
  short?: boolean
}

const GameCard = ({ game, short = false }: GameCardProps) => {
  return (
    <Card
      className={cn(
        'bg-[#1f1f1f] border-none relative overflow-hidden group',
        game.status !== 'inativo' &&
          'hover:scale-105 transition-transform duration-200',
        game.link && 'cursor-pointer',
      )}
    >
      <div
        className={cn(
          'absolute inset-0 opacity-90 transition-opacity duration-200',
          game.status === 'recrutando' && 'bg-green-900',
          game.status === 'pouco ativa' && 'bg-green-900',
          game.status === 'inativo' && 'bg-gray-900',
        )}
      />
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-200',
          game.status === 'recrutando' && 'bg-green-800',
          game.status === 'pouco ativa' && 'bg-green-800',
          game.status === 'inativo' && 'bg-gray-800',
          game.status !== 'inativo' && 'group-hover:opacity-100',
        )}
      />
      <div
        className={cn(
          'relative z-10 flex items-center gap-6',
          short ? 'p-4' : 'px-6 py-4',
          game.status === 'inativo' && 'grayscale',
        )}
      >
        <div
          className={cn(
            'relative flex-shrink-0',
            short ? 'w-full h-16' : 'w-16 h-16',
          )}
        >
          {game.image && (
            <Image
              src={game.image}
              alt={`${game.name} logo`}
              fill
              className={cn(
                'object-contain',
                game.lightBackground && 'invert brightness-0',
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={game.status === 'recrutando'}
            />
          )}
        </div>
      </div>
    </Card>
  )
}
