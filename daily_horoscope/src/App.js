import React from 'react'
import { Route } from 'react-router-dom'
import Axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Footer from './components/Footer'
import './App.css'

// **************
// SET UP ASYNC API CALL
// SET STATE
// **************

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aquarius: [],
      pisces: [],
      aries: [],
      taurus: [],
      gemini: [],
      cancer: [],
      leo: [],
      virgo: [],
      libra: [],
      scorpio: [],
      sagittarius: [],
      capricorn: []
    }
  }

  async componentDidMount() {
    const aquarius = await Axios('http://ohmanda.com/api/horoscope/aquarius/')
    this.setState({
      aquarius: aquarius.data
    })

    const pisces = await Axios('http://ohmanda.com/api/horoscope/pisces/')
    this.setState({
      pisces: pisces.data
    })

    const aries = await Axios('http://ohmanda.com/api/horoscope/aries/')
    this.setState({
      aries: aries.data
    })
  }

// **************
// RENDER COMPONENTS
// PASS STATE AS PROPS
// CREATE ROUTES
// **************

  render() {
    console.log(this.state.aquarius)
    console.log(this.state.pisces)
    console.log(this.state.aries)
  
    return (
      <div className="App">
        <Header />

        <main className="Main">
          <Route exact path='/' component={(props) =>
            {return <Main {...props} 
              aquarius={this.state.aquarius}
              pisces={this.state.pisces}
              aries={this.state.aries} /> }}
          />

          <Route exact path='/:sign' component={(props) =>
            {return <Profile {...props} data={this.state.data} /> }}
          />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
