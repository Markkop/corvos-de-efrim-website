'use client'

import { Button } from '@/components/ui/button'
import { DISCORD_INVITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <nav className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:text-[#a27a50]">
          <Image
            src="/images/corvos.png"
            alt="Corvos de Efrim"
            width={56}
            height={56}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold">Corvos de Efrim</h1>
        </Link>

        <button
          onClick={handleToggleMenu}
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block lg:flex lg:items-center lg:justify-between mt-4 lg:mt-0`}
      >
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className="hover:text-[#a27a50] text-lg w-full lg:w-auto"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          {socialLinks.map((item) => (
            <Link
              href={item.url}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              aria-label={`Our ${item.name}`}
            >
              <Image alt={item.name} height={28} src={item.image} width={28} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
