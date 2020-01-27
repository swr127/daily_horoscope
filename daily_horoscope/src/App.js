import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Footer from './components/Footer'
import './App.css'

// const url = 'https://aztro.sameerkumar.website/?sign=aquarius&day=today'

// function App() {
//   const [sign, setSign] = useState([])

//   const getSign = async () => {
//     let response = await Axios.get(url)
//     setSign(response.data)
//     console.log(response.data)
//   }

//   useEffect(() => {
//     getSign()
//   }, []) 

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sign: {}
    }
  }

  componentDidMount () {
    const url = 'https://aztro.sameerkumar.website/?sign=aquarius&day=today'
    fetch(url, {
      method: 'POST'
    }).then(response => response.json()).then(sign => {
      this.setState({sign})
    })
  }

  render() {
    let response = this.state.sign
    console.log(response)
  
    return (
      <div className="App">
        <Header />
        <Main />
        <Profile />
        <Footer />
      </div>
    )
  }
}

export default App
