'use client'

import { ComparisonTable } from '@/components/ComparisonTable'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { guildGames } from '@/lib/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function GamesPage() {
  const featuredGames = [
    {
      name: 'Wakfu',
      description: 'MMORPG tático onde nossa história começou em 2014.',
      image: '/images/wakfu-logo-hd.png',
      href: '/jogos/wakfu',
      features: ['História', 'Galeria'],
    },
    {
      name: 'Waven',
      description: 'O novo jogo da Ankama onde estamos desde o beta.',
      image: '/images/waven-logo.png',
      href: '/jogos/waven',
      features: ['Builds', 'Recrutamento', 'Galeria'],
    },
    {
      name: 'Dofus 3.0',
      description: 'O queridinho agora em Unity! Bora testar?',
      image: '/images/dofus-logo.webp',
      href: '/jogos/dofus',
      features: ['Membros', 'Recrutamento'],
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Nossos Jogos</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça os jogos onde a Corvos de Efrim está presente e faça parte de
          nossas aventuras.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredGames.map((game) => (
          <Link key={game.name} href={game.href}>
            <Card className="bg-[#2a2a2a] text-[#e6d7c3] h-full hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <CardTitle className="text-3xl">{game.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">{game.description}</p>
                <div className="flex flex-wrap gap-2">
                  {game.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-[#bf9b30] text-[#2a2a2a] px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#a27a50]">
            Status nos Jogos
          </CardTitle>
          <CardDescription className="text-lg text-[#e6d7c3]">
            Lista de jogos em que a Corvos de Efrim está presente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guildGames.map((game) => (
              <div key={game.name}>
                {game.link ? (
                  game.link.startsWith('http') ? (
                    <a
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus:ring-2 focus:ring-[#a27a50] rounded-lg"
                      aria-label={`Ver página da guilda em ${game.name}`}
                    >
                      <GameCard game={game} />
                    </a>
                  ) : (
                    <Link
                      href={game.link}
                      className="block focus:outline-none focus:ring-2 focus:ring-[#a27a50] rounded-lg"
                      aria-label={`Ver página da guilda em ${game.name}`}
                    >
                      <GameCard game={game} />
                    </Link>
                  )
                ) : (
                  <GameCard game={game} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#2a2a2a] text-[#e6d7c3] w-full lg:w-2/3 mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#a27a50]">
            Comparativo
          </CardTitle>
          <CardDescription className="text-lg text-[#e6d7c3]">
            Compare as características de cada jogo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ComparisonTable />
        </CardContent>
      </Card>
    </div>
  )
}

interface GameCardProps {
  game: (typeof guildGames)[0]
}

const GameCard = ({ game }: GameCardProps) => {
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
          game.status === 'existindo' && 'bg-green-900',
          game.status === 'inativo' && 'bg-gray-900',
        )}
      />
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-200',
          game.status === 'recrutando' && 'bg-green-800',
          game.status === 'pouco ativa' && 'bg-green-800',
          game.status === 'existindo' && 'bg-green-800',
          game.status === 'inativo' && 'bg-gray-800',
          game.status !== 'inativo' && 'group-hover:opacity-100',
        )}
      />
      <div
        className={cn(
          'relative z-10 flex items-center gap-6 px-6 py-4',
          game.status === 'inativo' && 'grayscale',
        )}
      >
        <div className="relative flex-shrink-0 w-16 h-16">
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
        <div className="flex-1">
          <CardHeader className="pb-2 p-0">
            <CardTitle className="text-xl font-semibold text-[#e6d7c3]">
              {game.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <span className="text-sm text-[#e6d7c3]/80 capitalize">
              {game.status}
            </span>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
