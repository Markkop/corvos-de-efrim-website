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
        <Emoji symbol="📜" label="scroll" />
        <strong>Regras:</strong> não seja babaca
      </p>
      <br />
      <p>
        <Emoji symbol="🏴‍☠️" label="scroll" /> <strong>Cargos:</strong>
        <br />
        Os cargos são divididos em áreas de interesse dentro do jogo, sendo os três primeiros de gestão.
      </p>
      <br />
      <ul className="role-list">
        <li>
          <Emoji symbol="🚢" label="ship" />
          <strong>Capitão</strong> - Líder da guilda junto com os demais contramestres
        </li>
        <li>
          <Emoji symbol="⛵" label="sailboat" />
          <strong>Contramestres</strong> - Responsáveis pela guilda junto com o Capitão
        </li>
        <li>
          <Emoji symbol="⚓" label="anchor" />
          <strong>Navegadores</strong> - Recrutadores que podem adicionar ou remover membros
        </li>
        <li>
          <Emoji symbol="⚔️" label="crossed swords" />
          <strong>Corsários</strong>* - Membros que demonstraram sua perícia em combates PvP
        </li>
        <li>
          <Emoji symbol="⚒️" label="tools" />
          <strong>Artesãos</strong>* - Membros que demonstraram sua perícia em colheita e artesanato
        </li>
        <li>
          <Emoji symbol="🗺️" label="map" />
          <strong>Cartógrafos</strong>* - Membros que demonstraram sua perícia atrás de baús ranqueados.
        </li>
        <li>
          <Emoji symbol="🎺" label="trumpet" />
          <strong>Bardos</strong>* - Membros que estão promovendo eventos no momento
        </li>
        <li>
          <Emoji symbol="🌊" label="ocean" />
          <strong>Marujos</strong> - Membros que optaram por não ter missão ou já estão em uma
        </li>
        <li>
          <Emoji symbol="🛡️" label="shield" />
          <strong>Iniciados</strong> - Membros que ainda não fizeram o juramento
        </li>
        <li>
          <Emoji symbol="👻" label="ghost" />
          <strong>Fantasmas</strong> - Personagens secundários
        </li>
      </ul>
      <br />
      <p>
        *Para receber um destes cargos você deve provar suas habilidades em uma missão designada no momento do seu
        juramento que acontece geralmente em fins de semana.
      </p>
      <br />
      <p>
        <Emoji symbol="🔎" label="mag" />
        <strong>Recrutamento:</strong>
        <br /> Para entrar na guilda basta ter uma breve conversa com um recrutador. Personagens inativos por muito
        tempo podem ser removidos em caso de lotação máxima.
      </p>

      <div className="imageContainer imageContainerBig">
        <img src={dorMor} alt="corvos em dor mor" className="image"></img>
        <img src={corvosXArch} alt="corvos em luta contra arquimonstro" className="image"></img>
        <img src={reuniaoAmaknaFora} alt="reuniao em amakna lado de fora" className="image"></img>
      </div>
    </article>
  )
}

export default About
