import React from "react";
import ListItem from './ListItem'
function List({ todos, onDeleteToggle,onToggleDone }) {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <ListItem key={todo.id} todo={todo} onDeleteToggle={onDeleteToggle} onToggleDone={onToggleDone} />
        );
      })}
    </ul>
  );
}

export default List;
