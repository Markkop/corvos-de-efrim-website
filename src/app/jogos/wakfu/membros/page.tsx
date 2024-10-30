import { CrewPage } from '@/components/pages/CrewPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membros | Wakfu | Corvos de Efrim',
  description:
    'Conheça os membros dos Corvos de Efrim no Wakfu. Nossa tripulação é formada por jogadores apaixonados que fazem nossa comunidade única.',
  keywords: [
    'membros',
    'tripulação',
    'Wakfu',
    'Corvos de Efrim',
    'jogadores',
    'comunidade',
  ],
}

export default function Membros() {
  return <CrewPage game="wakfu" />
}
