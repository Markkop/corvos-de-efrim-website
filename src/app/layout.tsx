import { ThemeProvider } from '@/app/providers'
import { WEBSITE_HOST_URL, DISCORD_INVITE_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import Image from 'next/image'

const meta = {
  title: 'Corvos de Efrim',
  description:
    'Uma guilda presente em Wakfu, Waven e outros jogos. Junte-se a nós!',
  image: `/images/barco.png`,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://corvosdeefrim.com/'),
  title: {
    default: meta.title,
    template: 'Corvos de Efrim',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="lg:py-4">
            <nav className="flex lg:flex-row flex-col w-full items-center justify-between bg-black p-4 text-white">
            <Link className="hover:text-[#a27a50] flex flex-row-reverse gap-2 items-center " href="/">
              <Image
              className='rounded-full'
                alt="Corvos de Efrim"
                height={48}
                src="/images/corvos.png"
                width={48}
              />
              <h1 className="text-2xl font-bold">Corvos de Efrim</h1>
              </Link> 
              <div className="flex items-center space-x-4">
                <div className='flex gap-4'>
                <Link className="text-lg hover:text-[#a27a50]" href="/">
                  Home
                </Link>
                <Link className="text-lg hover:text-[#a27a50]" href="/about">
                  Sobre
                </Link>
                </div>
     
                <div className="ml-4 flex space-x-3">
                {
                    [
                      {
                        name: 'GitHub',
                        url: 'https://github.com/Markkop/corvos-de-efrim-website/',
                        image: '/icons/github.svg'
                      },
                      {
                        name: 'Discord',
                        url: DISCORD_INVITE_URL,
                        image: '/icons/discord.svg'
                      },
                      {
                        name: 'YouTube',
                        url: 'https://www.youtube.com/channel/UCt2vHFLkdUSkLJjcagzX9rA',
                        image: '/icons/youtube.svg'
                      }
                    ].map((item, index) => (
                      <Link aria-label={`Our ${item.name}`} href={item.url} key={index}>
                        <Image
                          alt={item.name}
                          height={24}
                          src={item.image}
                          width={24}
                        />
                      </Link>
                    ))
                  }
                </div>
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
