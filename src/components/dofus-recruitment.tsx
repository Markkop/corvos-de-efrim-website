'use client'

import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { BlogPostCard } from './BlogPostCard'
import { ImageViewer } from './ImageViewer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function DofusRecruitmentComponent() {
  const guildImages = [
    {
      src: '/images/corvos-painel-dofus.png',
      alt: 'Painel da Guilda Corvos no Dofus',
    },
  ]

  const serverImages = [
    {
      src: '/images/server-dofus.png',
      alt: 'Servidor Dakal 6 no Dofus',
    },
  ]

  const dofusNews = [
    {
      id: 'dofus-3-0',
      title: 'DOFUS 3.0: A Nova Era Chegou!',
      date: '2024-12-03',
      excerpt:
        'O grande dia chegou! A Atualização 3.0 de DOFUS, que promete transformar sua experiência de jogo, já está disponível!',
      content: `Mergulhe em gráficos modernizados e ambientes dinâmicos que reagem ao vento, à chuva, à neve e a outros caprichos da natureza. Esta nova versão oferece uma fluidez incomparável e prepara o terreno para ambiciosas atualizações futuras.

Principais destaques:
• Nova engine Unity substituindo o Flash
• Nova direço artística com designs aprimorados
• Balanceamento completo de classes e equipamentos
• Itens de aparência compartilhados entre personagens
• Piloto automático gratuito (nível 10+)
• Nova Feira do Trool & Gladiatrool`,
      images: [
        'https://static.ankama.com/upload/backoffice/direct/2024-12-02/77b095ea5139c3c15aed80fdcee90e88.jpg',
      ],
      featured: true,
      links: [
        {
          text: 'Leia mais',
          url: 'https://www.dofus.com/pt/mmorpg/atualizacoes/3-00-dofus-3-0',
          icon: 'external-link',
          colors: {
            background: '#bf9b30',
            hover: '#a68628',
            text: 'white',
          },
        },
      ],
    },
    {
      id: 'back-to-rush',
      title: 'Back to Rush – Todos os detalhes da grande viagem!',
      date: '2024-11-22',
      excerpt:
        'Durante o anúncio do evento Back to Rush no dia 5 de novembro, nós prometemos voltar ao assunto com mais detalhes. Com o lançamento de DOFUS 3.0 chegando aí, está na hora de mergulhar nas regras e nos mecanismos desse evento que entrará para a história do Mundo dos Doze.',
      content: `O grande dia está chegando: a versão 3.0 de Dofus será lançada no dia 3 de dezembro! Para inaugurar esse lançamento, preparamos um evento especial: Back to Rush.

Back to Rush é um evento competitivo e comunitário que traz quatro equipes de e-sport famosas:

• Solary: Sakor, Wakz, Chap, e Sapeuh (+ DofusAoCubo)
• Karmine Corp: Kameto e Kotei
• Aegis: MisterMV e DFG
• GentleMates: Squeezie e Nikof
• Equipe Ankama: Pro-Team, Zeratoul, Feral e Volcasaurus`,
      images: [
        'https://static.ankama.com/upload/backoffice/direct/2024-11-10/8b660af2d01b692a0cbb02e765961a99.jpg',
      ],
      featured: true,
      links: [
        {
          text: 'Leia mais',
          url: 'https://www.dofus.com/pt/mmorpg/noticias/novidades/1756587-back-rush-todos-os-detalhes-grande-viagem',
          icon: 'external-link',
          colors: {
            background: '#bf9b30',
            hover: '#a68628',
            text: 'white',
          },
        },
      ],
    },
  ]

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 space-y-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Guild Panel Image */}
      <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
        <CardContent className="pt-6 flex justify-center">
          <ImageViewer images={guildImages} width={1920} height={1080} />
        </CardContent>
      </Card>

      {/* Server Info */}
      <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#bf9b30]">
            <Info className="h-6 w-6" />
            Servidor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl font-medium text-center">Dakal 6</p>
          <div className="flex justify-center">
            <ImageViewer images={serverImages} width={1920} height={1080} />
          </div>
        </CardContent>
      </Card>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dofusNews.map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            cardLink={{
              url: post.links[0].url,
              external: post.links[0].url.startsWith('http'),
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
