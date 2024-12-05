import { CrewPage } from '@/components/pages/CrewPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membros | Dofus | Corvos de Efrim',
  description: 'Lista de membros ativos da guilda Corvos de Efrim no Dofus.',
  keywords: ['membros', 'Dofus', 'Corvos de Efrim', 'guilda', 'jogadores'],
}

export default function Membros() {
  return <CrewPage game="dofus" />
}
