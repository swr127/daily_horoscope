// **************
// APP COMPONENT 
// **************

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Footer from './components/Footer'
import signs from './data/signs'
import './App.css'

function App() {

  // routeToProfile() {

  // }

  return (
    <div className="App">
      <Header signs={signs}/>

      <main className="Main">
        <Switch>

          <Route exact path="/" render = {() => <Main signs={signs} /> } />
          <Route exact path="/:sign" component={Profile} />

        </Switch>
      </main>

      <Footer />
    </div>
  )
}

export default App

// **************
// HEADER COMPONENT 
// **************

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const { signs } = props
    const keys = Object.keys(signs)
    const handleClick = (event) => {
    event.preventDefault()
    // use the current form value
    // to search zodiac signs
    const searchTerm = 'aqua'
    const findZodiac = keys.find(sign => sign.includes(searchTerm))
    console.log(findZodiac)
    
}
    
  return (
    <div className="Header">
        <nav>
            <NavLink className="Navlink" exact activeClassName="active" to="/">
                HOME
            </NavLink>

            <form>
                <input type="text" placeholder="ENTER ZODIAC SIGN" />
                <button onClick={(e) => handleClick(e)}>SEARCH</button>
            </form>
        </nav>

        <h1>DAILY HOROSCOPE</h1>
    </div>
  )
}

export default Header
