import React, { Component,useState,useEffect } from 'react'

import './App.css';

//useEffect fonksiyonu iki parametreden oluşuyor ilki fonksiyon olan bu parametrelerin
//1)Eğer ikinci parametre hiç verilmezse ComponentDidUpdate olur ve her render edildiğinde bu fonksiyon çalışacaktır....
//2)Eğer ikinci parametre boş bir dizi olarak verilirse o zamanda ComponentDidMount olur ve sayfa ilk defa geldiğinde o sayfa kaldırılana kadar bir kere ilk sayfa gelirken çalışır ve ayrıca bu fonks içerisinde eğer return kullanılırsa o return işlemi içerisinde yapacağımız işlemlerde ComponentWillUnMount olduğunda yani bu component kaldırıldığında çalışacaktır...
//3)ComponentShouldUpdate-Eğer 2.parametre olarak bir değer verilirse o zaman da sadece 2.parametre olarak verilen değerler güncellendiğinde metot çalışır yani değer aynı kalıyorsa false değişirse true ya dönüyor gibi düşünürsek sadece 2.parametre güncellendiğinde yani true olduğunda bu fonks render edilecek ve metot çalışacaktır ondan dolayı da burasının adı componentshouldUpdate dir


//useEffect ile class componentinde yaptığımız ComponentDidMount,ComponentDidUpdate,ComponentShouldUpdate,ComponentWillUnMount gibi işlemleri tek bir fonksiyon çatısı altında gerçekleştirebilmemizi sağlar...
//ReactHooks u kullanmak için useState ve useEffect fonksiyonlarını React kütüphanesinin içerisine eklemeliyiz...
function App() {
  const [adet, adediAta] = useState(0);
  const [name,fullName]=useState("Adem");

// 1)ComponentDidUpdate işlemidir burası çünkü useEffect fonksiyonunun 2.parametresi verilmemiştir..
useEffect( ()=>{
 
  console.log("Burası ComponentDidUpdate İşlemidir her render işleminde güncellenecektir...")
}   )

  //2) componentDidMount ve componentWillUnMount işlemidir burası çünkü 2.parametre boş bir dizi olarak verilmiştir ve bu fonks içerisinde return ile component kaldırıldğında yapılacak işlem yazılmıştır....
  useEffect(() => {//Burası en son çalışır...render edildikten sonra en son çalışacaktır...Ondan dolayı ilk önce render edildiği için biz önce document.title ın ilk değerini okuyacağız ki ComponentDidMount ta document.title değeri arkada değişmiş olacak ama biz görmemiz olacağız ondan dolayı tıklama işlemi yapınca bir render dahaa yapacağı için işte o zaman h2 içindeki document.title ı bir daha okuyacak ondan dolayı arka planda değişmiş olan document.title ı bu sefer direk ön tarafta görebileceğiz...
    //document.title dediği index.html içinde head etiketleri içindeki title etiketidir
    // Browser API kullanılarak title'ın değiştirilmesi
    //Aşağıdaki örnek component’te React’ın ilgili DOM’u güncelledikten sonra document title’ın değiştirilmesi sağlanır
    //ComponentDidMount render edildikten sonra en son çalışan fonksiyondur
    //ÖNEMLİ BİR İZAH....
    //useEffect fonksiyonunu çağırdığınızda React’e “DOM ile ilgili işlemleri tamamladıktan sonra bu fonksiyonu çalıştır.” demiş oluyorsunuz. Effect’ler component içerisinde oluşturulur. Bu sayede component’in state’ine ve props özelliklerine erişim sağlayabilirler. 
    //&&&&&&&&&DİKKAT!!!!!!!=>React varsayılan olarak ilk render da dahil olmak üzere her render işleminden sonra effect fonksiyonunu çalıştırır.
    document.title = `${adet} kere tıkladınız.`;
    console.log("ComponentDidMount Çalıştı")
    return()=>{//Burası da componentWillUnMount yapacağımz zaman sayfa kaldırılıdığında çalışacaktır...
      console.log("Sayfa kaldırılıyor....")
    }
  },[]);

  useEffect( ()=>{
console.log("componntShouldUpdate dir burası eğer state değiştirisek burası güncellenir yoksa güncellenmez....")
  },[name] )

  return (
    <div className="App">
      <p>{adet} kere tıkladınız</p>
      <button onClick={() => adediAta(adet + 1)}>
        Tıkla
      </button>
      <h2>{document.title}</h2>
      <hr></hr>
      <p>Adı Soyadı : {name}</p>
      <button onClick={() => fullName("Adem ERBAŞ")}>
        Tıkla
      </button>
      {console.log("Render işlemi bitiyor")}
    </div>
  
  );
}

export default App;

//Peki, Hooks ne zaman kullanılmalı?

//Eğer fonksiyon Component’lerle çalışıyorsanız ve bir state yönetimine ihtiyaç duyarsanız, o Component’i tekrar bir Class’a çevirmeniz gerekmiyor. Doğrudan Hooks bağlayarak state yönetimi yapabilirsiniz.

//Componet’lerde state kullanabilmek için onu bir Class’a çevirmek gerekiyordu, yani fonksiyon Component’lerde state kullanılamıyordu. Ancak Hooks sayesinde artık fonksiyonel Component’lerde de state tutulabilir.
//useState dediğimiz sonucu dizi olarak dönen bir fonskiyondur ve içinde 1 tane parametre alır ve o parametre dizinin ilk elemanına eşittir ve  2.elemanı bir fonksiyondur ve o da dizinin 2.elemanına eşittir ondan dolayı da biz destructions yöntemi ile bir dizi içinde ilk eleman state e verdiğimiz başlangıç state değeri fonksiyon olan ikincisi ise setState olan değişkendir....  
//Eğer çoklu state kullanmak isterseniz her birini ayrı ayrı tanımlamanız gerekir.
// Birden fazla state değişkeni bildir!
//const [para, parayiSay] = useState(100000);
//const [liste, listeyiTut] = useState( [ { id:0, isim: ‘Elma’} , { id:1, isim: ‘Süt} ] );
//const [market, marketSec] = useState([{ isim: 'Market 1' }]);

//Efekt Hook: useEffect()
//useEffect() metodu, React Class LifeCycle metotlarından componentDidMount(), componentDidUpdate() ve componentWillUnmount() metotlarının kombinasyonudur. Her render’da tekrar çağırılır.

//Hook kullanırken nelere dikkat edilmeli ?
//if cümlecikleri veya iç içe fonksiyonlar içerisinde kullanılmamalıdırlar.
//2. Hook'lar React'ın fonksiyonel componentleri içerisinde çağırılmalıdırlar.
//React ekibi hook'ların production ortamında kullanılmamasını öneriyor.