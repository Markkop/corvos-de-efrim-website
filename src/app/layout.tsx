import { ThemeProvider } from '@/app/providers'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import Image from 'next/image'

const meta = {
  title: 'Corvos de Efrim',
  description:
    'Uma guilda presente em Wakfu, Waven e outros jogos. Junte-se a nós!',
  image: `/images/barco.png`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Hunter Chang',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <nav className="flex w-full items-center justify-between bg-black p-4 text-white">
            <Link className="hover:text-[#a27a50] flex gap-2 items-center" href="/">
              <Image
              className='rounded-full'
                alt="Corvos de Efrim"
                height={48}
                src="/images/corvos.png"
                width={48}
              />
              <h1 className="text-2xl font-bold">Corvos de Efrim</h1>
              </Link> 
              <div className="flex items-center space-x-4">
                <Link className="text-lg hover:text-[#a27a50]" href="/">
                  Home
                </Link>
                {/* <Link className="text-lg hover:text-[#a27a50]" href="#">
                  Eventos
                </Link> */}
                <Link className="text-lg hover:text-[#a27a50]" href="/about">
                  Sobre
                </Link>
                <div className="ml-4 flex space-x-3">
                  <Link aria-label="Our GitHub" href="https://github.com/Markkop/corvos-de-efrim-website/">
                    <Image
                      alt="GitHub"
                      height={24}
                      src="/icons/github.svg"
                      width={24}
                      />
                  </Link>
                  <Link aria-label="Our Discord" href="https://discord.gg/bNM3DvVCJk">
                  <Image
                      alt="Discord"
                      height={24}
                      src="/icons/discord.svg"
                      width={24}
                      />
                  </Link>
                  <Link aria-label="Our YouTube" href="https://www.youtube.com/channel/UCt2vHFLkdUSkLJjcagzX9rA">
                  <Image
                      alt="YouTube"
                      height={24}
                      src="/icons/youtube.svg"
                      width={24}
                      />
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
