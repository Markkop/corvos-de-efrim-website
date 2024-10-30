'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export function WavenPage() {
  const sections = [
    {
      title: 'Builds',
      description:
        'Explore builds recomendadas para diferentes classes e estilos de jogo.',
      href: '/jogos/waven/builds',
    },
    {
      title: 'Recrutamento',
      description: 'Junte-se à nossa guilda no Waven.',
      href: '/jogos/waven/recrutamento',
    },

    {
      title: 'Galeria',
      description:
        'Em breve: Momentos memoráveis de nossas aventuras no Waven.',
      href: '/jogos/waven/galeria',
      disabled: true,
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Waven</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Descubra recursos, guias e informações sobre nossa presença no Waven.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Card
            key={section.title}
            className="bg-[#2a2a2a] text-[#e6d7c3] hover:scale-105 transition-transform duration-200"
          >
            <CardHeader>
              <CardTitle className="text-2xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{section.description}</p>
              <Button
                asChild={!section.disabled}
                variant="default"
                className="w-full"
                disabled={section.disabled}
              >
                {section.disabled ? (
                  <span>Em breve</span>
                ) : (
                  <Link href={section.href}>Acessar</Link>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
