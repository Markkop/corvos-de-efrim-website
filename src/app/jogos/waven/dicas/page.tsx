import { WavenTipsPage } from '@/components/pages/WavenTipsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dicas | Waven | Corvos de Efrim',
  description:
    'Guia de recursos e dicas essenciais para progredir no Waven. Aprenda sobre runas, ouro, fragmentos e mais.',
  keywords: [
    'Waven',
    'guia',
    'dicas',
    'recursos',
    'daily',
    'runas',
    'Corvos de Efrim',
  ],
}

export default function WavenTips() {
  return <WavenTipsPage />
}
