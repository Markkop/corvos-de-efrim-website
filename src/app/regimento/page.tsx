import { RegimentPage } from '@/components/pages/RegimentPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regimento | Corvos de Efrim',
  description:
    'Conheça as regras e diretrizes da comunidade Corvos de Efrim. Nossos valores e princípios que mantêm nossa comunidade unida.',
  keywords: [
    'regimento',
    'regras',
    'Corvos de Efrim',
    'diretrizes',
    'comunidade',
  ],
}

export default function Regimento() {
  return <RegimentPage />
}
