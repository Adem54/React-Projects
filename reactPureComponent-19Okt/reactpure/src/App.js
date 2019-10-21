import React from 'react';

import './App.css';
import FirstName from './components/firstName';
import SecondName from './components/secondName';

class App extends React.Component {
  state={
    firstName:1,
    secondName:Math.random()
  }

  componentDidMount(){
    console.log("componentDidMount başladı...")
    setInterval(() => {//SetState bu şekilde de yazılıyor..parametre de değişmeden önceki state dir
      this.setState(()=>{
        return {firstName:Math.random()}
      })
    }, 1000);
  }

 
  render(){
console.log("App compoent render edilmeye başladı")

  return (
    <div className="App">
    <FirstName  firstName={this.state.firstName}/>
    <SecondName secondName={this.state.secondName}/>
      
    </div>
  );
}
}

export default App;



//shouldComponentUpdate:
//Mevcut state veya prop’lar değiştiğinde, bileşenin çıktısının bu durumdan etkilenmemesini belirtmek için shouldComponentUpdate() metodunu kullanınız. Normalde bileşenin varsayılan davranışı, her state değişikliğinde tekrar render edilmesine yöneliktir. Birçok kullanımda bu varsayılan davranışa uymanız gerekmektedir.
//Prop veya state değerleri değiştirildiğinde, render işleminden hemen önce shouldComponentUpdate() metodu çalıştırılır ve varsayılan olarak true döndürür. Bileşenin başlangıçtaki ilk render zamanında veya forceUpdate() metodu kullanıldığında, bu metot çalıştırılmaz.
//Bu metot yalnızca performans iyileştirme işlemleri için yapılmıştır. Render işlemini engellemek için bu metodu kullanmayınız. Zira bazı hataların oluşmasına yol açabilir

//Bu nedenle, shouldComponentUpdate() metodunu yazmak yerine, React içerisinde varsayılan olarak gelen PureComponent kullanınız. PureComponent, prop ve state’leri yüzeysel olarak karşılaştırır. Bu sayede büyük DOM ağaçlarına sahip bileşenlerde, küçük değişiklikler gerçekleştiğinde oluşacak güncellemelerin oluşma şansını azaltır. Böylece gereksiz güncellemeler göz ardı edilerek performans artışı sağlanmış olur.
//Eğer bu metodu kullanmak için eminseniz, güncellemenin göz ardı edilmesi için nextProps ile this.props‘u, nextState ile this.state karşılaştırabilir ve bunun sonucunda false değerini döndürebilirsiniz. false‘un geri döndürülmesi işlemi, alt bileşenlerin state’i değiştiğinde tekrar render edilmelerini engellemeyeceğini unutmayınız.
//shouldComponentUpdate() metodu içerisinde, eşitlik kontrollerinin derinlemesine gerçekleştirilmesi veya JSON.stringify()‘ın kullanımı önerilmez. Bu tür kullanımlar verimsizdir ve performansı olumsuz yönde etkiler.
//React’in mevcut sürümünde, shouldComponentUpdate() metodu false döndürdüğünde; UNSAFE_componentWillUpdate(), render(), ve componentDidUpdate() metodları çağrılmaz. Gelecek sürümlerde React, shouldComponentUpdate() metodunu sıkı bir şekilde uygulamak yerine bir ipucu şeklinde ele alabilir. Bu nedenle false döndürülmesine rağmen, bileşenin tekrar render edilmesi ile sonuçlanabilir.

//Not: Her shouldComponentUpdate içerisinde prop ve State değişkenleri için shallowEqual kullanılacak ise Component'in React.Component'ten türetilmesi yerine PureComponent'ten türetilmesi daha doğru olacaktır. Çünkü PureComponent shouldComponentUpdate fonksiyonunda varsayılan olarak Shallow Comparision yapar (Shallow Comprasion nesnelerin birincil seviye Property'lerinin tip ve değer karşılaştırmasını yapar). Component'inizin hangi React tipinden türetileceğini iyi düşünmenizi öneririm.

/* forceUpdate()
component.forceUpdate(callback)
Bileşeninizin state’i veya prop’ları değiştiğinde, varsayılan olarak bileşeniniz tekrar render edilecektir. Eğer render() metodunuz, bunların haricinde başka verilere bağımlı ise, forceUpdate()‘i çağırarak bileşeninizin tekrar render edilmesi gerektiğini React’e söyleyebilirsiniz.

Bileşen üzerinde forceUpdate() çağrımı, shouldComponentUpdate()‘in es geçilerek render() metodunun çalışmasına neden olacaktır. forceUpdate() çağrımı, alt bileşenler için normal yaşam döngüsü metotlarını tetikleyecektir. Bu metotlara, her bir alt bileşen için çağrılacak shouldComponentUpdate() metodu da dahildir. Buna rağmen HTML tarafında oluşan değişikliklerde, React sadece DOM’ı güncellemeye devam edecektir.

Normalde forceUpdate()‘in kullanımından kaçınmalı ve yalnızca render() metodu içerisinde this.props ve this.state‘ten okuma işlemi yapmalısınız. */

