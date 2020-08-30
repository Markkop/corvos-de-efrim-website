import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as GithubIcon } from './atoms/Github.svg'
import { ReactComponent as DiscordIcon } from './atoms/Discord.svg'

const NavBar = (props) => {
  const navItems = [
    { path: '/', text: 'Início' },
    { path: '/a-guilda', text: 'Sobre nós' },
    { path: '/barcos', text: 'Barcos' },
  ]

  const renderItems = (navItems, props) =>
    navItems.map(({ path, text }, index) => (
      <li key={index} className={`nav-item ${props.location.pathname === path ? 'active' : ''}`}>
        <Link className="nav-link" to={path}>
          {text}
        </Link>
      </li>
    ))

  return (
    <nav className="navbar navbar-expand-md navbar-default ">
      <div className="navbar-brand">
        <img src="https://i.imgur.com/df8RYFk.png" width="30" height="30" alt="corvos de efrim logo" />
        <Link to="/">Corvos de Efrim</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav justify-content-end">{renderItems(navItems, props)}</ul>
        <a href="https://github.com/markkop/corvos-de-efrim-website" target="_blank" rel="noopener noreferrer">
          {<GithubIcon />}
        </a>
        <a href="https://discord.gg/XyGTJN2" target="_blank" rel="noopener noreferrer">
          {<DiscordIcon />}
        </a>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
