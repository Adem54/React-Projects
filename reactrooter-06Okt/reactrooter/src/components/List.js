import React from "react";

function List({ name, surname, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{surname}</h2>
      <h2>{age}</h2>
    </div>
  );
}

export default List;
