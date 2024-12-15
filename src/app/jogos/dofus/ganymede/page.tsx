import { GanymedePage } from '@/components/pages/GanymedePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ganymede | Dofus | Corvos de Efrim',
  description: 'Download dos arquivos JSON do Ganymede para Dofus.',
  keywords: ['Dofus', 'Ganymede', 'JSON', 'download', 'Corvos de Efrim'],
}

export default function Ganymede() {
  return <GanymedePage />
}
