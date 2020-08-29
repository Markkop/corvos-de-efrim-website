import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../atoms/Emoji'

const Home = () => {
  return (
    <article>
      <h2>
        <Emoji symbol="🦜" label="parrot" /> Croyarr, viajante!
      </h2>
      <p>
        Estamos nos preparando para navegar nas novas águas do reino Rubilax.
        <br />
        Tem interesse? Confira a nossa <Link to="/a-guilda">proposta de guilda</Link> e entre em contato.
      </p>
    </article>
  )
}

export default Home
