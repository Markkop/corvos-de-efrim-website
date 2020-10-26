import React from 'react'
import Emoji from '../atoms/Emoji'
import dorMor from '../../images/corvosDorMor.png'
import markxPercedal from '../../images/markxAjudaPercedal.png'
import sansaYugo from '../../images/danComYugo.png'
import setenPedraPapel from '../../images/setenPedraPapel.png'
import cachorroMostra from '../../images/cachorroMostra.png'
import reuniaoAmaknaFora from '../../images/reuniaoAmaknaFora.png'
import corvosXArch from '../../images/corvosXArch.png'

const About = () => {
  return (
    <article>
      <h1>Sobre a Corvos de Efrim</h1>
      <p>
        A Corvos de Efrim é uma guilda de piratas que procura seus tesouros em calabouços ranqueados, guerreia em equipe
        nos campos de batalha e auxília àqueles que chegaram há pouco tempo no Mundo dos Doze. Gostamos de promover e
        participar de eventos e roleplay.
      </p>
      <br />
      <div className="imageContainer">
        <img src={markxPercedal} alt="markx ajudando percedal" className="image aboutUsImg"></img>
        <img src={sansaYugo} alt="sansa com yugo" className="image aboutUsImg"></img>
        <img src={setenPedraPapel} alt="seten jogando pedra papel" className="image aboutUsImg"></img>
        <img src={cachorroMostra} alt="cachorro mostrando algo" className="image aboutUsImg"></img>
      </div>
      <br />
      <p>
        <h3><Emoji symbol="📜" label="scroll" />Regras:</h3>
        Mantenha o respeito com os demais membros e outros jogadores
      </p>
      <br />
        <h3><Emoji symbol="🏴‍☠️" label="scroll" />Cargos:</h3>
      <ul className="role-list">
        <li>
          <Emoji symbol="🚢" label="ship" />
          <strong>Capitão</strong> - Líder da guilda junto com os demais contramestres
        </li>
        <li>
          <Emoji symbol="⛵" label="sailboat" />
          <strong>Contramestres</strong> - Responsáveis pela guilda junto com o Capitão
        </li>
        <br />
        <li>
          <Emoji symbol="🪶" label="feather" />
          <strong>Pirata de Kelba</strong> - Membros que possuem build 110
        </li>
        <li>
          <Emoji symbol="🌪️" label="cloud_tornado" />
          <strong>Pirata dos Ventos</strong> - Membros que possuem build 170
        </li>
        <li>
          <Emoji symbol="🏔️" label="mountain_snow" />
          <strong>Pirata de Zinit</strong> - Membros que possuem build 200
        </li>
        <br />
        <li>
          <Emoji symbol="🌋" label="volcano" />
          <strong>Pirata do Caos</strong> - Membros que possuem 2 dessas builds
        </li>
        <li>
          <Emoji symbol="🌌" label="milky_way" />
          <strong>Pirata dos Doze</strong> - Membros que possuem as 3 builds
        </li>
        <br />
        <li>
          <Emoji symbol="🔗" label="link" />
          <strong>Em Provação</strong> - Membros que ainda não passaram pela provação
        </li>
        <li>
          <Emoji symbol="👻" label="ghost" />
          <strong>Fantasmas</strong> - Personagens secundários (apenas para Piratas com build)
        </li>
      </ul>
      <br />
      <h3><Emoji symbol="🔥" label="fire" /> Provação:</h3>
      <ul className="provação">
        <li>
          <p>
            Para que um membro esteja oficialmente na guilda, é necessário que ele apresente uma{' '}
            <strong>build de nível 110, 170 ou 200</strong> e participe de um dos seguintes desafios no nível ajustado:
          </p>
          <p>- Duelar com uma dessas builds contra um Contramestre ou Capitão</p>
          <p>- Realizar um calabouço com uma dessas builds com um Contramestre ou Capitão</p>
        </li>
        <br />
        <li>
          <p>Observações:</p>
          <p>- O membro precisa apresentar um print da build pelo discord </p>
          <p>- A build de entrada não precisa estar perfeita </p>
          <p>- Para novos jogadores sugerimos a build 110 fixada no canal <a href="https://discord.gg/M68spWK">#🛡builds</a> do <a href="https://discord.gg/XyGTJN2">Discord</a></p>
          <p>- O desafio da provação pode ser repetido</p>
        </li>
      </ul>
      <br />
      <p>
        <h3><Emoji symbol="🕐" label="clock" />Inatividade:</h3>
        Membros inativos podem ser removidos caso necessário para liberar espaço na guilda.
      </p>
      <br />

      <h3><Emoji symbol="🤔" label="thinking" />FAQ</h3>
      <ul className="faq">
        <li>
          <strong>Se não eu não tiver build 110, 170 ou 200, não entro na guilda?</strong>
          <br />
          Não, você pode entrar na guilda, mas estará "Em Provação" até apresentar a build e demonstrá-la.
        </li>
        <li>
          <strong>Jogadores de nível menor que 110 não poderão entrar na guilda?</strong>
          <br />
          Podem, mas estarão "Em Provação" até poderem equipar uma build de nível 110.
        </li>
        <li>
          <strong>A build precisa ter items lendários, runados e sublimados?</strong>
          <br />
          Não, a build de entrada pode conter apenas itens míticos, sem runas e sem sublimação.
        </li>
        Para Pirata do Caos (2 builds) e Pirata dos Doze (3 builds), a avaliação fica individual.
        <li>
          <strong>Só quero upar alt ou profissão. Preciso da build 110?</strong>
          <br />
          Sim. Você pode não fazer conteúdo ajustado, mas irá precisar de uma build 110, 170 ou 200.
        </li>
        <li>
          <strong>Preciso ganhar o duelo ou rankear no calabouço?</strong>
          <br />
          Não, você será avaliado durante o gameplay. Mais provações podem ser solicitadas, mas tendemos a não ser muito
          exigentes.
        </li>
        <li>
          <strong>A guilda irá me ajudar a montar a build e obter os equipamentos?</strong>
          <br />
          Sim, tentaremos ajudar de acordo com a disponibilidade dos membros.
        </li>
      </ul>

      <div className="imageContainer imageContainerBig">
        <img src={dorMor} alt="corvos em dor mor" className="image"></img>
        <img src={corvosXArch} alt="corvos em luta contra arquimonstro" className="image"></img>
        <img src={reuniaoAmaknaFora} alt="reuniao em amakna lado de fora" className="image"></img>
      </div>
    </article>
  )
}

export default About
