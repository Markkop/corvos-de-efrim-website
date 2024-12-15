import { BookOpen, Swords, UserPlus, Users } from 'lucide-react'
import { RelatedPages, type RelatedPage } from './RelatedPages'

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

interface WavenRelatedPagesProps {
  currentPath: string
  noTitle?: boolean
}

export function WavenRelatedPages({
  currentPath,
  noTitle,
}: WavenRelatedPagesProps) {
  return (
    <RelatedPages
      currentPath={currentPath}
      pages={WAVEN_PAGES}
      noTitle={noTitle}
      gridCols={3}
    />
  )
}
