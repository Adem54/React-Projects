import React, { Component } from 'react'

 class FirstName extends Component {
    render() {
        console.log("FirstName component render başladı...")
        const {firstName}=this.props
        return (
            <div>
               firstName: {firstName}
            </div>
        )
    }
}

export default FirstName;