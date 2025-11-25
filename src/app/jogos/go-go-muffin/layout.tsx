'use client'

import { RelatedPages, type RelatedPage } from '@/components/RelatedPages'
import { BookOpen, Calendar, Sparkles } from 'lucide-react'
import { usePathname } from 'next/navigation'

const GO_GO_MUFFIN_PAGES: RelatedPage[] = [
  {
    title: 'Sobre',
    description: 'Conheça mais sobre o jogo e suas mecânicas',
    href: '/jogos/go-go-muffin/sobre',
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: 'Paper Plane Schedule',
    description:
      'Calendário e guia completo dos ciclos do Operation: Paper Planes',
    href: '/jogos/go-go-muffin/paper-plane',
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    title: 'Melomon Skill Planner',
    description:
      'Plan and optimize melomon passive skill upgrades for maximum attack power',
    href: '/jogos/go-go-muffin/melomon-planner',
    icon: <Sparkles className="h-6 w-6" />,
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="space-y-12">
      {children}
      <RelatedPages currentPath={pathname} pages={GO_GO_MUFFIN_PAGES} />
    </div>
  )
}
