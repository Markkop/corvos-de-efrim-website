import React from 'react'
import Emoji from '../atoms/Emoji'
import BoatCard from '../cards/BoatCard'
import ingloriumBoat from '../../images/barcos/barcoInglorium.png'

const boats = [
  {
    title: 'Inglorium',
    description: 'Um barco utilizado por Deuses',
    image: ingloriumBoat,
  },
  {
    title: 'Inglorium',
    description: 'Um barco utilizado por Deuses',
    image: ingloriumBoat,
  },
  {
    title: 'Inglorium',
    description: 'Um barco utilizado por Deuses',
    image: ingloriumBoat,
  },
  {
    title: 'Inglorium',
    description: 'Um barco utilizado por Deuses',
    image: ingloriumBoat,
  },
]

const Boats = () => {
  return (
    <article>
      <h2>
        <Emoji symbol="⚓️" label="anchor" className="emoji-title" /> Barcos em Wakfu!
      </h2>
      <p>
        Os corvos piratas exploram o Mundo dos Doze atrás de barcos e navios para <strike>saquear</strike> registrar nas
        descobertas da guilda. Confira o que já encontramos:
      </p>
      <br />
      <div className="boat-card-container">
        {boats.map((boat) => (
          <BoatCard {...boat} />
        ))}
      </div>
    </article>
  )
}

export default Boats
