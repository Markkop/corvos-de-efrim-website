import { WavenRecruitmentComponent } from '@/components/waven-recruitment'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recrutamento | Waven | Corvos de Efrim',
  description:
    'Conheça as regras e processo de recrutamento da guilda Corvos de Efrim no Waven.',
  keywords: ['recrutamento', 'Waven', 'Corvos de Efrim', 'guilda', 'regras'],
}

export default function WavenRecruitment() {
  return <WavenRecruitmentComponent />
}
