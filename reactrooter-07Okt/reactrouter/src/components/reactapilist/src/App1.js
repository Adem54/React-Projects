import React, { Component } from "react";
import Lists from "./components/Lists";
import Details from "./components/Details";

import "./App.css";
const API = "https://uinames.com/api/?ext&amount=5";
class reactApp extends Component {
  state = {
    users: [],
    user: {}, //Burası obje olarak yazılacak dizi içerisinde olmayacak çünkü biz detay veri yazdırırken burayı kullanacağız ve bu veri dizi içerisinde objelerden bir tanesi olacak
    isuserSelected:false//seçilmedi hiçbirşey henüz burası da şunun için var component ilk çıkışında tüm componentleri render eder ve ondan dolayı normalde tıklandığında gelmesini istedğimiz statik olarak yazdığımız details sayfasındaki name,surname,gender,email gibi başlıklar sayfa karşımıza ilk geldiğinde karşımıza çıkıyor oysa biz onları sayfa ilk geldiğinnde değil biz getusers a tıklayınca isimler gelecek biz o isimlerden birine tıkladığmızda gelmesini istiyoruz dolayısı ile o isimlerden birine yapacağımız tıklama fonksiyonun içinde isuserSelected true olsun deriz ve sonra da app.js de altta details e prop gönderdiğimiz yerde deriz ki eğer isSelected true ise details sayfasını göster false ise gösterme dersek ilk durum yani henüz isimlere tıklamadığmız durum da state false olduğu için o zaman göstermez ancak biz tıklarsak veriyi gösterecektir
    //State lerde şunu unutmayalaım biz herhangi bir sorunumuz varsa o sorunu çözmek için hemen bir state belirleriz ve hangi duruma göre state değişmesini istiyorsak state i gidip o durumda değiştiririz ve daha sonra da state değişiklik durumuna göre ternary veya if ile onu konntrol ederiz
    //ul de details için click yaptığmızda 
  };
  handleClick = async () => {
    const response = await fetch(API);
    const data = await response.json();
    this.setState(
      {
        users: data //burda direk de yazabilirdik spread e gerek yoktu zaten dizi halinde idi data
      },
      () => {
        console.log(this.state.users);
      }
    );
    //return data;
  };

  handleDetails = async index => {
    //Bu index listItem dan gelecek
    //const response = await fetch(API); //Veri her tıklamada api farklı verileri getiriyor bu apinin özelliği dolayısı ile biz ikinci details tıklamasında ilk tıklamada gelen veriler üzerinden işlem yapmak zorundayız eğer api her tıklamada aynı veriyi  getirşmiş olsa idi bu şekilde de işlem yapılaiblirdik anak veri sürekli değiştiği için bu şekilde en baştan çekmek yanlış biz state ten gelen veriden alacağız yani ilk fetch ten gelen veriden gelen veri ile alacağız
    //const data = await response.json(); //state te  zaten veriyi tutuyor
    const users = this.state.users;//Burda biz isimlere tıklayınca detay verileri getirmek istiyoruz bize öncelikle ana veri lazım biz bu ana veriyi zaten handleclick olayında almıştık ve dolayısı ile bu veriyi state tutuyor yani state ler işte bu işe yarıyor bizim bu verimiz state te duruyor ondan dolayı biz bu veiryi direk state ten alabiliriz zaten
    //   const detailsData = users.find(user => //süslü parantez kalkınca return i de kaldıralım tek satırlı işlemelrde süslü parantez ve return e gerek yok
    //          user.id = id
    // );//Buna gerek yok normalde
    const detailsData = users[index];
    console.log(detailsData);
    this.setState(
      {
        user: detailsData,//zaten obje burda kendisi
        isuserSelected:true //details ler ilk sayfa çıkışında details i render etmemesi için biz aşağıda koşul yazmak için ihtiyaccımız oldu
      },
      () => {
        console.log(this.state.user);
      }
    );
  };

  render() {
    return (
      <div className="App">
     
          <button style={{marginTop:"-50px"}} className="btn" onClick={this.handleClick}>
            Get Users!
          </button>
      
       
        <div style={{marginTop:"60px"}} className="container">
          <div style={{ backgroundColor: "LIGHTSALMON" }} className="row">
            <div className="col-4" style={{ backgroundColor: "PEACHPUFF" }}>
              {Object.keys(this.state.user).length > 0 ? ( //Burda diyoruz ki eğer user state i ne veri gelmemişse sen details componentini render etme diyoruz yani bizim user statine verimiz ne zaman geliyor getusers a tıklayınca önce ana verimiz geliyor ve sadece isimler geliyor ondan sonra da biz o isimelere tıklayınca details verimiz geliyor işte bizde diyoruz ki biz isimlere tıkalmadan details componentini gösterme çünkü biz isimlere tıklamadan user verisinin içi boş oluyor tıkladıktan sonra user state objesine veri geliyor
              //this.state.isuserSelected ? <Details user={this.state.user} /> : "no user selected"
                <Details user={this.state.user} />//user state i bir objedir
              ) : (
                "No user selected"
              )}
            </div>
            <div className="col-8">
              <Lists
                users={this.state.users} //Birde fonksiyon göndereceğiz unutma ikinci tıklamadan hangi elemana tıklarsak onun id sini getirsin deken ki işte tıkladığımız elemanın id si olduğunu anlama meselsi için bir fonkisyona ihtiyacımız var
                handleDetails={this.handleDetails}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reactApp;
