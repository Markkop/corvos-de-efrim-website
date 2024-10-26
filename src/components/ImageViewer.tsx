'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ImageViewerProps {
  images: Array<{
    src: string
    alt: string
  }>
  width: number
  height: number
  initialIndex?: number
}

export function ImageViewer({
  images,
  width,
  height,
  initialIndex = 0,
}: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  const currentImage = images[currentIndex]
  const showNavigation = images.length > 1

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 h-auto w-full overflow-hidden"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={width}
              height={height}
              className="rounded-lg object-cover w-full h-[250px] transition-transform duration-300 hover:scale-110"
            />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-0 bg-transparent border-none">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            layout="fill"
            objectFit="contain"
            className="rounded-full py-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </Button>
          {showNavigation && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
