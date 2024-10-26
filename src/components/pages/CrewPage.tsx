'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CrewPage() {
  const crewMembers = [
    {
      name: 'Markkop',
      role: 'Líder da Guilda',
      description: 'Guia os Corvos com sabedoria e determinação.',
      image: '/images/corvos.png',
      specialties: ['Estratégia', 'Liderança', 'Desenvolvimento'],
    },
    {
      name: 'Ana',
      role: 'Coordenadora de Eventos',
      description: 'Mantém a guilda ativa com eventos criativos e envolventes.',
      image: '/images/corvos.png',
      specialties: ['Organização', 'Criatividade', 'Comunicação'],
    },
    {
      name: 'Carlos',
      role: 'Mestre das Missões',
      description: 'Coordena as atividades e desafios da guilda.',
      image: '/images/corvos.png',
      specialties: ['PvE', 'Estratégia', 'Mentoria'],
    },
    {
      name: 'Beatriz',
      role: 'Mentora dos Novatos',
      description: 'Auxilia novos membros em sua jornada inicial.',
      image: '/images/corvos.png',
      specialties: ['Ensino', 'Paciência', 'Suporte'],
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Nossa Tripulação</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça os membros que mantêm nossa guilda forte e unida.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {crewMembers.map((member) => (
          <Card key={member.name} className="bg-[#2a2a2a] text-[#e6d7c3]">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={member.image}
                    alt={`Avatar de ${member.name}`}
                  />
                  <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl">{member.name}</CardTitle>
                  <CardDescription className="text-[#bf9b30] text-lg">
                    {member.role}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">{member.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="bg-[#a27a50] text-black px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
