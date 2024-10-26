'use client'

import { ImageViewer } from '@/components/ImageViewer'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { crewMembers } from '@/lib/data'

interface CrewPageProps {
  short?: boolean
}

export function CrewPage({ short = false }: CrewPageProps) {
  const displayedMembers = short ? crewMembers.slice(0, 3) : crewMembers

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Nossa Tripulação</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça os membros que mantêm nossa guilda forte e unida.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayedMembers.map((member) => (
          <Card key={member.name} className="bg-[#2a2a2a] text-[#e6d7c3]">
            <div className="flex gap-6 p-6">
              <div className="w-1/3">
                <ImageViewer
                  images={member.images.map((image) => ({
                    src: image,
                    alt: `Foto de ${member.name}`,
                  }))}
                  width={200}
                  height={300}
                />
              </div>
              <div className="w-2/3 space-y-4">
                <div>
                  <CardTitle className="text-3xl">{member.name}</CardTitle>
                  <CardDescription className="text-[#bf9b30] text-lg">
                    {member.role}
                  </CardDescription>
                </div>
                <p className="text-lg">{member.description}</p>
                {member.specialties.length > 0 && (
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
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
