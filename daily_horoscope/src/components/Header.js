// **************
// HEADER COMPONENT 
// Functional component 
// **************

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(props) {
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