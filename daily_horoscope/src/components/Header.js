// **************
// HEADER COMPONENT 
// Functional component 
// **************

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(props) {
    // const { signs } = props
    // const keys = Object.keys(signs)

    // handleClick = (event) => {
    //     event.preventDefault()
    //     {keys.map((key, index) => {
    //         return (
    //             <div className="Search" >
    //                 <Link to={`/${key}`} key={index}></Link>
    //             </div>
    //         )
    // }

  return (
    <div className="Header">
        <nav>
            <NavLink className="Navlink" exact activeClassName="active" to="/">
                HOME
            </NavLink>

            <form>
                <input type="text" placeholder="ENTER ZODIAC SIGN" />
                <button>SEARCH</button>
                {/* <button onClick={handleClick}>SEARCH</button> */}
            </form>
        </nav>

        <h1>DAILY HOROSCOPE</h1>
    </div>
  )
}

export default Header