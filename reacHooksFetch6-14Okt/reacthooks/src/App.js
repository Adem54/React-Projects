import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);




  useEffect(() => {
    window.addEventListener("keypress", handleKeypress);
    const fetchUrl = async () => {
      console.log("fetchUrl çalışmaya başladı...");
      if (people.length === 0) {
        const response = await fetch("https://uinames.com/api/?ext&amount=10");
        const json = await response.json();
        console.log("json: ", json);
        setPeople(json);
        // setLoading(false);
        console.log(
          "fetchUrl de setPeople değiştirdikten hemen sonra People: ",
          people
        );
      }
    };
    fetchUrl();
    console.log(
      "useEffect içinde fetchUrl fonksiyonu çalıştırıldıktan hemen sonra People: ",
      people
    ); //Burası fetchUrl den önce çalışır çünkü fetchUrl de asenkron bir işlem yapılıyor ondan dolayı burası senkron old için
    // people.length > 0 && window.addEventListener("keypress", handleKeypress);
  }, []);

useEffect( ()=>{
  console.log("UseEffect te Index: ", index);
}  ,[index]

)

  const handleKeypress = e => {
    console.log("handlekeypress çalıştı!!");

    console.log("people.length: ", people.length);
    if (e.code === "Space") {
      console.log("True&False: ", index < people.length - 1);
      index < people.length - 1 ? setIndex(index=>index + 1) : setIndex(0);
    }

    
  };

  

  //Öncelikle bizim useEffect te ikinci argüman a people state ini koyduktan sonra people statine fetch ten gelen veri gelmesine rağmen ve orası aslında değişmemesine rağmen(useEffect eğer ikinci parametre koymuşsak o parametre her değiştiğinde tekrardan render edilir aynı componentshouldupdate gibi) tekrardan useEffect in çalışma sebebi şudur ki burda useEffect bir önceki ikinci argümanla şimdiki ikinci argümanı karşılaştırır ve eğer sizin buraya verdiğiniz veri dizi ya da obje ise bunlar referans veriler old için içindeki veriler aynı bile olsa yeniden oluşturularak geldiği için bunu javascript eşit kabul etmez
  //{} === {} // false
  //[] === [] // false
  //() => {} === () => {} // false
  //işte bundan dolayı biz aslında aynı veriyi yazsak bile yazdığımız veri eğer primitive değişmeyen veriler değilde değişebilen referans tipi veriler ise o zaman useEffect aynı veriyi bile getirsek tekrardan yazmışsak her seferinde render edecektir...
  //React, herhangi bir şeyin değişip değişmediğini belirlemek için Object.is aracılığıyla değerlerin her biri arasında bir karşılaştırma yapar. Elementlerden herhangi biri son oluşturma döngüsünden farklıysa, efekt yeni değerlere karşı çalıştırılır.
  //Karşılaştırma, ilkel JavaScript türleri için harika çalışır, ancak öğelerden biri bir nesne veya dizi olduğunda sorunlar ortaya çıkabilir. Object.is, nesneleri ve dizileri referans olarak karşılaştırır ve bu işlevi geçersiz kılmanın ve özel bir karşılaştırıcı sağlamanın bir yolu yoktur.

  /*
useEffect(() => {
  async function fetchData(){
  console.log("ComponentDidmount çalıştı");
  if(people.length === 0){
  const response = await fetch("https://uinames.com/api/?ext&amount=10");
  const dataPeople = await response.json();
  console.log("fetch işleminden hemen sonra data",dataPeople);
 
  setPeople(dataPeople);//Burasi yukardaki fetch den daha önce çalıştıığı için burası boş geliyor gibi gözüküyor..
 console.log("setState değiştikten sonra ",people)
}
return;
  
}

  
fetchData();//Fonksiyonu çağırmamız gerekir...
window.addEventListener("keypress", handleKeypress);
console.log("fetchData() çalıştıktan sonra : ",people)

return () => {
  //  window.removeEventListener("keypress", handleKeypress);
    console.log("Sayfa kaldırılıyor...");
  };  
},[people])

*/
  return (
    <div className="App">
      {people.length !== 0 ? (
        <h2>{JSON.stringify(people)}</h2>
      ) : (
        <h1>Veri bekleniyor....</h1>
      )}
    </div>
  );
}
export default App;
/* 
 <h1> {index} </h1>
      {people.length === 0 ?
  <h2>Henüz veri gelmemiştir....</h2>:
      
      <h3>{JSON.stringify(people)}</h3>
    }
*/
