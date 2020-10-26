import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as GithubIcon } from './atoms/Github.svg'
import { ReactComponent as DiscordIcon } from './atoms/Discord.svg'
import { ReactComponent as YouTubeIcon } from './atoms/YouTube.svg'

const NavBar = (props) => {
  const shortcuts = [
    { icon: <GithubIcon />, link: 'https://github.com/markkop/corvos-de-efrim-website' },
    { icon: <DiscordIcon />, link: 'https://discord.gg/XyGTJN2' },
    { icon: <YouTubeIcon />, link: 'https://www.youtube.com/channel/UCt2vHFLkdUSkLJjcagzX9rA' },
  ]

  const navItems = [
    { path: '/', text: 'Início' },
    { path: '/a-guilda', text: 'Sobre nós' },
  ]

  function renderItems(navItems, props) {
    return navItems.map(({ path, text }, index) => (
      <li key={index} className={`nav-item ${props.location.pathname === path ? 'active' : ''}`}>
        <Link className="nav-link" to={path}>
          {text}
        </Link>
      </li>
    ))
  }

  function renderShortCuts(shortcuts) {
    return shortcuts.map(({ icon, link }) => (
      <li>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      </li>
    ))
  }

  return (
    <nav className="navbar navbar-expand-md navbar-default ">
      <div className="navbar-brand">
        <img src="https://i.imgur.com/YS0XlBf.png" width="30" height="30" alt="corvos de efrim logo" />
        <Link to="/">Corvos de Efrim</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav justify-content-end">
          {renderItems(navItems, props)}
          {renderShortCuts(shortcuts)}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
