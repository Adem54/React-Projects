import React, { Component,Fragment } from "react";
import './ListItem.css';
class ListItem extends Component {
  state = {
    isVisible: this.props.done
  };

  changeStyle(e) {
    console.log(e.target);

    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  render() {
    const { id, description, deadline, done } = this.props;
    const { isVisible } = this.state;

    return (
      <div>
        <ul onClick={this.changeStyle.bind(this)}>
          {isVisible ? (
            <Fragment>
              <li className="done">
             <p>{id}</p> 

             <p> {description} </p>

             <p>  {deadline} </p>
             </li>
              </Fragment>
          ) : (
            <Fragment>
              <li>
             <p>{id}</p> 

             <p> {description} </p>

             <p>  {deadline} </p>
             </li>
              </Fragment>
          )}
          <li>{done}</li>
        </ul>
      </div>
    );
  }
}

export default ListItem;
