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
    color: 'bg-orange-500',
    image: '/images/wakfu-logo-hd.png',
    lightBackground: false,
    link: 'https://www.wakfu.com/pt/forum/49-guildas/13189-guilda-corvos-efrim-2020',
  },
  {
    name: 'Dofus',
    status: 'inativo',
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
