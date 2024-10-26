import { MissionsPage } from '@/components/pages/MissionsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Missões | Corvos de Efrim',
  description:
    'Explore as missões e atividades dos Corvos de Efrim. Participe de eventos, raids e encontros da nossa comunidade.',
  keywords: ['missões', 'eventos', 'Corvos de Efrim', 'atividades', 'raids'],
}

export default function Missoes() {
  return <MissionsPage />
}
