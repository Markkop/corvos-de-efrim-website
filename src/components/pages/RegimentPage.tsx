'use client'

export function RegimentPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Regimento dos Corvos</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça as regras e diretrizes que mantêm nossa guilda unida e forte.
        </p>
        <h2 className="mt-10 text-3xl font-bold mb-6">Regimento no WAKFU</h2>
      </section>

      <div className="bg-[#2a2a2a] text-[#e6d7c3] rounded-xl overflow-hidden p-8">
        <iframe
          className="w-full min-h-[800px] border-none rounded-lg"
          src="https://docs.google.com/document/d/e/2PACX-1vRYLYp0FEsgHg8dKP4ilhzTPlZCZMapYTF3dI5IbLooM-81oT0UGuZIle6GkuB613GF5zq5J7fPgdDe/pub?embedded=true"
          title="Regimento dos Corvos de Efrim"
        />
      </div>
    </div>
  )
}
