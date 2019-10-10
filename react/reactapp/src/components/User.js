

import React, { Component } from 'react' 

 class User extends Component { 

  render() {
    const {id,name,salary,departmant}=this.props;
    return (
      //Burda bootstrap kullandık
      <div className="col-md-8  mb-4"> 
      <div className="card">
<div className="card-header d-flex justify-content-between">
<h4 className="d-inline">{this.props.name}</h4>
<h4 className="d-inline">{departmant}</h4>


<i className="fas fa-user-friends" style={{cursor:"pointer"}}></i>




</div>



 
        
              </div>
             
      </div> 
    )
  }
}

export default User; 



