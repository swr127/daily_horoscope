// **************
// HEADER COMPONENT 
// Functional component 
// **************

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
        <nav>
        <NavLink className="Navlink" exact activeClassName="active" to="/">
            HOME
        </NavLink>
        </nav>

        <h1>DAILY HOROSCOPE</h1>
    </div>
  )
}

export default Header
