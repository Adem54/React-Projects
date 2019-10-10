//Asıl js dosyamız buradadır ve componentler buraya geliyor ve burda render ediliyor

import React from 'react'; //react kütüphanesinden  React fonksiyonun çağırıyoruz
import ReactDOM from 'react-dom'; //react-dom kütüphanesinden bir React dom u çağırıyoruz
import './index.css'; //index.css dosyasını çağırıyoruz buraya çünkü burda biz componentleri çağırıp çalıştırıyoruz ki componentler de mesela app.js gibi default olarak gelen ve bizim oluşturacağımız componentlerdir ve componentler içerisinde html dosyaları çalıştırabiliyoruz bunlar da onların jsx formatında olduğundan kaynaklanır ki işte componentlerde yazdığımız html kodlarına css olarak burda index.css i çağırıyoruz daha doğrusu burda index.css buraya yazılacak tüm componentlere etki etsin diye yazılmış ondan dolayı genel css kodları var yani öyle detaylara girilebilecek css dosyası değil ayrıca her componentin kendi detaylı css dosyası zaten var burdaki index.css mantğı componentlerin toplanddığı yerde genel css kodlarının olduğu bir kısım olmalıdır 
import App from './App'; //App.js dosyasının içindeki app fonksiyonun çağırıyor buraya ki bu dosya component dosyasıdır ve jsx formatına dönüştürülüyor.Bu app dosyası create-react-app ile dosya oluştururken default olarak oluşturulan bir app.js componentidir
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <App/> , document.getElementById('root')); //Burada da app componentinin render edilişini görüyoruz ki dikkat edelim ReactDom içerisinde render methodu ile app componentini render edelim diyoruz ve nereye root id sinin içerisine bu componenti render etmiş oluyoruz ki root id si de zaten public klasörü içerisindeki index.html dosyasıdır

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); //Bu kısım  progressive web uygulamaları yapmak için kullanılan bir yapı aslında