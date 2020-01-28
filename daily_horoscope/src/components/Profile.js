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
        const api = await Axios(`https://cors-anywhere.herokuapp.com/http://ohmanda.com/api/horoscope/${sign}`)
        this.setState({
            sign: api.data
        })
    }

    render() {
        console.log(this.props)
        console.log(this.state)
    
        return(
            <div className="Profile">
                <p>Placeholder</p>
            </div>
        )
    }
}

export default Profile
