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
                    <div>
                        <Link to={`/${key}`} key={index}>
                            <img src={signs[key].main} alt={key}/>
                            <h3>{signs[key].name}</h3>
                        </Link>

                        <h4>{signs[key].date}</h4>

                        <Link to={`/${key}`} key={index}>
                            <p>Read your horoscope ></p>
                        </Link>
                    </div>
                )})}
        </div>
    )
}

export default Main

