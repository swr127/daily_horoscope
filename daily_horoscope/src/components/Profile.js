// **************
// PROFILE COMPONENT 
// Class component 
// **************

import React from 'react'
import Axios from 'axios'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sign:'',
            horoscope:''
        }
    }

    async componentDidMount() {
        const sign = this.props.match.params.sign
        const api = await Axios(`https://cors-anywhere.herokuapp.com/http://ohmanda.com/api/horoscope/${sign}`)
        this.setState({
            sign: api.data.sign,
            horoscope: api.data.horoscope
        })
    }

    render() {
        // console.log(this.props)
        // console.log(this.state)
        const sign = this.state.sign
        const horoscope = this.state.horoscope

        return(
            <div className="Profile">
                <h2>{sign}</h2>
                <p>{horoscope}</p>
            </div>
        )
    }
}

export default Profile
