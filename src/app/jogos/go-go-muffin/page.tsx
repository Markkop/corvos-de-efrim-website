'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Wallet } from 'lucide-react'
import Link from 'next/link'

export default function GoGoMuffinPage() {
  const sections = [
    {
      title: 'Sobre',
      description: 'Conheça mais sobre o jogo e suas mecânicas',
      href: '/jogos/go-go-muffin/sobre',
      icon: <BookOpen className="h-6 w-6 text-amber-500" />,
    },
    {
      title: 'Event Scheduler',
      description:
        'Calendário visual com todos os eventos diários, semanais e temporários',
      href: '/jogos/go-go-muffin/scheduler',
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Paper Plane Schedule',
      description:
        'Calendário e guia completo dos ciclos do Operation: Paper Planes',
      href: '/jogos/go-go-muffin/paper-plane',
      icon: <Calendar className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Stellarite Tracker',
      description: 'Track your in-game cash income and expenses',
      href: '/jogos/go-go-muffin/stellarite-tracker',
      icon: <Wallet className="h-6 w-6 text-green-500" />,
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Go Go Muffin</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Embarque em uma aventura doce e desafiadora com nosso adorável
          protagonista!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={section.href}>
              <Card className="bg-[#2a2a2a] text-[#e6d7c3] h-full hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
