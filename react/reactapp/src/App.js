
import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import User from './components/User'; //User componentini sildik içerde burayı da pasif hale getiri
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import MyUser  from './components/MyUser';
import Sidebar from './components/Sidebar';
import Sosial from './components/Sosial';
import Users from './components/Users';
//import NewUser from './components/NewUser';
import NewUsers from './components/NewUsers';

class App extends Component {
     //State oluşturyoruz ve içerisinde dizi şeklinde bilgiler gönderiyoruz
     state={
          users:[
               {
                    id:1,
                    name:"Mustafa Murat",
                    salary:"5000",
                    departmant:"Front-End Developer"
               },
               {
                    id:2,
                    name:"Ahmet Serin",
                    salary:"4000",
                    departmant:"Back-End Developer"
               },{
                    id:3,
                    name:"Kemal Derin",
                    salary:"4500",
                    departmant:"Web Design"
               }

          ],
          newUsers:[
               {    
                    studentId:"1",
                    studentName:"Frederik",
                    studentClass:"12",
                    studentCity:"Ulsteinvik"
               },
               {
                    studentId:"2",
                    Name:"Kamuran",
                    Departman:"Back-End Developer",
                    Salary:"5500"
               },
               {
                    studentId:"3",
                    studentName:"Hanne",
                    studentClass:"10",
                    studentCity:"Hareid"
               }

          ]
     }
     render() {
 
  return (
    
     <div className="App">
     <h4 style={{color:"red",fontSize:"30px",background:"aqua"}}>Burası App.js componentidir!Aman Haaa</h4>
   
   <Users 
   users={this.state.users} //User componentini burda birden fazla yazdırmıştık onu sildik onun yerine users stat ini buraya props olarak gönderdik
   //Yani biz users ın stati içerisinde users dizisi var onu <Users /> componentini çalıştırırken onun içerisine attık ve biz bu şekilde props göndermiş olduk işte Users componentine
   contributors="Micheal Landburk" //Burayı eski yöntemle göndermiş olduk
   />
   
  
 <Footer property="Prop ile Dinamik Veri aktar"/>
 <Footer property="Prop ile yeni bir veri aktaralım"/>
 <Footer property="Prop ile başka bir veri daha aktaralım"/>

<h3 className="Apph3" className="container" >Evet burası da son satırımız</h3> 
     <Navbar/>
     <MyUser
     Name="Serkan"
     Departman="Designer"
     Salary="6000"
          />
           <MyUser
     Name="Kamuran"
     Departman="Back-End Developer"
     Salary="5500"
          />
           <MyUser
     Name="Hüseyin"
     Departman="Editör"
     Salary="3400"
          />

<Sidebar
//Burda props u kullanmadığımız için default olarak belirlediğimiz verileri ekranda görürüz
country="Germany"
city="Berlin"
population="2 million"
/>
<Sosial prop="Burası Sosail Fonksiyonel componentimizdir " />

<NewUsers newUsers={this.state.newUsers}/>

    </div>
   //newUsers verisini NewUsers a props olarak göndermiş olduk
  );
}
}




export default App;

/* 

<NewUser
studentName="Frederik"
studentClass="12"
studentCity="Ulsteinvik"
/>
<NewUser
studentName="Andreas"
studentClass="11"
studentCity="Volda"
/>
<NewUser
studentName="Hanne"
studentClass="10"
studentCity="Hareid"
/>

*/

        

