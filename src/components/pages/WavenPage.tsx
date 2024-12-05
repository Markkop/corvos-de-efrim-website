'use client'

import { WavenRelatedPages } from '@/components/waven-related-pages'
import Image from 'next/image'

export function WavenPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <div className="relative w-full max-w-xl mx-auto mb-8 aspect-[4/1]">
          <Image
            src="/images/waven-logo.png"
            alt="Waven Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      <WavenRelatedPages currentPath="/jogos/waven" noTitle />
    </div>
  )
}
