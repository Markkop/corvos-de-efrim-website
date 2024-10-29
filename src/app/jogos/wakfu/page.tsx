import { WakfuPage } from '@/components/pages/WakfuPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wakfu | Corvos de Efrim',
  description:
    'Conheça nossa história no Wakfu, veja nossa galeria de momentos memoráveis e mais.',
  keywords: ['Wakfu', 'Corvos de Efrim', 'guilda', 'MMORPG', 'galeria'],
}

export default function Wakfu() {
  return <WakfuPage />
}
