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
          <strong>Se eu não tiver build 110, 170 ou 200, não entro na guilda?</strong>
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

      <h3><Emoji symbol="💡" label="bulb" />Mais detalhes sobre esse sistema de guilda</h3>
      <p>
        <br />
        Como sabem, aceitamos jogadores de qualquer nível, mas só permitimos a inclusão de personagens secundários (alts) caso o jogador tenha uma build 110, 170 e 200. Com uma build, o jogador passa por um teste (que é mais simbólico) e passa a ser um membro oficial da guilda: um <strong>Pirata de Kelba (110)</strong>, <strong>Pirata dos Ventos (170)</strong> ou <strong>Pirata de Zinit (200)</strong>. Na essência, existem três motivos para isso:<br />
        <br />
        <strong>1)</strong> Limitar a quantidade de jogadores na guilda, para que sempre tenhamos espaço para <strong>novos membros</strong><br />
        <strong>2)</strong> Focar em conteúdos relevantes (calabouços e chefes supremos ranked &amp; PvP) e compartilhar os mesmos <strong>objetivos</strong> na guilda<br />
        <strong>3)</strong> Facilitar a <strong>busca de grupos</strong> identificando facilmente quais builds cada membro tem só de abrir o painel da guilda.<br />
        <br />
        Em relação ao ponto 1:<br />
Manter espaço numa guilda ativa é sempre um desafio e o Wakfu nunca ajudou muito nisso. Com o cargo de "Em Provação", nós limitamos a adição de personagens secundários na guilda e conseguimos <strong>manter um espaço saudável</strong> para que jogadores tenham a oportunidade de ver se a Corvos é o seu tipo de guilda.<br />
        Além disso, incentivamos os jogadores a fazerem uma build que será usada para <strong>participar em diversos conteúdos junto com os demais membros da guilda</strong>, o que nos leva ao segundo ponto.<br />
        <br />
        Dentro da Corvos, gostamos de dar prioridade para <strong>jogar com outros jogadores</strong> do que usar heróis porque sabemos que a experiência mais legal de um <strong>MMORPG</strong> é justamente jogar e progredir com outras pessoas. Os níveis 110, 170 e 200 possuem um <strong>conteúdo bastante diversificado</strong>, com <strong>recompensas valiosas</strong> e no momento são esses que estamos querendo explorar.<br />
        <br />
A <strong>build 110</strong>, além de ter 2 <strong>Chefes Supremos</strong>, diversos <strong>calabouços</strong> e uma faixa <strong>PvP</strong>, é uma build <strong>fácil e econômica</strong> de montar, excelente como porta de entrada para o mundo dos níveis ajustados.<br />
        <br />
        Já o terceiro é algo que nunca deixei claro, mas já testei pessoalmente e agora com diversos Piratas já oficializados podemos colocar mais em prática. Todos sabemos a <strong>dificuldade de encontrar grupo</strong> pras coisas no jogo e o buscador de grupos do jogo - peça chave num MMO - é algo que a Ankama nunca se deu ao trabalho de melhorar.<br />
        Em diversos anos de Wakfu, eu percebi que <strong>a melhor forma de encontrar gente pra grupo é mandando PM</strong> pras pessoas e perguntando se elas querem ir no calabouço em questão. Com esse sistema de builds na guilda, dá pra saber exatamente quem tem build 110, 170 ou 200 e que pode ajudar.<br />
        A ideia é <strong>identificar facilmente</strong> quem tem uma dessas builds e está online abrindo o <strong>painel da guilda</strong> e mandar uma mensagem pra pessoa - simples assim.<br />
        <br />
        Dito isso, o sistema não está escrito em pedra e pode (deve) passar por adaptações conforme usamos ele na guilda. É com a ajuda de todos os membros e com as suas diversas opiniões que conseguimos harmonizar uma comunidade de guilda dentro do que o Wakfu nos porporciona. Quaisquer dúvidas, podem falar direto comigo.<br />
        Todas as decisões e ajustes também são discutidas com os contramestres, então podem contar com eles também (inclusive obrigado a todos!)
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
