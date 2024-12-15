'use client'

import { RelatedPages, type RelatedPage } from '@/components/RelatedPages'
import { Download, UserPlus, Users } from 'lucide-react'
import { usePathname } from 'next/navigation'

const DOFUS_PAGES: RelatedPage[] = [
  {
    title: 'Membros',
    description: 'Lista de membros ativos da guilda',
    href: '/jogos/dofus/membros',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Recrutamento',
    description: 'Junte-se à nossa guilda no Dofus',
    href: '/jogos/dofus/recrutamento',
    icon: <UserPlus className="h-6 w-6" />,
  },
  {
    title: 'Ganymede',
    description: 'Download dos arquivos JSON do Ganymede',
    href: '/jogos/dofus/ganymede',
    icon: <Download className="h-6 w-6" />,
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="space-y-12">
      {children}
      <RelatedPages currentPath={pathname} pages={DOFUS_PAGES} />
    </div>
  )
}
