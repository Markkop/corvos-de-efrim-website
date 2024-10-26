'use client'

import { Button } from '@/components/ui/button'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'INÍCIO', href: '/' },
    { label: 'HISTÓRIA', href: '/historia' },
    { label: 'TRIPULAÇÃO', href: '/tripulacao' },
    { label: 'RECRUTAMENTO', href: '/recrutamento' },
    { label: 'REGIMENTO', href: '/regimento' },
    { label: 'CONTATO', href: '/contato' },
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
      url: 'https://www.youtube.com/channel/UCt2vHFLkdUSkLJjcagzX9rA',
      image: '/icons/youtube.svg',
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

        {/* Nav Items - Center */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} onClick={handleNavClick}>
                  <Button
                    variant="ghost"
                    className={`hover:text-[#a27a50] ~text-xs/sm ${
                      isActive(item.href) ? 'text-[#a27a50]' : ''
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
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

export default Navigation
