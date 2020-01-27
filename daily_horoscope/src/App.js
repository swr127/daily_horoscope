import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Footer from './components/Footer'
import signs from './data/signs'
import './App.css'

// **************
// SET UP APP COMPONENT 
  // Import all components 
  // Import signs data 
  // Pass signs data to Main component 
  // Create routes for Main and Profile components 
// **************

function App() {
  return (
    <div className="App">
      <Header />

      <main className="Main">
        <Switch>
          <Route exact path="/" render = {() => <Main listOfSigns={signs} /> } />
          <Route exact path="/sign" component={Profile} />
        </Switch>
      </main>

      <Footer />
    </div>
  )
}

export default App
