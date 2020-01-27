// **************
// HEADER COMPONENT 
// Functional component 
// **************

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
        <NavLink exact activeClassName="active" to="/">
            Home
        </NavLink>
     <h1>Daily Horoscope</h1>
    </div>
  )
}

export default Header
