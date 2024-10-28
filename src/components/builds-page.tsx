'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { wavenBuildSuggestions } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export function BuildsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Builds do Waven</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Selecionamos algumas builds que achamos interessantes para caso você
          queira alguma inspiração para o seu personagem.
        </p>
        <p className="text-sm text-gray-500">
          Observação: mesmo que a página da build mencione uma versão mais
          antiga, ela ainda é válida. No Waven, nem todo patch tem
          balanceamento.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wavenBuildSuggestions.map((build) => (
          <Link
            href={build.link}
            key={build.name}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-[#2a2a2a] text-[#e6d7c3] overflow-hidden h-full transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={build.logoImgSrc}
                    alt={`${build.name} weapon`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <CardTitle className="text-2xl">{build.name}</CardTitle>
                </div>
                <CardDescription className="text-[#bf9b30] text-lg">
                  {build.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {build.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#bf9b30] text-[#2a2a2a]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
