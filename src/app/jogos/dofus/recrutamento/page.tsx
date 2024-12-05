import { DofusRecruitmentComponent } from '@/components/dofus-recruitment'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recrutamento | Dofus | Corvos de Efrim',
  description:
    'Conheça as regras e processo de recrutamento da guilda Corvos de Efrim no Dofus.',
  keywords: ['recrutamento', 'Dofus', 'Corvos de Efrim', 'guilda', 'regras'],
}

export default function DofusRecruitment() {
  return <DofusRecruitmentComponent />
}
