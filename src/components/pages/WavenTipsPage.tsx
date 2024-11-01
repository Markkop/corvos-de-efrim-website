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
import { WavenRelatedPages } from '@/components/waven-related-pages'
import { dailyLevels } from '@/lib/data'
import {
  ArrowRightCircle,
  Book,
  Coins,
  Droplet,
  GamepadIcon,
  HelpCircle,
  Layers,
  Library,
  Puzzle,
  Ruler,
  Sun,
  Target,
  Wand2,
  Warehouse,
} from 'lucide-react'

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
        'Equipamentos comuns, raros e épicos vão vir aos montes enquanto você jogar a longo prazo.',
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
  ]

  const dailyTips = {
    types: [
      'Completar masmorra: baús e ouro',
      'Ajudar alguém numa masmorra: baús e ouro',
      'Completar uma mini-missão na ilha: baús, ouro e um trocadinho de runa',
      'Completar um desafio: ouro e fichas',
    ],
    note: 'Com builds fortes, leva-se no max. 10 minutos para fazer todas as dailies, mas se estiver com falta de tempo/vontade, foque nas que dão ficha. Você vai precisar.',
  }

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
        <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-amber-500" />
              <CardTitle>Dicas de Daily</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Existem alguns tipos de daily com diferentes recompensas. Quanto
              maior o nível da luta que ela for completada, maior a recompensa.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dailyTips.types.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ArrowRightCircle className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-400">{dailyTips.note}</p>
          </CardContent>
        </Card>
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dailyLevels.map((daily) => (
            <Card
              key={daily.name}
              className="bg-[#2a2a2a] text-[#e6d7c3] flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  {daily.icon === 'droplet' && (
                    <Droplet className="h-5 w-5 text-amber-500" />
                  )}
                  {daily.icon === 'ruler' && (
                    <Ruler className="h-5 w-5 text-amber-500" />
                  )}
                  {daily.icon === 'help-circle' && (
                    <HelpCircle className="h-5 w-5 text-amber-500" />
                  )}
                  <CardTitle className="text-lg">{daily.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  {daily.goal}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                {daily.levels.length > 0 && (
                  <div className="mt-auto">
                    <p className="text-sm text-gray-400 mb-2">
                      Melhores níveis:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {daily.levels.map((level) => (
                        <span
                          key={level}
                          className="inline-flex items-center justify-center bg-amber-950/50 text-amber-500 px-2.5 py-0.5 rounded-md text-sm font-medium"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <WavenRelatedPages currentPath="/jogos/waven/dicas" />
    </div>
  )
}
