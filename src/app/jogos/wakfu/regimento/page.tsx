import { RegimentPage } from '@/components/pages/RegimentPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regimento | Wakfu | Corvos de Efrim',
  description:
    'Conheça as regras e diretrizes que mantêm nossa guilda unida e forte no Wakfu.',
  keywords: ['regimento', 'regras', 'Wakfu', 'Corvos de Efrim', 'guilda'],
}

export default function Regimento() {
  return <RegimentPage />
}
