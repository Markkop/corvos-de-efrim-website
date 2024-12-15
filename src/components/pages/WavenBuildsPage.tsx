'use client'

import { WavenBuildsTable } from '@/components/waven-builds-table'
import { WavenResources } from '@/components/waven-resources'

export function WavenBuildsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Builds do Waven</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Testamos e selecionamos algumas builds que consideramos fortes e úteis
        </p>
        <p className="text-sm text-gray-500 mt-4">
          No Waven, builds boas podem passar mudanças entre patch, e mesmo que
          deixem de ser meta, continuam funcionando muito bem para 90% do jogo.
          <br />
          Investir numa build boa e barata é importante para progredir
          facilmente e então focar em alguma build mais cara, mas que você curta
          o estilo de jogo.
        </p>
      </section>

      <WavenBuildsTable />
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Recursos Úteis</h2>
        <p className="text-sm  mt-4">
          Uma coleção de sites, canais e comunidades para te ajudar no Waven
        </p>
        <WavenResources />
      </section>
    </div>
  )
}
