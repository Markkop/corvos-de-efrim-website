'use client'

import { ThemeProvider } from '@/app/providers'
import { Button } from '@/components/ui/button'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ContactPage } from './pages/ContactPage'
import { CrewPage } from './pages/CrewPage'
import { HistoryPage } from './pages/HistoryPage'
import { HomePage } from './pages/HomePage'
import { MissionsPage } from './pages/MissionsPage'
import { RecruitmentPage } from './pages/RecruitmentPage'
import { RegimentPage } from './pages/RegimentPage'

export default function Navigation() {
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
