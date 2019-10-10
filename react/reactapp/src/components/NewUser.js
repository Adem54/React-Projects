import React, { Component } from 'react'

 class NewUser extends Component {
    render() {
        const {studentName,studentClass,studentCity}=this.props
        return (
            <div>
                <span>studentName={studentName}</span>
                <span>studentName={studentClass}</span>
                <span>studentName={this.props.studentCity}</span>

            </div>
        )
    }
}


export default NewUser;