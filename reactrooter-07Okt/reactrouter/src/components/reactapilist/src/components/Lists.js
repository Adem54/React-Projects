import React from 'react'
import ListItem from "./ListItem"

 function Lists( {users,handleDetails} ) {
  return (
    <div>
      <ul > {users.map((user,index)=>{
          return(
             <ListItem
             key={index}
             user={{index:index,...user}}//Burda süslü parantez içerisinde spread ile beraber index i de koyarsak user objemiz içine index i ekleriz ve uniq bir id oluşturmuş oluruz ancak bu sadece burdan lisitem a aktrdığımız bir veridir ana users verisinin içerisinde oluşturaildiğmiz birşey değildir ve ayrıca şuna dikkat edelim burda index sıra ile 0 dan başlıyor ve user objesi içerisinde her veride  0.1.2. elemanı şeklinde ilerliyor yani index bu şekilde olduğu için biz ListItem da handledetails parametresi içerisine user.index i göndeririri ve app.js de de index biz kaçıncı elemana tıkladığımızı zaten veridği için direk users[index] yapınca biz nereye tıkladığımız bulabiliriz o zaman
             //burdaa biz bunu api verisinin içerisine eklememiş oluyoruz burdas sadece biz list den listitem a giden props olarak kullanıyoruz ki key için işime yaramış oluyor
           //  index={index} ya bu şekilde de kullanabilridik ya da index:index yerine tek index de kullanabiliriz
             handleDetails={handleDetails}
             />
          )
      })} </ul>
    </div>
  )
}

export default Lists;