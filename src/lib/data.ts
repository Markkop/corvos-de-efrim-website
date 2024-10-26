import { DISCORD_INVITE_URL } from "./constants"

export const timelineEvents = [
  {
    year: '2014',
    title: 'A Fundação',
    description:
      'A Corvos de Efrim surge em Wakfu, unidos pela busca de aventuras e camaradagem.',
    image: 'https://i.imgur.com/wEQd5sZ.png',
  },
  {
    year: '2016-2018',
    title: 'Expansão',
    description:
      'A guilda cresce e se estabelece como uma das mais ativas do servidor.',
    image: '/images/barco.png',
  },
  {
    year: '2019',
    title: 'Hiato',
    description:
      'A guilda se aposenta em Wakfu, mas mantém contato pelo discord e outros jogos.',
    image: '/images/wipe.webp',
  },
  {
    year: '2020',
    title: 'Retorno',
    description:
      'A Corvos de Efrim volta ao jogo no então novo servidor monoconta Ogrest, de forma mais casual.',
    image: '/images/retorno.webp',
  },
  {
    year: '2024',
    title: 'Novos Horizontes',
    description:
      'Expandimos para Waven e outros jogos, mantendo nossa essência e valores.',
    image:
      'https://static.ankama.com/upload/backoffice/direct/2024-10-14/13e919929b5171593a980cf7bd70e9c6.png',
    cta: {
      text: 'Venha conosco!',
      link: DISCORD_INVITE_URL,
    },
  },
]

export const crewMembers = [
  {
    name: 'Mark',
    role: 'Líder da Guilda',
    description: 'Administra a guilda e coordena as atividades.',
    images: ['/images/mark-1.png'],
    specialties: ['Estratégia', 'Liderança', 'Desenvolvimento'],
  },
  {
    name: 'Caliente',
    role: 'Braço Direito',
    description: 'Colabora com a liderança e desenvolvimento da guilda.',
    images: ['/images/cali-2.png', '/images/cali-3.png'],
    specialties: ['PvE', 'Estratégia', 'Mentoria'],
  },
  {
    name: 'Dan',
    role: 'Capitão Interino',
    description: 'Mantém a guilda ativa com eventos criativos e envolventes.',
    images: ['/images/dan-1.png'],
    specialties: ['Organização', 'Criatividade', 'Comunicação'],
  },
  {
    name: 'Seten',
    role: 'Corvo Eterno',
    description: 'Sempre ativo no Wakfu, sempre presente.',
    images: ['/images/seten-1.png'],
    specialties: ['Ensino', 'Paciência', 'Suporte'],
  },
  {
    name: 'Mais em breve...',
    role: 'Membro Honorário',
    description: 'Esta lista está em construção',
    images: ['/images/corvos.png'],
    specialties: [],
  },
]

export const guildGames = [
  {
    name: 'Waven',
    status: 'recrutando',
    color: 'bg-green-500',
    image: '/images/waven-logo.png',
    lightBackground: false,
    link: 'https://forum.waven-game.com/en/52-devblogs-pt/6112-guildas',
  },
  {
    name: 'Wakfu',
    status: 'pouco ativa',
    color: 'bg-green-500',
    image: '/images/wakfu-logo-hd.png',
    lightBackground: false,
    link: 'https://www.wakfu.com/pt/forum/49-guildas/13189-guilda-corvos-efrim-2020',
  },
  {
    name: 'Dofus',
    status: 'pouco ativa',
    color: 'bg-gray-500',
    image: '/images/dofus-logo.webp',
    lightBackground: false,
    link: '',
  },
  {
    name: 'New World',
    status: 'inativo',
    color: 'bg-gray-500',
    image: '/images/newworld-logo.png',
    lightBackground: true,
    link: '',
  },
  {
    name: 'Guild Wars 2',
    status: 'inativo',
    color: 'bg-gray-500',
    image: '/images/gw2-logo.png',
    lightBackground: true,
    link: '',
  },
  {
    name: 'Lost Ark',
    status: 'inativo',
    color: 'bg-gray-500',
    image: '/images/lostark-logo.ico',
    lightBackground: false,
    link: '',
  },
]

export const videoList = [
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

