'use client'

import Image from 'next/image'

export function DofusPage() {
  return (
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
  )
}
