'use client'

export function ContactPage() {
  const contactMethods = [
    { icon: '📧', method: 'E-mail', contact: 'corvos@efrim.com' },
    { icon: '🎮', method: 'Discord', contact: 'discord.gg/corvosdeefrim' },
    { icon: '📱', method: 'WhatsApp', contact: '+55 (11) 99999-9999' },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Tem alguma dúvida ou sugestão? Estamos aqui para ouvir você!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-8 rounded-xl text-center"
          >
            <div className="text-6xl mb-4">{method.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{method.method}</h3>
            <p className="text-[#a27a50] text-lg">{method.contact}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#a27a50] text-black p-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-8">Envie uma Mensagem</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-bold text-lg">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-bold text-lg">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 font-bold text-lg">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-bold text-lg">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              rows={6}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#2a2a2a] text-[#e6d7c3] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#2a2a2a]/80 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  )
}
