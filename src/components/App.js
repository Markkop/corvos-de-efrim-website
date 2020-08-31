import React, { Component } from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'
import Almanax from './molecules/Almanax'

class App extends Component {
  render() {
    return (
      <main>
        <Almanax />
        <NavBar />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/a-guilda" component={AboutUs} />
          </Switch>
        </section>
      </main>
    )
  }
}

export default App
