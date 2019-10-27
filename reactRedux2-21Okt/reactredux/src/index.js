//default olarak userReducer ve proReducer fonksiyon argümanlarına değer atadık ki undefined durumlarında hata yemeyelim diye bu önemli çünkü eğer o veri üzerinde işlem yapılacaksa undefined ya da null gelme durumunda hata verecekse ya ona göre bir default değer atarız ki olmadığında o veriyi versin ya da kontrol koymamız gerekecek ki if ile undefined olursa ne olacak onu yazmamız gerkecek

////Farklı reducerları tek bir reducer ile birleştiririz ve bir obje içerisinde her bir reducer a bir property vererek birleştiririz ve her properties in karşısına da value olarak reducer fonksiyonlarını veriririz ve en sonunda rootReducer içerisinde reducer ları birleştirdikten sonra rootReducer ı da createStore içerisine veririiz...
//rootReducer içerisinde biz inital başlangıç değerleri verebilriz yani default değerler gibi düşünebiliriz..


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
////MiddleWare//////
import thunk from "redux-thunk";
import {compose,applyMiddleware,combineReducers, createStore } from "redux";
import ListsReducer from "./reducers/ListsReducer";
import ListItemReducer from "./reducers/ListItemReducer";
import userReducer from "./reducers/userReducer";
import proReducer from "./reducers/productReducer";


//

const rootReducer = combineReducers({
  products: proReducer,
  user: userReducer,
  lists:ListsReducer,
  listItem:ListItemReducer
});

//MiddleWare//
//compose işlemine tabi tutuyorum yani birleştiriyorum
const allEnhancers = compose(
    applyMiddleware(thunk),
    //aşağıda store createStore içerisinde bizim reduxDevTools bağlantısını yapmak için eklediğimiz kodu da buray alırız ve biz bu kodları içerisinde oluşturduğumuz allEnhancers i gidip store=createStore() içerisine alırız ki middleware i yerin e yerleştirmiş olalım ve bu katmandan geçirmiş olabilelim
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//Biz allEnhancers ı const store=createState() içerisine yerleştirdikten sonra artık redux thunk ı kurmuş olduk.Bundan sonraki süreçte her action dispatch ettiğimizde yani action update işlemini gönderdiğimizde önce reducerslara ordan da store içerisine geliyor bildiğimiz gibi heraction dispatch ettiğmizde artık middleware üzerinden giderek action gidecek eğer bir fonksiyon dispatch edilmişse de bunu thunk işletiyor olacak
//ApplyMiddleWare ile bizim birden fazla middleware ımız olacak thunk tan başka o zaman biz thunk yanına  içerisine bir virgül atarak orda tanımlayabileceğiz applymiddleware sayesinde 
//MİddleWare//
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
    user: "Mehmet",
    lists:"InitalListValue",
    listItem:"InitialListItemValue"
  }, //rootReducer dan sonra virgül atıp başlangıç değerlerini verdik başlangıç değerlerine de bir virgül atıp redux eklenti çalıştırma kodunu yapıştırırz
 // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 allEnhancers
);

//Şimdi bir state imizi güncelleyelim userReducer ı güncelleyelim.Herhangi bir state imizi değiştirirken önce yeni bir action objesi oluşturuyoruz bu bir objedir fonksiyon değil  karıştırmayalımm
const updateUserAction = {
  type: "userUpdate",
  payload: {
    user: "Kamil"
  }
};

const productUpdateAction={
    type:"productUpdateAction",
    payload:[{
        name:"ASUS",
        type:"P-C"
    }]
}

const listUpdateAction={
    type:"listUpdateAction",
    payload:"UpdatedValueList"
}

const listItemUpdateAction={
    type:"listItemUpdateAction",
    payload:"UpdatedListItemVALUELIST"
}
store.dispatch(updateUserAction); //dispatch ettikten sonra userReducer içerisinde bir type a göre koşul yazarız..
store.dispatch(listUpdateAction);
store.dispatch(listItemUpdateAction);
store.dispatch(productUpdateAction);

console.log(store.getState());




ReactDOM.render(<Provider store={store}><App count={4} /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


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

//STORE COMPONENT E BAĞLAMAK İÇİN CONNECT NESNESİNİ APP.JS SAYFAMIZA REACT-REDUXS LIBRARY DEN DAHİL EDERİZ

//ÇOK ÖNEMLİ EXPORT VE İMPORT  EDERKEN DİKKAT EDİLECEK HUSUSLAR....
//No reducer provided for key "userReducer"  VEYA Store does not have a valid reducer şeklinde hatalar alıyorsak sebebi export ve import yapma hatalarımızdandır..
// 1)//Eğer birden fazla elemanı biz dışa aktaracaksak o zaman default a gerek yok default olmadan ve süslü parantez içerisinde aktaralım...export  {UPDATE_USER,updateUser}; gibi  ya da bir tane veri aktaracaksak  export default userReducer; bu şekilde süslü parantez olmadan da aktarabiliriz...
//2)Eğer ben bir veriyi || export default userReducer ||diye export etmişsem tek bir veri old için {} parantez kullanmamışım o zaman import edereken de || import  userReducer  from "./reducers/userReducer"; || bu şekilde süslü parantez içerisine almadan import edelim yoksa hata alırız buna dikkat edelim...
//3)Ama export {UPDATE_USER,userActions}; bu şekilde veri göndermişsek o zaman da import ederken import { UPDATE_USER } from "../actions/userActions"; şeklinde süslü parantez içerisinde import etmeliyiz yoksa hata alırız