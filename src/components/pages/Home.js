import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../atoms/Emoji'

const Home = () => {
  return (
    <article>
      <h2>
        <Emoji symbol="🦜" label="parrot" /> Bem vindo ao site da Corvos de Efrim!
      </h2>
      <p>Em breve, novidades!</p>
    </article>
  )
}

export default Home
