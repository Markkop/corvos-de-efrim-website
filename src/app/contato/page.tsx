import { ContactPage } from '@/components/pages/ContactPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | Corvos de Efrim',
  description:
    'Entre em contato com a comunidade Corvos de Efrim. Junte-se a nós e faça parte desta incrível comunidade de jogadores.',
  keywords: ['contato', 'Corvos de Efrim', 'comunidade gamer', 'discord'],
}

export default function Contato() {
  return <ContactPage />
}
