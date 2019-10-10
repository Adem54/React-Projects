import React, { Component } from "react";

import "./App.css";

class reactformapp extends Component {
  state = {
    todos: [
      { id: 1, desc: "Hello", deadline: "23.12.2010", done:false },
      { id: 2, desc: "Hi", deadline: "23.12.2012", done: false }
    ],
    id:"",
    text: "",
    deadline:"",
    done:false
  };

  handleSubmit(event) {
    event.preventDefault();
    //Tıklayınca ekleme işlemi yapsak bakalım...
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      id:Math.random().toString(),
      desc: this.state.text,
      deadline:this.state.deadline,
      done:this.state.done
    };

    const todosCopy = [...this.state.todos];
    todosCopy.push(newItem);
    this.setState({
      //todos: this.state.todos.concat(newItem)
      //todos: [...this.state.todos,newItem]

      todos: todosCopy
    },()=>{console.log(this.state.todos)}
    );

  }

  handleChange = e => {
    const target=e.target;
    console.log(target.checked);
    target.type === "checkbox" ? this.setState({
      done:!this.state.done 
    }) :
    
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
           name="text"
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
           <input
           name="deadline"
            type="date"
            onChange={this.handleChange}
            value={this.state.deadline}
          />
          
          <input
            name="done"
            type="checkbox"
            checked={this.state.done}//Buraya yeni ekleyeceğimiz verinin done durumunu yapacağız
                        onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>

        <ul>
          {" "}
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id}>
                {todo.desc}  | {todo.deadline}
               
              </li>
              
            );
          })}{" "}
        </ul>
      </div>
    );
  }
}

export default reactformapp;
