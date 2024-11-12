'use client'

import { GalleryViewer } from '@/components/GalleryViewer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { WavenRelatedPages } from '@/components/waven-related-pages'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import { guildGames } from '@/lib/data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import {
  Activity,
  Badge,
  Crown,
  Shield,
  Sword,
  Swords,
  TrendingUp,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
import { Button } from './ui/button'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export function WavenRecruitmentComponent() {
  const wavenGuildForumUrl =
    'https://forum.waven-game.com/en/52-devblogs-pt/6112-guildas'

  // Get Waven data from guildGames
  const wavenGame = guildGames.find((game) => game.name === 'Waven')

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 space-y-12"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      {/* Recrutamento (formerly Caminhos) */}
      <motion.div variants={fadeIn}>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#bf9b30] text-3xl">
              <Users className="h-8 w-8" />
              Recrutamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Solo Card */}
              <Card className="bg-[#1f1f1f] border-[#bf9b30]/20 hover:border-[#bf9b30] transition-colors flex flex-col">
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#bf9b30]/10 p-2 rounded-lg">
                        <Sword className="h-5 w-5 text-[#bf9b30]" />
                      </div>
                      <CardTitle className="text-[#bf9b30] text-base">
                        Solo
                      </CardTitle>
                    </div>
                    <p className="text-sm">
                      Descubra uma comunidade ativa de jogadores.
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <h4 className="text-[#bf9b30] text-sm">
                      Critérios de Avaliação
                    </h4>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                        Ex-corvo (prioridade total)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                        Data da Candidatura
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                        PdM (média 6k+)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                        Personagens nível 50
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                        Texto de apresentação
                      </li>
                    </ul>
                  </div>
                  <Button
                    asChild
                    variant="default"
                    className="w-full mt-auto bg-[#aad1de] hover:bg-[#8fbfd5] text-black"
                  >
                    <a
                      href={wavenGuildForumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <span>Candidatar-se</span>
                      {wavenGame?.image && (
                        <Image
                          src={wavenGame.image}
                          alt="Waven"
                          width={24}
                          height={24}
                          className={cn(
                            'object-contain',
                            wavenGame.lightBackground && 'invert brightness-0',
                          )}
                        />
                      )}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Group Card */}
              <Card className="bg-[#1f1f1f] border-[#bf9b30]/20 hover:border-[#bf9b30] transition-colors flex flex-col">
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#bf9b30]/10 p-2 rounded-lg">
                        <Swords className="h-5 w-5 text-[#bf9b30]" />
                      </div>
                      <CardTitle className="text-[#bf9b30] text-base">
                        Em Grupo
                      </CardTitle>
                    </div>
                    <p className="text-sm">
                      Jogue casualmente com seus amigos.
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <ul className="space-y-2 text-sm flex-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#bf9b30]" />
                      Prioridade na candidatura
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#bf9b30]" />
                      Conheça outros grupos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#bf9b30]" />
                      Convide amigos
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="default"
                    className="w-full mt-auto bg-[#5865F2] hover:bg-[#4752C4] text-white"
                  >
                    <a
                      href={DISCORD_INVITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <span>Entrar em contato</span>
                      <FaDiscord className="w-6 h-6" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Guild Merge Card */}
              <Card className="bg-[#1f1f1f] border-[#bf9b30]/20 hover:border-[#bf9b30] transition-colors flex flex-col">
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#bf9b30]/10 p-2 rounded-lg">
                        <Crown className="h-5 w-5 text-[#bf9b30]" />
                      </div>
                      <CardTitle className="text-[#bf9b30] text-base">
                        União de Guildas
                      </CardTitle>
                    </div>
                    <p className="text-sm">
                      Faça uma união estratégica com a Corvos.
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <ul className="space-y-2 text-sm flex-1">
                    {[
                      'Ajuda mútua',
                      'Bônus compartilhados',
                      'Discutido caso a caso',
                    ].map((text) => (
                      <li key={text} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#bf9b30]" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="default"
                    className="w-full mt-auto bg-[#5865F2] hover:bg-[#4752C4] text-white"
                  >
                    <a
                      href={DISCORD_INVITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <span>Entrar em contato</span>
                      <FaDiscord className="w-6 h-6" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Inactivity Policy Note */}
            <p className="text-center text-sm text-[#e6d7c3]/80">
              Em todos os casos os membros estão sujeitos à{' '}
              <a
                href="#politica-de-inatividade"
                className="text-[#bf9b30] hover:underline"
              >
                Política de Inatividade
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regras */}
      <motion.div variants={fadeIn}>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
              <Shield className="h-6 w-6" />
              Regras
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge className="border-[#bf9b30] text-[#bf9b30]">1</Badge>
                Respeitar os membros
              </li>
              <li className="flex items-center gap-2">
                <Badge className="border-[#bf9b30] text-[#bf9b30]">2</Badge>
                Ajudar com a progressão da guilda
              </li>
              <li className="flex items-center gap-2">
                <Badge className="border-[#bf9b30] text-[#bf9b30]">3</Badge>
                Ser removido em caso de inatividade
              </li>
              <li className="flex items-center gap-2">
                <Badge className="border-[#bf9b30] text-[#bf9b30]">4</Badge>
                Entrar no discord e alterar o seu nick pra ficar o mesmo do jogo
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Progressão */}
      <motion.div variants={fadeIn}>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
              <TrendingUp className="h-6 w-6" />
              Progressão
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-medium text-[#bf9b30] text-lg flex items-center gap-2">
              Tarefas
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                Marcar &ldquo;Presente&rdquo; no painel da guilda sempre que
                possível
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                Dar o seu melhor no saco de pancada &ldquo;Saka Batatauro&rdquo;
                semanalmente
              </li>
            </ul>

            <h3 className="font-medium text-[#bf9b30] text-lg flex items-center gap-2 pt-4">
              Recompensas
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                XP e Kamas
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                Loja diária na ilha da guilda
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                Até 900 runas semanais de acordo com ranking intra e entre
                guildas
              </li>
            </ul>

            <div className="flex justify-center">
              <GalleryViewer
                images={[
                  '/images/guild-start-1.png',
                  '/images/guild-start-2.png',
                ]}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Cargos */}
      <motion.div variants={fadeIn}>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
              <Users className="h-6 w-6" />
              Cargos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  title: 'Líder e Braço direito',
                  description:
                    'Membros ativos e experientes para liderar e organizar a guilda.',
                  icon: <Crown className="h-6 w-6" />,
                },
                {
                  title: 'Veterano',
                  description: 'Core da guilda',
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  title: 'Membro',
                  description: 'Cargo padrão',
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: 'Em Avaliação',
                  description:
                    'Jogadores recentes ou marcados para remoção por inatividade',
                  icon: <Activity className="h-6 w-6" />,
                },
              ].map((cargo) => (
                <div
                  key={cargo.title}
                  className="flex items-start gap-4 p-3 rounded-lg bg-[#1f1f1f] border border-[#bf9b30]/20"
                >
                  <div className="bg-[#bf9b30]/10 p-2 rounded-lg text-[#bf9b30] h-12 w-12 flex items-center justify-center">
                    {cargo.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-[#bf9b30]">
                      {cargo.title}
                    </h4>
                    <p className="text-sm">{cargo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Política de Inatividade */}
      <motion.div variants={fadeIn}>
        <Card
          id="politica-de-inatividade"
          className="bg-[#2a2a2a] text-[#e6d7c3]"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
              <Shield className="h-6 w-6" />
              Política de Inatividade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-medium text-[#bf9b30] text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Critérios de Inatividade
                </h3>
                <ul className="space-y-2">
                  {[
                    'Ausência no ranking semanal da guilda',
                    'Quantidade de PdM abaixo da média (6k+)',
                    'Futuramente: tempo offline (quando disponível no jogo)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-[#bf9b30] text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Importante saber
                </h3>
                <ul className="space-y-2">
                  {[
                    'Membros inativos podem ser removidos a qualquer momento',
                    'Ex-membros têm prioridade ao se candidatar novamente',
                    'Nosso limite de membros é 39 dos máximos 40',
                    'Se você foi removido por engano, entre em contato no Discord',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bf9b30]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Related Pages */}
      <motion.div variants={fadeIn}>
        <WavenRelatedPages currentPath="/jogos/waven/recrutamento" />
      </motion.div>
    </motion.div>
  )
}
