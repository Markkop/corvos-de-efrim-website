import { Card } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membros | Waven | Corvos de Efrim',
  description: 'Lista de membros ativos da guilda Corvos de Efrim no Waven.',
  keywords: ['membros', 'Waven', 'Corvos de Efrim', 'guilda', 'jogadores'],
}

export default function Membros() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Membros</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Lista de membros ativos da guilda no Waven
        </p>
      </section>

      <Card className="bg-[#2a2a2a] text-[#e6d7c3] p-8">
        <p className="text-center text-lg">
          Em breve: Lista de membros ativos no Waven será adicionada aqui.
        </p>
      </Card>
    </div>
  )
}
