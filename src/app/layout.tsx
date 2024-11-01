import { ThemeProvider } from '@/app/providers'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import Navigation from '@/components/Navigation'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './global.css'

const meta = {
  title: 'Corvos de Efrim',
  description:
    'Uma guilda presente em Wakfu, Waven e outros jogos. Junte-se a nós!',
  largeImageUrl: `/images/og.jpg`,
  thumbnailUrl: `/images/og-thumbnail.png`,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://corvosdeefrim.com/'),
  title: {
    default: meta.title,
    template: '%s',
  },
  description: meta.description,
  openGraph: {
    title: {
      default: meta.title,
      template: '%s',
    },
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: meta.thumbnailUrl,
        width: 300,
        height: 300,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: meta.title,
      template: '%s',
    },
    description: meta.description,
    images: meta.largeImageUrl,
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="bg-[#e6d7c3] min-h-screen text-[#2a2a2a] font-serif">
            <header className="bg-[#2a2a2a] text-[#e6d7c3] sticky top-0 z-50">
              <Navigation />
            </header>

            <div className="max-w-7xl mx-auto px-6 py-4">
              <BreadcrumbNav />
            </div>

            <main className="max-w-7xl mx-auto py-8 px-6">{children}</main>

            <footer className="bg-[#2a2a2a] text-[#e6d7c3] p-6 mt-12">
              <div className="max-w-7xl mx-auto text-center">
                <p className="text-lg">
                  © 2024 Corvos de Efrim. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
