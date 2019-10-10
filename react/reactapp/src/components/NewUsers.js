import React, { Component } from 'react'
import NewUser from './NewUser';

 class NewUsers extends Component {
     
    render() {
        const {newUsers}=this.props;
        console.log(newUsers);
        return (
            <div>
                {
                    newUsers.map(newUser=>{
                      return(
                          //Burda NewUser a verileri prop olarak gönderdik ve verileri dinamik bir şekilde göndermiş olduk
                          <NewUser
                          key={newUser.studentId}
                          studentName={newUser.studentName}
                          studentClass={newUser.studentClass}
                          studentCity={newUser.studentCity}

                          
                          
                          />
                      )
                    })
                }
            </div>
        )
    }
}
export default NewUsers;