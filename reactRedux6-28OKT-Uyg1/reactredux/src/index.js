import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./redux/reducer/configureStore";
import {Provider} from "react-redux";


const store=configureStore();







ReactDOM.render( <Provider store={store}> <App /> </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Actions bizim action larımız yani yaptığımız işlmelerimiz tıkla ekle sil sayı gir events yani tetikleyince state i değiştirmeyi tetikleyen işlemlerimiz...
//actions içerisinde actionsType actions isimleri aksiyonlarımızın isimleri

/* 

//import configureStore from "./redux/reducer/configureStore";
//import {Provider} from "react-redux";//store umuzu redux ımızı react a bağlamak için provider la biz app.js imizi sarmamız lazım ondan dolayı burda Proivder ekler en aşağıda da App yi Provider içerisine yazarız.... 

//store umuzu burda çalıştırmamız önemli çünkü onu Provider içerisinde kullanacağız...
//const store=configureStore();
//Biz configuerStore u index te yaptık ama burda çalştırıp Provider içerisine koymakla mağazamzıı tek bir yere koyuyoruz artık hangi component e lazım olursa o component direk kullanabilecek yani sadece react ile çalışırken ki one way binding olayında  bağımsız olarak istediğmiz componentten istediğimize state aktarabiliriz..


*/