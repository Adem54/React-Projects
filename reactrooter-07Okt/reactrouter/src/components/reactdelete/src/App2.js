import React from "react";

import "./App.css";
import List from "./components/List";
//bir önceki onToggleDone ayrıca burda eklenmeli delete işlemi
class reactdeleteapp extends React.Component {
  state = {
    todos: [
      { id: 1, desc: "Hello", deadline: "23.12.2010", done: false },
      { id: 2, desc: "Hi", deadline: "23.12.2012", done: false }
    ]
  };

 

  handleToggleDone=id=>{
    const todosCopy=[...this.state.todos];
    const updateItem= todosCopy.find(todo=>{
      return todo.id === id;
    })
    updateItem.done = !updateItem.done;
    this.setState({
      todos:todosCopy
    })
    
  }

  //Burda fonksiyon olarak onToggleDone fonksiyonu ve ayrıca delete fonksiyonu da olmalı ve bunlar doğru adlandırmalarla olmalı ayrıca ezbere işlem değil düşünerek işlem yapmamız gerekiyor bu önemli...
  deleteToggleDone = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    console.log(todos);
//filter işlemi ile yağtığımız işlemde todos dizisinin içeriğine dokunmadığımız için burda todos un kopyasını almamıza gerek yok bu önemli buna dikkat edelim eğer içerikte bir değişiklik olsa idi o zaman kopyasını alıp da işlem yapmak zorunda idik
  this.setState({
      todos: todos //objelerde eğer properties ile values eşit ise sadece birini yazmamız yeterli olur
    });
  };

  render() {
    return (
      <div className="App">
        <List
          todos={this.state.todos}
          onDeleteToggle={this.deleteToggleDone}
          onToggleDone={this.handleToggleDone}
        />
      </div>
    );
  }
}
//DeletToggle ismi mantıksız toggle basınca bir işlem yapara bir daha basınca tersini yapar delete de o yok
//Birşeyi tersine çevir tıklayınca demektir
export default reactdeleteapp;
