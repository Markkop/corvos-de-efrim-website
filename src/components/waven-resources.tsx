'use client'

import { ExternalLink, Youtube } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { DISCORD_INVITE_URL, YOUTUBE_CHANNEL_URL } from '@/lib/constants'

export function WavenResources() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 p-4 md:p-8">
      <section className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-[#2a2a2a] text-[#e6d7c3] border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
                Sites de Builds
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-left">
              <TooltipProvider>
                <div className="grid gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://www.waven-build.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between rounded-lg border border-[#e6d7c3]/20 p-4 transition-colors hover:bg-[#1f1f1f]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="space-y-1">
                            <p className="font-medium leading-none text-[#e6d7c3]">
                              waven-build
                            </p>
                            <p className="text-sm text-[#e6d7c3]/80">
                              Mais atualizado e com a melhor interface, porém
                              apenas em francês
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#e6d7c3]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Abrir Waven Build</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://wavendb.com/builds"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg border border-[#e6d7c3]/20 p-4 transition-colors hover:bg-[#1f1f1f]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="space-y-1">
                            <p className="font-medium leading-none text-[#e6d7c3]">
                              wavendb
                            </p>
                            <p className="text-sm text-[#e6d7c3]/80">
                              Tem pesquisa por equipamento e nomes PT-BR, mas
                              não é tão atualizado
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#e6d7c3]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Abrir wavendb</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a2a] text-[#e6d7c3] border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
                <Youtube className="h-5 w-5 text-red-500" />
                Canais com builds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: 'Corvos de Efrim',
                    url: YOUTUBE_CHANNEL_URL,
                    subscribers: '420',
                  },
                  {
                    name: 'Kotocaao',
                    url: 'https://www.youtube.com/@kotocaao',
                    subscribers: '2.7K',
                  },
                  {
                    name: 'FatRatz',
                    url: 'https://www.youtube.com/@FatRatzv1',
                    subscribers: '6.7K',
                  },
                  {
                    name: 'Ampheur',
                    url: 'https://www.youtube.com/@Ampheur',
                    subscribers: '2.6K',
                  },
                  {
                    name: 'UltimaLordKnight',
                    url: 'https://www.youtube.com/@ultimalordknight',
                    subscribers: '3.9K',
                  },
                  {
                    name: 'Rox19',
                    url: 'https://www.youtube.com/@Rox19.01',
                    subscribers: '2.0K',
                  },
                ].map((channel) => (
                  <Link
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-colors hover:bg-[#1f1f1f]"
                  >
                    <span className="font-medium group-hover:underline text-[#e6d7c3]">
                      {channel.name}
                    </span>
                    <span className="text-sm text-[#e6d7c3]/80">
                      {channel.subscribers} inscritos
                    </span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#2a2a2a] text-[#e6d7c3] border-none">
          <CardHeader>
            <CardTitle className="text-[#bf9b30]">
              Comunidades no Discord
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: 'Waven Oficial',
                  url: 'https://discord.gg/ftHextD',
                  members: '4,243',
                  description: 'Servidor oficial do Waven',
                },
                {
                  name: 'Waven Resources',
                  url: 'https://discord.gg/waven-ressources-1234600761212534914',
                  members: '1,450',
                  description: 'Em francês',
                },
                {
                  name: 'Corvos de Efrim',
                  url: DISCORD_INVITE_URL,
                  members: '465',
                  description: 'Discord oficial da guilda',
                },
              ].map((server) => (
                <div
                  key={server.name}
                  className="flex flex-col items-center gap-4 rounded-lg border border-[#e6d7c3]/20 p-6 text-center bg-[#1f1f1f]"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[#e6d7c3]">
                      {server.name}
                    </h3>
                    <p className="text-sm text-[#e6d7c3]/80">
                      {server.description}
                    </p>
                  </div>
                  <p className="text-sm text-[#e6d7c3]">
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500 mr-2" />
                    {server.members} membros
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#e6d7c3]/20 hover:bg-[#2a2a2a] text-[#e6d7c3]"
                  >
                    <Link
                      href={server.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Entrar no Servidor
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
