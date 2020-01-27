import React from 'react'
import { Route } from 'react-router-dom'
import Axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Profile />
      <Footer />
    </div>
  )
}

export default App
