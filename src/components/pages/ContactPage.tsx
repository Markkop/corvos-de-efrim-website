'use client'

import { videoList } from '@/lib/data'
import { YoutubeWidget } from '../youtube-widget'

type ContactMethod = {
  imageSrc: string
  imageAlt: string
  method: string
  contact: string
  href: string
  ariaLabel: string
  isRounded?: boolean
}

export function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Junte-se à nossa comunidade no Discord ou acompanhe nosso conteúdo no
          YouTube!
        </p>
      </section>

      <div className="flex justify-center flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        <YoutubeWidget videos={videoList} />

        <div className="flex justify-center lg:justify-end">
          <iframe
            src="https://discord.com/widget?id=169261868836323328&theme=dark"
            width="350"
            height="500"
            className="rounded-xl border-0 bg-[#2a2a2a]"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Server Widget"
          />
        </div>
      </div>
    </div>
  )
}
