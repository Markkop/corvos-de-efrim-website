'use client'

import { ImageViewer } from '@/components/ImageViewer'
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import { crewMembers } from '@/lib/data'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

export function CrewSmallList() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
        {crewMembers.slice(0, 4).map((member) => (
          <Card
            key={member.name}
            className="bg-[#2a2a2a] text-[#e6d7c3] overflow-hidden group cursor-pointer"
          >
            <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
              <ImageViewer
                images={member.images.map((image) => ({
                  src: image,
                  alt: `Foto de ${member.name}`,
                }))}
                width={400}
                height={533}
                variant="short"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-70 pointer-events-none" />
              <CardFooter className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
                <div className="transition-transform duration-300 group-hover:translate-y-[-4px] space-y-0.5">
                  <CardTitle className="~text-[1rem]/[2rem] text-white leading-tight">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="~text-[0.875rem]/[1rem] text-[#bf9b30] leading-tight">
                    {member.role}
                  </CardDescription>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}

        <Link href="/tripulacao" className="block">
          <Card className="bg-[#2a2a2a] text-[#e6d7c3] overflow-hidden group cursor-pointer h-full">
            <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
              <CardFooter className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
                <div className="transition-transform duration-300 group-hover:translate-y-[-4px] text-center">
                  <CardTitle className="text-white text-xl mb-2">
                    Ver mais
                  </CardTitle>
                  <CardDescription className="text-[#bf9b30]">
                    +{crewMembers.length - 4} membros
                  </CardDescription>
                </div>
              </CardFooter>
            </div>
          </Card>
        </Link>
      </div>
    </motion.div>
  )
}
