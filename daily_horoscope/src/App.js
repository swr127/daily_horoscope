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
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const aquarius = await Axios('http://ohmanda.com/api/horoscope/aquarius/')
    this.setState({
      data: aquarius.data
    })
  }

// **************
// RENDER COMPONENTS
// PASS STATE AS PROPS
// CREATE ROUTES
// **************

  render() {
    console.log(this.state.data)
  
    return (
      <div className="App">
        <Header />

        <main className="Main">
          <Route exact path='/' component={(props) =>
            {return <Main {...props} horoscope={this.state.data} /> }}
          />

          <Route exact path='/:sign' component={(props) =>
            {return <Profile {...props} horoscope={this.state.data} /> }}
          />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
