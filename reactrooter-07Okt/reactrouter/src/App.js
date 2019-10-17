import React from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";


import reactApp from "./components/reactapilist/src/App1"
import reactdeleteapp from "./components/reactdelete/src/App2"
import reactformapp from "./components/reactform/src/App3"


import "./App.css";
import { BrowserRouter as Router, Route,NavLink,Link,Switch } from "react-router-dom";

 const homepage=()=>{//Component isimleri büyük olmalı....
   return(
     <h1>Welcome to HomePage!</h1>
   )
 }
//match objesi route objesinin altında bir objedir ondan dolayı biz route objesi de yazabilirdik ya da {match } objesini bu şekilde yazarız...
 const Child=({match})=>{//match parametresini göndermemiz önemli...
   (console.log("match:",match)) 
   return(
     <div>
       <h3>ID:{match.params.id}</h3>
     </div>
   )
 }

 const Error=()=>{
   return(
<h3>Aradığınız sayfa bulunamadı!</h3>
   )
 }
class App extends React.Component {
  render() {
    console.log("Geliyor mu")
    return (
      <Router>
        <div className="App">
          
          <NavLink to="/" activeClassName="activeLink" style={{color:"red"}} exact>HomePage</NavLink> <br></br>
          <NavLink to="/reactApp" activeClassName="activeLink" style={{color:"red"}} exact>reactHomeworkApi-25Sept</NavLink><br></br>
          <NavLink to="/reactdeleteapp" activeClassName="activeLink" style={{color:"red"}} exact>reactHomeworkDelete-19Sept</NavLink><br></br>
          <NavLink to="/reactformapp" activeClassName="activeLink" style={{color:"red"}} exact>reactFormProcess-22Sept</NavLink><br></br>
          <NavLink to="/step1" activeClassName="activeLink" style={{color:"red"}} exact>reactapigenderStep1-02Okt</NavLink><br></br>
          <NavLink to="/step2" activeClassName="activeLink" style={{color:"red"}} exact>reactapigenderStep2-02Okt</NavLink><br></br>
          <NavLink to="/step3" activeClassName="activeLink" style={{color:"red"}} exact>reactgetapigenderStep3-02Okt</NavLink><br></br>

          <h2>Accounts</h2>
      <ul>
        
        <li><Link to="/new/netflix">Netflix</Link></li>
        <li><Link to="/new/zillow-group">Zillow Group</Link></li>
        <li><Link to="/new/yahoo">Yahoo</Link></li>
        <li><Link to="/new/modus-create">Modus Create</Link></li>
      </ul>

         <Switch> 
          <Route  path="/" exact strict component={homepage}/>
          
          <Route path="/new/:id" exact strict component={Child} />
      
        
          <Route path="/step1" exact strict component={Step1} />
          <Route path="/step2" exact strict component={Step2} />
          <Route path="/step3" exact strict component={Step3} />
         


          <Route path="/reactApp" exact strict component={reactApp} />
          <Route path="/reactdeleteapp" exact strict component={reactdeleteapp} />
          <Route path="/reactformapp" exact strict component={reactformapp} />
          <Route component={Error} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
//Burda şuna dikkat edelim... Biz aynı componente ait bir tane route içinde component çağırırken bu componente ait birden fazla link yazabiliyoruz ki örneğin biz bir fonksiyon yazdık ve dinamik bir fonksiyon biz bir route içinde şu şekilde path oluşturursak
// <Route path="/new/:id" exact strict component={Child} />
// Daha sonra biz Link olarak ise
/* 
         <li><Link to="/new/netflix">Netflix</Link></li>
        <li><Link to="/new/zillow-group">Zillow Group</Link></li>
        <li><Link to="/new/yahoo">Yahoo</Link></li>
        <li><Link to="/new/modus-create">Modus Create</Link></li>
*/
//Oluşturunca biz artık bu linklerden hangisine tıklarsak yol olarak onun ismini alacaktır
// http://localhost:3000/new/netflix , http://localhost:3000/new/zillow-group , http://localhost:3000/new/yahoo ,  http://localhost:3000/new/modus-create 
//Burda match içinde params onun içinde de property olarak bizim yazdığımz id olacaktır ki values i biz id yerine ne ararsak o olacaktır ki aynı component de yani aynı fonksiyona dinamik bir parametre göndermiş oluruz ki biz o fonksiyon içinde hangisine tıklarsak onun yolundaki value yi kullanabiliriz dolayısı ile bir nevi dinamik bir component yapabilirz bu şekilde de.....