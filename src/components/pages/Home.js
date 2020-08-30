import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../atoms/Emoji'
import juramentoImg from '../../images/juramento.png'
import preCacaTesouroImg from '../../images/preCacaAoTesouro.png'

const Home = () => {
  return (
    <article>
      <h2>
        <Emoji symbol="🦜" label="parrot" className="emojiTitle" /> Croyarr, viajante!
      </h2>
      <p>
        Estamos nos preparando para navegar nas novas águas do reino Rubilax.
        <br />
        Tem interesse? Confira a nossa <Link to="/a-guilda">proposta de guilda</Link> e entre em contato.
      </p>
      <br />
      <div className="image-container">
        <img src={juramentoImg} alt="evento corvos efrim" className="image"></img>
        <img src={preCacaTesouroImg} alt="pre caça ao tesouro" className="image"></img>
      </div>
    </article>
  )
}

export default Home
