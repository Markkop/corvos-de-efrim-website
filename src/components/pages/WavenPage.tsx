'use client'

import { WavenRelatedPages } from '@/components/waven-related-pages'

export function WavenPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Waven</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Descubra recursos, guias e informações sobre nossa presença no Waven.
        </p>
      </section>

      <WavenRelatedPages currentPath="/jogos/waven" />
    </div>
  )
}
