'use client'

import { GalleryViewer } from '@/components/GalleryViewer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { guildGames, historicalMaterial } from '@/lib/data'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function WakfuPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Combine all images in order of priority
  const images = [
    '/images/wipe.webp',
    '/images/dance-club-1.webp',
    '/images/dance-club-2.webp',
    '/images/casamento-2017.png',
    '/images/pool-party.png',
    '/images/danca-das-cadeiras.png',
    '/images/danComYugo.png',
    '/images/markxAjudaPercedal.png',
    '/images/markxXPina.png',
    '/images/setenPedraPapel.png',
    '/images/corvosXArch.png',
    '/images/barco.png',
    '/images/bandeirada-juramento-1.webp',
    '/images/fashion-1-2-3-vai.gif',
    '/images/fashion-fiu-fiu.gif',
    '/images/fashion-names.png',
    '/images/herbo_1.gif',
    '/images/fashion-apresentacao_da_banda_2_3.gif',
  ]

  const sortedByNameImages = images.sort((a, b) => {
    const nameA = a.split('/').pop()?.split('.')[0]
    const nameB = b.split('/').pop()?.split('.')[0]
    return nameA?.localeCompare(nameB)
  })

  const sections = [
    {
      title: 'História',
      description: 'Nossa jornada desde 2014 no Wakfu.',
      href: '#historia',
    },
    {
      title: 'Membros',
      description: 'Conheça nossa tripulação.',
      href: '/jogos/wakfu/membros',
    },
    {
      title: 'Regimento',
      description: 'Conheça nossas regras e diretrizes.',
      href: '/jogos/wakfu/regimento',
    },
    {
      title: 'Galeria',
      description: 'Momentos memoráveis de nossas aventuras.',
      href: '#galeria',
    },
  ]

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const sortedHistoricalMaterial = [...historicalMaterial].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Wakfu</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Nossa história começou em Wakfu, um MMORPG tático onde construímos
          nossa comunidade.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {sections.map((section) => (
          <Link key={section.title} href={section.href}>
            <Card className="bg-[#2a2a2a] text-[#e6d7c3] h-full hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{section.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-[#2a2a2a] text-[#e6d7c3]" id="historia">
        <CardHeader>
          <CardTitle className="text-3xl">Nossa História no Wakfu</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p>
            A Corvos de Efrim foi fundada em 2014 no Wakfu, um MMORPG tático
            desenvolvido pela Ankama. Desde então, nos tornamos uma das guildas
            mais ativas e respeitadas do servidor brasileiro.
          </p>
          <p>
            Ao longo dos anos, participamos de diversos eventos, conquistamos
            territórios, e construímos uma comunidade forte e unida. Mesmo com
            as mudanças do jogo e períodos de hiato, mantivemos nossa essência e
            valores.
          </p>
          <p>
            Hoje, mantemos uma presença mais casual no servidor Ogrest, mas
            nossa história e memórias no Wakfu continuam sendo parte fundamental
            de quem somos.
          </p>
        </CardContent>
      </Card>

      <section id="galeria">
        <h2 className="text-3xl font-bold mb-8">Galeria</h2>
        <Card className="bg-[#2a2a2a] text-[#e6d7c3] p-6">
          <GalleryViewer
            images={sortedByNameImages}
            selectedIndex={selectedImageIndex}
            onImageSelect={handleImageSelect}
          />
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Material Histórico</h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sortedHistoricalMaterial.map((item) => (
            <HistoricalMaterialCard key={item.link} item={item} />
          ))}
        </motion.div>
      </section>
    </div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const HistoricalMaterialCard = ({
  item,
}: {
  item: (typeof historicalMaterial)[0]
}) => {
  const wakfuGame = guildGames.find((game) => game.name === 'Wakfu')

  return (
    <motion.div variants={itemVariants}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#1f1f1f] rounded-lg p-4 hover:bg-[#2a2a2a] transition-colors duration-200"
      >
        <p className="text-sm text-[#a27a50] mb-1">
          {format(new Date(item.date), 'dd MMM yyyy', { locale: ptBR })}
        </p>
        <h3 className="text-lg font-semibold text-[#e6d7c3] mb-2">
          {item.title}
        </h3>
      </a>
    </motion.div>
  )
}
