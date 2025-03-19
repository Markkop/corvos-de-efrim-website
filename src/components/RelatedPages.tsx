import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export type RelatedPage = {
  title: string
  description: string
  href: string
  icon: JSX.Element
}

interface RelatedPagesProps {
  currentPath: string
  pages: RelatedPage[]
  noTitle?: boolean
  gridCols?: 2 | 3
}

export function RelatedPages({
  currentPath,
  pages,
  noTitle,
  gridCols = 2,
}: RelatedPagesProps) {
  const relatedPages = pages.filter((page) => page.href !== currentPath)
  if (relatedPages.length === 0) return null

  return (
    <section className="mt-16">
      {!noTitle && (
        <h2 className="text-3xl font-bold mb-6 text-center">
          Páginas Relacionadas
        </h2>
      )}
      <div
        className={`grid gap-6 md:grid-cols-2 ${
          gridCols === 3 ? 'lg:grid-cols-3' : ''
        }`}
      >
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
