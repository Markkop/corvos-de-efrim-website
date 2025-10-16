import PaperPlanePage from '@/components/pages/PaperPlanePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paper Plane Schedule | Go Go Muffin | Corvos de Efrim',
  description:
    'Calendário completo dos ciclos do Operation: Paper Planes em Go Go Muffin. Acompanhe eventos, recompensas e planejamento estratégico.',
  keywords: [
    'Paper Plane',
    'Go Go Muffin',
    'schedule',
    'calendario',
    'Corvos de Efrim',
  ],
}

export default function PaperPlane() {
  return <PaperPlanePage />
}
