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
        <p>Discover the twelve zodiac signs of Astrology and read your daily horoscope.
        Your horoscope is updated daily and is based on the movement of the Sun
        and Moon in relation to the universe. 
        </p>
    </div>
  )
}

export default Header
