'use client'

import { DofusRelatedPages } from '@/components/DofusRelatedPages'
import Image from 'next/image'

export function DofusPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <div className="relative w-full max-w-xl mx-auto mb-8 aspect-[4/1]">
          <Image
            src="/images/dofus-logo.webp"
            alt="Dofus Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      <DofusRelatedPages currentPath="/jogos/dofus" noTitle />
    </div>
  )
}
