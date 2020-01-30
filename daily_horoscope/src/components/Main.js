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
            <p className="Description">Discover the twelve zodiac signs of Astrology 
            and read your daily horoscope. Your horoscope is updated daily and is determined
            by the movement of the Sun and Moon in relation to the universe.  
            </p>
            <div className="Cards">
                {keys.map((key, index) => {
                    return (
                        <div className="Card" >
                            <Link to={`/${key}`} key={index} style={{ textDecoration: 'none' }}>
                                <img src={signs[key].main} alt={key}/>
                                <h3>{signs[key].name}</h3>
                            </Link>

                            <h4>{signs[key].date}</h4>

                            <Link to={`/${key}`} key={index} style={{ textDecoration: 'none' }}>
                                <p>Read your horoscope ></p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main

