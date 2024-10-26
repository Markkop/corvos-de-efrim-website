'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FaDiscord } from 'react-icons/fa'

export function RecruitmentPage() {
  const guildGames = [
    { name: 'Waven', status: 'recrutando', color: 'bg-green-500' },
    { name: 'Wakfu', status: 'pouco ativa', color: 'bg-orange-500' },
    { name: 'Dofus', status: 'inativo', color: 'bg-gray-500' },
    { name: 'New World', status: 'inativo', color: 'bg-gray-500' },
    { name: 'Guild Wars 2', status: 'inativo', color: 'bg-gray-500' },
    { name: 'Lost Ark', status: 'inativo', color: 'bg-gray-500' },
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
              href="https://discord.gg/your-discord-invite-link"
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
              <Card key={game.name} className="bg-[#1f1f1f] border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-[#e6d7c3]">
                    {game.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="secondary"
                    className={`${game.color} text-white ${game.status === 'inativo' ? 'opacity-60' : ''}`}
                  >
                    {game.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
