import React from "react";

import "./App.css";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";

class App extends React.Component{
  render(){
    return(
  <div className="App">
<Counter/>
<IncreaseCounter/>
<DecreaseCounter/>
<IncreaseByTwoCounter/>  
  </div>
  )
}
}

export default App;

//Oluşturduğumuz componentleri biz gelip App.js içerisinde kullanacağızzz

/* 
    <Counter />
    <DecreaseCounter />
    <IncreaseByTwoCounter />
    <IncreaseCounter />


import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";

*/