import { RecruitmentPage } from '@/components/pages/RecruitmentPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recrutamento | Corvos de Efrim',
  description:
    'Junte-se aos Corvos de Efrim! Descubra como fazer parte da nossa comunidade de jogadores e participe de nossas aventuras.',
  keywords: [
    'recrutamento',
    'Corvos de Efrim',
    'nova guilda',
    'comunidade gamer',
    'jogadores',
  ],
}

export default function Recrutamento() {
  return <RecruitmentPage />
}
