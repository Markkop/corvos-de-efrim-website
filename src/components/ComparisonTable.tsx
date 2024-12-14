'use client'

import { cn } from '@/lib/utils'
import {
  ArrowUpDown,
  Backpack,
  Badge,
  ChevronDown,
  Clock,
  Hammer,
  Palette,
  RefreshCcw,
  ScrollText,
  Smartphone,
  Sword,
  Swords,
  TrendingUp,
  Trophy,
  User,
  Users2,
  Wrench,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ComparisonRow {
  title: string
  scores: Record<string, number>
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const comparisonData: ComparisonRow[] = [
  {
    title: 'Gráficos',
    icon: Palette,
    scores: { dofus: 2, wakfu: 1, waven: 3 },
    description:
      'Waven é o que tem gráfico e animações modernas. O gráfico de Wakfu não é ruim, mas tá ficando defasado. Dofus tende a melhorar agora com engine nova.',
  },
  {
    title: 'Progressão',
    icon: TrendingUp,
    scores: { dofus: 2, wakfu: 1, waven: 3 },
    description:
      'No Waven a progressão é mais fácil, mas com menos sentimento de evolução. No Dofus e Wakfu a progressão é lenta, sendo que Dofus parece depender muito de quest.',
  },
  {
    title: 'Questing',
    icon: ScrollText,
    scores: { dofus: 3, wakfu: 2, waven: 1 },
    description:
      'No Waven, cada missão é uma luta, o que é bom pra um jogo casual e dinâmico, mas não agrega profundidade. No Dofus e Wakfu há várias missões para fazer.',
  },
  {
    title: 'Dungeon',
    icon: Swords,
    scores: { dofus: 2, wakfu: 3, waven: 1 },
    description:
      'Há várias considerações aqui. No Waven, as dungeons tem 4 salas e tendem a ser mais fáceis e rápidas, porém com menos mecânicas e incentivos. No Wakfu, há alta rejogabilidade e variedade de mecânicas, mas elas são bem demoradas e precisam de grupo.',
  },
  {
    title: 'Guilds',
    icon: Badge,
    scores: { dofus: 2, wakfu: 3, waven: 1 },
    description:
      'Waven não tem quase nada de gulda (ainda?). No Wakfu dá pra personalizar cargos e gerenciar Mundo Seguro (mapa da guilda). No Dofus, há pouco conteúdo de guilda, mas lá tem alianças que seria um tipo de GxG.',
  },
  {
    title: 'Builds',
    icon: Wrench,
    scores: { dofus: 2, wakfu: 1, waven: 3 },
    description:
      'Aqui vamos considerar diversidade de builds e facilidade de mudar/testar builds. No Waven, há uma variedade de builds e dá pra compartilhar equipamentos entre os personagens. No Dofus, dá pra fazer build boa facilmente. Já no Wakfu, as sublimações agregam bastante, mas exigem muito esforço.',
  },
  {
    title: 'Grind/Farm',
    icon: Clock,
    scores: { dofus: 3, wakfu: 2, waven: 1 },
    description:
      'O grind no Waven é triste, uma vez que o jogador é limitado pela rotação diária dos drops. No Wakfu e no Dofus o grind é bastante extenso, mas no Dofus dá pra solar muito mais.',
  },
  {
    title: 'Solo',
    icon: User,
    scores: { dofus: 3, wakfu: 1, waven: 2 },
    description:
      'Dofus dá pra evoluir bastante jogando sozinho, principalmente fazendo quest e sucesso (conquista). No Waven, jogar em grupo pode até ser mais lento e difícil. No Wakfu, muita coisa vai precisar de grupo.',
  },
  {
    title: 'Em Grupo',
    icon: Users2,
    scores: { dofus: 2, wakfu: 3, waven: 1 },
    description:
      'Waven o máximo em um grupo atualmente é 3 e tem pouco conteúdo que precisa. No Dofus e principalmente no Wakfu, há bastante.',
  },
  {
    title: 'End Game',
    icon: Trophy,
    scores: { dofus: 2, wakfu: 3, waven: 1 },
    description:
      'Waven tem pouco conteúdo endgame por enquanto. Dofus e Wakfu tem bastante, mas Wakfu parece ter mais.',
  },
  {
    title: 'PvP',
    icon: Sword,
    scores: { dofus: 3, wakfu: 2, waven: 1 },
    description:
      'Waven até tem, mas está abandonado. Wakfu tem, mas num formato de campo de batalha que exige um servidor ativo e grande organização. Já o Koliseu do Dofus é o mais divertido e consistente.',
  },
  {
    title: 'Inventário',
    icon: Backpack,
    scores: { dofus: 2, wakfu: 1, waven: 3 },
    description:
      'Waven: não tem inventário. Dofus: o inventário é um só, com uma certa limitação de espaço (pods). Wakfu: precisa gerenciar o tempo todo e aumentar os slots com bags',
  },
  {
    title: 'Rejogabilidade',
    icon: RefreshCcw,
    scores: { dofus: 2, wakfu: 3, waven: 1 },
    description:
      'No Waven, exceto por daily, não há incentivo para repetir conteúdo. No Wakfu, é possível ajustar o nível para + drop/xp/dificuldade, além de ter sistema de mentoria. No Dofus, exceto por sucesso (conquista), não há muito incentivo para repetir conteúdo.',
  },
  {
    title: 'Profissão',
    icon: Hammer,
    scores: { dofus: 2, wakfu: 3, waven: 1 },
    description:
      'No Waven não tem nada de profissão. No Wakfu e Dofus há bastante, sendo que no Wakfu há bastante espaço para otimização.',
  },
  {
    title: 'Crossplay',
    icon: Smartphone,
    scores: { dofus: 2, wakfu: 1, waven: 3 },
    description:
      'Todos os jogos rodam em Windows, Mac e Linux. Waven roda em Android e iOS (quem sabe console no futuro?). Dofus promete lançar pra mobile em breve.',
  },
]

export const ComparisonTable = () => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const [expandAll, setExpandAll] = useState(false)
  const [sortConfig, setSortConfig] = useState<{
    key: string | null
    direction: 'asc' | 'desc' | null
  }>({ key: null, direction: null })

  const handleExpandAll = () => {
    if (expandAll) {
      setExpandedRow(null)
    } else {
      setExpandedRow('all')
    }
    setExpandAll(!expandAll)
  }

  const handleRowClick = (title: string) => {
    if (expandedRow === 'all') {
      setExpandedRow(title)
      setExpandAll(false)
      return
    }
    setExpandedRow(expandedRow === title ? null : title)
  }

  const handleSort = (game: string) => {
    setSortConfig((currentSort) => {
      if (currentSort.key === game) {
        if (currentSort.direction === 'asc') {
          return { key: game, direction: 'desc' }
        }
        if (currentSort.direction === 'desc') {
          return { key: null, direction: null }
        }
      }
      return { key: game, direction: 'asc' }
    })
  }

  const sortedData = [...comparisonData].sort((a, b) => {
    if (!sortConfig.key || !sortConfig.direction) return 0

    const aScore = a.scores[sortConfig.key]
    const bScore = b.scores[sortConfig.key]

    if (sortConfig.direction === 'asc') {
      return aScore - bScore
    }
    return bScore - aScore
  })

  const calculateTotals = () => {
    return ['dofus', 'wakfu', 'waven'].reduce(
      (acc, game) => {
        acc[game] = comparisonData.reduce(
          (sum, row) => sum + row.scores[game],
          0,
        )
        return acc
      },
      {} as Record<string, number>,
    )
  }

  const totals = calculateTotals()

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#3a3a3a]">
            <th className="p-2 text-center">
              <div
                className="flex items-center gap-2 cursor-pointer group"
                onClick={handleExpandAll}
              >
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    expandAll && 'rotate-180',
                  )}
                />
                <span className="text-sm text-[#e6d7c3]/70 group-hover:text-[#e6d7c3]">
                  {expandAll ? 'Recolher' : 'Expandir'}
                </span>
              </div>
            </th>
            {[
              { id: 'dofus', logo: '/images/dofus-logo.webp' },
              { id: 'wakfu', logo: '/images/wakfu-logo-hd.png' },
              { id: 'waven', logo: '/images/waven-logo.png' },
            ].map((game) => (
              <th
                key={game.id}
                className="p-0.5 sm:p-2 cursor-pointer group"
                onClick={() => handleSort(game.id)}
              >
                <div className="flex text-center items-center justify-center gap-0.5 sm:gap-2">
                  <div className="flex flex-col items-center">
                    <Image
                      src={game.logo}
                      alt={game.id}
                      width={28}
                      height={28}
                      className="w-7 h-7 sm:w-8 sm:h-8"
                    />
                    <div className="hidden sm:flex items-center gap-1">
                      <span className="text-sm sm:text-base capitalize">
                        {game.id}
                      </span>
                      <ArrowUpDown
                        className={cn(
                          'h-3 w-3 transition-colors',
                          sortConfig.key === game.id
                            ? 'text-[#e6d7c3]'
                            : 'text-[#e6d7c3]/50 group-hover:text-[#e6d7c3]',
                          sortConfig.key === game.id &&
                            sortConfig.direction === 'desc' &&
                            'rotate-180',
                        )}
                      />
                    </div>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <>
              <tr
                key={row.title}
                onClick={() => handleRowClick(row.title)}
                className="border-b border-[#3a3a3a] hover:bg-[#3a3a3a] cursor-pointer group"
              >
                <td className="p-1 sm:p-2 flex items-center gap-1 sm:gap-2">
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      expandedRow === row.title && 'rotate-180',
                    )}
                  />
                  <row.icon className="h-4 w-4 text-[#e6d7c3]/70" />
                  <span className="flex-1 text-xs sm:text-sm">{row.title}</span>
                </td>
                {['dofus', 'wakfu', 'waven'].map((game) => (
                  <td key={game} className="p-1 sm:p-2 text-center relative">
                    <div
                      className={cn(
                        'absolute inset-y-0 right-0 w-12 transition-opacity duration-200 hidden sm:block',
                        expandedRow === row.title
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-10',
                      )}
                    >
                      <Image
                        src={
                          game === 'dofus'
                            ? '/images/dofus-logo.webp'
                            : game === 'wakfu'
                              ? '/images/wakfu-logo-hd.png'
                              : '/images/waven-logo.png'
                        }
                        alt=""
                        fill
                        className="object-contain py-1"
                      />
                    </div>
                    <span
                      className={cn(
                        'text-base sm:text-lg font-bold px-1.5 sm:px-2 py-0.5 rounded-full relative z-10',
                        row.scores[game] === 3 &&
                          'bg-green-800/50 text-green-400',
                        row.scores[game] === 2 &&
                          'bg-yellow-800/50 text-yellow-400',
                        row.scores[game] === 1 && 'bg-red-800/50 text-red-400',
                      )}
                    >
                      {row.scores[game]}
                    </span>
                  </td>
                ))}
              </tr>
              <tr className="bg-[#1f1f1f]">
                <td colSpan={4}>
                  <div
                    className={cn(
                      'grid transition-all duration-200 ease-in-out',
                      expandedRow === row.title || expandedRow === 'all'
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="p-2 text-[#e6d7c3]/80 text-sm">
                        {row.description}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          ))}
          <tr className="border-t-2 border-[#3a3a3a] font-bold">
            <td className="p-2 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-[#e6d7c3]" />
              <span className="flex-1 text-sm">Total</span>
            </td>
            {['dofus', 'wakfu', 'waven'].map((game) => {
              const total = totals[game]
              const maxTotal = Math.max(...Object.values(totals))
              return (
                <td key={game} className="p-2 text-center">
                  <span
                    className={cn(
                      'text-lg font-bold px-2 py-0.5 rounded-full',
                      total === maxTotal && 'bg-green-800/50 text-green-400',
                      total === maxTotal - 1 &&
                        'bg-yellow-800/50 text-yellow-400',
                      total < maxTotal - 1 && 'bg-red-800/50 text-red-400',
                    )}
                  >
                    {total}
                  </span>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
