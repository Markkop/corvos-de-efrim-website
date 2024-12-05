import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen, Swords, UserPlus, Users } from 'lucide-react'
import Link from 'next/link'

type RelatedPage = {
  title: string
  description: string
  href: string
  icon: JSX.Element
}

const ALL_PAGES: RelatedPage[] = [
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
  // Filter out current page from related pages
  const relatedPages = ALL_PAGES.filter((page) => page.href !== currentPath)

  return (
    <section className="mt-16">
      {!noTitle && (
        <h2 className="text-3xl font-bold mb-6 text-center">
          Páginas Relacionadas
        </h2>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPages.map((page) => (
          <Link key={page.href} href={page.href}>
            <Card className="bg-[#2a2a2a] text-[#e6d7c3] h-full hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <div className="text-amber-500">{page.icon}</div>
                  {page.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-sm text-gray-400">{page.description}</p>
                <ArrowRight className="h-5 w-5 text-amber-500" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
