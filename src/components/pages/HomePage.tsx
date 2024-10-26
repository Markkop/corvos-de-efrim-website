'use client'

import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { CrewPage } from './CrewPage'
import { HistoryPage } from './HistoryPage'
import { RecruitmentPage } from './RecruitmentPage'

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

      <section className="bg-[#2a2a2a] rounded-xl p-8">
        <HistoryPage short />
      </section>

      <section className="bg-[#a27a50] rounded-xl p-8">
        <CrewPage short />
      </section>

      <section className="bg-[#2a2a2a] rounded-xl p-8">
        <RecruitmentPage short />
      </section>
    </div>
  )
}
