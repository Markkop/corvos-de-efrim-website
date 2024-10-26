import { ThemeProvider } from '@/app/providers'
import { Button } from '@/components/ui/button'
import { DISCORD_INVITE_URL, WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import './global.css'

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

export default function RootLayout({ children }: { children: ReactNode }) {
  const navItems = [
    { label: 'INÍCIO', href: '/' },
    { label: 'HISTÓRIA', href: '/historia' },
    { label: 'TRIPULAÇÃO', href: '/tripulacao' },
    { label: 'RECRUTAMENTO', href: '/recrutamento' },
    // { label: 'MISSÕES', href: '/missoes' },
    { label: 'REGIMENTO', href: '/regimento' },
    { label: 'CONTATO', href: '/contato' },
  ]

  const socialLinks = [
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
  ]

  return (
    <html lang="pt-BR">
      <body>
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
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Button
                        variant="ghost"
                        className="hover:text-[#a27a50] text-lg"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4 lg:mt-0">
                  {socialLinks.map((item, index) => (
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

            <main className="max-w-7xl mx-auto py-12 px-6">{children}</main>

            <footer className="bg-[#2a2a2a] text-[#e6d7c3] p-6 mt-12">
              <div className="max-w-7xl mx-auto text-center">
                <p className="text-lg">
                  © 2024 Corvos de Efrim. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
