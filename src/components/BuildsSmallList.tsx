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
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wavenBuildSuggestions.slice(0, 3).map((build) => (
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
    </motion.div>
  )
}
