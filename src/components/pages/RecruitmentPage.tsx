'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'

export function RecruitmentPage() {
  const guildGames = [
    {
      name: 'Waven',
      status: 'recrutando',
      color: 'bg-green-500',
      image: '/images/waven-logo.png',
      lightBackground: false,
      link: 'https://forum.waven-game.com/en/52-devblogs-pt/6112-guildas',
    },
    {
      name: 'Wakfu',
      status: 'pouco ativa',
      color: 'bg-orange-500',
      image: '/images/wakfu-logo-hd.png',
      lightBackground: false,
      link: 'https://www.wakfu.com/pt/forum/49-guildas/13189-guilda-corvos-efrim-2020',
    },
    {
      name: 'Dofus',
      status: 'inativo',
      color: 'bg-gray-500',
      image: '/images/dofus-logo.webp',
      lightBackground: false,
      link: '',
    },
    {
      name: 'New World',
      status: 'inativo',
      color: 'bg-gray-500',
      image: '/images/newworld-logo.png',
      lightBackground: true,
      link: '',
    },
    {
      name: 'Guild Wars 2',
      status: 'inativo',
      color: 'bg-gray-500',
      image: '/images/gw2-logo.png',
      lightBackground: true,
      link: '',
    },
    {
      name: 'Lost Ark',
      status: 'inativo',
      color: 'bg-gray-500',
      image: '/images/lostark-logo.ico',
      lightBackground: false,
      link: '',
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Junte-se aos Corvos</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Estamos sempre em busca de novos talentos para fortalecer nossa
          tripulação. Se você tem paixão por aventuras e trabalho em equipe,
          este é o seu lugar!
        </p>
      </section>

      <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#a27a50]">
            Recrutamento pelo Discord
          </CardTitle>
          <CardDescription className="text-lg text-[#e6d7c3]">
            Entre em nosso servidor do Discord para iniciar o processo de
            recrutamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            asChild
            variant="default"
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
          >
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span>Entrar no Discord</span>
              <FaDiscord className="w-6 h-6" />
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#a27a50]">
            Jogos da Guilda
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
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-[#a27a50] rounded-lg"
                    aria-label={`Ver página da guilda em ${game.name}`}
                  >
                    <Card className="bg-[#1f1f1f] border-none relative overflow-hidden group hover:scale-105 transition-transform duration-200 cursor-pointer">
                      <div
                        className={cn(
                          'absolute inset-0 opacity-90 transition-opacity duration-200',
                          game.status === 'recrutando' && 'bg-green-900',
                          game.status === 'pouco ativa' && 'bg-orange-900',
                          game.status === 'inativo' && 'bg-gray-900',
                        )}
                      />
                      <div
                        className={cn(
                          'absolute inset-0 opacity-0 transition-opacity duration-200',
                          game.status === 'recrutando' && 'bg-green-800',
                          game.status === 'pouco ativa' && 'bg-orange-800',
                          game.status === 'inativo' && 'bg-gray-800',
                          'group-hover:opacity-100',
                        )}
                      />
                      <div
                        className={cn(
                          'relative z-10 flex items-center gap-6 px-6 py-4',
                          game.status === 'inativo' && 'grayscale',
                        )}
                      >
                        <div
                          className={cn(
                            'w-16 h-16 relative flex-shrink-0',
                            game.lightBackground &&
                              'bg-gray-400 rounded-lg p-1',
                          )}
                        >
                          {game.image && (
                            <Image
                              src={game.image}
                              alt={`${game.name} logo`}
                              fill
                              className={cn(
                                'object-contain',
                                game.lightBackground && 'rounded-lg p-1',
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
                  </a>
                ) : (
                  <Card className="bg-[#1f1f1f] border-none relative overflow-hidden group">
                    <div
                      className={cn(
                        'absolute inset-0 opacity-90 transition-opacity duration-200',
                        game.status === 'recrutando' && 'bg-green-900',
                        game.status === 'pouco ativa' && 'bg-orange-900',
                        game.status === 'inativo' && 'bg-gray-900',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute inset-0 opacity-0 transition-opacity duration-200',
                        game.status === 'recrutando' && 'bg-green-800',
                        game.status === 'pouco ativa' && 'bg-orange-800',
                        game.status === 'inativo' && 'bg-gray-800',
                        'group-hover:opacity-100',
                      )}
                    />
                    <div
                      className={cn(
                        'relative z-10 flex items-center gap-6 px-6 py-4',
                        game.status === 'inativo' && 'grayscale',
                      )}
                    >
                      <div
                        className={cn(
                          'w-16 h-16 relative flex-shrink-0',
                          game.lightBackground && 'bg-gray-400 rounded-lg p-1',
                        )}
                      >
                        {game.image && (
                          <Image
                            src={game.image}
                            alt={`${game.name} logo`}
                            fill
                            className={cn(
                              'object-contain',
                              game.lightBackground && 'rounded-lg p-1',
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
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
