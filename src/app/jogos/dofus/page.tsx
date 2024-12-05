import { DofusPage } from '@/components/pages/DofusPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dofus | Corvos de Efrim',
  description:
    'Explore nossa presença no Dofus, conheça nossa tripulação e junte-se a nós.',
  keywords: ['Dofus', 'Corvos de Efrim', 'guilda', 'MMORPG', 'recrutamento'],
}

export default function Dofus() {
  return <DofusPage />
}
