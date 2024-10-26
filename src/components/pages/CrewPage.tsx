'use client'

import { ImageViewer } from '@/components/ImageViewer'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { crewMembers } from '@/lib/data'
import { cn } from '@/lib/utils'

interface CrewPageProps {
  short?: boolean
}

export function CrewPage({ short = false }: CrewPageProps) {
  const displayedMembers = crewMembers

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          {short ? 'Tripulação Permanente' : 'Nossa Tripulação'}
        </h1>
        {!short && (
          <p className="text-xl max-w-3xl mx-auto">
            Conheça os membros que mantêm nossa guilda forte e unida.
          </p>
        )}
      </section>

      <div
        className={cn(
          'grid grid-cols-1 gap-6',
          short
            ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5'
            : 'md:grid-cols-2',
        )}
      >
        {displayedMembers.map((member) => (
          <Card
            key={member.name}
            className={cn(
              'bg-[#2a2a2a] text-[#e6d7c3] overflow-hidden group',
              // Only add cursor-pointer when in short mode
              short ? 'cursor-pointer' : '',
            )}
          >
            {short ? (
              // Short version - simplified card
              <div className="relative w-full aspect-square">
                <ImageViewer
                  images={member.images.map((image) => ({
                    src: image,
                    alt: `Foto de ${member.name}`,
                  }))}
                  width={400}
                  height={400}
                  variant="short"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-70 pointer-events-none" />
                <CardFooter className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
                  <div className="transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <CardTitle className="text-xl text-white">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-[#bf9b30]">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardFooter>
              </div>
            ) : (
              // Full version - original card
              <div className="flex gap-6 p-6">
                <div className="w-1/3 flex justify-center items-center">
                  <ImageViewer
                    images={member.images.map((image) => ({
                      src: image,
                      alt: `Foto de ${member.name}`,
                    }))}
                    width={200}
                    height={300}
                    className="p-0 py-0 my-0 m-0"
                  />
                </div>
                <div className="w-2/3 space-y-4">
                  <CardHeader className="p-0">
                    <CardTitle className="text-3xl">{member.name}</CardTitle>
                    <CardDescription className="text-[#bf9b30] text-lg">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg">{member.description}</p>
                    {member.specialties.length > 0 && (
                      <div className="mt-4">
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
                  </CardContent>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
