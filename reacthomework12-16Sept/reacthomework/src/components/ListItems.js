import React, { Component } from "react";
import ListItem from "./ListItem";

class ListItems extends Component {
  render() {
    const { dynamicList } = this.props;
    console.log(dynamicList);
    return (
      <div>
        {dynamicList.map(list => {
          return (
            <ListItem
              key={list.id}
              description={list.description}
              deadline={list.deadline}
              done={list.done}
            />
          );
        })}
      </div>
    );
  }
}

export default ListItems;
