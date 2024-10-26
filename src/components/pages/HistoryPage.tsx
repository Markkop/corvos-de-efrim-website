'use client'

import { Button } from '@/components/ui/button'
import { FaDiscord } from 'react-icons/fa'
import { ImageViewer } from '../ImageViewer'

export function HistoryPage() {
  const timelineEvents = [
    {
      year: '2014',
      title: 'A Fundação',
      description:
        'A Corvos de Efrim surge em Wakfu, unidos pela busca de aventuras e camaradagem.',
      image: 'https://i.imgur.com/wEQd5sZ.png',
    },
    {
      year: '2016-2018',
      title: 'Expansão',
      description:
        'A guilda cresce e se estabelece como uma das mais ativas do servidor.',
      image: '/images/barco.png',
    },
    {
      year: '2019',
      title: 'Hiato',
      description:
        'A guilda se aposenta em Wakfu, mas mantém contato pelo discord e outros jogos.',
      image: '/images/wipe.webp',
    },
    {
      year: '2020',
      title: 'Retorno',
      description:
        'A Corvos de Efrim volta ao jogo no então novo servidor monoconta Ogrest, de forma mais casual.',
      image: '/images/retorno.webp',
    },
    {
      year: '2024',
      title: 'Novos Horizontes',
      description:
        'Expandimos para Waven e outros jogos, mantendo nossa essência e valores.',
      image:
        'https://static.ankama.com/upload/backoffice/direct/2024-10-14/13e919929b5171593a980cf7bd70e9c6.png',
      cta: {
        text: 'Venha conosco!',
        link: 'https://discord.gg/your-discord-invite-link',
      },
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
              <ImageViewer
                images={[{ src: event.image, alt: event.title }]}
                width={500}
                height={375}
              />
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div className="text-7xl font-bold opacity-50">{event.year}</div>
              <h2 className="text-4xl font-bold">{event.title}</h2>
              <p className="text-xl">{event.description}</p>
              {event.cta && (
                <Button
                  asChild
                  variant="default"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
                >
                  <a
                    href={event.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <span>{event.cta.text}</span>
                    <FaDiscord className="w-6 h-6" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
