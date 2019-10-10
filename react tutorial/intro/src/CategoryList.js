import React, { Component } from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

 class CategoryList extends Component {
  
  render() {
    console.log(this);
    return (
      <div>
    
        <ListGroup>
        <ListGroupItem>{this.props.title}</ListGroupItem>
     
      </ListGroup>  
      </div>
    )
  }
}


export default CategoryList;