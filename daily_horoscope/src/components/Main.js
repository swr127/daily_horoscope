// **************
// MAIN COMPONENT 
// Functional component 
// **************

import React from 'react'
import { Link } from 'react-router-dom'

function Main(props) {
    const { listOfSigns } = props
    // console.log(listOfSigns)
    const keys = Object.keys(listOfSigns)

    return (
        <div className="Main">
            {keys.map((key, index) => {
                return (
                    <Link to={`/${key}`} key={index}>
                        <div>
                            <img src={listOfSigns[key]} alt={'zodiac sign'}/>
                            <h2>{key}</h2>
                        </div> 
                    </Link>
                )
            })}
        </div>
    )
}

export default Main
