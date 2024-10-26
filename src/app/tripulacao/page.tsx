import { CrewPage } from '@/components/pages/CrewPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tripulação | Corvos de Efrim',
  description:
    'Conheça os membros dos Corvos de Efrim. Nossa tripulação é formada por jogadores apaixonados que fazem nossa comunidade única.',
  keywords: [
    'tripulação',
    'membros',
    'Corvos de Efrim',
    'jogadores',
    'comunidade',
  ],
}

export default function Tripulacao() {
  return <CrewPage />
}
