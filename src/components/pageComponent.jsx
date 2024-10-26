'use client'

import { ThemeProvider } from '@/app/providers'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Component() {
  const [currentTab, setCurrentTab] = useState('INÍCIO')

  const TabContent = {
    INÍCIO: <HomePage />,
    HISTÓRIA: <HistoryPage />,
    TRIPULAÇÃO: <CrewPage />,
    RECRUTAMENTO: <RecruitmentPage />,
    MISSÕES: <MissionsPage />,
    REGIMENTO: <RegimentPage />,
    CONTATO: <ContactPage />,
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="bg-[#e6d7c3] min-h-screen text-[#2a2a2a] font-serif">
        <header className="bg-[#2a2a2a] text-[#e6d7c3] p-4">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-[#a27a50]"
              >
                <Image
                  src="/images/corvos.png"
                  alt="Corvos de Efrim"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <h1 className="text-2xl font-bold">Corvos de Efrim</h1>
              </Link>
              {['INÍCIO', 'HISTÓRIA', 'TRIPULAÇÃO', 'RECRUTAMENTO'].map(
                (item) => (
                  <Button
                    key={item}
                    onClick={() => setCurrentTab(item)}
                    variant="ghost"
                    className={`hover:text-[#a27a50] ${
                      currentTab === item ? 'text-[#a27a50]' : ''
                    }`}
                  >
                    {item}
                  </Button>
                ),
              )}
            </div>
            <div className="flex items-center space-x-4">
              {['MISSÕES', 'REGIMENTO', 'CONTATO'].map((item) => (
                <Button
                  key={item}
                  onClick={() => setCurrentTab(item)}
                  variant="ghost"
                  className={`hover:text-[#a27a50] ${
                    currentTab === item ? 'text-[#a27a50]' : ''
                  }`}
                >
                  {item}
                </Button>
              ))}
              <div className="flex space-x-3 ml-4">
                {[
                  {
                    name: 'GitHub',
                    url: 'https://github.com/Markkop/corvos-de-efrim-website/',
                    image: '/icons/github.svg',
                  },
                  {
                    name: 'Discord',
                    url: DISCORD_INVITE_URL,
                    image: '/icons/discord.svg',
                  },
                  {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/channel/UCt2vHFLkdUSkLJjcagzX9rA',
                    image: '/icons/youtube.svg',
                  },
                ].map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                    aria-label={`Our ${item.name}`}
                  >
                    <Image
                      alt={item.name}
                      height={24}
                      src={item.image}
                      width={24}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto py-8 px-4">
          {TabContent[currentTab]}
        </main>

        <footer className="bg-[#2a2a2a] text-[#e6d7c3] p-4 mt-auto">
          <div className="max-w-6xl mx-auto text-center">
            <p>© 2023 Corvos de Efrim. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

function HomePage() {
  return (
    <div className="space-y-12">
      <section
        className="relative flex h-[80vh] items-center justify-center bg-black bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0, 0.5) 0%,rgba(0,0,0,0) 100%), url(/images/dormor.png)',
        }}
      >
        <div className="text-center">
          <h1 className="mb-8 text-5xl font-bold">Corvos de Efrim</h1>
          <p className="mb-8 text-lg font-semibold">
            Junte-se à nossa guilda e embarque numa aventura conosco!
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-transparent bg-[#a27a50] px-5 text-base font-medium text-white hover:bg-[#a27a50]/90"
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre no nosso Discord
            <Image
              className="ml-2"
              alt="Discord"
              height={24}
              src="/icons/discord.svg"
              width={24}
            />
          </Link>
        </div>
      </section>

      {[
        {
          title: 'Conheça a Nossa História',
          description:
            'Os Corvos de Efrim são uma guilda de jogadores de Wakfu que se uniram em 2014. Desde então, temos crescido e nos tornado uma comunidade de jogadores de vários jogos.',
          link: 'https://www.wakfu.com/pt/forum/49-guildas/13189-guilda-corvos-efrim-estamos-volta-2023',
          linkText: 'Confira o nosso tópico no fórum',
          imageUrl: '/images/amakna.png',
        },
        {
          title: 'Eventos da Guilda',
          description:
            'Nós organizamos regularmente uma variedade de eventos para nossos membros. De incursões a festivais temáticos, sempre há algo excitante acontecendo nos Corvos de Efrim.',
          imageUrl: '/images/barco.png',
        },
        {
          title: 'Junte-se a Nós',
          description:
            'Estamos sempre procurando por novos membros para se juntar à nossa tripulação. Descubra mais sobre nosso processo de recrutamento, cargos disponíveis e outras regras.',
          link: '#',
          linkText: 'Saiba mais sobre as nossas regras',
          imageUrl: '/images/juramento.png',
        },
      ].map((section, index) => (
        <section
          key={index}
          className={`flex w-full flex-col lg:flex-row py-12 ${
            index % 2 === 0
              ? 'bg-[#a27a50] text-black'
              : 'bg-black text-white lg:flex-row-reverse'
          }`}
        >
          <div className="p-8 lg:w-1/2">
            <h2 className="mb-4 text-4xl font-bold">{section.title}</h2>
            <p className="text-lg">{section.description}</p>
            {section.link && (
              <Link
                className={`mt-4 inline-flex h-10 items-center justify-center rounded-md border border-transparent px-5 text-base font-medium ${
                  index % 2 === 0
                    ? 'bg-black text-[#a27a50] hover:bg-black/90'
                    : 'bg-[#a27a50] text-white hover:bg-[#a27a50]/90'
                }`}
                href={section.link}
              >
                {section.linkText}
              </Link>
            )}
          </div>
          <div className="px-8 lg:w-1/2">
            <Image
              className="h-[250px] w-full rounded-lg border-4 object-cover lg:h-[250px] lg:w-[500px] lg:mx-auto"
              alt={section.title}
              height={500}
              width={500}
              src={section.imageUrl}
              style={{
                borderColor: index % 2 === 0 ? 'black' : '#a27a50',
              }}
            />
          </div>
        </section>
      ))}
    </div>
  )
}

function HistoryPage() {
  const timelineEvents = [
    {
      year: '2014',
      title: 'A Fundação',
      description:
        'Os Corvos de Efrim surgem em Wakfu, unidos pela busca de aventuras e camaradagem.',
      image: '/images/amakna.png',
    },
    {
      year: '2018',
      title: 'Expansão',
      description:
        'A guilda cresce e se estabelece como uma das mais ativas do servidor.',
      image: '/images/barco.png',
    },
    {
      year: '2023',
      title: 'Novos Horizontes',
      description:
        'Expandimos para Waven e outros jogos, mantendo nossa essência e valores.',
      image: '/images/dormor.png',
    },
  ]

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nossa História</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Uma jornada que começou em Wakfu e continua a crescer através dos
          anos, unindo jogadores em busca de aventuras e amizades duradouras.
        </p>
      </section>

      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg ${
              index % 2 === 0
                ? 'bg-[#2a2a2a] text-[#e6d7c3]'
                : 'bg-[#a27a50] text-black'
            }`}
          >
            <div className="lg:w-1/3">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[200px]"
              />
            </div>
            <div className="lg:w-2/3 space-y-4">
              <div className="text-6xl font-bold opacity-50">{event.year}</div>
              <h2 className="text-3xl font-bold">{event.title}</h2>
              <p className="text-lg">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CrewPage() {
  const crewMembers = [
    {
      name: 'Markkop',
      role: 'Líder da Guilda',
      description: 'Guia os Corvos com sabedoria e determinação.',
      image: '/images/corvos.png',
      specialties: ['Estratégia', 'Liderança', 'Desenvolvimento'],
    },
    {
      name: 'Ana',
      role: 'Coordenadora de Eventos',
      description: 'Mantém a guilda ativa com eventos criativos e envolventes.',
      image: '/images/corvos.png',
      specialties: ['Organização', 'Criatividade', 'Comunicação'],
    },
    {
      name: 'Carlos',
      role: 'Mestre das Missões',
      description: 'Coordena as atividades e desafios da guilda.',
      image: '/images/corvos.png',
      specialties: ['PvE', 'Estratégia', 'Mentoria'],
    },
    {
      name: 'Beatriz',
      role: 'Mentora dos Novatos',
      description: 'Auxilia novos membros em sua jornada inicial.',
      image: '/images/corvos.png',
      specialties: ['Ensino', 'Paciência', 'Suporte'],
    },
  ]

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nossa Tripulação</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Conheça os membros que mantêm nossa guilda forte e unida.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {crewMembers.map((member, index) => (
          <Card key={member.name} className="bg-[#2a2a2a] text-[#e6d7c3]">
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="text-[#bf9b30]">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function RecruitmentPage() {
  const recruitmentSteps = [
    {
      title: 'Preencha o Formulário',
      description:
        'Inicie sua jornada preenchendo nosso formulário de recrutamento.',
    },
    {
      title: 'Entrevista',
      description:
        'Converse com nossos líderes para conhecermos melhor suas expectativas.',
    },
    {
      title: 'Período de Teste',
      description: 'Participe de eventos e missões para se integrar à guilda.',
    },
    {
      title: 'Boas-vindas Oficiais',
      description: 'Seja oficialmente reconhecido como um Corvo de Efrim!',
    },
  ]

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Junte-se aos Corvos</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Estamos sempre em busca de novos talentos para fortalecer nossa
          tripulação. Se você tem paixão por aventuras e trabalho em equipe,
          este é o seu lugar!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {recruitmentSteps.map((step, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2 text-[#a27a50]">
              {index + 1}. {step.title}
            </h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#a27a50] text-black p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Formulário de Recrutamento</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Experiência em Jogos</Label>
            <Textarea
              id="experience"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              rows="4"
              required
            ></Textarea>
          </div>
          <div className="space-y-2">
            <Label htmlFor="motivation">
              Por que deseja se juntar aos Corvos de Efrim?
            </Label>
            <Textarea
              id="motivation"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              rows="4"
              required
            ></Textarea>
          </div>
          <div className="space-y-2">
            <Label htmlFor="skill">Habilidade Principal</Label>
            <Select required>
              <SelectTrigger className="bg-[#e6d7c3] text-[#2a2a2a]">
                <SelectValue placeholder="Selecione uma habilidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="navigation">Navegação</SelectItem>
                <SelectItem value="combat">Combate</SelectItem>
                <SelectItem value="stealth">Furtividade</SelectItem>
                <SelectItem value="magic">Magia das Sombras</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button
            type="submit"
            className="bg-[#2a2a2a] text-[#e6d7c3] px-6 py-2 rounded hover:bg-[#2a2a2a]/80 transition-colors"
          >
            Enviar Candidatura
          </button>
        </form>
      </div>
    </div>
  )
}

function MissionsPage() {
  const missions = [
    {
      title: 'A Caçada ao Tesouro de Amakna',
      description:
        'Decifre pistas antigas e encontre o lendário tesouro escondido nas profundezas de Amakna.',
      difficulty: 'Médio',
      reward: 'Equipamento Raro + 1000 Kamas',
      image: '/images/amakna.png',
    },
    {
      title: 'Defesa de Sufokia',
      description:
        'Proteja a cidade subaquática de Sufokia contra uma invasão de criaturas abissais.',
      difficulty: 'Difícil',
      reward: 'Título Exclusivo + 2000 Kamas',
      image: '/images/barco.png',
    },
    {
      title: 'O Enigma da Torre Nebulosa',
      description:
        'Escale a misteriosa Torre Nebulosa e desvende seus segredos ancestrais.',
      difficulty: 'Muito Difícil',
      reward: 'Montaria Única + 5000 Kamas',
      image: '/images/dormor.png',
    },
  ]

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Missões Ativas</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Embarque em aventuras épicas e ganhe recompensas exclusivas para os
          Corvos de Efrim.
        </p>
      </section>

      <div className="space-y-8">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-6 rounded-lg flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/3">
              <Image
                src={mission.image}
                alt={mission.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[200px]"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-[#a27a50]">
                {mission.title}
              </h2>
              <p className="text-lg">{mission.description}</p>
              <div className="flex justify-between items-center">
                <span className="bg-[#a27a50] text-black px-3 py-1 rounded-full text-sm">
                  Dificuldade: {mission.difficulty}
                </span>
                <span className="text-[#a27a50] font-bold">
                  Recompensa: {mission.reward}
                </span>
              </div>
              <button className="bg-[#a27a50] text-black px-6 py-2 rounded hover:bg-[#a27a50]/80 transition-colors">
                Aceitar Missão
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RegimentPage() {
  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Regimento dos Corvos</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Conheça as regras e diretrizes que mantêm nossa guilda unida e forte.
        </p>
      </section>

      <div className="bg-[#2a2a2a] text-[#e6d7c3] rounded-lg overflow-hidden">
        <iframe
          className="w-full min-h-[800px] border-none"
          src="https://docs.google.com/document/d/e/2PACX-1vRYLYp0FEsgHg8dKP4ilhzTPlZCZMapYTF3dI5IbLooM-81oT0UGuZIle6GkuB613GF5zq5J7fPgdDe/pub?embedded=true"
          title="Regimento dos Corvos de Efrim"
        />
      </div>
    </div>
  )
}

function ContactPage() {
  const contactMethods = [
    { icon: '📧', method: 'E-mail', contact: 'corvos@efrim.com' },
    { icon: '🎮', method: 'Discord', contact: 'discord.gg/corvosdeefrim' },
    { icon: '📱', method: 'WhatsApp', contact: '+55 (11) 99999-9999' },
  ]

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Tem alguma dúvida ou sugestão? Estamos aqui para ouvir você!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-6 rounded-lg text-center"
          >
            <div className="text-4xl mb-2">{method.icon}</div>
            <h3 className="text-xl font-bold mb-2">{method.method}</h3>
            <p className="text-[#a27a50]">{method.contact}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#a27a50] text-black p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Envie uma Mensagem</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-bold">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-bold">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 font-bold">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-bold">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full p-2 rounded bg-[#e6d7c3]"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#2a2a2a] text-[#e6d7c3] px-6 py-2 rounded hover:bg-[#2a2a2a]/80 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  )
}

// Export all components
export {
  ContactPage,
  CrewPage,
  HistoryPage,
  HomePage,
  MissionsPage,
  RecruitmentPage,
  RegimentPage,
}
