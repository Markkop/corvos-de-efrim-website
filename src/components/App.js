import React, { Component } from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Boats from './pages/Boats'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/a-guilda" component={AboutUs} />
            <Route path="/barcos" component={Boats} />
          </Switch>
        </section>
      </main>
    )
  }
}

export default App
