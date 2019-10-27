import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore,applyMiddleware } from "redux";
import logger    from "redux-logger";

const InitalState = {
  count: 1,
  users: []
};
const reducer1 = (state = InitalState, action) => {
  //console.log("action: ", action);
 // console.log("stateReducer a başlarken: ", state);
  switch (action.type) {
    case "ADD":
      //state.count += action.payload; //state+=action.payload
     //state.users.push(action.payload); //Bu yönteme göre yaparsak işlemler bittikten sonra ilk action yaptıktan sonra yazdırınca karşımıza veri  bu şekilde gelir yani normalde Array(1) gözüküyor ama asıl referans içerisinde 3 tane veri olduğu gözüküyor oysa biz burda tek bir veri eklemiştik işte bunun sebebi referans tiplerde immutable değiştirilebilir aynı veri üzerinde değişiklik olunca aynı objeden kaçtane varsa hepsi içerisinde değişiklikler uygulanıyor....
     /* {count: 11, users: Array(1)} 
     count: 11
     users: (3) [10, 4, 10]
     __proto__: Object */    
     // Bu yanlış yöntem mutable olan yöntem ki burda biz direk initalState içerisinde işlem yapıyoruz bu doğru değil immutable bir veri de mutable işlem yapıyoruz ancak birden fazla işlem yapıtğımızda biz en son hangi işlem yapmışsak eğer aynı obje içinde işlem yaptığmız için bundan önceki yaptıklarımızda en son yaptığımız veri ile aynı olacaktır ve biz geçmişteki verileri göremeyeceğiz ondan dolayı biz immutable işem yapmamız lazım ancak immutable işlemi mutable a benzeterek işlem yapmamız gerekir nasıl tabi ki spread object.assign ya da concat yöntemi ile...
      state={
          ...state,
          count:state.count+action.payload,
        users:[...state.users,action.payload]//Bu şekilde yaptığımzda ilk action1  yaparken state karşımıza şu şekilde gelir.
        /*   {count: 11, users: Array(1)}
          count: 11
          users: [10]
          __proto__: Object  */
      }
     // console.log("AddState: ", state);
      break;
    //return state;//Biz state e bir eleman eklioruz state in değeri  ile oynamadan içeriğine dokunmadan sonrasında ya hemen return state yapmalıyız ya da en güzeli switch-case bittikten sonra return yapalım ki biz swtich case içerisinde her bir koşul için işle yapacaksak hepsi için ayrı ayrı return yapmamak için en iyisimi switch-case bittikten sonra return state diyelim ve bu şekilde işlemimizi bitirmiş olalım....
    case "DELETE":
      //state.count -= action.payload;
      //console.log("DeleteState: ", state);
     // state.users.push(action.payload);

      state={
          ...state,
          count:state.count-action.payload,
          users:[...state.users,action.payload]
      }
      break;
   //Bu şekilde yaptığımızda yani immutable ı mutable a çevirerek yapmaya çalştığımızda problem ortadan kalkıyor 
  }
  return state; //Burda state i return ile çağırmamız gerekecek... yani switch case içerisinde state üzerinde işlem yaptığımız için ens son state i return etme iz gerkecek..
};

//REDUX-LOGGER MIDDLEWARE ILE ÇALIŞMAK....install redux-logger diyerek kurduktan sonra üstte import ederiz daha sonra da applyMiddleware i de ekleyrek 
//logger middleware i ile biz her action olayından önceki state i action ı ve sonraki state i console umuzda görebiliriz ki bu bizim işimizi çok kolaylaşıtracaktır....
const middleware=applyMiddleware(logger)

const store = createStore(reducer1,middleware); //initialstate 2 verdik ancak biz normalde buraya obje olarka vereceğiz yani referanstipli bir veri yazmış olacağız ve immutable olduğunu da unutmayalım
//console.log("Store!!: ", store.getState());
const actionAdd = {
  type: "ADD",
  payload: 10
};

const actionDelete = {
  type: "DELETE",
  payload: 4
};
/*
store.subscribe(() => {
  console.log("Updated!");
  console.log("UpdateState: ", store.getState());
});
*/
//store.dispatch() olayı çok kritik öneme sahiptir herşey burdan dispathc edince çalışmaya başlıyor ve burdak i sıraya göre çalışır aynı action ı birden fazla kere çalıştırmak istersek buraya aynı dispatch ı tekrar tekrar yazabiliriz...
store.dispatch(actionAdd); //Başlangıç değerine 10 ekler
store.dispatch(actionDelete); //En güncel state den 4 çıkarır
store.dispatch(actionAdd); //En güncel state e 10 ekler




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
