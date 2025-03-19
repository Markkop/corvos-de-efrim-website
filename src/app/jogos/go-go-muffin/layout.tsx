'use client'

import { RelatedPages, type RelatedPage } from '@/components/RelatedPages'
import { BookOpen } from 'lucide-react'
import { usePathname } from 'next/navigation'

const GO_GO_MUFFIN_PAGES: RelatedPage[] = [
  {
    title: 'Sobre',
    description: 'Conheça mais sobre o jogo e suas mecânicas',
    href: '/jogos/go-go-muffin/sobre',
    icon: <BookOpen className="h-6 w-6" />,
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
