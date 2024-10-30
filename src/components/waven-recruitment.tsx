'use client'

import { ImageViewer } from '@/components/ImageViewer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import { guildGames } from '@/lib/data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Activity, Shield, UserPlus, Users } from 'lucide-react'
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
      <motion.section className="text-center mb-8" variants={fadeIn}>
        <h1 className="text-5xl font-bold mb-4 ">Regras - Waven</h1>
        <p className="text-xl">Ao entrar na guilda você concorda em:</p>
      </motion.section>

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
                <Badge
                  variant="outline"
                  className="border-[#bf9b30] text-[#bf9b30]"
                >
                  1
                </Badge>
                Respeitar os membros
              </li>
              <li className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-[#bf9b30] text-[#bf9b30]"
                >
                  2
                </Badge>
                Ajudar com a progressão da guilda
              </li>
              <li className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-[#bf9b30] text-[#bf9b30]"
                >
                  3
                </Badge>
                Ser removido em caso de inatividade
              </li>
              <li className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-[#bf9b30] text-[#bf9b30]"
                >
                  4
                </Badge>
                Entrar no discord e alterar o seu nick pra ficar o mesmo do jogo
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeIn}>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
              <Activity className="h-6 w-6" />
              Progressão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Para contribuir com a progressão da guilda você deve marcar
              &ldquo;Presente&rdquo; no painel da guilda sempre que possível.
              Também deve contribuir semanalnte para o saco de pancada
              &ldquo;Saka Batatauro&rdquo;.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <ImageViewer
                images={[
                  {
                    src: '/images/guild-start-4.png',
                    alt: 'Saka Batatauro',
                  },
                ]}
                width={300}
                height={200}
                className="w-[300px]"
              />

              <ImageViewer
                images={[
                  {
                    src: '/images/guild-start-2.png',
                    alt: 'Saka Batatauro',
                  },
                ]}
                width={300}
                height={200}
                className="w-[300px]"
              />
              <ImageViewer
                images={[
                  {
                    src: '/images/guild-start-1.png',
                    alt: 'Saka Batatauro',
                  },
                ]}
                width={300}
                height={200}
                className="w-[300px]"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeIn}>
        <Accordion
          type="single"
          collapsible
          className="bg-[#2a2a2a] text-[#e6d7c3] rounded-lg"
        >
          <AccordionItem value="item-1" className="border-[#bf9b30]/20">
            <AccordionTrigger className="hover:text-[#bf9b30] px-6">
              Política de Inatividade
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <p className="mb-4">
                Atualmente o limite de membros de guilda no Waven é 40 e
                precisamos estar constantemente removendo jogadores inativos
                para manter a evolução da guilda, então pedimos para que você
                entenda que removeremos os jogadores da guilda com base nos
                seguintes critérios:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  Tempo sem entrar no jogo* (atualmente não tem como saber)
                </li>
                <li>Cargo (Em Avaliação/Membro/Veterano)</li>
                <li>Quantidade de PdM</li>
                <li>Nível e quantidade dos personagens</li>
              </ul>
              <p className="mb-4">
                O tempo exato vai depender do fluxo de membros em um dado
                momento, podendo variar de dias para semanas. Jogadores
                removidos sempre podem se candidatar novamente, e tendo espaço
                na guilda eles são imediatamente aceitos.
              </p>
              <p>
                Se por ventura você removido erroneamente, por favor entre em
                contato no discord, ás vezes acontece.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      <motion.div variants={fadeIn}>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
              <UserPlus className="h-6 w-6" />
              Recrutamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Candidate-se pelo painel de guilda, entre no discord e atualize
              seu nick para ficar igual a que tá no waven. Em caso de lotação,
              seguraremos a candidatura até liberar espaço na guilda e
              entenderemos caso entre em outra guilda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-[#aad1de] hover:bg-[#8fbfd5] text-black"
              >
                <a
                  href={wavenGuildForumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <span>Como se candidatar</span>
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
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeIn}>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
              <Users className="h-6 w-6" />
              Cargos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Badge
                  variant="secondary"
                  className="mt-1 bg-[#bf9b30] text-[#2a2a2a]"
                >
                  Líder e Braço direito
                </Badge>
                <span>
                  Jogadores mais ativo e experiente afim de organizar e
                  progredir a guilda.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge
                  variant="secondary"
                  className="mt-1 bg-[#bf9b30] text-[#2a2a2a]"
                >
                  Veterano
                </Badge>
                <span>Jogadores conhecidos na guilda</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge
                  variant="secondary"
                  className="mt-1 bg-[#bf9b30] text-[#2a2a2a]"
                >
                  Membro
                </Badge>
                <span>
                  Jogadores com mais de 2000 PdM e de 3k de dano no Saka
                  Batatauro
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge
                  variant="secondary"
                  className="mt-1 bg-[#bf9b30] text-[#2a2a2a]"
                >
                  Em Avaliação
                </Badge>
                <span>Jogadores novatos na guilda</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
