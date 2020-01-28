// **************
// MAIN COMPONENT 
// Functional component 
// **************

import React from 'react'
import { Link } from 'react-router-dom'

function Main(props) {
    const { signs } = props
    const keys = Object.keys(signs)

    return (
        <div className="Main">
            {keys.map((key, index) => {
                return (
                    <Link to={`/${key}`} key={index}>
                        <div>
                            <img src={signs[key].main} alt={'zodiac sign'}/>
                            <h2>{key}</h2>
                        </div> 
                    </Link>
                )
            })}
        </div>
    )
}

export default Main
