'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function RecruitmentPage() {
  const recruitmentSteps = [
    {
      title: 'Preencha o Formulário',
      description:
        'Inicie sua jornada preenchendo nosso formulário de recrutamento.',
    },
    {
      title: 'Entrevista',
      description:
        'Converse com nossos líderes para conhecermos melhor suas expectativas.',
    },
    {
      title: 'Período de Teste',
      description: 'Participe de eventos e missões para se integrar à guilda.',
    },
    {
      title: 'Boas-vindas Oficiais',
      description: 'Seja oficialmente reconhecido como um Corvo de Efrim!',
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Junte-se aos Corvos</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Estamos sempre em busca de novos talentos para fortalecer nossa
          tripulação. Se você tem paixão por aventuras e trabalho em equipe,
          este é o seu lugar!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {recruitmentSteps.map((step, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-8 rounded-xl"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#a27a50]">
              {index + 1}. {step.title}
            </h3>
            <p className="text-lg">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#a27a50] text-black p-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-8">Formulário de Recrutamento</h2>
        <form className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-lg">
              Nome
            </Label>
            <Input
              id="name"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-lg">
              E-mail
            </Label>
            <Input
              id="email"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="experience" className="text-lg">
              Experiência em Jogos
            </Label>
            <Textarea
              id="experience"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              rows={4}
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="motivation" className="text-lg">
              Por que deseja se juntar aos Corvos de Efrim?
            </Label>
            <Textarea
              id="motivation"
              className="w-full p-3 rounded bg-[#e6d7c3] text-lg"
              rows={4}
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="skill" className="text-lg">
              Habilidade Principal
            </Label>
            <Select required>
              <SelectTrigger className="bg-[#e6d7c3] text-[#2a2a2a] text-lg p-3">
                <SelectValue placeholder="Selecione uma habilidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="navigation">Navegação</SelectItem>
                <SelectItem value="combat">Combate</SelectItem>
                <SelectItem value="stealth">Furtividade</SelectItem>
                <SelectItem value="magic">Magia das Sombras</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button
            type="submit"
            className="bg-[#2a2a2a] text-[#e6d7c3] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#2a2a2a]/80 transition-colors"
          >
            Enviar Candidatura
          </button>
        </form>
      </div>
    </div>
  )
}
