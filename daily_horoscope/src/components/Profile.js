// **************
// PROFILE COMPONENT 
// Class component 
// **************

import React from 'react'
import Axios from 'axios'
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
        const date = this.state.date
        const horoscope = this.state.horoscope

        return(
            <div className="Profile">
                { image ? <img src={image} alt={sign}/> : <p>Loading</p>}
                <h3>{date}</h3>
                <p>{horoscope}</p>
            </div>
        )
    }
}

export default Profile
