'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  Check,
  Clock,
  Coins,
  Copy,
  DollarSign,
  GamepadIcon,
  Heart,
  Info,
  Shield,
  Users2,
} from 'lucide-react'
import { useState } from 'react'

export default function SobrePage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('127278')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-12">
      <div className="relative w-full aspect-video max-w-4xl mx-auto mb-16">
        <iframe
          src="https://www.youtube.com/embed/BALl3eIYQ7U"
          title="Go Go Muffin Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-xl"
        />
      </div>

      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Go Go Muffin</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Um jogo idle com elementos gacha onde o foco é a progressão gradual e
          jogar com amigos, sem a pressão de competir ou gastar.
        </p>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-amber-500">
              <Info className="h-6 w-6" />
              Expectativas e Realidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Go Go Muffin é um jogo idle com elementos pay-to-win. É importante
              entender que:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-amber-500" />
                </div>
                <span>
                  Você nunca alcançará jogadores que gastam dinheiro ou jogam há
                  mais tempo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Coins className="h-5 w-5 text-amber-500" />
                </div>
                <span>
                  O jogo é projetado para incentivar gastos constantes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-amber-500" />
                </div>
                <span>
                  A diversão real está em progredir com amigos, não em competir
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <GamepadIcon className="h-5 w-5 text-amber-500" />
                </div>
                <span>
                  Você pode aproveitar 100% do jogo sem gastar um centavo
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-amber-500">
              <Shield className="h-6 w-6" />
              Guilda Corvos de Efrim
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Nossa guilda está estabelecida no{' '}
              <span className="font-bold text-amber-500">Servidor 1</span>,
              onde:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Users2 className="h-5 w-5 text-amber-500" />
                </div>
                <span>A comunidade já está estabelecida e ativa</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
                <span>Não há pressão por eventos iniciais de servidor</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-amber-500" />
                </div>
                <span>Jogadores podem entrar a qualquer momento</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <GamepadIcon className="h-5 w-5 text-amber-500" />
                </div>
                <span>Não existe cobrança de participação diária</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Info className="h-5 w-5 text-amber-500" />
                </div>
                <span className="flex items-center gap-2">
                  Procure por Guild ID{' '}
                  <span className="font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded text-zinc-400 inline-flex items-center gap-1.5">
                    127278
                    <button
                      onClick={handleCopy}
                      className="hover:text-zinc-200 transition-colors"
                      aria-label="Copiar ID da guilda"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </span>
                  , precisa de nível 15
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-amber-500">
              <AlertTriangle className="h-6 w-6" />
              Combatendo o FOMO
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              FOMO (Fear of Missing Out) é uma mecânica central do jogo, mas nós
              escolhemos jogar diferente:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Ignore eventos temporários sem medo</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>
                  Jogue quando quiser - uma vez por dia, semana ou mês
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Foque em se divertir, não em competir</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Participe de atividades em grupo quando puder</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-amber-500">
              <GamepadIcon className="h-6 w-6" />
              Sugestões de Gameplay
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Dicas para aproveitar melhor o jogo e manter uma experiência
              saudável:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>
                  Jogue ativamente até o nível 10 para liberar o modo automático
                  de skills
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>
                  Concentre o resgate de recompensas (daily, login, conquistas)
                  em um único momento do dia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>
                  Ignore as notificações vermelhas constantes para reduzir
                  ansiedade e FOMO
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>
                  Priorize alcançar o nível 15 para se juntar à nossa guilda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>
                  Escolha um parceiro fixo para Co-op, preferencialmente alguém
                  que você conhece
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>
                  Evite otimização constante (min-max) - reserve para momentos
                  específicos
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
