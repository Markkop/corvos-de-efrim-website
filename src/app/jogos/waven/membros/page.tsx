import { CrewPage } from '@/components/pages/CrewPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membros | Waven | Corvos de Efrim',
  description: 'Lista de membros ativos da guilda Corvos de Efrim no Waven.',
  keywords: ['membros', 'Waven', 'Corvos de Efrim', 'guilda', 'jogadores'],
}

export default function Membros() {
  return <CrewPage game="waven" />
}
