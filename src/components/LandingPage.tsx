import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

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
      <section className="flex w-full flex-col lg:flex-row bg-[#a27a50] py-12 text-black">
        <div className="p-8 lg:w-1/2">
          <h2 className="mb-4 text-4xl font-bold">Eventos da Guilda</h2>
          <p className="text-lg">
            Nós organizamos regularmente uma variedade de eventos para nossos
            membros. De incursões a festivais temáticos, sempre há algo
            excitante acontecendo nos Corvos de Efrim.
          </p>
          {/* TODO: Criar página sobre eventos */}
          {/* <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-transparent bg-black px-5 text-base font-medium text-[#a27a50] hover:bg-black/90"
            href="#"
          >
            Aprenda mais sobre nossos eventos
          </Link> */}
        </div>
        <div className="px-8 lg:w-1/2">
          <img
            className="h-[250px] w-full lg:mx-auto lg:h-[250px] lg:w-[500px]"
            alt="Guild Events Image"
            height="500"
            width="500"
            src="/images/barco.png"
            style={{
              objectFit: 'cover',
              borderRadius: '0.5rem',
              border: '0.25rem solid black',
            }}
          />
        </div>
      </section>
      <section className="flex w-full flex-col lg:flex-row-reverse bg-black py-12 text-white">
        <div className="lg:w-1/2 p-8">
          <h2 className="mb-4 text-4xl font-bold">Junte-se a Nós</h2>
          <p className="mb-8 text-lg">
            Estamos sempre procurando por novos membros para se juntar à nossa
            tripulação. Descubra mais sobre nosso processo de recrutamento,
            cargos disponíveis e outras regras.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-transparent bg-[#a27a50] px-5 text-base font-medium text-white hover:bg-[#a27a50]/90"
            href="/about"
          >
            Saiba mais sobre as nossas regras
          </Link>
        </div>
        <div className="px-8 lg:w-1/2">
          <img
            className="h-[250px] w-full lg:mx-auto lg:h-[250px] lg:w-[500px]"
            alt="Guild Events Image"
            height="500"
            width="500"
            src="/images/juramento.png"
            style={{
              objectFit: 'cover',
              borderRadius: '0.5rem',
              border: '0.25rem solid #a27a50',
            }}
          />
        </div>
      </section>
     
    </>
  )
}
