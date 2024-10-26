import { HomePage } from '@/components/pages/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corvos de Efrim',
  description:
    'Corvos de Efrim são uma guilda de jogadores que começou em Wakfu em 2014 e cresceu para uma comunidade vibrante de diversos jogos.',
  keywords: ['corvos', 'efrim', 'guilda', 'waven', 'wakfu', 'mmorpg', 'ankama'],
}

export default function Home() {
  return <HomePage />
}
