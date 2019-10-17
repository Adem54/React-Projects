import React, { useState, Component } from "react";

import "./App.css";

class ClassApp extends Component {
  
  render() {
    console.log("Class componenti çalıştı...3")
    this.componentDidMount
    return (
      <div>
        <h3>Burası Class Compoenentidir...</h3>
      </div>
    );
  }
}

function FunctionApp() {
  console.log("Function componenti çalıştı...")
  return (
    <div>
      <h3>Burası Fonksiyon Componentidir...</h3>
    </div>
  );
}

function App() {
 
  const [change, setChange] = useState(true);

  return (
    <div className="App">
      <button onClick={()=>setChange(!change)}>
        {change ? "ClassApp" : "FunctionApp"}
      </button>
      {change ? (
        <div>
          <ClassApp />
        </div>
      ) : (
        <div>
          {" "}
          <FunctionApp />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
