//default olarak userReducer ve proReducer fonksiyon argümanlarına değer atadık ki undefined durumlarında hata yemeyelim diye bu önemli çünkü eğer o veri üzerinde işlem yapılacaksa undefined ya da null gelme durumunda hata verecekse ya ona göre bir default değer atarız ki olmadığında o veriyi versin ya da kontrol koymamız gerekecek ki if ile undefined olursa ne olacak onu yazmamız gerkecek

////Farklı reducerları tek bir reducer ile birleştiririz ve bir obje içerisinde her bir reducer a bir property vererek birleştiririz ve her properties in karşısına da value olarak reducer fonksiyonlarını veriririz ve en sonunda rootReducer içerisinde reducer ları birleştirdikten sonra rootReducer ı da createStore içerisine veririiz...
//rootReducer içerisinde biz inital başlangıç değerleri verebilriz yani default değerler gibi düşünebiliriz..

import React from "react";

import "./App.css";
import { combineReducers, createStore } from "redux";

const userReducer = (state = "", action) => {
  switch (action.type) {
    case "userUpdate":
      return action.payload;
    default:
      return state;
  }
};

const proReducer = (state = [], action) => {
  return state;
};

const rootReducer = combineReducers({
  products: proReducer,
  user: userReducer
});

//Burda reducer lara başlangıç inital değer atadık.Burda vereceğimiz ver tipi yukarda product ı default olarak hangi veri tipinde tanımlamışsak o tip olmalı ona dikkat edelimmm
const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: "Samsung",
        type: "T-V"
      }
    ],
    user: "Mehmet"
  }, //rootReducer dan sonra virgül atıp başlangıç değerlerini verdik başlangıç değerlerine de bir virgül atıp redux eklenti çalıştırma kodunu yapıştırırz
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Şimdi bir state imizi güncelleyelim userReducer ı güncelleyelim.Herhangi bir state imizi değiştirirken önce yeni bir action objesi oluşturuyoruz bu bir objedir fonksiyon değil  karıştırmayalımm
const updateUserAction = {
  type: "userUpdate",
  payload: {
    user: "Kamil"
  }
};

store.dispatch(updateUserAction); //dispatch ettikten sonra userReducer içerisinde bir type a göre koşul yazarız..
console.log(store.getState());

function App() {
  return (
    <div className="App">
      <h3>Merhaba</h3>
    </div>
  );
}

export default App;
//DEVTOOLS DA REDUX EKLENTİSİNİN KURULUP KODUMUZDA ÇALIŞIR HALE GELMESİ...
//Biz redux ile çalışırken devtools a yani chrom umuza redux eklentsini eklemeliyiz ki biz arka planda state leri değişmeden önceki sonrak i vs gibi birçok kolaylık sağlıyor bize ve bizim bu redux u kullanabilmemiz için redux devtools exthentions ın bir github repo su var orada redux eklentisini ekledikten sonra kullanabilmemiz için
//const store=createStore(reducer den sonra bir vürgül koyarak
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// kodunu eklememiz gerektiğini söylüyor ki  bu kod redux eklentisinin çalışmasını sağlıyor
//REDUX STORUNUN REACT TARAFINDAN ERİŞİLMESİ İÇİN PROVIDER İLE SARMALANMASI...
//Bu provider ı uygulamanın en dışına koyup bütün componentleri bunun la sarmalamamız gerekiyor...Bu provider nesnesi react-redux modülü altında bulunan bir nesnedir..Daha sonra biz uygulamamızın en dışı dediğimiz yer ReactDOM.render(<App />, document.getElementById('root')); burasıdır bu kısım da bizim uygulamamızda index.js içerisindedir biz index.js içerisinde  provider ı import ederiz önce
//import {Provider} from 'react-redux';
//Daha sonra da provider ile ana componentimiz app.js i sarmalar ve içerisine de store parametresi alır
//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//Artık redux storumuz react içerisinde erişilir duruma geldi

//HER STATE İÇİN OLUŞTURDUĞUMUZ REDUCER LARIN AYRI SAYFALARDA OLUŞTURULMASI VE ORDAN APP.JS E IMPORT EDİLMESİ
