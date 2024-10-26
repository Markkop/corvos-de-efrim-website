'use client'

import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export function HomePage() {
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
