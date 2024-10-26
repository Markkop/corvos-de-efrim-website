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
        <header className="bg-[#2a2a2a] text-[#e6d7c3] p-6">
          <nav className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center space-x-6 mb-4 lg:mb-0">
              <Link
                href="/"
                className="flex items-center gap-3 hover:text-[#a27a50]"
              >
                <Image
                  src="/images/corvos.png"
                  alt="Corvos de Efrim"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <h1 className="text-3xl font-bold">Corvos de Efrim</h1>
              </Link>
            </div>
            <div className="flex flex-wrap items-center space-x-4">
              {[
                'INÍCIO',
                'HISTÓRIA',
                'TRIPULAÇÃO',
                'RECRUTAMENTO',
                'MISSÕES',
                'REGIMENTO',
                'CONTATO',
              ].map((item) => (
                <Button
                  key={item}
                  onClick={() => setCurrentTab(item)}
                  variant="ghost"
                  className={`hover:text-[#a27a50] text-lg ${
                    currentTab === item ? 'text-[#a27a50]' : ''
                  }`}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="flex space-x-4 mt-4 lg:mt-0">
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
                    height={28}
                    src={item.image}
                    width={28}
                  />
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto py-12 px-6">
          {TabContent[currentTab]}
        </main>

        <footer className="bg-[#2a2a2a] text-[#e6d7c3] p-6 mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg">
              © 2023 Corvos de Efrim. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

function HomePage() {
  return (
    <div className="space-y-16">
      <section
        className="relative flex h-[90vh] items-center justify-center bg-black bg-cover bg-center bg-no-repeat text-white rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0, 0.6) 0%,rgba(0,0,0,0.3) 100%), url(/images/dormor.png)',
        }}
      >
        <div className="text-center p-8">
          <h1 className="mb-8 text-6xl font-bold">Corvos de Efrim</h1>
          <p className="mb-12 text-xl font-semibold max-w-2xl mx-auto">
            Junte-se à nossa guilda e embarque numa aventura conosco!
          </p>
          <Link
            className="inline-flex h-14 items-center justify-center rounded-md border border-transparent bg-[#a27a50] px-8 text-lg font-medium text-white hover:bg-[#a27a50]/90"
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre no nosso Discord
            <Image
              className="ml-3"
              alt="Discord"
              height={28}
              src="/icons/discord.svg"
              width={28}
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
          className={`flex w-full flex-col lg:flex-row py-16 rounded-xl overflow-hidden ${
            index % 2 === 0
              ? 'bg-[#a27a50] text-black'
              : 'bg-black text-white lg:flex-row-reverse'
          }`}
        >
          <div className="p-12 lg:w-1/2">
            <h2 className="mb-6 text-5xl font-bold">{section.title}</h2>
            <p className="text-xl mb-8">{section.description}</p>
            {section.link && (
              <Link
                className={`mt-6 inline-flex h-12 items-center justify-center rounded-md border border-transparent px-8 text-lg font-medium ${
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
          <div className="px-12 lg:w-1/2">
            <Image
              className="h-[300px] w-full rounded-lg border-4 object-cover lg:h-[400px] lg:w-[600px] lg:mx-auto"
              alt={section.title}
              height={600}
              width={600}
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
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Uma jornada que começou em Wakfu e continua a crescer através dos
          anos, unindo jogadores em busca de aventuras e amizades duradouras.
        </p>
      </section>

      <div className="space-y-16">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12 p-10 rounded-xl ${
              index % 2 === 0
                ? 'bg-[#2a2a2a] text-[#e6d7c3]'
                : 'bg-[#a27a50] text-black'
            }`}
          >
            <div className="lg:w-1/3">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={375}
                className="rounded-lg object-cover w-full h-[250px]"
              />
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div className="text-7xl font-bold opacity-50">{event.year}</div>
              <h2 className="text-4xl font-bold">{event.title}</h2>
              <p className="text-xl">{event.description}</p>
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
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Nossa Tripulação</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça os membros que mantêm nossa guilda forte e unida.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {crewMembers.map((member, index) => (
          <Card key={member.name} className="bg-[#2a2a2a] text-[#e6d7c3]">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl">{member.name}</CardTitle>
              <CardDescription className="text-[#bf9b30] text-lg">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">{member.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="bg-[#a27a50] text-black px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
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
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Junte-se aos Corvos</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Estamos sempre em busca de novos talentos para fortalecer nossa
          tripulação. Se você tem paixão por aventuras e trabalho em equipe,
          este é o seu lugar!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {recruitmentSteps.map((step, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-8 rounded-xl"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#a27a50]">
              {index + 1}. {step.title}
            </h3>
            <p className="text-lg">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#a27a50] text-black p-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-8">Formulário de Recrutamento</h2>
        <form className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-lg">
              Nome
            </Label>
            <Input
              id="name"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-lg">
              E-mail
            </Label>
            <Input
              id="email"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="experience" className="text-lg">
              Experiência em Jogos
            </Label>
            <Textarea
              id="experience"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              rows="4"
              required
            ></Textarea>
          </div>
          <div className="space-y-3">
            <Label htmlFor="motivation" className="text-lg">
              Por que deseja se juntar aos Corvos de Efrim?
            </Label>
            <Textarea
              id="motivation"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              rows="4"
              required
            ></Textarea>
          </div>
          <div className="space-y-3">
            <Label htmlFor="skill" className="text-lg">
              Habilidade Principal
            </Label>
            <Select required>
              <SelectTrigger className="bg-[#e6d7c3] text-[#2a2a2a] text-lg p-3">
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
            className="bg-[#2a2a2a] text-[#e6d7c3] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#2a2a2a]/80 transition-colors"
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
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Missões Ativas</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Embarque em aventuras épicas e ganhe recompensas exclusivas para os
          Corvos de Efrim.
        </p>
      </section>

      <div className="space-y-12">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-8 rounded-xl flex flex-col md:flex-row gap-10"
          >
            <div className="md:w-1/3">
              <Image
                src={mission.image}
                alt={mission.title}
                width={500}
                height={375}
                className="rounded-lg object-cover w-full h-[250px]"
              />
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold text-[#a27a50]">
                {mission.title}
              </h2>
              <p className="text-xl">{mission.description}</p>
              <div className="flex justify-between items-center">
                <span className="bg-[#a27a50] text-black px-4 py-2 rounded-full text-lg">
                  Dificuldade: {mission.difficulty}
                </span>
                <span className="text-[#a27a50] font-bold text-xl">
                  Recompensa: {mission.reward}
                </span>
              </div>
              <button className="bg-[#a27a50] text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a27a50]/80 transition-colors">
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
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Regimento dos Corvos</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça as regras e diretrizes que mantêm nossa guilda unida e forte.
        </p>
      </section>

      <div className="bg-[#2a2a2a] text-[#e6d7c3] rounded-xl overflow-hidden p-8">
        <iframe
          className="w-full min-h-[800px] border-none rounded-lg"
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
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Tem alguma dúvida ou sugestão? Estamos aqui para ouvir você!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-8 rounded-xl text-center"
          >
            <div className="text-6xl mb-4">{method.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{method.method}</h3>
            <p className="text-[#a27a50] text-lg">{method.contact}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#a27a50] text-black p-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-8">Envie uma Mensagem</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-bold text-lg">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-bold text-lg">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 font-bold text-lg">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-bold text-lg">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#2a2a2a] text-[#e6d7c3] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#2a2a2a]/80 transition-colors"
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
