import React, { Component } from 'react'

 class List extends Component {
    render() {
        const {staticList}=this.props;
        return (
            <div className="col-md-8  mb-4 mt-4"> 
      <div className="card">
<div className="card-header d-flex justify-content-between">
<h4 className="d-inline">{staticList}</h4>

</div></div></div>
        )
    }
}

export default List;