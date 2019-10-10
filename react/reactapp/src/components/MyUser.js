import React, { Component } from 'react'

 class MyUser extends Component {
//state oluşturalım
    state={
isVisible:false
    }
//state oluşturalım
/*
constructor(props){//Burda state constructor olarak oluşturabiliyoruz burda oluşturduğumuz constructor class ın bir prototype i olmuş oluyor aslnda
    super(props);
    this.state={
        isVisible:false
    }   
} */

    render() {
        //Biz aşağıda {this.props.Name} şeklinde uzun uzun yazmak yerine destructing özelliği ile daha pratik kullanım yapabiliriz
        const {Name,Departman,Salary}=this.props;
        const {isVisible}=this.state;//Desctruction yöntemi ile artık aşağıda direk isVisble  diye kullanabiliriz bu işlemi yapmasa idik o zaman this.state.isVisible şeklinde kullanacaktık
        //Bunu yazdıktan sonra artık süslü  parantez içerisinde sadece destructing ile aldığımız değişkenleri yazabiliriz
        return (
            <div>
                {
                    isVisible ? //Burda yukarda oluşturduğumuz state ile isVisible  properties i oluşturduk
                    <ul>
                    <li>Name:{Name} <i className="far fa-address-card"></i> </li>
                    <li>Departman:{Departman}</li>
                    <li>Salary:{Salary}</li>
                </ul> : null //Kodlarımızı görüntüledikten sonra arka planda incelersek componentleri orda myUser componenti nin state inde isVisible olduğunu ve false şeklinde olduğunu görebiliriz ve onu manuel olarak değiştirebiliriz orda biz manuel olarak değiştirince false true ya döner ve myUser verilerimizi görebiliriz burda şuna dikkat edelim biz arka planda false dan true ye dönderdiğimiz zaman virtual-sanal dom bunu görüyor ve render işlemi gerçekleştirerek sadece bizim myUser componentinde değişklik olmasını sağlıyor
                }
               
            </div>
        )
    }
}

export default MyUser;