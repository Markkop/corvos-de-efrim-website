import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { guildGames } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { ImageViewer } from './ImageViewer'

interface BlogPostLink {
  text: string
  url: string
  icon?: string
  colors?: {
    background: string
    hover: string
    text: string
  }
}

interface BlogPost {
  id: string
  title: string
  date: string
  excerpt?: string
  content: string
  images: string[]
  featured: boolean
  links: BlogPostLink[]
}

interface BlogPostCardProps {
  post: BlogPost
  featured?: boolean
  cardLink?: {
    url: string
    external?: boolean
  }
}

export function BlogPostCard({
  post,
  featured = false,
  cardLink,
}: BlogPostCardProps) {
  const wavenGame = guildGames.find((game) => game.name === 'Waven')

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (!cardLink) return <>{children}</>

    if (cardLink.external) {
      return (
        <a
          href={cardLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={cardLink.url} className="block cursor-pointer">
        {children}
      </Link>
    )
  }

  const formattedContent = post.content.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < post.content.split('\n').length - 1 && <br />}
    </React.Fragment>
  ))

  return (
    <CardWrapper>
      <Card
        className={cn(
          'overflow-hidden transition-all duration-200 h-full flex flex-col',
          featured ? 'lg:flex-row lg:h-[400px]' : '',
          'hover:border-primary/50',
          cardLink && 'hover:scale-[1.02]',
        )}
      >
        <div className={cn('relative', featured ? 'lg:w-2/3' : 'aspect-video')}>
          <ImageViewer
            images={post.images.map((img) => ({ src: img, alt: post.title }))}
            width={1200}
            height={800}
            variant="short"
            className="h-full"
          />
        </div>
        <div
          className={cn('flex flex-col flex-grow', featured ? 'lg:w-1/3' : '')}
        >
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.date}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground whitespace-pre-line">
              {formattedContent}
            </p>
          </CardContent>
          <CardFooter className="mt-auto p-6">
            <div className="flex gap-4 w-full">
              {post.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  asChild
                  className={cn(
                    'flex-1 transition-all duration-200 px-6 py-3 text-lg font-medium rounded-xl',
                    'hover:scale-105 active:scale-100',
                    'shadow-sm hover:shadow-md',
                    'flex items-center justify-center',
                    'min-w-0',
                  )}
                  style={
                    link.colors
                      ? ({
                          backgroundColor: link.colors.background,
                          color: link.colors.text,
                          ':hover': {
                            backgroundColor: link.colors.hover,
                          },
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  <Link
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.url.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-center justify-center gap-3 w-full truncate"
                  >
                    <span className="truncate">{link.text}</span>
                    {link.icon === 'external-link' && (
                      <ExternalLink className="h-7 w-7 flex-shrink-0" />
                    )}
                    {link.icon === 'discord' && (
                      <FaDiscord className="h-7 w-7 flex-shrink-0" />
                    )}
                    {link.icon === 'waven' && wavenGame?.image && (
                      <Image
                        src={wavenGame.image}
                        alt="Waven"
                        width={28}
                        height={28}
                        className={cn(
                          'object-contain flex-shrink-0',
                          wavenGame.lightBackground && 'invert brightness-0',
                        )}
                      />
                    )}
                    {link.icon === 'dofus' && (
                      <Image
                        src="/images/dofus-logo.webp"
                        alt="Dofus"
                        width={28}
                        height={28}
                        className="object-contain flex-shrink-0"
                      />
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </CardFooter>
        </div>
      </Card>
    </CardWrapper>
  )
}
