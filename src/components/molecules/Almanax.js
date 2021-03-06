import React from 'react'

/**
 * @typedef AlmanaxEvent
 * @property { String } firstDate
 * @property { String } name
 * @property { String } text
 */

/**
 * Calculate today's Almanax Bonus
 * @returns { AlmanaxEvent }
 */
function getAlmanaxBonus() {
  const qtdColheita = {
    firstDate: '08/25/2020',
    name: 'Quantidade em Colheita',
    text: '+20% Quantidade de Colheita e Sucesso ao Plantar',
  }
  const sabedoria = { firstDate: '08/26/2020', name: 'Sabedoria', text: '+40 Sabedoria' }
  const prospeccao = { firstDate: '08/27/2020', name: 'Prospecção', text: '+40 Prospecção' }
  const fabricacao = { firstDate: '08/28/2020', name: 'Fabricação', text: '+20% EXP e Velocidade em Fabricação' }
  const expColheita = {
    firstDate: '08/29/2020',
    name: 'Experiência em Colheita',
    text: '+30% EXP em Colheita e Plantação',
  }
  const events = [qtdColheita, sabedoria, prospeccao, fabricacao, expColheita]
  return events.find((event) => {
    const today = new Date()
    const eventFirstDate = new Date(event.firstDate)
    const diffTime = Math.abs(today - eventFirstDate)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return diffDays % 5 === 0
  })
}

/**
 * Get current date in the format DD/MM/YY
 * @returns { String } date
 */
function getTodayDate() {
  return new Date().toLocaleString('pt-BR').split(' ')[0]
}

/**
 * Check if window's has mobile size
 * @returns { Boolean }
 */
function isMobile() {
  return window.innerWidth <= 800 && window.innerHeight <= 900
}

const Almanax = () => {
  const event = getAlmanaxBonus()
  return (
    <div className="almanax-container">
      <p className="almanax-text">
        Almanax ({getTodayDate()}): {isMobile() ? event.name : event.text}
      </p>
    </div>
  )
}

export default Almanax
