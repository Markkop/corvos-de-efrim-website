import { WavenPage } from '@/components/pages/WavenPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waven | Corvos de Efrim',
  description:
    'Descubra tudo sobre nossa presença no Waven, builds recomendadas, recrutamento e mais.',
  keywords: ['Waven', 'Corvos de Efrim', 'guilda', 'builds', 'recrutamento'],
}

export default function Waven() {
  return <WavenPage />
}
