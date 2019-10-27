import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reduxPromiseMiddleware from "redux-promise-middleware";

const InitalState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = InitalState, { type, payload }) => {
  switch (type) {
    case "FETCH_USERS":
      return {
        ...state,
        fetching: true
      };
    case "FETCH_USERS_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: payload
      };
    case "FETCH_USERS_FULFILLED":
      return {
        ...state,
        fetching: false,
        users: payload,
        fetched: true
      };

    default:
      break;
  }
};

const middleware = applyMiddleware(thunk, logger, reduxPromiseMiddleware);

const store = createStore(reducer, middleware);

//Eğer biz reduxPromiseMiddleware i kullanarak işlmimiz i yapacaksak o zaman biz dispatch parametresi ile fonksiyon yaparak action oluşturmamıza gerek yok çünkü sadece bir obje açıp içerisinde type ını  yazıp sonra payload da da api fetch işlemini then ile birlikte yaptıktan sonra gidip reducer işlemindeki error ve veri alındıktan sonra ki mesajları arka console dan bakıp (ki bunu da logger ile hallediyorduk console dan bizim tüm aşamalarımızn action ve state inin değişmeden önceki ve sonraki olmak üzere) reduxPromiseMiddleware den otomatik gelen mesajları orda bakıp gidip reducer daki type kısımlarına önce loading veya fetching fetch için istek de bulunup veri gelmesinin beklendiği o zaman a loading veya fetching deriz burası önemlidir servis yoğunluğunda göre burda illaki az da olsa veri gelene kadar bir bekleme süresi olur burda biz ne mesaj verecekse onu ayarlayabiliriz fetching den sonra type olarak bu sefer de url de herhangi bir sıkıntı olma durumunda bir hata durumunda bir mesaj dönecek bunu da url yi yanlış göndererek denediğimiz zaman console da mesajı görebiliriz ve daha sonra da o mesajı gidip reducer da ki switch case içeriisnde case kısmında error yapacağımız yerde kullanırız en sonda verimizi aldıktan sonraki mesajı gidip reducer da kullanırız ve bu işlemleri her yaptığımızda da  state içerisindeki verileri değiştiririz

const action1 = {
  type: "FETCH_USERS",
  payload: fetch("https://jsonplaceholder.typicode.com/users/").then(res =>
    res.json()
  )
};
const process = store.dispatch(action1);

process.then(response => console.log("Response: ", response));
//Normalde biz tek action ile tek dispatch ile yaptığmız işlemde fetching fetched ve error için olmak üzere 3 tane dispatch yaparak yapıyorduk burda ise tek dispatch işlemi ile üçünü de halletmiş olduk aslında ondan dolayı reduxPromiseMiddleware işlemi çok faydalı bir işlemdir...

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
