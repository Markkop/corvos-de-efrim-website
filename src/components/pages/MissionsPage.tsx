'use client'

import Image from 'next/image'

export function MissionsPage() {
  const missions = [
    {
      title: 'A Caçada ao Tesouro de Amakna',
      description:
        'Decifre pistas antigas e encontre o lendário tesouro escondido nas profundezas de Amakna.',
      difficulty: 'Médio',
      reward: 'Equipamento Raro + 1000 Kamas',
      image: '/images/amakna.png',
    },
    {
      title: 'Defesa de Sufokia',
      description:
        'Proteja a cidade subaquática de Sufokia contra uma invasão de criaturas abissais.',
      difficulty: 'Difícil',
      reward: 'Título Exclusivo + 2000 Kamas',
      image: '/images/barco.png',
    },
    {
      title: 'O Enigma da Torre Nebulosa',
      description:
        'Escale a misteriosa Torre Nebulosa e desvende seus segredos ancestrais.',
      difficulty: 'Muito Difícil',
      reward: 'Montaria Única + 5000 Kamas',
      image: '/images/dormor.png',
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Missões Ativas</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Embarque em aventuras épicas e ganhe recompensas exclusivas para os
          Corvos de Efrim.
        </p>
      </section>

      <div className="space-y-12">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-[#e6d7c3] p-8 rounded-xl flex flex-col md:flex-row gap-10"
          >
            <div className="md:w-1/3">
              <Image
                src={mission.image}
                alt={mission.title}
                width={500}
                height={375}
                className="rounded-lg object-cover w-full h-[250px]"
              />
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold text-[#a27a50]">
                {mission.title}
              </h2>
              <p className="text-xl">{mission.description}</p>
              <div className="flex justify-between items-center">
                <span className="bg-[#a27a50] text-black px-4 py-2 rounded-full text-lg">
                  Dificuldade: {mission.difficulty}
                </span>
                <span className="text-[#a27a50] font-bold text-xl">
                  Recompensa: {mission.reward}
                </span>
              </div>
              <button className="bg-[#a27a50] text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a27a50]/90 transition-colors">
                Aceitar Missão
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
