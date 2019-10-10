import React from "react";

import "./App.css";
//react-rooter-dom adında bir klasör import ederek rooter işlemlerimizde kullanabileceğimiz özellikleri bize getirir
//Sayfamıza bu şekilde dahil edebiliriz...
//BrowserRooter adında bir nesne var içerisinde ama biz herseferinde BrowserRooter diye yazmamak için uzun old için onu as Rooter diyerek ismini değiştiriyorum sadece ve artık Rooter isimli nesne aynı işlevi görmüş olacak...
//Router nesnesini uygulamamızın en dışına yani return() içerisinde div i de saracak şekilde en dışa koymamız gerekiyor ki rooting işlemlerini yapabilelim
//Ayrıca içerde gerekli roote yapısını kurmak istediğimiz zaman kullanacağımız Route adında bir nesnemiz daha var
//Root umuza parametre göndermek isteyebiliriz mesela http://localhost:3001/News/3 diyerek 3.haber e git diyebiliriz aynı id gibi
//react-router-dom kütüphanesi içindeki Link nesnesi ile de yönlendirme işlemlerini yaparız..
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";
import List from "./components/List";
import PropsPage from "./components/PropsPage"
//Stateless component nedir?
//Vatansız Bileşenlerin uygulanması kolaydır ve hızlıdır. Yeniden oluşturma maliyetinin bu kadar önemli olmayacağı küçük UI görünümleri için iyidirler. Daha temiz kodlar ve ele alınacak daha az sayıda dosya sağlarlar.

const News = ({ match }) => {
  //Buraya bir component yazıp bunu route içerisinde render properties yerine kullanabiliriz sadece burda oluşturduğum componenti component={News} şeklinde route attribute olarak kullanmamız gerekiyor..
  //console.log(route);//eğer altta path="/News/:id" yazar ve burda da parametre olarak bir değer verip o değer i yazdırınca biz bu parametrenin hangi nesnelere sahip olduğunu görürürz ki match nesnesi var özellikle de ve içerisinde bu propertiesler mevcuttur ve gönderdiğimiz id yani http://localhost:3001/News/3 sunucu da bu şekilde çağırınca gönderdiğimiz 3 id si match objesinin içindeki params objesinin içerisine geldiğini görebiliyoruz.. yani bizim path="/News/:id" yazdığımız id burda News içinde kullandığımız parametrenin altında match objesi içindeki params objesine properties olarak geliyor ve http://localhost:3001/News/3 burda ararken yadğığımız 3 te o id ye value olarak geliyor biz oraya 3 yerine başka birşey yazarsak value olarak o gelecektir
  //match burda route parametresinin altında bir objedir ondan dolayı biz mathc i de {match} bu şekilde parametre yerine yazıp aslında ve h2 içine match.params.id dersek biz http://localhost:3001/News/3 3 yazdığımız yere ne yazarsak onu sayfamızda görebiliriz...
  // isExact: true
  //params: {id: "3"}
  //path: "/news/:id"
  //url: "/News/3"
  return <h2>News Page!:{match.params.id}</h2>;
};

const Profile = () => {
  return <h2>Profile Page:Adem Erbaş</h2>;
};
//Error adında bir stateless component oluşturuyoruz..
const Error = () => {
  return <h2>This Page is not found...</h2>;
};
class App extends React.Component {
  state = {
    //Burayı redirect kısmı için yapıyoruz..
    loggedIn: false
  };

  profileLog = () => {
    this.setState(
      prevState => ({
        loggedIn: !prevState.loggedIn //tıklayınca tersine çevir diyoruz burda...
      }),
      () => console.log("LoggedIn:", this.state.loggedIn)
    );
  };
  render() {
    return (
      //Route nesnesi attribute kısmına path ataması yapabiliyoruz ve oraya serverımıza yol olarak nereye gitsin onu belirtebiliyoruz..  ben path="/" diyerek ana sayfaya gitsin dedim..Ayrıca render adında bir propertisi de var ve render propertiesinde callback fonksiyon u ile render işlemi yapabiliyoruz ve içerisine html etiketleri yerleştirebiliriz ve biz aynı roote nesnesinden bir tane daha oluşturup path ine contact verip sonra render properties i açıp içerisine contact page yazarsak karşımıza hem homepage hemde contactpage yazısı gelecek bunun sebebi ana sayfa / bu şekilde geliyor contact sayfası ise /contact bu şekilde geliyor dolayısı ile / ifadesi her ikisinde de var ondan dolayı server yoluna /contact yazınca hem homepage hemde contact page yazısı karşımıza gelir ve   contact path inde sadece contact gelmesi için her iki route attribute e de  exact eklersek o zaman contact yolunda sadece contact gözükür
      //strict özelliği:Belli bir yapıya zorlamak anlamına geliyor..Normalde contact yazısı için sunucumuz sun sonuna http://localhost:3001/contact yazsak http://localhost:3001/contact/ yazsak contact page yazısını alırız ancak biz path="/contact" ne yazarsak tam olarak o isme sadece gelmesini istersek yani http://localhost:3001/contact gelsin ama http://localhost:3001/contact/ olursa gelmesin istersek o zamaan contact route attribute e strict ekleriz...stirct mod path deki ifade ne ise browser da tam olarak onu bekliyor..
      //Render propertiesi yerine component propertiesi de kullanabiliriz...

      //Link etiketleri ile adres yollarına tıklayarak ulaşabiliriz adresleri to attribute içerisine yazarız..İstediğimiz sayfaya yönlendirme yapabiliyoruz...
      //Link içerisine yazdığımız yazıları stillendirme falan yapmak istersek Link yerine NavLink de kullanabiriz...Öncelikle NavLink nesnesini react-rooter-dom a ekleriz yukarda import kısmında süslü parantez e NavLink i de çağırırız NavLink aynen Link gibi adreslere yönlendirme yapabiliriz hatta direk Link yerine de kullanabiliriz..
      //Route olduğu gibi NavLink de de homepage sürekli kırmızı gözükecek çünkü homepage in sayfa adresi diğer leri ile çakıştığı için sanki sürekli homepage varmış gibi kabul ediyor işte biz bunu ayırmak için exact özelliğini NavLink e attribute olarak ekleriz....
      //Ayrıca biz NavLink içinde activeStyle ile stil vermektense bir class verip ayrı bir css sayfasında stil verebbiliriz...activClassName ile
      <Router>
        {" "}
        <div className="App">
          <NavLink
            to="/"
            activeStyle={{ color: "red" }}
            activeClassName="activeLink"
            exact
          >
            Homepage
          </NavLink>{" "}
          <br></br>
          <NavLink
            to="/contact"
            activeStyle={{ color: "red" }}
            activeClassName="activeLink"
            exact
          >
            ContactPage
          </NavLink>{" "}
          <br></br>
          <NavLink
            to="/news/4"
            activeStyle={{ color: "red" }}
            activeClassName="activeLink"
            exact
          >
            News
          </NavLink>{" "}
          <br></br>
          <NavLink
            to="/profile"
            activeStyle={{ color: "red" }}
            activeClassName="activeLink"
            exact
          >
            Profile
          </NavLink>{" "}
          <br></br>
          <NavLink
            to="/list"
            activeStyle={{ color: "red" }}
            activeClassName="activeLink"
            exact
          >
            Link
          </NavLink>{" "}
          <br></br>
          <NavLink
            to="/props-through-render"
            activeStyle={{ color: "red" }}
            activeClassName="activeLink"
            exact
          >
            Props through render
          </NavLink>
          <br></br>
          <input
            type="button"
            value={this.state.loggedIn ? "LogOut" : "LogIn"}
            onClick={this.profileLog}
          ></input>
          <Switch>
            {" "}
            <Route
              path="/"
              exact={true}
              render={() => {
                return <h2>Home Page!</h2>;
              }}
            />
            <Route
              path="/contact"
              exact
              strict
              render={() => {
                return <h2>Contact Page!</h2>;
              }}
            />
            <Route path="/news/:id" exact strict component={News} />
            <Route
              path="/profile"
              exact
              strict
              render={() => {
                return this.state.loggedIn ? <Profile /> : <Redirect to="/" />;
              }}
            />
          <Route
              exact
              path="/list"
              render={props => (
                <List {...props} name={"Ahmet"} surname={"Keser"} age={"34"} />
              )}
            />
            <Route
              exact
              path="/props-through-render"
              render={props => (
                <PropsPage {...props} title={"Props through render"} name={"Kazım"} />
              )}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
      //Error u yazdığımz route elementinin attribute yazılan kısmında hiç path yazmassak tüm pathlerle çakışır hangi yola gelirsek error hata yazısı karşımıza gelir.Bizde bunu düzeltmek için react-router-dom içerisindek Switch nesnesini yukarda react-rooter-dom u çağırdığımız yere ekledikten sonra burdda tüm route elementlerimizi Switch ler içerisine alırsak switchler içerisindeki route lar doğrudan gösterdiği adrese gider ama herhangi bir adres göstermezse path ler o zaman error a gider...
    );
  }
}

export default App;

//Öğrendiklerimiz...
//Normalde React ta single page olarak çalışabiliyoruz ancak rooting sayesinde biz tek sayfa da birde fazla sayfaları da getirebileceğiz yani mesela ana sayfa dan contact sayfası için ayrı bir sayfa oluşturma yerine contact sayfası için bir component oluşturarak contact componetini çalıştıracağım zaman ana sayfanın yerine contact ı çalıştıracak şekilde kullanıyoruz
//1)Browser Router yani Router ve exact özelliği
//2)Strict özelliği
//3)Component özelliği
//4)Rout a parametre göndermek
//5)Link ve NavLink Objesi
//6)Redirecet ile bir login logout uygulamasında kullanabiliriz örneğin biz bir tane input ve de NavLink ile linke tıklayınca profile sayfasına yönlendirmesini istedik
// <NavLink to="/profile" activeStyle={{color:'red'} } activeClassName="activeLink" exact>Profile</NavLink> <br></br>
//<input type="button" value={this.state.loggedIn ? "LogOut":"LogIn"} onClick={this.profileLog} ></input>
//Sonra state oluşturduk bir tane başlangıçta false olan
//state={ loggedIn:false }
//Tıklama olayı nın ne yapacağını belirleriz
/* profileLog=()=>{
  this.setState(prevState=>({
    loggedIn:!prevState.loggedIn//tıklayınca tersine çevir diyoruz burda...
  }),()=>console.log("LoggedIn:",this.state.loggedIn));
}  */
//Daha sonra da bir tane profile componenti belirleriz ki bunu route etiketi içinde kullanalım diye...
/* 
const Profile=()=>{
  return(  
   <h2>Profile Page:Adem Erbaş</h2> 
  )
}
*/
//Route içerisinde de kontrol ümüzü yaparak işlemizi eğer ki state true ise profile sayfası gelsin yoksa
/*
<Route path="/profile" exact strict render={()=>{
    return(
      this.state.loggedIn ? (
        <Profile/>
      ):(<Redirect to="/"/>)
      ) }}/>

    </div>
*/
//Bu işlemi yaparken önce login butonuna basarız daha sonra gidip profile a basarız yani login e basında o zaman true ya döner ondan sonra NavLink teki profie a tıklayıp login  sayfasına girebiliriz çünkü biz şart olarak true olursa girilsin demiştik daha sonra logout a basınca homepage sayfasına direk yani doğrudan yönlendirme yapmıştık ondan dolayı biz logout butonun a tıklayınca o zaman doğrudan homepage e geliyor...Yani state true olunca herşey normal olduğu gibi yani NavLink teki profile linkine tıklayarak profile sayfasına gireriz ancak eğer profile sayfasında ike butona basarsak o zaman state false dönceği için ki bizde state false olursa redirect ile yönlendirme yaptığımız için state false olur olmaz doğrudan ana sayfaya gidecektir....

// 7)Switch ile olmayan bir path a giriş yapılmaya çalışınca hata gösterimi
//    //Error u yazdığımz route elementinin attribute yazılan kısmında hiç path yazmassak tüm pathlerle çakışır hangi yola gelirsek error hata yazısı karşımıza gelir.Bizde bunu düzeltmek için react-router-dom içerisindek Switch nesnesini yukarda react-rooter-dom u çağırdığımız yere ekledikten sonra burdda tüm route elementlerimizi Switch ler içerisine alırsak switchler içerisindeki route lar doğrudan gösterdiği adrese gider ama herhangi bir adres göstermezse path ler o zaman error a gider...
//Biz bu stateless componentler yerine ayrı sayfalarda da yazabilirdik bu compoenenleri ayrı sayfalarda yazıp export ederdik daha sonra da App.js sayfasında import edip aynı şekilde bu sayfa da kullanabilirdik onları...
//Switch sırası ile route ları gezecek belirtilern path lere sırası ile gidilecek ve içerisinde path verilmeyen bir route varsa bulamadığı her adres için default olarak oraya yönlendirecek...
// 8)Ayrıca örneğin bizim App.js de herhangi bir component e props objesi gönderiyorsak ve component ayrı sayfada yazılıyorsa o zaman biz bunu route içerisinde render={} nesnesi ile göndermemiz daha mantıklıdır
