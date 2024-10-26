'use client'

import { YoutubeWidget } from '../youtube-widget'

type ContactMethod = {
  imageSrc: string
  imageAlt: string
  method: string
  contact: string
  href: string
  ariaLabel: string
  isRounded?: boolean
}

const videoList = [
  {
    title: 'Wakfu Necromundo - Toross Mordal - Stasis 4 - 4 esteles',
    url: 'https://www.youtube.com/watch?v=v2-nOqKEizc',
    duration: '7:16',
    gameLogo: 'wakfu',
  },
  {
    title: 'Brother Knights Chafer Season Fight Speedrun',
    url: 'https://www.youtube.com/watch?v=7Ta3CEBokMg',
    duration: '2:19',
    gameLogo: 'waven',
  },
  {
    title: 'Feira Trool Speedrun Waven',
    url: 'https://www.youtube.com/watch?v=ILAMqiVb38w',
    duration: '1:55',
    gameLogo: 'waven',
  },
  {
    title: 'Wakfu Torre Mineral 200 - Stasis 5 - 4 esteles',
    url: 'https://www.youtube.com/watch?v=p39b5XW4xoI',
    duration: '7:13',
    gameLogo: 'wakfu',
  },
  {
    title: 'Fazendo luta sazonal dos tauros em menos de 2 minutos',
    url: 'https://www.youtube.com/watch?v=i9Anm8FY-4A',
    duration: '2:25',
    gameLogo: 'waven',
  },
  {
    title: 'Waven Yugo x Oropo Speedrun: 4 lutas em menos de 10 minutos',
    url: 'https://www.youtube.com/watch?v=Fv1zchiSWDU',
    duration: '9:21',
    gameLogo: 'waven',
  },
  {
    title: 'Farmando 20k de fragmento em menos de 3 minutos por luta',
    url: 'https://www.youtube.com/watch?v=qI4xB4AOql8',
    duration: '3:27',
    gameLogo: 'waven',
  },
  {
    title: 'Melhor build de Sram Ourai solo!',
    url: 'https://www.youtube.com/watch?v=9kvWvqjceg8',
    duration: '4:53',
    gameLogo: 'waven',
  },
  {
    title: 'Iop Astramantis e a Irmandade dos Esquecidos',
    url: 'https://www.youtube.com/watch?v=T_dz86K3fmU',
    duration: '3:43',
    gameLogo: 'waven',
  },
  {
    title: 'Estratégia: Lance Dur (Combate Sazonal)',
    url: 'https://www.youtube.com/watch?v=47BkkJMIrEk',
    duration: '5:15',
    gameLogo: 'waven',
  },
  {
    title: 'Nova subclasse no Waven: Iop Astramantis',
    url: 'https://www.youtube.com/watch?v=xxPUwVsyz2o',
    duration: '5:42',
    gameLogo: 'waven',
  },
  {
    title: 'Ladino tenta solar Ateliê Abanadonado e olha no que deu',
    url: 'https://www.youtube.com/watch?v=pOExcA-4cwA',
    duration: '4:12',
    gameLogo: 'wakfu',
  },
  {
    title: 'Equipe de Elite ajuda Osamodas a capturar invocação endgame',
    url: 'https://www.youtube.com/watch?v=q7dReHDmX0E',
    duration: '4:47',
    gameLogo: 'wakfu',
  },
  {
    title: 'Estratégia: Lance Dur x Beladona (Waven)',
    url: 'https://www.youtube.com/watch?v=BgaDQV1PtfM',
    duration: '23:08',
    gameLogo: 'waven',
  },
  {
    title: 'Cire Momore no Wakfu (Osa/Eca/Xel/Sac/Lad)',
    url: 'https://www.youtube.com/watch?v=AsjVYhK4pss',
    duration: '10:24',
    gameLogo: 'wakfu',
  },
  {
    title: 'Iop Spectral Irmandade dos Esquecidos (Waven)',
    url: 'https://www.youtube.com/watch?v=Y0S5eUirgWU',
    duration: '7:44',
    gameLogo: 'waven',
  },
  {
    title: 'Guia de Farm Ken Kartana: Porcos, Tauros, Smagadores e Vampyros',
    url: 'https://www.youtube.com/watch?v=_43jDg2AyHk',
    duration: '9:10',
    gameLogo: 'waven',
  },
  {
    title: 'Xelor Pramium Katar (Waven)',
    url: 'https://www.youtube.com/watch?v=6w_ulaPx-uk',
    duration: '8:28',
    gameLogo: 'waven',
  },
  {
    title: 'Iop Stalaktoss Defasagem Gameplay (Waven)',
    url: 'https://www.youtube.com/watch?v=0ZFpjTf_phw',
    duration: '7:23',
    gameLogo: 'waven',
  },
  {
    title: 'Dicas essenciais para (re)começar no Wakfu (2024)',
    url: 'https://www.youtube.com/watch?v=NTeHuF7UXhE',
    duration: '7:33',
    gameLogo: 'wakfu',
  },
  {
    title: 'Xelor Pramium Gameplay (Waven)',
    url: 'https://www.youtube.com/watch?v=qS4NuA4Ayoo',
    duration: '9:17',
    gameLogo: 'waven',
  },
  {
    title: 'Build Iop Kasai Colisão (Waven)',
    url: 'https://www.youtube.com/watch?v=DDfXj7_gX4U',
    duration: '13:45',
    gameLogo: 'waven',
  },
  {
    title: 'Build Xelor Tako Colisão (Waven)',
    url: 'https://www.youtube.com/watch?v=79Tqsj62_os',
    duration: '17:08',
    gameLogo: 'waven',
  },
  {
    title: 'Estratégia: Lance Dur x Cire Momore (Waven)',
    url: 'https://www.youtube.com/watch?v=m4UoqonxiOU',
    duration: '23:48',
    gameLogo: 'waven',
  },
  {
    title: 'Torre Mineral 200 - Stasis 31, 4 esteles',
    url: 'https://www.youtube.com/watch?v=qE66tjs_BLU',
    duration: '7:01',
    gameLogo: 'wakfu',
  },
  {
    title: 'Conde Traspafrent + Mamãe Gerbela - Stasis 21, 3 esteles',
    url: 'https://www.youtube.com/watch?v=hX9wcS1JJnY',
    duration: '12:14',
    gameLogo: 'wakfu',
  },
  {
    title: 'Torre Mineral 200 - Stasis 21, 4 esteles',
    url: 'https://www.youtube.com/watch?v=MuiXZyMm2V0',
    duration: '5:21',
    gameLogo: 'wakfu',
  },
  {
    title: 'Torre Mineral 215 - Stasis 21, 4 esteles',
    url: 'https://www.youtube.com/watch?v=2nVnecmwShM',
    duration: '8:50',
    gameLogo: 'wakfu',
  },
  {
    title: 'Calabouço Magmog, o Paparog stasis 50, guilda Corvos de Efrim',
    url: 'https://www.youtube.com/watch?v=2YvkUqiNQFU',
    duration: '10:35',
    gameLogo: 'wakfu',
  },
  {
    title: 'Ladino/Roublard + Krobax Abandoned Workshop in 5 minutes',
    url: 'https://www.youtube.com/watch?v=fQpSZTtUsJM',
    duration: '4:00',
    gameLogo: 'wakfu',
  },
  {
    title: 'Wakfu - Cra pegando lvl 200 matando miaw :3',
    url: 'https://www.youtube.com/watch?v=T4pdQQQCjaE',
    duration: '2:00',
    gameLogo: 'wakfu',
  },
  {
    title: '[PVP] I Torneio Efrim - FINAL Katiau X Papatudo',
    url: 'https://www.youtube.com/watch?v=QogOkR0RddY',
    duration: '7:41',
    gameLogo: 'wakfu',
  },
  {
    title: '[PVP] I Torneio Efrim - Semifinal Katiau X Team Apollo',
    url: 'https://www.youtube.com/watch?v=6fm6LcGJGc4',
    duration: '10:12',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Spectrex HARDCORE',
    url: 'https://www.youtube.com/watch?v=WXa9vVP0u0k',
    duration: '4:45',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Flaxhid/Meyduro HARDCORE',
    url: 'https://www.youtube.com/watch?v=3A1g8oTCSt0',
    duration: '6:48',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Vertox - Xelorium Past',
    url: 'https://www.youtube.com/watch?v=g0S5vHrcwuk',
    duration: '6:44',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Enurado HC',
    url: 'https://www.youtube.com/watch?v=50ghEnZDDL8',
    duration: '9:24',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Koko Riko (Archmonster)',
    url: 'https://www.youtube.com/watch?v=MpuJm6WjiQc',
    duration: '5:00',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Srambad w/ 2 challs',
    url: 'https://www.youtube.com/watch?v=Yy7j1i-XVZE',
    duration: '3:55',
    gameLogo: 'wakfu',
  },
  {
    title: 'Sorteio Mega-Kamas! (07/08/16) [Wakfu]',
    url: 'https://www.youtube.com/watch?v=um3G_rg28kg',
    duration: '4:18',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Enurado Normal',
    url: 'https://www.youtube.com/watch?v=AQ-sBjmaEsk',
    duration: '4:10',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Fungus HC',
    url: 'https://www.youtube.com/watch?v=BdIjjUysivU',
    duration: '6:26',
    gameLogo: 'wakfu',
  },
  {
    title: '[SOLO] Osamodas X Flaxhid',
    url: 'https://www.youtube.com/watch?v=AD10JymuTic',
    duration: '6:15',
    gameLogo: 'wakfu',
  },
  {
    title: 'Wakfu: Nova Incarnam! [Patch 1.47]',
    url: 'https://www.youtube.com/watch?v=Eu63knzWNxg',
    duration: '9:05',
    gameLogo: 'wakfu',
  },
  {
    title: '[TUTORIAL] Templo do Laposa Impeladol',
    url: 'https://www.youtube.com/watch?v=w8_2XEoIPQI',
    duration: '8:42',
    gameLogo: 'wakfu',
  },
  {
    title: '[TUTORIAL] Black Wabbit',
    url: 'https://www.youtube.com/watch?v=xpiB1nzCzcs',
    duration: '7:34',
    gameLogo: 'wakfu',
  },
  {
    title: '[TUTORIAL] Ala do Embaixador',
    url: 'https://www.youtube.com/watch?v=tjk_ozlepRY',
    duration: '7:07',
    gameLogo: 'wakfu',
  },
  {
    title: '[TUTORIAL] Castelo de Wagnar',
    url: 'https://www.youtube.com/watch?v=1vvrTmGPUIM',
    duration: '10:09',
    gameLogo: 'wakfu',
  },
]

export function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Junte-se à nossa comunidade no Discord ou acompanhe nosso conteúdo no
          YouTube!
        </p>
      </section>

      <div className="flex justify-center flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        <YoutubeWidget videos={videoList} />

        <div className="flex justify-center lg:justify-end">
          <iframe
            src="https://discord.com/widget?id=169261868836323328&theme=dark"
            width="350"
            height="500"
            className="rounded-xl border-0 bg-[#2a2a2a]"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Server Widget"
          />
        </div>
      </div>
    </div>
  )
}
