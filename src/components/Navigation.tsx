'use client'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { DISCORD_INVITE_URL, YOUTUBE_CHANNEL_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  Download,
  ScrollText,
  Swords,
  UserPlus,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'INÍCIO', href: '/' },
    { label: 'DOFUS', href: '/jogos/dofus' },
    { label: 'WAVEN', href: '/jogos/waven' },
    { label: 'WAKFU', href: '/jogos/wakfu' },
    { label: 'GO GO MUFFIN', href: '/jogos/go-go-muffin' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Markkop/corvos-de-efrim-website/',
      image: '/icons/github.svg',
    },
    {
      name: 'Discord',
      url: DISCORD_INVITE_URL,
      image: '/icons/discord.svg',
    },
    {
      name: 'YouTube',
      url: YOUTUBE_CHANNEL_URL,
      image: '/icons/youtube.svg',
    },
  ]

  const wakfuItems = [
    {
      title: 'Regimento',
      href: '/jogos/wakfu/regimento',
      description: 'Regras e informações sobre nossa guilda no Wakfu.',
      icon: ScrollText,
    },
    {
      title: 'Membros',
      href: '/jogos/wakfu/membros',
      description: 'Lista de membros ativos da guilda no Wakfu.',
      icon: Users,
    },
  ]

  const wavenItems = [
    {
      title: 'Builds',
      href: '/jogos/waven/builds',
      description: 'Builds recomendadas para classes do Waven.',
      icon: Swords,
    },
    {
      title: 'Dicas',
      href: '/jogos/waven/dicas',
      description: 'Dicas e guias para jogadores de Waven.',
      icon: BookOpen,
    },
    {
      title: 'Membros',
      href: '/jogos/waven/membros',
      description: 'Lista de membros da comunidade no Waven.',
      icon: Users,
    },
    {
      title: 'Recrutamento',
      href: '/jogos/waven/recrutamento',
      description:
        'Informações sobre como se juntar à nossa comunidade no Waven.',
      icon: UserPlus,
    },
  ]

  const goGoMuffinItems = [
    {
      title: 'Sobre',
      href: '/jogos/go-go-muffin/sobre',
      description: 'Conheça mais sobre o jogo e suas mecânicas.',
      icon: BookOpen,
    },
    {
      title: 'Paper Plane Schedule',
      href: '/jogos/go-go-muffin/paper-plane',
      description:
        'Calendário e guia completo dos ciclos do Operation: Paper Planes.',
      icon: Calendar,
    },
  ]

  const dofusItems = [
    {
      title: 'Membros',
      href: '/jogos/dofus/membros',
      description: 'Lista de membros ativos da guilda no Dofus.',
      icon: Users,
    },
    {
      title: 'Recrutamento',
      href: '/jogos/dofus/recrutamento',
      description:
        'Informações sobre como se juntar à nossa comunidade no Dofus.',
      icon: UserPlus,
    },
    {
      title: 'Ganymede',
      href: '/jogos/dofus/ganymede',
      description: 'Guias JSON traduzidos para Ganymede',
      icon: Download,
    },
  ]

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  // Add isActive helper function
  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="max-w-7xl mx-auto p-3">
      <div className="flex items-center justify-between">
        {/* Logo - Left */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 hover:text-[#a27a50]"
          >
            <Image
              src="/images/corvos.png"
              alt="Corvos de Efrim"
              width={48}
              height={48}
              className="rounded-full"
            />
            <h1 className="~text-lg/2xl font-bold">Corvos de Efrim</h1>
          </Link>
        </motion.div>

        {/* Updated Navigation Menu */}
        <div className="hidden lg:block">
          <NavigationMenu className="relative">
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    INÍCIO
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/jogos/dofus" legacyBehavior passHref>
                  <NavigationMenuTrigger>DOFUS</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {dofusItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/jogos/waven" legacyBehavior passHref>
                  <NavigationMenuTrigger>WAVEN</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {wavenItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/jogos/wakfu" legacyBehavior passHref>
                  <NavigationMenuTrigger>WAKFU</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {wakfuItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/jogos/go-go-muffin" legacyBehavior passHref>
                  <NavigationMenuTrigger>GO GO MUFFIN</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {goGoMuffinItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Social Links and Mobile Menu - Right */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex space-x-4">
            {socialLinks.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                  aria-label={`Our ${item.name}`}
                >
                  <Image
                    alt={item.name}
                    height={28}
                    src={item.image}
                    width={28}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={handleToggleMenu}
            className="lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 overflow-hidden"
          >
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              initial="closed"
              animate="open"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} onClick={handleNavClick}>
                    <Button
                      variant="ghost"
                      className={`hover:text-[#a27a50] text-lg w-full ${
                        isActive(item.href) ? 'text-[#a27a50]' : ''
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="flex justify-center space-x-4 mt-4"
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 20, opacity: 0 },
                }}
              >
                {socialLinks.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80"
                      aria-label={`Our ${item.name}`}
                    >
                      <Image
                        alt={item.name}
                        height={28}
                        src={item.image}
                        width={28}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Add ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string
    icon?: React.ComponentType<{ className?: string }>
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-amber-500" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navigation
