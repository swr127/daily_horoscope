// **************
// PROFILE COMPONENT 
// Class component 
// **************

import React from 'react'
import Axios from 'axios'
import Moment from 'moment'
import signs from '../data/signs'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sign: '',
            image: '',
            date: '',
            horoscope:''
        }
    }

    async componentDidMount() {
        const sign = this.props.match.params.sign
        const api = await Axios(`https://cors-anywhere.herokuapp.com/http://ohmanda.com/api/horoscope/${sign}`)
        this.setState({
            sign: api.data.sign,
            image: signs[sign].profile,
            date: api.data.date,
            horoscope: api.data.horoscope
        })
        
    }
    
    render() {
        const sign = this.state.sign
        const image = this.state.image
        const date = (this.state.date, Moment().format("MMM Do YYYY"))
        const horoscope = this.state.horoscope

        return(
            <div className="Profile">
                <div className="Horoscope">
                    { image ? 
                    <div>
                        <img className="Image" src={image} alt={sign}/>
                        <h3>Today {date}</h3>
                        < p>{horoscope}</p>
                    </div> : 
                    <img className="Loading" src="https://i.imgur.com/H2NLeMT.gif" alt="Loading"/> }
                </div>
            </div>
        )
    }
}

export default Profile