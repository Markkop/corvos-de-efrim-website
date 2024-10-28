'use client'

import { ImageViewer } from '@/components/ImageViewer'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { crewMembers } from '@/lib/data'

export function CrewPage() {
  const sortedCrewMembers = [...crewMembers].sort((a, b) => {
    // Always put "Mais em breve" last
    if (a.name === 'Mais em breve') return 1
    if (b.name === 'Mais em breve') return -1

    // Put members with default/no images after those with custom images
    const aHasDefaultImage =
      !a.images.length || a.images[0] === '/images/corvos.png'
    const bHasDefaultImage =
      !b.images.length || b.images[0] === '/images/corvos.png'

    if (aHasDefaultImage && !bHasDefaultImage) return 1
    if (!aHasDefaultImage && bHasDefaultImage) return -1

    return 0
  })

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Nossa Tripulação</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça os membros que mantêm nossa guilda forte e unida.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedCrewMembers.map((member) => (
          <Card
            key={member.name}
            className="bg-[#2a2a2a] text-[#e6d7c3] overflow-hidden group"
          >
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
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
