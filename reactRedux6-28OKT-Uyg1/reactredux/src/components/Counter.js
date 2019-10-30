import React, { Component } from 'react'
import {connect} from "react-redux";


 class Counter extends Component {
    render() {
        console.log("this.props: ",this.props);
        return (
            <div>
               <h2> {this.props.count} </h2>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
return {count:state.reducerCount}
}
export default connect(mapStateToProps)(Counter) ;















/*
import React, { Component } from 'react'
import {connect} from "react-redux";
//Burası bizim sayaç bilgisini tuttuğumuz yer olacak!
//Peki bizim şimdi state e ihtiyacımız var nasıl yapacağız  nerden alacağız işte bunun için connect methodunu react-redux tan alacağız ve bu componenti index te Provider aracılığı ile App.js imizi sarmaladığmızı haberdar etmiş  olacağız...
 class Counter extends Component {
    render() {
  console.log("this.props: ",this.props)
        return (
            <div>
                 <h3>{this.props.counter}</h3>
            </div>
        )
    }
}

//parametredeki state bize index te çalıştırıp Provider içerisindeki store umuzda  rudecerların olduğu objeyi bize dönecektir hatta combineReducer olarak dönecek gibi düşünelim tüm reduerlarımız ı bize dönecektir ki ondan dolayı biz state.counterReducer şeklinde alabiliyoruz...
const mapStateToProps=(state)=>{
       
    return {counter:state.counterReducer}
}
//Bu işlemi gerçekleştikten sonra artık bizim props larımız var ve propslarımız bizim mapStateToProps tan dönen değer e eşit olmuş oluyor.Biz State i yani index.js de Provider içeriisndeki store u buraya props olarak alıyoruz...Artık this.props.counter dediğmiz zaman biz state.counterReducer dan gelen veriyi alabileceğiz...
//Normalde biz nasıl yapıyorduk üstten aşağı doğru state leri props olarak gönderiyorduk ve o şekilde işlemlerimizi yürütüyorduk...Yani normalde biz App.js den alıyorduk önceden ama şimdi tüm componentler ortak bir store dan alıyor state leri
//Counter componentinde biz sadece veriyi okuyacağımız için diğer componentlerde eventlerımız gerçekleşecek ve eventlarımız da dispatch işleminin yapılması ile gerçekleşiyoordu normalde ondan dolayı biz diğer componentlerimizde event fonksiyonlarımızı oluşturup içerlerinde dispatch işlemlerini yapınca zaten otomatik olarak action lar tetiklenecek ve reduer larımızdaki switch case lar çalışacaktır yani onalrı çalıştıracak olan şey dispatch tir unutmayalım dispatch sanki setState gibi düşünebiliriz..



export default connect(mapStateToProps)(Counter) ;
//mapStateToProps demek counter componentinin propslarına state i bağla diyor yani Counter componentine state i props olarak gönderiyor Provider içerisinden index.js içerisinden
*/