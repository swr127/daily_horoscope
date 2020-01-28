// **************
// APP COMPONENT 
// Functional component 
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
  return (
    <div className="App">
      <Header />

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

