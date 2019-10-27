import React from "react";

import "./App.css";
import { createStore } from "redux";
//Reducer lar pure fonksiyonlardır buna dikkat edelim ona göre gelen argümanlar içerisinde değişiklik yapamayacağımızı bilmeliyiz...
//reducer ımız 2 tane parametre alır 1. si state 2.si action
function reducer(state,actionTest) {//Burda argümanlardaki veriler oluşturulan action larla 
  console.log("action : ",actionTest)//Biz aşağıda kaç tane action yazarsak yazılma sırasına göre hepsini burda console da görebiliriz action objesi içerisinde güncel veriyi...
  if (actionTest.type === 'changeTheState') {
  return actionTest.payload.newState;
}
//Default olarak burayı dön deriz..
return 'state'
}
// 1)STOR OLUŞTURMAK-STORUMUZA REDUCER BAĞLAMAK VE STATE VERİMİZE ERİŞMEK
const store = createStore(reducer); //oluşturduğumuz store içerisine reducer fonksiyonu yazmassak hata alırız
//Oluşturduğumuz store umuz bir reducer parametresi alması gerekiyor yoksa hata alırız...
//Store umuzu oluşturduk sonra bir reducer bu stora bağladık ve reducer da return edilen datayı da store.getState() ile bu state verisine erişmiş oldum
console.log("store: ", store);
//getState() store objesi içerisindeki bir properties dir..
console.log("Default Statemizi: store.getState(): ", store.getState());
//Biz reducer da return olarak döndürüğümüz veri her ne ise o veriyi biz store.getState() fonksiyonundan console yazdırabiliriz...



//  2)STOR U DISPATCH METHODU İLE GÜNCELLEME
//Önce bir action objesi oluştururuz

const action1 = {
  type: "changeTheState", //action tipi belirtilir
  payload: {
    //action la beraber ilgili data ne ise o gönderilir genelde payload properteis altına gönderilir...
    newState: "My New State1"
  }
};

const action2 = {
  type: "changeTheState", //action tipi belirtilir
  payload: {
    //action la beraber ilgili data ne ise o gönderilir genelde payload properteis altına gönderilir...
    newState: "My New State2"
  }
};

const action3 = {
  type: "changeTheState", //action tipi belirtilir
  payload: {
    //action la beraber ilgili data ne ise o gönderilir genelde payload properteis altına gönderilir...
    newState: "My New State3"
  }
};

const action4 = {
 type: "changeTheState", //action tipi belirtilir
  payload: {
    //action la beraber ilgili data ne ise o gönderilir genelde payload properteis altına gönderilir...
    newState: "My New State4"
  }
};


//Biz kaç tane store.dispatch yaparsak event o kadar çalışmış olacak ve subscribe methodu da o kadar çalışmış olacak
//Subscribe methodu store.action dan önce kullanılmalı çünkü bu method action a bağlıdır action da herhangi bir olay ile subscribe methodu tetiklenecektir...ondan dolayı biz bu subscribe methodunu store.dispatch(action) satırından önce yazarız....
store.subscribe(()=>{
  console.log("Store Update");
  console.log("Subscribe methodu ile store daki değişiklikten haberdar olma...",store.getState());
})
//dispatch store içerisindeki bir properties dir

//action ların sıralaması store.dispatch(action) ların sıralamasına göredir....
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action1);
store.dispatch(action4);
// ÖNEMLİ.....   Kısacası biz const action oluşturduğumuz zaman bunu action olduğunu içindeki properteislerden anlıyor ve yazılış sırasına göre reducer fonksiyonuna argüman olarak alıyor burası önemliii.Yani isimleri önemli değil önemli olan içerdeki properties isimleridir buna dikkat edelim şu ana kadar bu şekilde anladım...


//Ve son olarak yapacağımız şey bu action ı stor a dispatch etmektir
//Daha sonra biz gidip yazdığımız bu action ı reducer içerisinde parametre olarak kullanacağız ve reducer fonks içerisinde console yaparak action u yazdırırsak action objesini görebililirizz
//Biz dispatch işleminden sonra bizim yukarda reducer içerisinde state değerimizin action ile gönderdiğmzi newState:"My New State" ile değiştiğini görmek için:
console.log("Store.dispatch den sonra store.getState(): ",store.getState());//Burda action içerisinde gönderdiğimiz yeni state gelir ve değişitriğiiz güncel olan state i burdan alırız...

// 3)STORE DA Kİ HERHANGİ BİR DEĞİŞİKLİKTEN SUBSCRİBE METHODU İLE HABERDAR OLMAK...
//subscribe methodumuz action dispatch olduğunda tetikenip çalışacak...

function App() {
  return (
    <div className="App">
      <h3>Rect-Redux !!</h3>
    </div>
  );
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
