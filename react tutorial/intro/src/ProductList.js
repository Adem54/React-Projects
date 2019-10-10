import React, { Component } from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

 class ProductList extends Component {
  render() {
    const {title}=this.props;
    return (
      <div>
        <ListGroup>
        <ListGroupItem>{title}</ListGroupItem>
        </ListGroup>  
      </div>
    )
  }
}

export default ProductList;