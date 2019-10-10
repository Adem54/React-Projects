import React, { Fragment } from "react";
import "./ListItem.css";

function ListItem({ todo, onDeleteToggle, onToggleDone }) {
  return (
    //Fragment react kütüphanesinin içerisinde gelen bir fonksiyondur ki biz normalde jsx içerisinde
    <Fragment>
      <li
        onClick={() => onToggleDone(todo.id)}//Direk çalışmaması için arrow function olarak yazıyoruz yoksa biz eğer direk parametre verirsek o zaman fonksiyon bulunduğu yerde çalışacaktır
        style={{ padding: "20px", background: "cyan" }}
        className={todo.done ? "change" : ""}
      >
        {todo.desc} {todo.deadline}
      </li>
      <button onClick={() => onDeleteToggle(todo.id)}>Delete</button>
    </Fragment>
  );
}

export default ListItem;
