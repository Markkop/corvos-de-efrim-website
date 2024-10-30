'use client'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { classes, wavenBuildSuggestions } from '@/lib/data'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Sword } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const renderIcons = (
  value: number,
  max: number,
  ActiveIcon: React.ElementType,
  inactiveClass: string,
  activeColor: string,
) => {
  return Array(max)
    .fill(0)
    .map((_, i) => (
      <ActiveIcon
        key={i}
        className={`inline-block w-4 h-4 ${i < value ? activeColor : inactiveClass}`}
      />
    ))
}

export function BuildsSmallList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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

  return (
    <Link href="/jogos/waven/builds" className="block">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wavenBuildSuggestions.slice(0, 3).map((build) => (
            <motion.div key={build.name} variants={itemVariants}>
              <Card className="bg-zinc-950 border-zinc-800 text-zinc-100 overflow-hidden h-full transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={classes[build.god].weapons[build.weapon].logo}
                      alt={`${build.name} weapon`}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-zinc-100">
                        {build.name}
                      </CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          {renderIcons(
                            build.cost,
                            3,
                            DollarSign,
                            'text-zinc-700',
                            'text-amber-500',
                          )}
                        </div>
                        <div className="flex items-center">
                          {renderIcons(
                            build.difficulty,
                            3,
                            Sword,
                            'text-zinc-700',
                            'text-amber-500',
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Link>
  )
}
