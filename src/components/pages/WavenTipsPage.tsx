'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { WavenDailyQuestsTable } from '@/components/waven-daily-quests-table'
import {
  ArrowRightCircle,
  Book,
  Coins,
  GamepadIcon,
  HelpCircle,
  Layers,
  Library,
  MousePointer2,
  PiggyBank,
  Puzzle,
  Sun,
  Target,
  Wand2,
  Warehouse,
} from 'lucide-react'
import { FaEarlybirds, FaSkull } from 'react-icons/fa'
import { FaVolcano } from 'react-icons/fa6'
import {
  GiBugleCall,
  GiBullHorns,
  GiSheep,
  GiStoneBlock,
  GiVampireDracula,
} from 'react-icons/gi'

type DailyChallengeType =
  | 'vampire'
  | 'whisperer'
  | 'pig'
  | 'taur'
  | 'tofu'
  | 'gobbal'
  | 'sheep'
  | 'bwork'
  | 'help'
  | 'crackler'
  | 'chafer'
interface DailyChallenge {
  name: string
  goal: string
  levels: number[]
  type: DailyChallengeType
}

const getDailyChallengeIcon = (type: DailyChallengeType) => {
  const icons = {
    vampire: <GiVampireDracula className="h-5 w-5 text-amber-500" />,
    whisperer: <GiBugleCall className="h-5 w-5 text-amber-500" />,
    pig: <PiggyBank className="h-5 w-5 text-amber-500" />,
    taur: <GiBullHorns className="h-5 w-5 text-amber-500" />,
    tofu: <FaEarlybirds className="h-5 w-5 text-amber-500" />,
    gobbal: <GiSheep className="h-5 w-5 text-amber-500" />,
    bwork: <FaVolcano className="h-5 w-5 text-amber-500" />,
    crackler: <GiStoneBlock className="h-5 w-5 text-amber-500" />,
    chafer: <FaSkull className="h-5 w-5 text-amber-500" />,
    help: <HelpCircle className="h-5 w-5 text-amber-500" />,
  }
  return icons[type]
}

const dailyLevels: DailyChallenge[] = [
  {
    name: 'Sangue nos Olhos',
    goal: 'Derrote um Vampyro Bestial por último',
    levels: [118, 98, 78, 58, 38, 18],
    type: 'vampire',
  },
  {
    name: 'Querendo compensar',
    goal: 'Elimine um Sussurador Perna-de-Pau quando ele estiver defasado',
    levels: [108, 88, 68, 48, 28, 8],
    type: 'whisperer',
  },
  {
    name: 'De porco tudo se aproveita',
    goal: 'Elimine um Soldado Suinocivo primeiro',
    levels: [118, 98, 78, 58, 38, 18],
    type: 'pig',
  },
  {
    name: 'Ela está morta, Adela',
    goal: 'Elimine uma Mortadella primeiro',
    levels: [118, 98, 78, 58, 38, 18],
    type: 'pig',
  },
  {
    name: 'Taurtura',
    goal: 'Elimine um Taurrida com um ataque',
    levels: [120, 100, 80, 60, 40, 20],
    type: 'taur',
  },
  {
    name: 'Tofuliche',
    goal: 'Elimine duas Hordas no mesmo combate',
    levels: [120, 100, 80, 60, 40, 20],
    type: 'tofu',
  },
  {
    name: 'Regime Forçado',
    goal: 'Elimine um Tofu Pânceps primeiro',
    levels: [116, 96, 76, 56, 36, 16],
    type: 'tofu',
  },
  {
    name: 'Medida Sanitária',
    goal: 'Elimine 3 Pupulgas no mesmo turno.',
    levels: [120, 100, 80, 60, 40, 20],
    type: 'gobbal',
  },
  {
    name: 'Boa lã para velhos ossos',
    goal: 'Elimine uma Papatudette por último',
    levels: [116, 96, 76, 56, 36, 16],
    type: 'gobbal',
  },
  {
    name: 'Aos pequenos, pequenas coisas',
    goal: 'Elimine um Sussurrador Balista por último',
    levels: [114, 94, 74, 54, 34, 14],
    type: 'whisperer',
  },
  {
    name: 'Eliminando a Fonte',
    goal: 'Elimine uma Bworka  por último',
    levels: [116, 96, 76, 56, 36, 16],
    type: 'bwork',
  },
  {
    name: 'The Rock That Cracks',
    goal: 'Eliminate a Crackrock first',
    levels: [120, 100, 80, 60, 40, 20],
    type: 'crackler',
  },
  {
    name: 'É hora de depenar geral!',
    goal: 'Eliminate a Tofuna por último',
    levels: [112, 92, 72, 52, 32, 12],
    type: 'tofu',
  },
  {
    name: 'Esmigalhamento de Smagalhadores',
    goal: 'Elimine um Smagalhador sem que sua equipe sofra Fratura.',
    levels: [114, 94, 74, 54, 34, 14],
    type: 'crackler',
  },
  {
    name: 'Tauríveis Tauros',
    goal: 'Elimine um Pubertauro primeiro.',
    levels: [116, 96, 76, 56, 36, 16],
    type: 'taur',
  },
  {
    name: 'Caça Selvagem',
    goal: 'Elimine 2 Vampyros Selvagens no mesmo turno.',
    levels: [106, 86, 66, 46, 26, 6],
    type: 'vampire',
  },
  {
    name: 'Cada um com sua Muumãe',
    goal: 'Elimine uma Muumãe por último.',
    levels: [118, 98, 78, 58, 38, 18],
    type: 'taur',
  },
  {
    name: 'Regulação',
    goal: 'Elimine 2 Tofuzinhos no mesmo combate',
    levels: [114, 94, 74, 54, 34, 14],
    type: 'tofu',
  },
  {
    name: 'Fisicultaurista',
    goal: 'Vença um combate com Fortauros sem sofrer uma Investida',
    levels: [110, 90, 70, 50, 30, 10],
    type: 'taur',
  },
  {
    name: 'Dessussurramento',
    goal: 'Elimine um Sentinela Smagado primeiro',
    levels: [120, 100, 80, 60, 40, 20],
    type: 'whisperer',
  },
  {
    name: 'Sem Descanso para os Malditos',
    goal: 'Destrua um Caixão',
    levels: [110, 90, 70, 50, 30, 10],
    type: 'vampire',
  },
  {
    name: 'Nem um Ruído',
    goal: 'Elimine 2 Sussurradores de Infantaria no mesmo turno',
    levels: [112, 92, 72, 52, 32, 12],
    type: 'whisperer',
  },
  {
    name: 'Os Três Porquinhos Feios',
    goal: 'Elimine um Discípulo Leitão por último',
    levels: [114, 94, 74, 54, 34, 14],
    type: 'pig',
  },
  {
    name: 'Ossos do Ofício',
    goal: 'Elimine 3 Amortos no mesmo combate',
    levels: [106, 86, 66, 46, 26, 6],
    type: 'chafer',
  },
  {
    name: 'Contribua!',
    goal: 'Se você tiver uma dica como essas, mande no nosso Discord',
    levels: [],
    type: 'help',
  },
]

// Sort dailyLevels alphabetically by type, keeping 'help' type at the end
const sortedDailyLevels = [...dailyLevels].sort((a, b) => {
  if (a.type === 'help') return 1
  if (b.type === 'help') return -1
  return a.type.localeCompare(b.type)
})

export function WavenTipsPage() {
  const resources = [
    {
      title: 'Runas',
      icon: <Wand2 className="h-6 w-6" />,
      description:
        'São os recursos mais valiosos no momento e são usados para aprimorar magias, equipamentos e companheiros.',
      sources: [
        'Finalizando as missões finais de ilhas/nações',
        'Terminando uma masmorra',
        'Derrotando um monstro elite invocado por um broche',
        'Comprar na loja na Ilha do Kabrok usando Fragmentos de Wakfu',
        'Completando algumas missões diárias',
      ],
    },
    {
      title: 'Ouro',
      icon: <Coins className="h-6 w-6" />,
      description:
        'Tudo no jogo dá ouro, mas você vai se encontrar com frequencia precisando de mais.',
      sources: [
        'Complentando missões diárias com multiplicadores',
        'Completando salas no Necromundo',
      ],
    },
    {
      title: 'Fragmentos de Wakfu',
      icon: <Puzzle className="h-6 w-6" />,
      description:
        'Há poucas formas de se obter. A principal é fazendo a luta sazonal da temporada pagando 1 ticket por luta. Dá pra ganhar ticket com o passe de batalha e também 1 por dia, desde que você "participe" da luta sazonal.',
      note: 'O melhor uso atualmente dos Fragmentos é comprando Runa, mas é possível usar para comprar magias, baús e ouro.',
    },
  ]

  const guides = [
    {
      title: 'Equipamentos/Companheiros',
      icon: <Layers className="h-5 w-5" />,
      content: [
        'Todo dia muda a rotação de items nas ilhas, definindo o que vai ser vendido na loja da ilha e quais items podem ser recebidos no final das lutas.',
        'A rotação não afeta a mercadoria do vendedor no final de uma masmorra.',
        'Priorize equipamentos que você ainda não tem. Quando já tiver tudo, priorize equipamentos dourados das builds que você planeja montar.',
        'Equipamentos comuns, raros e épicos vão vir aos montos enquanto você jogar a longo prazo.',
      ],
    },
    {
      title: 'Magias',
      icon: <Book className="h-5 w-5" />,
      content: [
        'A melhor forma de pegar magias que você ainda não possui é subindo de nível.',
        'Sempre foque as magias que são específicas para a (arma) subclasse, já que essas são mais escassas.',
        'Guarde baús de magia para as classes que você planeja montar build.',
        'Não vale muito á pena comprar magia no Kabrok, talvez só uma de cada caso você não tiver',
      ],
    },
    {
      title: 'Interface',
      icon: <MousePointer2 className="h-5 w-5" />,
      content: [
        'Desistir de uma luta já ganha, enquanto você apenas espera as animações terminarem, é considerado vitória e você ganhará as recompensas normalmente.',
        'Clicar com o botão direito em algumas setinhas de transição de mapa (como em calabouços) faz com que você pule diretamente pro outro mapa.',
        'Para sequencia de animações muito longas, você pode "Desconectar-se" e voltar pro jogo para pular a maior parte delas.',
      ],
    },
    {
      title: 'Missões Diárias',
      icon: <Sun className="h-5 w-5" />,
      content: [
        'Completar masmorra: baús e ouro',
        'Ajudar alguém numa masmorra: baús e ouro',
        'Completar uma mini-missão na ilha: baús, ouro e um trocadinho de runa',
        'Completar um desafio: ouro e fichas',
        'Com builds fortes, leva-se no max. 10 minutos para fazer todas as dailies, mas se estiver com falta de tempo/vontade, foque nas que dão ficha. Você vai precisar.',
      ],
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Dicas do Waven</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Guia de recursos e dicas essenciais para progredir no jogo
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Warehouse className="h-8 w-8" />
          Recursos
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="bg-[#2a2a2a] text-[#e6d7c3]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="text-amber-500">{resource.icon}</div>
                  <CardTitle>{resource.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {resource.sources && (
                  <ul className="space-y-2">
                    {resource.sources.map((source, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ArrowRightCircle className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
                        <span>{source}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {resource.note && (
                  <p className="mt-4 text-sm text-gray-400">{resource.note}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Alert className="bg-amber-950/50 border-amber-900/50">
        <div className="flex items-center gap-2">
          <GamepadIcon className="h-5 w-5 text-amber-500" />
          <AlertDescription>
            Sua primeira build deve ser uma build barata e forte. Sempre tem
            alguma assim rolando. Geralmente elas são focadas em ataque. Ter uma
            build forte no começo ajuda muito a progredir no jogo e conseguir
            mais recursos para então focar nas builds que você tem mais
            interesse.
          </AlertDescription>
        </div>
      </Alert>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Library className="h-8 w-8" />
          Guias
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {guides.map((guide, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  {guide.icon}
                  {guide.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {guide.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRightCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-8 w-8" />
          Daily Levels
        </h2>
        <p className="text-black mb-4">
          Daily de desafio é bom completar no maior nível possível, para ganhar
          o máximo de fichas possíveis. Mas ás vezes é difícil saber onde
          monstro em questão aparece, então estamos construindo uma lista com os
          maiores níveis em que eles podem ser encontrados
        </p>
        <WavenDailyQuestsTable
          dailyQuests={sortedDailyLevels}
          getDailyChallengeIcon={getDailyChallengeIcon}
        />
      </section>
    </div>
  )
}
