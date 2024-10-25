'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Pages() {
  const [currentTab, setCurrentTab] = useState('INÍCIO')

  const TabContent = {
    'INÍCIO': <HomePage />,
    'HISTÓRIA': <HistoryPage />,
    'TRIPULAÇÃO': <CrewPage />,
    'RECRUTAMENTO': <RecruitmentPage />,
    'MISSÕES': <MissionsPage />,
    'CONTATO': <ContactPage />
  }

  return (
    <div className="bg-[#e6d7c3] min-h-screen text-[#2a2a2a] font-serif">
      <header className="bg-[#2a2a2a] text-[#e6d7c3] p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex space-x-4">
            {['INÍCIO', 'HISTÓRIA', 'TRIPULAÇÃO', 'RECRUTAMENTO'].map((item) => (
              <button key={item} onClick={() => setCurrentTab(item)} className={`hover:text-[#bf9b30] ${currentTab === item ? 'text-[#bf9b30]' : ''}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            {['MISSÕES', 'CONTATO'].map((item) => (
              <button key={item} onClick={() => setCurrentTab(item)} className={`hover:text-[#bf9b30] ${currentTab === item ? 'text-[#bf9b30]' : ''}`}>
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        {TabContent[currentTab]}
      </main>

      <footer className="bg-[#2a2a2a] text-[#e6d7c3] p-4 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2023 Corvos de Efrim. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <section className="relative text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Corvos de Efrim</h1>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <Image src="/placeholder.svg" alt="Left crow" width={100} height={100} className="opacity-50" />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Image src="/placeholder.svg" alt="Right crow" width={100} height={100} className="opacity-50" />
      </div>
      <div className="mb-8">
        <Image src="/placeholder.svg" alt="Corvos de Efrim logo" width={150} height={150} className="mx-auto" />
      </div>
      <div className="text-xl mb-8">197 - 1931</div>
      <h2 className="text-2xl font-bold mb-4">Nosso voo é a escuridão,<br />Nossos mares não têm fim.</h2>
      <div className="flex justify-center space-x-8 mb-12">
        <div className="w-12 h-12 bg-[#2a2a2a] rounded-full"></div>
        <div className="w-12 h-12 bg-[#2a2a2a] rounded-full"></div>
        <div className="w-12 h-12 bg-[#2a2a2a] rounded-full"></div>
      </div>
      <div className="relative">
        <Image src="/placeholder.svg" alt="Ships" width={1000} height={300} className="w-full" />
      </div>
    </section>
  )
}

function HistoryPage() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">A História dos Corvos de Efrim</h2>
      <div className="space-y-6">
        <p>No ano de 197, nas costas sombrias de Efrim, nasceu uma lenda que perduraria por séculos. Os Corvos de Efrim, uma tripulação de piratas destemidos, surgiram das brumas do mar, jurando lealdade apenas à escuridão e à liberdade.</p>
        <p>Liderados pelo lendário Capitão Morvan, o Corvo Negro, a tripulação rapidamente ganhou notoriedade por suas táticas audaciosas e sua habilidade de desaparecer nas sombras. Seus navios, pintados de negro e adornados com velas que lembravam asas de corvos, tornaram-se um presságio de terror nos sete mares.</p>
        <p>Ao longo dos séculos, os Corvos de Efrim enfrentaram tempestades, monstros marinhos e frotas inteiras, sempre emergindo vitoriosos. Suas façanhas incluem o roubo do tesouro real de Aurum, a descoberta da ilha perdida de Nebulosa e a derrota da temível Armada de Ferro.</p>
        <p>Hoje, em 1931, os Corvos de Efrim continuam a navegar sob o comando da Capitã Lyra, a Dama dos Corvos, mantendo viva a lenda e o espírito de liberdade que define sua tripulação há mais de mil anos.</p>
      </div>
    </section>
  )
}

function CrewPage() {
  const crewMembers = [
    { name: 'Capitã Lyra', role: 'A Dama dos Corvos', description: 'Líder astuta e feroz, Lyra comanda os Corvos de Efrim com uma mistura de sabedoria ancestral e audácia juvenil.' },
    { name: 'Thorne', role: 'Mestre de Navegação', description: 'Com um sexto sentido para correntes e ventos, Thorne guia os navios através das mais perigosas águas.' },
    { name: 'Raven', role: 'Mestra de Armas', description: 'Especialista em todas as formas de combate, Raven treina a tripulação para ser tão mortal quanto as lendas contam.' },
    { name: 'Zephyr', role: 'Mestre das Sombras', description: 'Espião e sabotador, Zephyr se move como o vento, coletando segredos e eliminando ameaças antes que se tornem perigos.' }
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Nossa Tripulação</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {crewMembers.map((member) => (
          <div key={member.name} className="bg-[#2a2a2a] text-[#e6d7c3] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <h4 className="text-lg mb-2 text-[#bf9b30]">{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function RecruitmentPage() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Junte-se aos Corvos</h2>
      <p className="mb-6 text-center">Buscamos almas corajosas para se juntarem à nossa lendária tripulação. Se você tem o coração de um verdadeiro Corvo de Efrim, este é o seu chamado.</p>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Nome</label>
          <input type="text" id="name" className="w-full p-2 border border-[#2a2a2a] rounded" required />
        </div>
        <div>
          <label htmlFor="skill" className="block mb-1">Habilidade Principal</label>
          <select id="skill" className="w-full p-2 border border-[#2a2a2a] rounded" required>
            <option value="">Selecione uma habilidade</option>
            <option value="navigation">Navegação</option>
            <option value="combat">Combate</option>
            <option value="stealth">Furtividade</option>
            <option value="magic">Magia das Sombras</option>
          </select>
        </div>
        <div>
          <label htmlFor="reason" className="block mb-1">Por que deseja se juntar aos Corvos?</label>
          <textarea id="reason" className="w-full p-2 border border-[#2a2a2a] rounded" rows={4} required></textarea>
        </div>
        <button type="submit" className="w-full bg-[#2a2a2a] text-[#e6d7c3] p-2 rounded hover:bg-[#bf9b30]">Enviar Candidatura</button>
      </form>
    </section>
  )
}

function MissionsPage() {
  const missions = [
    { title: 'O Tesouro de Meia-Noite', description: 'Recupere o lendário Rubi da Lua Negra da fortaleza flutuante do Barão Sombrio.' },
    { title: 'Névoa Eterna', description: 'Navegue através do Mar de Névoa para descobrir a fonte da misteriosa tempestade perpétua.' },
    { title: 'Resgate nas Profundezas', description: 'Resgate a tripulação capturada das garras dos terríveis Merfolk das Cavernas Abissais.' },
    { title: 'O Mapa Sussurrante', description: 'Decifre os segredos do Mapa Sussurrante para localizar a ilha do tempo perdido.' }
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Missões Atuais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missions.map((mission) => (
          <div key={mission.title} className="bg-[#2a2a2a] text-[#e6d7c3] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
            <p>{mission.description}</p>
            <button className="mt-4 bg-[#bf9b30] text-[#2a2a2a] px-4 py-2 rounded hover:bg-[#e6d7c3]">Aceitar Missão</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h2>
      <p className="mb-6 text-center">Para se comunicar com os Corvos de Efrim, envie uma mensagem através dos ventos sombrios ou use o formulário abaixo.</p>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Nome</label>
          <input type="text" id="name" className="w-full p-2 border border-[#2a2a2a] rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <input type="email" id="email" className="w-full p-2 border border-[#2a2a2a] rounded" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Mensagem</label>
          <textarea id="message" className="w-full p-2 border border-[#2a2a2a] rounded" rows={4} required></textarea>
        </div>
        <button type="submit" className="w-full bg-[#2a2a2a] text-[#e6d7c3] p-2 rounded hover:bg-[#bf9b30]">Enviar Mensagem</button>
      </form>
    </section>
  )
}