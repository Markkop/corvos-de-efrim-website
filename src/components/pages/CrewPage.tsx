'use client'

import { CrewMemberCard } from '@/components/CrewMemberCard'
import { wakfuCrewMembers, wavenCrewMembers } from '@/lib/data'

interface CrewPageProps {
  game?: 'wakfu' | 'waven'
}

export function CrewPage({ game = 'wakfu' }: CrewPageProps) {
  const crewMembers = game === 'wakfu' ? wakfuCrewMembers : wavenCrewMembers
  const title = game === 'wakfu' ? 'Wakfu' : 'Waven'

  const sortedCrewMembers = [...crewMembers].sort((a, b) => {
    if (a.name === 'Mais em breve') return 1
    if (b.name === 'Mais em breve') return -1

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
        <h1 className="text-5xl font-bold mb-6">Nossa Tripulação no {title}</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conheça os membros que mantêm nossa guilda forte e unida.
        </p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
        {sortedCrewMembers.map((member) => (
          <CrewMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
