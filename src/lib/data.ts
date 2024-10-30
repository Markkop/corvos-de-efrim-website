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

export const wakfuCrewMembers = [
  {
    name: 'Mark',
    role: 'Líder da Guilda',
    description: 'Administra a guilda e coordena as atividades.',
    images: ['/images/mark-1.png'],
  },
  {
    name: 'Caliente',
    role: 'Braço Direito',
    description: 'Colabora com a liderança e desenvolvimento da guilda.',
    images: ['/images/cali-2.png', '/images/cali-3.png'],
  },
  {
    name: 'Dan',
    role: 'Capitão Interino',
    description: 'Mantém a guilda ativa com eventos criativos e envolventes.',
    images: ['/images/dan-1.png'],
  },
  {
    name: 'Seten',
    role: 'Corvo Eterno',
    description: 'Sempre ativo no Wakfu, sempre presente.',
    images: ['/images/seten-1.png'],
  },
  {
    name: 'Locker',
    role: 'Guardião',
    description: 'Protetor dedicado da guilda, sempre pronto para ajudar novos membros.',
    images: ['/images/locker-1.png'],
  },
  {
    name: 'Shaman',
    role: 'Veterano de Guerra',
    description: 'Experiente em todas as formas de combate e desafios.',
    images: ['/images/shaman-1.png', '/images/shaman-2.png'],
  },
  {
    name: 'Iorik',
    role: 'Veterano',
    description: 'Experiente em todas as formas de combate e desafios.',
    images: ['/images/corvos.png'],
  },
  {
    name: 'Paul Cadmus',
    role: 'Veterano',
    description: 'Um dos membros mais antigos, conhecido por sua dedicação e experiência.',
    images: ['/images/toxine-1.png', '/images/bump-1.png'],
  },
  {
    name: 'Bronzato',
    role: 'Estrategista',
    description: 'Especialista em táticas de combate e otimização de builds.',
    images: ['/images/bronzato-1.png'],
  },
  {
    name: "Noa D'Arca",
    role: 'Fundador',
    description: 'O corvo que trouxe as primeiras sementes.',
    images: ['/images/noa-1.png'],
  },
  {
    name: 'Tenokashi',
    role: 'Explorador',
    description: 'Sempre em busca de novas aventuras e desafios.',
    images: ['/images/corvos.png'],
  },
  {
    name: 'Acém',
    role: 'Diplomata',
    description: 'Responsável por manter boas relações com outras guildas.',
    images: ['/images/acem-1.png'],
  },
  {
    name: 'Otelo',
    role: 'Tático',
    description: 'Especialista em coordenação de grupo e estratégias avançadas.',
    images: ['/images/otelo-1.png'],
  },
  {
    name: 'Mob',
    role: 'Veterano de Guerra',
    description: 'Experiente em todas as formas de combate e desafios.',
    images: ['/images/corvos.png'],
  },

  {
    name: 'Mais em breve...',
    role: 'Membro Honorário',
    description: 'Esta lista está em construção',
    images: ['/images/corvos.png'],
  },
]

export const wavenCrewMembers = [
  {
    name: 'Mark',
    role: 'Líder da Guilda',
    description: 'Administra a guilda e coordena as atividades.',
    images: ['/images/mark-waven-1.png'],
  },
  {
    name: 'Caliente',
    role: 'Braço Direito',
    description: 'Colabora com a liderança e desenvolvimento da guilda.',
    images: ['/images/corvos.png'],
  },
  {
    name: 'NelsinHB',
    role: 'Veterano',
    description: '',
    images: ['/images/corvos.png'],
  },
  {
    name: 'Hypmen',
    role: 'Veterano',
    description: '',
    images: ['/images/corvos.png'],
  },
  {
    name: 'Cachorro Magro',
    role: 'Veterano',
    description: '',
    images: ['/images/corvos.png'],
  },
  {
    name: 'Mais em breve...',
    role: 'Membro Honorário',
    description: 'Esta lista está em construção',
    images: ['/images/corvos.png'],
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

export const historicalMaterial = [
  {
    date: '2020-10-27',
    title: 'Guilda Corvos de Efrim (2020)',
    tags: ['forum', 'wakfu'],
    link: 'https://www.wakfu.com/pt/forum/49-guildas/13189-guilda-corvos-efrim-2020'
  },
  {
    date: '2019-08-16',
    title: 'Corvos de Efrim se Aposenta',
    tags: ['forum', 'wakfu'],
    link: 'https://www.wakfu.com/pt/forum/49-guildas/12295-corvos-efrim-aposenta'
  },
  {
    date: '2015-07-13',
    title: 'O Livro da Arca',
    tags: ['forum', 'wakfu'],
    link: 'https://www.wakfu.com/pt/forum/19-roleplay/5036-livro-arca'
  },
  {
    date: '2014-07-25',
    title: 'Guilda Corvos de Efrim (Original)',
    tags: ['forum', 'wakfu'],
    link: 'https://www.wakfu.com/pt/forum/49-guildas/348-guilda-corvos-efrim'
  },
  {
    date: '2016-06-18',
    title: 'O Almanaque do Construtor',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/document/d/1A4r8TZB-OOcIKBd5Xj3TrkSymAv6P_X4X3pn7nb0JbA/edit?tab=t.0'
  },
  {
    date: '2017-11-08',
    title: 'Projeto: Corvos de Efrim Reborn',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/document/d/1yrda3fmmsoOBLUf2-EfTmslaAClDr4vP6353lwRKILg/edit?tab=t.0#heading=h.9ea9pg9jy3lj'
  },
  {
    date: '2018-01-18',
    title: 'Campanha #1: Corvos em Guerra',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/document/d/1a1WLc7izwAaYPBpG0kaDEIaZWTkiv4FsOaapEetf8cc/edit?tab=t.0'
  },
  {
    date: '2017-07-02',
    title: 'Cargos 3.0 (Pontos de Corvo)',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/spreadsheets/d/14kvFmk4er141joPMigj9iCl-Xxdc9juDp13rhqhLu8c/edit?gid=0#gid=0'
  },
  {
    date: '2016-04-16',
    title: 'Cargos (2016) - Planilha',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/spreadsheets/d/17Y832Oyne6gO0sjRegpy0lTJRrjCiy3o7aQV5wEpO-o/edit?gid=0#gid=0'
  },
  {
    date: '2016-06-25',
    title: 'Plano de Governo - Sufokia',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/document/d/1HsCcHe6Qq2wC-VLcS00_V064SZUS5Dtdoc1ela7_97o/edit?tab=t.0'
  },
  {
    date: '2016-04-16',
    title: 'Cargos (2016) - Documento',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/document/d/1iOBADcQQxfkpMTEBf9Y-0y-mp_61EcUIJRqeSc30bVE/edit?tab=t.0'
  },
  {
    date: '2016-04-10',
    title: 'Cargos 2.0 [Rascunho apenas]',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/spreadsheets/d/1o8IkrBoQ0Rk-CTHtkp1q6dj6FeDYNTYNE7yuiYPMHoY/edit?gid=0#gid=0'
  },
  {
    date: '2023-11-23',
    title: 'Cargos - Corvos de Efrim (2023)',
    tags: ['doc', 'wakfu'],
    link: 'https://docs.google.com/document/d/1LeFgOOWw9rSdOuZUPkdYGuqfZvTINE9LF0FKa2MN28I/edit?tab=t.0'
  }
]

const weaponLogo = {
  'pikuxala': 'https://www.waven-build.com/img/classes/swords/Aiguille%20Pikuxala.webp',
  'arcarius': 'https://www.waven-build.com/img/classes/swords/Paladir%20Arcarius.webp',
  'sicarius': 'https://www.waven-build.com/img/classes/swords/Paladir%20Sicarius.webp',
  'ourai': 'https://www.waven-build.com/img/classes/swords/Lame%20Oura%C3%AF.webp',
  'apostruker': 'https://www.waven-build.com/img/classes/swords/Scalpel%20de%20l\'Apostruker.webp',
}


export const wavenBuildSuggestions = [
  {
    name: 'Xelor Pikuxala - Burst / Ataque',
    description: 'Build boa e barata para fazer lutas fáceis rapidamente',
    tags: ['daily', 'farm', 'aoe', 'on budget'],
    link: 'https://www.waven-build.com/builds/9443',
    logoImgSrc: weaponLogo['pikuxala']
  },
  {
    name: 'Eni Apostruker - Água / Ataque',
    description: 'Build forte e consistente, boa para masmorras e lutas difíceis',
    tags: ['daily', 'burst', 'aoe'],
    link: 'https://www.waven-build.com/builds/8137',
    logoImgSrc: weaponLogo['apostruker']
  },
  {
    name: 'Cra Paladir - Poke / Sustain / Ataque',
    description: 'Build divertida e eficaz',
    tags: ['single-target'],
    link: 'https://www.waven-build.com/builds/10055',
    logoImgSrc: weaponLogo['arcarius']
  },
  {
    name: 'Sram Ourai - Água / Magia / Support',
    description: 'Build forte e boa para vários conteúdos',
    tags: ['sustain', 'magia'],
    link: 'https://www.waven-build.com/builds/13513',
    logoImgSrc: weaponLogo['ourai']
  },
  {
    name: 'Sram Sicarius - Ramp / Drain / Ataque',
    description: 'Build do estilo de atacar várias vezes',
    tags: ['sustain'],
    link: 'https://www.waven-build.com/builds/13514',
    logoImgSrc: weaponLogo['sicarius']
  }
]
