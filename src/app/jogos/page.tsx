import { GamesPage } from '@/components/pages/GamesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jogos | Corvos de Efrim',
  description:
    'Conheça os jogos onde a Corvos de Efrim está presente. Informações sobre Wakfu e Waven.',
  keywords: ['jogos', 'Wakfu', 'Waven', 'Corvos de Efrim', 'guilda'],
}

export default function Jogos() {
  return <GamesPage />
}
