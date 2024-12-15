import { Download, UserPlus, Users } from 'lucide-react'
import { RelatedPages, type RelatedPage } from './RelatedPages'

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

interface DofusRelatedPagesProps {
  currentPath: string
  noTitle?: boolean
}

export function DofusRelatedPages({
  currentPath,
  noTitle,
}: DofusRelatedPagesProps) {
  return (
    <RelatedPages
      currentPath={currentPath}
      pages={DOFUS_PAGES}
      noTitle={noTitle}
    />
  )
}
