'use client'

import Image from 'next/image'

export function HistoryPage() {
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
