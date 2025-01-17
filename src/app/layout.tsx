import { ThemeProvider } from '@/app/providers'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import Navigation from '@/components/Navigation'
import { TooltipProvider } from '@/components/ui/tooltip'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './global.css'

const meta = {
  title: 'Corvos de Efrim | Wakfu, Waven e Dofus 3.0',
  description:
    'Navegamos pelos mares de Wakfu, Waven e Dofus 3.0! Estamos recrutando!',
  themeColor: '#e6d7c3',
  backgroundColor: '#e6d7c3',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://corvosdeefrim.com/'),
  title: {
    default: meta.title,
    template: '%s',
  },
  description: meta.description,
  applicationName: 'Corvos de Efrim',
  keywords: [
    'Waven',
    'Wakfu',
    'Dofus',
    'Guild',
    'Gaming',
    'MMORPG',
    'Brasil',
    'Guilda',
  ],
  authors: [{ name: 'Corvos de Efrim' }],
  creator: 'Corvos de Efrim',
  publisher: 'Corvos de Efrim',
  category: 'Gaming',
  themeColor: meta.themeColor,
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
    countryName: 'Brazil',
  },

  twitter: {
    card: 'summary_large_image',
    title: {
      default: meta.title,
      template: '%s',
    },
    description: meta.description,
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
          <TooltipProvider>
            <div className="bg-[#e6d7c3] min-h-screen text-[#2a2a2a] font-serif">
              <header className="bg-[#2a2a2a] text-[#e6d7c3] sticky top-0 z-50">
                <Navigation />
              </header>

              <div className="max-w-7xl mx-auto px-6 py-4">
                <BreadcrumbNav />
              </div>

              <main className="max-w-7xl mx-auto lg:py-8 px-6">{children}</main>

              <footer className="bg-[#2a2a2a] text-[#e6d7c3] p-6 mt-12">
                <div className="max-w-7xl mx-auto text-center">
                  <p className="text-lg">
                    © 2024 Corvos de Efrim. Todos os direitos reservados.
                  </p>
                </div>
              </footer>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
