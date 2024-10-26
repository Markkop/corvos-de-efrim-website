import { HistoryPage } from '@/components/pages/HistoryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nossa História | Corvos de Efrim',
  description:
    'Conheça a história dos Corvos de Efrim, desde nossa fundação em 2014 como uma guilda de Wakfu até nos tornarmos uma comunidade diversificada de jogadores.',
  keywords: [
    'história',
    'Corvos de Efrim',
    'Wakfu',
    'guilda',
    'comunidade gamer',
  ],
}

export default function Historia() {
  return <HistoryPage />
}
