'use client'

type ContactMethod = {
  icon: string
  method: string
  contact: string
  href: string
  ariaLabel: string
}

export function ContactPage() {
  const contactMethods: ContactMethod[] = [
    {
      icon: '🎮',
      method: 'Discord',
      contact: 'discord.gg/corvosdeefrim',
      href: 'https://discord.gg/corvosdeefrim',
      ariaLabel: 'Entre no nosso servidor Discord',
    },
    {
      icon: '📺',
      method: 'YouTube',
      contact: '@corvosdeefrim',
      href: 'https://youtube.com/@corvosdeefrim',
      ariaLabel: 'Visite nosso canal no YouTube',
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Junte-se à nossa comunidade no Discord ou acompanhe nosso conteúdo no
          YouTube!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {contactMethods.map((method) => (
          <a
            key={method.method}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2a2a2a] text-[#e6d7c3] p-8 rounded-xl text-center 
              hover:bg-[#2a2a2a]/80 transition-all duration-300 transform hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-[#a27a50] focus:ring-offset-2 focus:ring-offset-[#2a2a2a]"
            aria-label={method.ariaLabel}
            tabIndex={0}
          >
            <div className="text-6xl mb-4" aria-hidden="true">
              {method.icon}
            </div>
            <h2 className="text-2xl font-bold mb-3">{method.method}</h2>
            <p className="text-[#a27a50] text-lg">{method.contact}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
