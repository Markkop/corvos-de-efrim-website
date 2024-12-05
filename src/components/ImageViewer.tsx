'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ImageViewerProps {
  images: Array<{
    src: string
    alt: string
  }>
  width: number
  height: number
  initialIndex?: number
  variant?: 'default' | 'short'
  className?: string
  onImageChange?: (index: number) => void
}

export function ImageViewer({
  images,
  width,
  height,
  initialIndex = 0,
  variant = 'default',
  className,
  onImageChange,
}: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  const handlePrevious = () => {
    setIsLoading(true)
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    setCurrentIndex(newIndex)
    onImageChange?.(newIndex)
  }

  const handleNext = () => {
    setIsLoading(true)
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    onImageChange?.(newIndex)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const currentImage = images[currentIndex]
  const showNavigation = images.length > 1

  const buttonStyles = `
    bg-gradient-to-b from-neutral-800/60 to-neutral-900/60
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.2)]
    border border-neutral-700/50
    transition-all
    hover:from-neutral-700/70 hover:to-neutral-800/70
    active:from-neutral-900/80 active:to-neutral-950/80
    active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
  `

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'p-0 h-auto w-full overflow-hidden',
            variant === 'short' ? 'h-full rounded-none' : '',
            className,
          )}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div
            className={cn(
              'overflow-hidden relative w-full',
              variant === 'short' ? 'h-full' : 'aspect-video',
              variant === 'short' ? 'rounded-none' : 'rounded-lg',
            )}
          >
            <motion.div
              initial={false}
              animate={isLoading ? { opacity: 1 } : { opacity: 0 }}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              key={currentImage.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={cn(
                  'object-cover transition-transform duration-300 hover:scale-110',
                  variant === 'short' ? '' : 'rounded-lg',
                )}
                onLoad={handleImageLoad}
              />
            </motion.div>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-0 bg-neutral-950/95 border-none overflow-hidden">
        <div className="relative w-full h-full">
          <motion.div
            initial={false}
            animate={isLoading ? { opacity: 1 } : { opacity: 0 }}
            className="absolute inset-0 bg-black z-10"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage.src}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                onLoad={handleImageLoad}
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              buttonStyles,
              'absolute top-4 right-4 w-10 h-10 rounded-full hover:bg-transparent z-20',
            )}
            onClick={() => setIsOpen(false)}
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6 text-white/90" />
          </Button>

          {/* Navigation buttons */}
          {showNavigation && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  buttonStyles,
                  'absolute left-4 top-1/2 -translate-y-1/2 w-12 h-20 hover:bg-transparent active:scale-95 transition-transform z-20',
                )}
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-10 w-10 text-white/90 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  buttonStyles,
                  'absolute right-4 top-1/2 -translate-y-1/2 w-12 h-20 hover:bg-transparent active:scale-95 transition-transform z-20',
                )}
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-10 w-10 text-white/90 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
              </Button>
            </>
          )}

          {/* Middle section overlay */}
          <div
            className="absolute inset-x-20 inset-y-0 bg-transparent cursor-pointer z-20"
            onClick={() => setIsOpen(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            aria-label="Close image viewer"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
