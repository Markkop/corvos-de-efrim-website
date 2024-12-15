'use client'

import { RelatedPages, type RelatedPage } from '@/components/RelatedPages'
import { BookOpen, Swords, UserPlus, Users } from 'lucide-react'
import { usePathname } from 'next/navigation'

const WAVEN_PAGES: RelatedPage[] = [
  {
    title: 'Builds',
    description: 'Explore builds recomendadas para diferentes classes',
    href: '/jogos/waven/builds',
    icon: <Swords className="h-6 w-6" />,
  },
  {
    title: 'Dicas',
    description: 'Guia de recursos e dicas essenciais para progredir',
    href: '/jogos/waven/dicas',
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: 'Recrutamento',
    description: 'Junte-se à nossa guilda no Waven',
    href: '/jogos/waven/recrutamento',
    icon: <UserPlus className="h-6 w-6" />,
  },
  {
    title: 'Membros',
    description: 'Lista de membros ativos da guilda',
    href: '/jogos/waven/membros',
    icon: <Users className="h-6 w-6" />,
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="space-y-12">
      {children}
      <RelatedPages currentPath={pathname} pages={WAVEN_PAGES} gridCols={3} />
    </div>
  )
}
