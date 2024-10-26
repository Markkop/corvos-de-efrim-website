'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { Youtube } from 'lucide-react'
import Image from 'next/image'

// Add type definition for video
type Video = {
  title: string
  url: string
  duration: string
  gameLogo?: string // Optional field to override logo selection
}

const shortenTitle = (title: string, maxLength: number) => {
  if (title.length <= maxLength) return title
  return title.substring(0, maxLength - 3) + '...'
}

const getGameLogo = (video: Video) => {
  // If custom game logo is specified, use it for logo selection
  if (video.gameLogo) {
    const logoKey = video.gameLogo.toLowerCase()
    if (logoKey === 'wakfu') return '/images/wakfu-logo-hd.png'
    if (logoKey === 'dofus') return '/images/dofus-logo.webp'
    if (logoKey === 'waven') return '/images/waven-logo.png'
  }

  // Fallback to title-based detection
  const titleLower = video.title.toLowerCase()
  if (titleLower.includes('wakfu')) return '/images/wakfu-logo-hd.png'
  if (titleLower.includes('dofus')) return '/images/dofus-logo.webp'
  return '/images/wakfu-logo-hd.png' // default to Wakfu
}

const isLightBackground = (title: string) => {
  const titleLower = title.toLowerCase()
  return titleLower.includes('newworld') || titleLower.includes('gw2')
}

export function YoutubeWidget({ videos }: { videos: Video[] }) {
  return (
    <Card className="w-full sm:w-80 bg-gradient-to-b from-red-600 to-red-700 overflow-hidden shadow-lg flex flex-col border-0">
      <CardHeader className="py-[19px] px-4 flex flex-row items-center space-x-2 border-b border-red-500">
        <Youtube className="h-6 w-6 text-white" />
        <h2 className="text-lg font-semibold text-white font-display">
          YouTube
        </h2>
      </CardHeader>
      <CardContent className="bg-zinc-900 p-4 text-white flex-grow">
        <h3 className="text-xs font-medium mb-3 text-red-300 tracking-wider uppercase font-display">
          Últimos Vídeos
        </h3>
        <ScrollArea className="h-[280px] sm:h-72 w-full pr-4">
          {videos.map((video, index) => (
            <div key={index} className="mb-2 group">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 hover:bg-zinc-800 p-1 rounded transition-colors"
              >
                <div
                  className={cn(
                    'w-5 h-5 relative flex-shrink-0',
                    isLightBackground(video.title) &&
                      'bg-gray-400 rounded-lg p-0.5',
                  )}
                >
                  <Image
                    src={getGameLogo(video)}
                    alt="Game logo"
                    fill
                    className={cn(
                      'object-contain',
                      isLightBackground(video.title) && 'rounded-lg p-0.5',
                    )}
                    sizes="20px"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium group-hover:text-red-400 transition-colors pr-2 font-sans">
                      {shortenTitle(video.title, 28)}
                    </span>
                    <span className="text-[10px] text-zinc-400 flex-shrink-0 font-mono">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-zinc-900 p-4 border-t border-zinc-800">
        <Button
          className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors font-display"
          asChild
        >
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Canal
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
