import React from 'react'
import "./ListItem.css";

 function ListItem({user,handleDetails}) {
   console.log(user);
  return (//şuna dikkat edelim burda index sıra ile 0 dan başlıyor ve user objesi  içerisinde her veride sanki  0.1.2. elemanı gibi  ilerliyor yani index bu şekilde olduğu için biz ListItem da handledetails parametresi içerisine user.index i göndeririri ve app.js de de index biz kaçıncı elemana tıkladığımızı zaten veridği için direk users[index] yapınca biz nereye tıkladığımız bulabiliriz o zaman
    <li className="listItem"  onClick={()=>{handleDetails(user.index)}}>
      {user.name}
      
      <hr></hr>
  
    </li>
    
  )
}

export default ListItem;