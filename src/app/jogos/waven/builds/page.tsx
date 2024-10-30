import { WavenBuildsPage } from '@/components/pages/WavenBuildsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Builds | Waven | Corvos de Efrim',
  description:
    'Explore builds recomendadas para Waven pela comunidade Corvos de Efrim. Encontre builds para diferentes classes e estilos de jogo.',
  keywords: ['builds', 'Waven', 'Corvos de Efrim', 'guia', 'classes'],
}

export default function WavenBuilds() {
  return <WavenBuildsPage />
}
