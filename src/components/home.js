import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Your Mobile Cotail companion</p>
                <img style={imageStyle} src="https://en.wikipedia.org/wiki/Old_Fashioned#/media/File:Whiskey_Old_Fashioned1.jpg" />
            </div>
        )

    }
}

export default Home
