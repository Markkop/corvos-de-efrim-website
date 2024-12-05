'use client'

import { DofusRelatedPages } from '@/components/DofusRelatedPages'

export function DofusPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Dofus</h1>
        <p className="text-xl max-w-3xl mx-auto">
          O queridinho agora em Unity! Explore nossa presença no Dofus 3.0, o
          MMORPG tático que expandiu nossa comunidade.
        </p>
      </section>

      <DofusRelatedPages currentPath="/jogos/dofus" />
    </div>
  )
}
