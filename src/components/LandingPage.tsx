import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export function LandingPage() {
  return (
    <>
      <section
        className="flex h-screen w-full flex-row items-center justify-center text-center bg-black text-white"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage:
            'linear-gradient(rgba(0,0,0, 0.5) 0%,rgba(0,0,0,0) 100%), url(/images/dormor.png)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=" p-8">
          <h1 className="mb-8 text-5xl font-bold">Corvos de Efrim</h1>
          <p className="mb-8 text-lg font-semibold">
            Junte-se à nossa guilda e embarque numa aventura conosco!
          </p>
          <Link
            className="mb-8 inline-flex h-10 items-center justify-center rounded-md border border-transparent bg-[#a27a50] px-5 text-base font-medium text-white hover:bg-[#a27a50]/90"
            href={DISCORD_INVITE_URL}
          >
            Entre no nosso Discord
            <Image
              className='ml-2'
              alt="Discord"
              height={24}
              src="/icons/discord.svg"
              width={24}
            />
          </Link>
        </div>
      </section>
      {
        [          {
          title: "Conheça a Nossa História",
          description: "Os Corvos de Efrim são uma guilda de jogadores de Wakfu que se uniram em 2014. Desde então, temos crescido e nos tornado uma comunidade de jogadores de vários jogos.",
          link: "https://www.wakfu.com/pt/forum/49-guildas/348-guilda-corvos-efrim",
          linkText: "Confira o nosso tópico no fórum",
          imageUrl: "/images/amakna.png",
        },
          {
            title: "Eventos da Guilda",
            description: "Nós organizamos regularmente uma variedade de eventos para nossos membros. De incursões a festivais temáticos, sempre há algo excitante acontecendo nos Corvos de Efrim.", 
            imageUrl: "/images/barco.png",
          },
          {
            title: "Junte-se a Nós",
            description: "Estamos sempre procurando por novos membros para se juntar à nossa tripulação. Descubra mais sobre nosso processo de recrutamento, cargos disponíveis e outras regras.",
            link: "/about",
            linkText: "Saiba mais sobre as nossas regras",
            imageUrl: "/images/juramento.png",
          },

        ].map(
          ({ title, description, imageUrl, link, linkText }, index) => {
            const isOdd = index % 2 === 0
            return (
            <section
              key={index}
              className={twMerge('flex w-full flex-col lg:flex-row py-12',
                isOdd ? "bg-[#a27a50] text-black" : "bg-black text-white lg:flex-row-reverse")}
            >
              <div className="p-8 lg:w-1/2">
                <h2 className="mb-4 text-4xl font-bold">{title}</h2>
                <p className="text-lg">{description}</p>
                {link && (
                  <Link
                  className={twMerge(
                    'inline-flex h-10 items-center justify-center rounded-md border border-transparent px-5 text-base font-medium mt-4',
                    isOdd ? "bg-black text-[#a27a50] hover:bg-black/90" : "bg-[#a27a50] text-white hover:bg-[#a27a50]/90"
                  )}
                  
                    href={link}
                  >
                    {linkText}
                  </Link>
                )}
              </div>
              <div className="px-8 lg:w-1/2">
                <img
                  className="h-[250px] w-full lg:mx-auto lg:h-[250px] lg:w-[500px] object-cover lg:object-none"
                  alt={title}
                  height={500}
                  width={500}
                  src={imageUrl}
                  style={{
                    borderRadius: "0.5rem",
                    border: `0.25rem solid ${isOdd ? "black" : "#a27a50"}`,
                  }}
                />
              </div>
            </section>)
          }
        )
      }
    </>
  )
}
