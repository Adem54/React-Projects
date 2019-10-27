import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { default as ReduxThunk } from 'redux-thunk';
import logger from "redux-logger";
//redux-promise-middleware eklentisi,modülü,paketi
import axios from "axios";
import reduxPromiseMiddleware from "redux-promise-middleware";

const initalState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return { ...state, fetching: true };
    case "FETCH_USERS_ERROR":
      return { ...state, error: action.payload, fetching: false };
    case "FETCH_USERS_RECEIVE":
      return {
        ...state,
        users: action.payload,
        fetched: true,
        fetching: false
      };

    default:
      return state;
  }
};

const middleware = applyMiddleware(reduxPromiseMiddleware, thunk, logger);
const store = createStore(reducer, middleware);
//console.log(store.getState());
//Biz store.dispatch içerisinde direk obje yazmak yerine parametresi dispatch olan bir fonksiyon return ediyoruz burda,yani biz eğer ayrı bir sayfada kullanmış oldaydık bu dispatch işlemini o zaman orda return dispatch=>{} şeklinde bir fonksiyon yazackatık ve bu bize ne sağlıyor yani bizim parametresmizde bir dispatch olması bize biz aslında bir dispatch işlemi içinde veya bir action işlemi içerisinde birden fazla dispatch i yapabilmemizi sağlıyor ki bu bizim için iyi birşey bir sıralama olmasını sağlıyoruz ve bir action içerisinde hem loading,hem error,hemde fetch işlemini yapabiliyour....
//Burda şuna dikkat edelim biz dispatch parametresinden sonra dispatch yapıp içerisinde işlemleri yapabiliriz ve farklı bir dispatch işlemi yapacağımız zaman da hemen bir alta geçer yeni bir dispatch açıp yeni dispatch imizi yazarız yani şöyle düşünelim her bir dispatch bir state değişikliğidir aslında her bir dispatch bir SetState olayıdır aslında
//Burda öncelikle yaptığmız olay store.dispatch içerisine action yerleştirmek biz öncelikle sotre.dispatch içerisine koyacağımız action ı dışarda tanımlayabilirdik ve ana action ımızın içerisine de 3 tane action yerleştirdik her bir dispatch birer action dır bunu unutmayalım ondan dolayı sadece biz action oluştururken fonksiyon olarak oluşturmak zorundayız çünkü redux-thunk actionlarımızı özellikle fetch olayında bizim normal redux kullanmadığmız zaman yaşadğımız sorunlarımız oluyordu bu thunk sayesinde biz action larımızı fonksiyon action olarak yazmamız thunk ın bizim işlemlerimizi yapması açısından çok önemlidir ki biz action ımızı yazıp sonra gerisini thunk halledip işi bitince bize veriyi tekrar sorunsuz birşekilde döndermiş oluyor...







const userAction = () => {
  return async dispatch => {
    dispatch({
      type: "FETCH_USERS_START"
    });

    try {
      //const response=await fetch("https://jsonplaceholder.typicode.com/users/");
      const getUsers = await (await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      )).json();
      //Burada her bir dispathc aslında birer action dır ve biz bunları dışarda action olarak tanımlayıp gelip burda kullanabilirdik normalde
      dispatch({
        type: "FETCH_USERS_RECEIVE",
        payload: getUsers
      });
      //console.log("getUsers: ", getUsers);
    } catch (error) {
      //
      dispatch({
        type: "FETCH_USERS_ERROR",
        payload: "ERROR"
      });
    }
  };
};
store.dispatch(userAction());


ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/* 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initalState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return { ...state, fetching: true };
    case "FETCH_USERS_ERROR":
      return {...state,error:action.payload,fetching:false};
    case "FETCH_USERS_RECEIVE":
      return {...state,users:action.payload,fetched:true,fetching:false};

    default:
      return state;
  }
};

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);
//console.log(store.getState());
//Biz store.dispatch içerisinde direk obje yazmak yerine parametresi dispatch olan bir fonksiyon return ediyoruz burda,yani biz eğer ayrı bir sayfada kullanmış oldaydık bu dispatch işlemini o zaman orda return dispatch=>{} şeklinde bir fonksiyon yazackatık ve bu bize ne sağlıyor yani bizim parametresmizde bir dispatch olması bize biz aslında bir dispatch işlemi içinde veya bir action işlemi içerisinde birden fazla dispatch i yapabilmemizi sağlıyor ki bu bizim için iyi birşey bir sıralama olmasını sağlıyoruz ve bir action içerisinde hem loading,hem error,hemde fetch işlemini yapabiliyour....
//Burda şuna dikkat edelim biz dispatch parametresinden sonra dispatch yapıp içerisinde işlemleri yapabiliriz ve farklı bir dispatch işlemi yapacağımız zaman da hemen bir alta geçer yeni bir dispatch açıp yeni dispatch imizi yazarız yani şöyle düşünelim her bir dispatch bir state değişikliğidir aslında her bir dispatch bir SetState olayıdır aslında
//Burda öncelikle yaptığmız olay store.dispatch içerisine action yerleştirmek biz öncelikle sotre.dispatch içerisine koyacağımız action ı dışarda tanımlayabilirdik ve ana action ımızın içerisine de 3 tane action yerleştirdik her bir dispatch birer action dır bunu unutmayalım ondan dolayı sadece biz action oluştururken fonksiyon olarak oluşturmak zorundayız çünkü redux-thunk actionlarımızı özellikle fetch olayında bizim normal redux kullanmadığmız zaman yaşadğımız sorunlarımız oluyordu bu thunk sayesinde biz action larımızı fonksiyon action olarak yazmamız thunk ın bizim işlemlerimizi yapması açısından çok önemlidir ki biz action ımızı yazıp sonra gerisini thunk halledip işi bitince bize veriyi tekrar sorunsuz birşekilde döndermiş oluyor...
store.dispatch(async dispatch => {
  dispatch({
    type: "FETCH_USERS_START"
  });
  
  try {
       //const response=await fetch("https://jsonplaceholder.typicode.com/users/");
  const getUsers = await (await fetch(
    "https://jsonplaceholder.typicode.com/users/"
  )).json();
  //Burada her bir dispathc aslında birer action dır ve biz bunları dışarda action olarak tanımlayıp gelip burda kullanabilirdik normalde
  dispatch({
      type:"FETCH_USERS_RECEIVE",
      payload:getUsers
  })
  //console.log("getUsers: ", getUsers);
  } catch (error) {
      //
      dispatch({
          type:"FETCH_USERS_ERROR",
          payload:  "ERROR"
          
      })
  }
 

});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//REDUCERLARIMIZIN PURE(SAF) FONKSİYON OLMASININ ÖNEMİ VE REDUX-THUNK IN ÇALIŞMASI..
//Redux reducer'larımızın her daim saf olması, uygulamamızın sağlıklı işlemesi açısından çok önemlidir. Peki nedir bu "saf" fonksiyonlar ve bu saflık neden önemlidir?
//Kısaca saf fonksiyon, aynı girdilere her zaman aynı çıktıyı üreten fonksiyonlara denir.
//function topla(a, b) {return a+b;}
//Örneğin topla fonksiyonu bir saf fonksiyondur 2+3 zamandan, mekandan ve veritabanındaki herhangi bir veriden bağımsız olarak 5'tir.
//function rastgeleTopla(a){return Math.random() + a;}
//Fakat yukarıdaki bu fonksiyon, her çağırdığımızda farklı sonuçlar üretebileceği için saf değildir. Benzer şekilde tarihe bağlı fonksiyonlar, veritabanından aldığı veriye göre sonuç üreten fonksiyonlar da saf değildir. Ancak hesap makinası dışında bir uygulama geliştiriyor isek elbette saf olmayan fonksiyonlarımız olacak.
//Aslında asenkron fonksiyonlarımızı yazmak için herhangi bir middleware yapısına ihtiyacımız yok. Ancak Redux yapısını 'saf' tutabilmek için asenkron fonksiyonları veya genel olarak yan etkiye sahip fonksiyonları redux-thunk (veya saga) gibi middleware içerisinde işlememiz gerekir.
//Yapınızı saf tuttuğunuzda öncelikle kodunuzun okunması çok daha kolay olacaktır. Asenkron cevapların olduğu fonksiyonlar için unit test yazmak oldukça zordur. Saf olmayan reducer kullandığınızda buna bağlı olan değişkenler değiştiğinde DOM üzerinde beklediğiniz güncellemeyi göremeyebilirsiniz. 
//Eğer NodeJS ile Express.JS üzerinde uygulamalar geliştirdiyseniz middleware kavramı sizin için yeni değildir. Middleware Redux'ta da benzer şekilde işliyor. Action yerine function dispatch ettiğinizde middleware devreye giriyor. Redux-thunk'ın kaynak koduna bakarsak bunun nereden geldiğini görebiliriz.
//Thunk da bir middleware olduğundan öncelikle gelen action'a bakıyor. Function tipinde bir işlem dispatch edildiğinde devreye giriyor.
//Demek istediğim thunk'ta action yerine fonksiyon dönmemizin tek amacı middleware'e bir nevi sinyal göndermek.
//Middleware devreye girdiğinde, Redux kontrolü bir süreliğine middleware'e verecek; middleware asenkron işlemini tamamladığında Redux da tüm veri ağacını güncelleyip React'e gönderecek. Bu şekilde Redux fonksiyonlarımız saf kalacak ve React uygulamamız stabil çalışacak.
//Biz fetch yaptığmız action olayında dikkat edersek önce loading i yapıyoruz bu zaten fetch yaparken veri gelmesi server a göre uzama durumunda veri geliyor vs neyse bir mesaj verebilmek için di sonra fetch işlemi gerçekleşir asenkron feth işlemi sonra fetch işleminden sonra dispatch yaparak o veriyi payload a yazıdırıyoruz ve catch ile de herhangi bir hata varsa ona mesaj vermesini istiyoruz ki burda gelen verinin dispatch ile payload a yazdırılması ve error işlemi birer senkrondur aslında ancak bu senkron işlemler kendlerinden önceki asenkron fetch işleminin bitmesine bağlanıyor burda ki veri alındıktan sonra bu senkronlar çalışdın diye ki işte bu çok önemlidir ki zaten bizim en çok dikkat etmemiz gereken mesele de bu id işte bunu redux-thunk bizim için yapıyor ve bizi sorundan kurtarmış oluyor aslında....    

    
*/
