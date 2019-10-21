import React, { Component, PureComponent } from "react";

import "./App.css";


class App extends PureComponent {
  render() {


    return(
      <div className="App">
      <h3>REACT!!</h3>
      </div>
    )
  }
}

export default App;

//Redux bir javscript kütüphanesidir.React in olmazsa olmazı gibi düşünmeye gerek yok
//Asıl görev tanımı ise, Javascript uygulamalarında state bileşenini yönetmeyi sağlayan javascript kütüphanesidir.
//    Redux ile React’ın birlikte anılmasının sebebi, birlikte popüler olmaları ve entegre bir şekilde çok iyi çalışıyor olmalarıdır.
//Redux, literatürde Application State Management yani Uygulama Durum Yönetici olarak geçmektedir. 
// React uygulamaları geliştirirken, state bileşenleri üzerinden geliştirme yapılmaktadır. Redux denilen yapı ise bu state bileşenlerini yönetmemizi sağlayan kütüphanedir.
//React ile uygulama geliştirirken bileşenler (componentler) ve bu bileşenleri oluşturan stateler bulunmaktadır.  Uygulamalarımızı geliştirdikçe bileşenlerimiz artmakta, haliyle state yapılarımız da artmaktadır. Bu durumda bileşenleri yönetmek oldukça zorlaşmaktadır. İşte bu noktada Redux kullanmak tüm bu karmaşanın arasından kurtulmamıza olanak sağlamaktadır.
//Normalde react çalışırken biz componentlerde parent dan aşağı doğru props lar gönderiyorduk ama bildiğimiz gibi biz üstten aşağı sıra ile göndermek zorundaydık yani mesela 1.componentimizden 2.yani onun bir altındakine ordan da 3.komponente props gönderiyorduk state leri kullanırken yani 1 den direk 3 e erişemiyorduk işte bu büyük projelerde karşımıza karmaşıklık ve problem olarak gelecektir ondan dolayı redux tam da bu işe çözüm bulmak için vardır...
//Redux ta stor diye bir javascript objesi vardır veritabanı gibi ama veritabanı değil statelerimizi tek biryerden yönetmemizi sağlayan o yer işte stor dur...Zaten mantık olarak redux kullanmadan önce de mümkünse state leri biz tek bir yerden yönetmeye çalışmalıyız ki o da en tepedeki App.js olmalıdır...
//Redux ta componentler stor u dinliyor hepsi stor a abone olmuş durumdalar ve stor da herhangi bir değişiklik olduğu durumlarda bu componentler haberdar(notify) oluyor ve kendine ait ilgili güncellemeyi yapmış oluyor...Redux olmadan önceki gibi sürekli bir alt componentine doğru ilerleme olayı beklenmiyor her component direk stor ile muhatap olabilmiş oluyor ve stor u kullanmak da oldukça kolaylaşmış oluyor...
//Redux ın şöyle bir güzelliği de var stor lar state lerin geçmişlerini de tutuyor bundan dolayı ihtiyaç halinde geçmiş state değerlerini de kullanabiliriz mesela word gibi bir uygulama geliştiriyoruz biz bir önceki yazdığımız yazının gelmesii istediimizde nasıl getirebiliyorsak burda da getirebiliyoruz..

// Örneğin view kısmımızda yani kullanıcının ekranda gördüğü web sayfamız view ımızda bir action gerçekleşince state lerimiz değişiyor genellikle.View da herhangi bir butona basıldığında yani herhangi bir action(olaylar) yazdığımız data her neyse state her neyse bunu stor a dispatch(sevketmek) ediyoruz yani gönderiyoruz ve bu işlem gerçekleştiğinde tek bir store umuz var ama store içerisinde reducer lerimiz var stora gelen state verisine store ilgili reducer ı sağlıyor.Reducer ler store tarafından sağlanan state i alır istenildiği şekilde günceller ve güncellenmiş datayı stor a tekrardan gönderir stor da tekrardan güncellenmiş olacaktır.Stor güncellendikten sonra da view da güncellenmiş olur. Stor üzerinde tek bir state var ve güncellenen state tekrardan view(ekranımız web siteisinin ön tarafını gördüğümüz ekran) a gönderilmiş olur 
//Şunu iyi bilelim bizim elimizde tek bir stor umuz var stor larımız içerisinde reducer lar var.Reducer larımızın yaptığı tek iş veri değişimidir ve Reducerlar birer pure function dırlar farklı bir veri döndürebilirler ama pure function demek tek bir değer return ederler return den önce parametredeki argümanları değiştirmeden return ederler yani return de o argüman üzerinde işlem yapar ama o argümanın değerine dokunmadan yani mesela o argüman dizi ise onunla işlem yapar ama onunlar beraber yeni bir dizi oluşturur yeni dizi içerisine aktarır değişikliği argüman dizisi aynı kalır ki zaten pure fonks olduğunu anlamak için argümanları birden fazla kez çağırdığmızda aynı değeri almamız gerekir
//Reducer lar pure fonksiyonlardır ve tek bir değer dönerler her bir uygulama durumunun state inin reducer ı vardır ve stor üzerinde bulunurlar ve reducerlar en sonda birleşitirilirler(combine) ama bu daha ilerde bakacağımız birşey
//REDUX I  NASIL KURARIZ..
// npm install redux react-redux --save diyerek kurarız react-redux ta react ile beraber çalışması için kurmamız gereken bir kütüphanedir