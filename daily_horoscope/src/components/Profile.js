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
            sign:''
        }
    }

    async comoponentDidMount() {
        const sign = this.props.match.params.sign
        const api = await Axios.get(`https://cors-anywhere.herokuapp.com/http://ohmanda.com/api/horoscope/${sign}`)
        this.setState({
            sign: api.data.horoscope
        })
        console.log(this.state.sign)
    }

    render() {
        return(
            <div className="Profile">
                {this.state.sign}
            </div>
        )
    }
}

export default Profile
