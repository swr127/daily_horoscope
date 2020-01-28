// **************
// MAIN COMPONENT 
// Functional component 
// **************

import React from 'react'
import { Link } from 'react-router-dom'

function Main(props) {
    const { listOfSigns } = props
    console.log(listOfSigns)
    return (
        <div className="Main">
            {listOfSigns.map((sign, index) => 
            <Link to={`/${sign}`} key={index}>
                <div>{sign}</div>
            </Link>)}
        </div>
    )
}

export default Main
