'use client'

import { ImageViewer } from '@/components/ImageViewer'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface GalleryViewerProps {
  images: string[]
  className?: string
  onImageSelect?: (index: number) => void
  selectedIndex?: number
}

export function GalleryViewer({
  images,
  className,
  onImageSelect,
  selectedIndex: externalSelectedIndex,
}: GalleryViewerProps) {
  const [internalSelectedIndex, setInternalSelectedIndex] = useState(0)

  // Use external index if provided, otherwise use internal
  const selectedIndex =
    typeof externalSelectedIndex !== 'undefined'
      ? externalSelectedIndex
      : internalSelectedIndex

  const imageObjects = images.map((src) => ({
    src,
    alt: `Galeria da Guilda - ${src.split('/').pop()?.split('.')[0]}`,
  }))

  const handleImageSelect = (index: number) => {
    setInternalSelectedIndex(index)
    onImageSelect?.(index)
  }

  const shouldPrioritize = (index: number) => {
    return index === selectedIndex || index < 4
  }

  return (
    <motion.div
      className={cn('space-y-4', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="aspect-video w-full relative ">
          <ImageViewer
            images={imageObjects}
            width={1280}
            height={720}
            initialIndex={selectedIndex}
            variant="short"
            className="h-full rounded-lg"
            onImageChange={handleImageSelect}
          />
        </div>
      </div>
      <motion.div
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {images.map((image, index) => (
            <motion.button
              key={image}
              onClick={() => handleImageSelect(index)}
              className={cn(
                'relative aspect-video rounded-lg overflow-hidden',
                'hover:opacity-90 transition-opacity duration-200',
                'focus:outline-none focus:ring-2 focus:ring-[#bf9b30]',
                index === selectedIndex && 'ring-2 ring-[#bf9b30]',
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
              }}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 16vw, 12vw"
                className="object-cover"
                priority={shouldPrioritize(index)}
                loading={shouldPrioritize(index) ? 'eager' : 'lazy'}
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
