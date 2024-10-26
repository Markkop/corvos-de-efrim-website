'use client'

import { Button } from '@/components/ui/button'
import { timelineEvents } from '@/lib/data'
import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa'
import { ImageViewer } from '../ImageViewer'

interface HistoryPageProps {
  short?: boolean
}

export function HistoryPage({ short = false }: HistoryPageProps) {
  const displayedEvents = short ? timelineEvents.slice(-1) : timelineEvents

  const EventContent = ({
    event,
    index,
    isShort,
  }: {
    event: (typeof timelineEvents)[0]
    index: number
    isShort: boolean
  }) => (
    <div
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
        {isShort ? (
          <Button variant="default">
            <span>Saiba mais</span>
          </Button>
        ) : (
          event.cta && (
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
          )
        )}
      </div>
    </div>
  )

  return (
    <div className="space-y-12">
      {!short && (
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Uma jornada que começou em Wakfu e continua a crescer através dos
            anos, unindo jogadores em busca de aventuras e amizades duradouras.
          </p>
        </section>
      )}

      <div className="space-y-16">
        {displayedEvents.map((event, index) => (
          <div key={index}>
            {short ? (
              <Link
                href="/historia"
                className="block transition-transform hover:scale-[1.02] focus:scale-[1.02] focus:outline-none"
                tabIndex={0}
              >
                <EventContent event={event} index={index} isShort={short} />
              </Link>
            ) : (
              <EventContent event={event} index={index} isShort={short} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
