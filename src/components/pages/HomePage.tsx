'use client'

import { ContactSmallList } from '@/components/ContactSmallList'
import { CrewSmallList } from '@/components/CrewSmallList'
import { GamesSmallList } from '@/components/GamesSmallList'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { HistoryPage } from './HistoryPage'

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
          <h1 className="~text-[2.5rem]/[4rem] mb-8 font-bold">
            Corvos de Efrim
          </h1>
          <p className="~text-[1.125rem]/[1.5rem] mb-12 font-semibold max-w-2xl mx-auto">
            Junte-se à nossa guilda e embarque numa aventura conosco!
          </p>
          <Link
            className="inline-flex ~h-[3rem]/[3.5rem] items-center justify-center rounded-md border border-transparent bg-[#a27a50] ~px-[1.5rem]/[2rem] ~text-[1rem]/[1.25rem] font-medium text-white hover:bg-[#a27a50]/90"
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

      <section className="bg-[#2a2a2a] rounded-xl ~p-[1.5rem]/[2rem]">
        <HistoryPage short />
      </section>

      <section className="bg-[#a27a50] rounded-xl ~p-[1.5rem]/[2rem]">
        <div className="text-center ~mb-[3rem]/[4rem]">
          <Link
            href="/tripulacao"
            className="inline-block transition-transform hover:scale-[1.01] focus-visible:scale-[1.01] focus-visible:outline-none"
          >
            <h2 className="~text-[2rem]/[3rem] font-bold ~mb-[1rem]/[1.5rem]">
              Tripulação Permanente
            </h2>
          </Link>
        </div>
        <CrewSmallList />
      </section>

      <section className="bg-[#2a2a2a] rounded-xl ~p-[1.5rem]/[2rem]">
        <Link
          href="/recrutamento"
          className="inline-block transition-transform hover:scale-[1.01] focus-visible:scale-[1.01] focus-visible:outline-none"
        >
          <h2 className="~text-[1.5rem]/[2rem] font-bold ~mb-[1rem]/[1.5rem] text-[#e6d7c3]">
            Presentes em
          </h2>
        </Link>
        <GamesSmallList />
      </section>

      <ContactSmallList />
    </div>
  )
}
