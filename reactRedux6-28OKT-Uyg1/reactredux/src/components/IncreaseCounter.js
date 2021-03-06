import React, { Component } from 'react'
import {connect} from "react-redux";
import {increaseAction} from "../redux/actions/counterActions";
import {bindActionCreators} from "redux";

 class IncreaseCounter extends Component {
  render() {
    console.log("Increase: ",this.props);
    return (
      <div>
        
        <button onClick={e=>this.props.dispatch(increaseAction())}>Increase</button>

        
      </div>
    )
  }
}
/*
1)mapStateToProps ile dispatch Yapmak!!!!
//<button onClick={e=>this.props.dispatch(increaseAction())}>Increase</button>
const mapStateToProps=(state)=>(
  {count:state.reducerCount}
)
*/
/*

2)mapDispatchToProps u mapStateToProps ile beraber kullanmak şartı ile dispatch yapmak(burda dispatch i kendi yapıyor biz direk action propertie sini çağırıyoruz..)
// <button onClick={e=>this.props.onIncrease()}>Increase</button>
const mapDipatchToProps={
  onIncrease:increaseAction
}
//,mapDipatchToProps
*/
//3)mapDispatchToProps u tek başına kullanarak dispatch yapmak....
//Eğer biz dispatch edeceksek yani bir tıklama işlemi yapacaksak action ı da buraya import edip 
const mapDispatchToProps=(dispatch)=>{
  return {actions:bindActionCreators(increaseAction,dispatch)}
}


export default connect(mapDispatchToProps)(IncreaseCounter) ;


//Bizim bir tıklama işlemi yaparken kullanabileceğimiz 3 yöntem var hangisi daha kolayımıza gelirse onu kullanabiliriz...
//Öncelikle şunu bilelim bizim herhanbir tetikeleme olayında veri değişmesi demektir yani güncelleme demektir  bu da demektir ki dispatch yapılacak demektir ve action gönderilecek demektir yani dispatch içerisine action koymamız gerekiyor demektir ve bunun için bizim elimizde 3 tane alternatifimiz var
//1)Biz mapStateToProps  ile tüm store i props olarak aldığımız zaman dikkat edelim burda da store içerisinde state lerimiz reducer larımız demektir yani bizim state lerimiz reducer larımızın ismi ile biz ulaşırız yani biz mapStateToProsp yapıp return state dediğmiz zaman o obje nin içinde reducer larımızın ismi ile verileri görürüz ondan dolayı biz count:state.countReducer a benzer ifade yi biz count componentinde ondan dolayı kullanıyoruz.Şİmdi gelelim asıl meselemize bize store tamamıyla gelirken içerisinde dikkat edelim bir de dispatch geliyor o obje içerisinde bir de dispatch geliyor işte biz o dispatch ı this.props.dispatch() deriz ve parantez içerisine de çağırdğımız action u koyarsak  this.props.dispatch(increaseAction)() bu şekide biz işlmeimizi yapabilriiz...
//2)const =mapDispatchToProps  ={onIncrease:increaseAction} burda da mapStateToProps u kullanmak şartı ile mapDispatchToProps u bir objeye eşitleriz ve properties i biz yazarız value ye ise action ımızı veririz  ve this.props.onIncrease() dediğimz zaman dispatch i yapacaktır ki burda dispatch i kendi içinde yapıyor zaten store objesi içidneki dispatch mapDispatchToProps u oluşuturunca artık gelmiyor çünkü bizim yazdığımız objenin properties i dispatch i kendisi otomatik yapıyor...
//3)const mapDispatchToProps ise tek başına tetikleme yapabilmek için kullanılabilir kullanırken mapStateToProps a ihtiyacı yoktur ancak redux kütüphanesinde bindActionCreator ü import etmemiz gerkiyor
//const mapDispatchToProps=(dispatch)=>{return {actions:bindActionCreator(increaseAction,dipsatch)}} yaptıktan sonra da artık dispatch i kullanabiliriz.  <button onClick={e=>this.props.dispatch(increaseAction())}>Increase</button> 
//import {bindActionCreators} from "redux"; bu ise action ı bağlamak için redux tan gelen bir fonksiyondur ve bu fonksiyon sayesinde biz hangi action ı çağırıp çalıştırmak istersek onu içerisine yazaıyoruz..
 






