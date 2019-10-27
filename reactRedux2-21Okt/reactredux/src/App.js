//STORE COMPONENT E BAĞLAMAK İÇİN CONNECT NESNESİNİ APP.JS SAYFAMIZA REACT-REDUXS LIBRARY DEN DAHİL EDERİZ

import React from "react";
import "./App.css";
//App componentimizi index.js içindeki Provider içindeki store dan haberdar etmek için connect i kullanıyoruz..
import { connect } from "react-redux"; //Bu connect i en altta export defaulttan sonra component adından önce kullancağız 2 tane parantez alır yanında ikinci parantez e component yazılır ilk parantez de 2 tane parametre alacaktır
import getUsers,{ updateUser } from "./actions/user-actions";
//getUsers ı burda import ettikten sonra aşağıda mapDispatchToProps içinde mepleyelim..

class App extends React.Component {
  onhandleChange = () => {
    //Tıklandığı zaman dispatch işlemini yap dersek değişikliği yapmış olurz... dispatch işlemini yaparak aslında...
    //store.dispatch(action1); yapıyorduk normalde index.js içerisinde bizim burda store olarak this.props olarak aldık biz state leri yani store u
    //dispatch içerisine action dan gelen fonksiyonu göndereceğiz ki değişikliğimiz gerçekleşmesi için...ki biz user-action dan gönderdiğimiz fonksiyona parametre atadik ve bu parametrede payload.user a eşitlemiştik yani biz parametreye ne girersek payload.user o olacak ondan dolayı parametreyi burda direk biz vermiş olduk
    //this.props.dispatch(updateUser("Ahmet"));//dispatch içerisinde action oluşturucuyu yerleştirdik...
    this.props.onUpdateUser("Hasan");
  };

 async componentDidMount(){
  
   await this.props.onGetUsers();
  }
  render() {
    console.log("App.js içerisindeki this.props:", this.props); //Aşağıda connect ile önce provider içindeki store dan app.js i haberdar ettik daha sonra da provider içinde props olarak gönderilen store verisini mapStateToProps ile aldık ve artık this.props ile tüm state lerimize erişebiliyoruz...
    return (
      <div className="App">
        <h3>{this.props.user}</h3>
        <button onClick={this.onhandleChange}>Change The Name</button>
      </div>
    );
  }
}
//1)STATE LERE ULAŞMA...
//App componentimizi index.js içindeki Provider içindeki store dan haberdar etmek için connect i kullanıyoruz..
//A)connect ile export default connect ()(App) yazarızz daha sonra
//B)const mapStateToProps=state=>return state; diyerek store daki tüm state lere this.props la ulaşmış oluyoruz....
// mapStateToProps ile işlediğimiz state, Provider’dan gelen store objesini connect kullanarak App’e yerleştirmemizi sağlıyor.
//State imizi component içerisinde props olarak  kullanmayı sağlayan map leme işlemidir...ve mapStateToProps değişkenini connect içerisindeki parametreeye alırız
//Yani sanki index.js içerisindeki Provide içerisinde props olarak gönderilmiş ve bizde props olarak onu alır gibi store u alarak tüm state lere burdan ulaşmış oluyoruz...
//Sonuç olarak connect ile önce provider içindeki store dan app.js i haberdar ettik daha sonra da provider içinde props olarak gönderilen store verisini mapStateToProps ile aldık ve artık this.props ile tüm state lerimize erişebiliyoruz...
const mapStateToProps = (state, propsObj) => {
  console.log("indexten gelen props: ", propsObj);
  return { ...state, myCount: propsObj.count + 2 };
  //Props ile gelen veri de state objesini n içerisinde karşımıza çıkacakır dolaysı ile dışarda this.props.count diyerek verimize ulaşabileceğiz...
};
//return state;bu şekilde direk state i çağırırsak tüm state ulaşırız ancak biz tüm state e değilde sadece iki tanesine ulaşmak istersek  o zaman da bu şekilde çağırabiliriz ki biz normalde sadece state çağırdığımızda {return state} idi ama biz direk objeyi çağıracaksak ki burda combineReducers içinde obje oalrak birleştirdiğmiz veriler geliyor unutmayalım ama en son hangi ver güncellendiyse o gelir ama format olarak combineREducers içindek formatla gelir {return {product:state.products}} şeklinde kullanırız ya da ({product:state.products}) şeklinde kullanabiliriz ki () parantezlere alınca return e gerek kalmıyor zaten

//2)BU KISMI mapStateToProps dan sonra inceleyelimm..
//mapDispatchToProps connect e ikinci parametre olarak verdiğimiz ve bizim dispatch ettiğimiz action larımızı mapleyen bir yapı mapDispatchToProps işlemini yapınca mapDispatchToProps içinde onUpdateUser a action dan gelen updateUser action ını aktarmış oluyor ve bunu this.props ile eriştiğimiz state objesinin içine atıyor ve biz yukarda onhandleChange olayının fonksiyonu içinde artık this.props.dispatch(userUpdate("Ahmet")) yerine this.props.onUserUpdate("Ahmet") yazarız ve her olay da dispatch etmek yerine artık biz bu şekilde işlemimiz gerçekleştrimiş oluruz yani state imiz içerisine gelen onUserUpdate fonksiyonu kendisi dispatch i otomatik olarak yaptığ ı için dispathc e gerek kalmamış oluyyor ki zatent mapDispatchToProps oluşturduktan sonra this.props objesini console dan inceleyecek olursak içerisinde artık dispatch göremeyiz içerisinde
const mapDispatchToProps = {
  onUpdateUser: updateUser, //properties i biz veriyoruz ama value s kısmı bizim import ettiğğimiz action dır
  //getUsers datasını maplayalim
  onGetUsers:getUsers
};
//Bu şekilde her olay tanımlamamızda dispatch çalıştır komutu vermek yerine burdaki properties olarak verdiğimiz onUpdateUser ı this.props.onUpdateUser() ı çalıştır demiş olacağız..
//4)
//Biz normalde başlangıçtaki store yani tüm state değeri actions lardan gelen güncellenmiş store değerleri ve kendimizin gönderdiği props lardan gelen veriler hep aynı yere gönderiliyor ondan dolayı biz bu verileri bazen karıştırabilriz işte bunu önlemek için 3 tane parametre alan mergeprops fonksiyonunu oluşturduktan sonra biz connecte 3.parametre olarak verebiliriz... 

/*
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log("propsFromState", propsFromState); //Bu state ten gelen store den gelen tüm statemiz store içerisinde başlangıçta hangi değerler varsa burası o  dur
  console.log("propsFromDispatch", propsFromDispatch); //Burda da action lardan gelen güncellemlerden dolayı gelen yeni state verilerini buradan alabiliriz..
  console.log("ownProps", ownProps); //Burda da bizim kendmizin index içerisinde App.js içerisin e yazdığımız props lara burdan erişebiliriz....
  return {};
};


*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
  //mergeProps
)(App); //export ederken connect methodunu çalıştırıyoruz
//mapStateToProps u connect içerisinde kullanınca State i prop a maplemiş oluyoruz va state i artık kullanabilir hale getiriyoruz...

//DISPATCH METHODUNU APP.JS DE KULLANMA....
//Dispatch methodunun app.js içerisinde nasıl yapıyoruz???
//Biz dispatch methodunu App.js içerisinde this.props.dispatch şeklinde kullanabiliriz çünkü biz mapStateToProps ile return state yaptığımızda veya state tamamı değilde içinden 2 tane veriyi obje şeklinde alınca onlarla beraber dispatch methodunun da geldiğini görebiliriz işte bundan dolayı  biz this.props.dispatch methodunu direk App.js içerisinde kullanabiliyoruz...
//Şimdi biz neden dispatch yapıyoruz çünkü biz app.js içerisinde bir action olay yani bir tıklama işlemi oluşturduk ve action yazdık action ı alıp store a gönderme işlemine biz dispatch diyorduk...

//Dispatch işlemi yaparken sırası ile neler yaptık
//Önce actions adında dosya açtık ve içerisinde bir actions oluşturucu ile action yazdık update yadık ve type için user-actions.js de dışardan dinamik bir veri olarak girdik ve userReducer da bu dinamik type ı import ederek kullandık daha sonra bu user-actions ı App.js e import ettik actionoluşturucuyu import ettik ve sonra App.js de bir tıklama olayı oluştrduk bir buton a yazdık ve tıklayınca state te yazılı olan ismi değişsin istiyoruz

//3)App.js componentine index.js den props göndermek index.js içindeki <App.js count={4}/> şeklinde props gönderirsek eğer o props u biz App.js içerisinde kullandığmız mapStateToProps fonksiyonuna ikinci parametre olarka propsObj yazarska props u alabiliriz {count:4} şeklinde console da görebiliriz props umuzu
//mapStateToProps=(state,propsObj)=>{console.log(propsObj)}  şeklinde görüntüleyebilriz ve biz mapStateToProps dedğimizde return state dersek tüm state leri this.props altında görüyorduk aynı şekilde index.js den gelen count props unu da biz state objesi içerisinde görebiliriz yani biz this.props.count dediğimiz zaman props verimize de erişebiliriz ayrıca biz spread yöntemi ile count a sayı ekleyip o veriyi state objesi içerisine atıp o veriyi this.props ile alabilmemizi sağlayabilriz..
//const mapDispatchToProps=(state,props)=>{return {...state,myCount:propsObj.count+2} } şeklinde kullanarak biz state objemiz içerisine count değerinin 2 fazlası değeri de myCount properties i ile beraber ulaşmış oluruz...
////Bu şekilde karşımıza bir nesne olarak gelecektir {count:4} olarak ondan dolayı biz de bu nesnenin adına propsObj dediğimz için bu nesne propsObj nesnesidir ve biz propsObj.count şeklinde count verimizi alabiliriz ve onun dışında da zaten this.props objesi içerisisine biz count:4 şeklinde bir veriyi zaten görürüz....

//4)MERGE PROPS...
//4)
//Biz normalde başlangıçtaki store yani tüm state değeri actions lardan gelen güncellenmiş store değerleri ve kendimizin gönderdiği props lardan gelen veriler hep aynı yere gönderiliyor ondan dolayı biz bu verileri bazen karıştırabilriz işte bunu önlemek için 3 tane parametre alan mergeprops fonksiyonunu oluşturduktan sonra biz connecte 3.parametre olarak verebiliriz... 

// 5)REDUX THUNK MIDDLEWARE KURULUMU.........
//middleware demek ara katman demektir.Asıl yapılmak istene işten önce işlemimizi farklı bir işleme tabi tutup o işlmemin duruma göre en son o işlem e geçme demektir.Örneğin bir veri isteği geldi http önce middleware çalıştırıp middleware sonucuna göre de o isteğe cevap verecek olan asıl fonksiyonu çalışıtırırız işte middleware yapısını kurarak biz kodlarımızı artık bir hattan geçirerek asıl işe yapmasını sağlıyoruz ki bu şekilde de biz her seferinde asıl işi yapmadan önce bu şekilde ayrı ayrı yazmanın önüne geçmiş de oluruz aslında
//Örneğin biz bir webserver a bağlanıp sunucuya bağlanıp ordan veri alacağız bu servise bağlanma işlemi ne zmaan biteceği belli olmayan  işlemlerdir biz bir server dan sunucudan bir istekte bulununca cevap 3 sn de de gelebilir 10 sn de de gelebilir o server ın sunucunun yoğunluk durumuna göre değişir.Ayrıca
////Şunu iyi bilelim bizim elimizde tek bir stor umuz var stor larımız içerisinde reducer lar var.Reducer larımızın yaptığı tek iş veri değişimidir ve Reducerlar birer pure(saf) function dırlar farklı bir veri döndürebilirler ama pure function demek tek bir değer return ederler return den önce parametredeki argümanları değiştirmeden return ederler yani return de o argüman üzerinde işlem yapar ama o argümanın değerine dokunmadan yani mesela o argüman dizi ise onunla işlem yapar ama onunlar beraber yeni bir dizi oluşturur yeni dizi içerisine aktarır değişikliği argüman dizisi aynı kalır ki zaten pure fonks olduğunu anlamak için argümanları birden fazla kez çağırdığmızda aynı değeri almamız gerekir
//Neden reduerlar pure fonks oluyorlar çünkü okunması kolaylaşıyor başka birşey uniq(benzersiz) test yazması kolaylaşıyor ve hatta pure(saf) birşekilde yazmassak reducer ları kullanamıyoruz bunu da unutmayalım tüm bu sebeplerden ötürü bir asenkron işlem imiz olduğu zaman asenkron u middlewara veriyoruz o middleware işi tamamladığında bize bir cevap dönüyor bizde burda yeniden kullanmaya devam ediyoruz 
//BUNDAN DOLAYI ŞUNA ÇOK DİKKAT EDELİM EĞER REDUCER DA OBJE ÜZERİNDE DEĞİŞİKLİK YAPMAMIZ GEREKİYORSA BİZ O OBJENİN ORJİNALİNE DOKUNMAMALIYIZ O OBJENİN KOPYASINI ALIP O KOPYA ÜZERİNDE DEĞİŞİKLİK YAPMALIYIZ BU ÇOK ÖNEMLİİİİ BUNA DİKKAT EDELİM...
//redux middleware olarak redux-thunk ı kullanıyor öncelikle redux-thunk ı npm ile kuralım 
//Çok basit bir middleware yapısına sahip redux-thunk biz actionlarımızda bir obje return ediyoruz normalde her zaman artık bir fonksiyon return edeceğiz
//Öncelikle index.js e gelip orda redux library den compose ve applyMiddleware fonksiyonlarını import ederiz 
//import thunk from "redux-thunk";
//import {compose,applyMiddleware,combineReducers, createStore } from "redux";
/* 
//MiddleWare//
//compose işlemine tabi tutuyorum yani birleştiriyorum
const allEnhancers = compose(
    applyMiddleware(thunk),
    //aşağıda store createStore içerisinde bizim reduxDevTools bağlantısını yapmak için eklediğimiz kodu da buray alırız ve biz bu kodları içerisinde oluşturduğumuz allEnhancers i gidip store=createStore() içerisine alırız ki middleware i yerin e yerleştirmiş olalım ve bu katmandan geçirmiş olabilelim
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//Biz allEnhancers ı const store=createState() içerisine yerleştirdikten sonra artık redux thunk ı kurmuş olduk.Bundan sonraki süreçte her action dispatch ettiğimizde yani action update işlemini gönderdiğimizde önce reducerslara ordan da store içerisine geliyor bildiğimiz gibi heraction dispatch ettiğmizde artık middleware üzerinden giderek action gidecek eğer bir fonksiyon dispatch edilmişse de bunu thunk işletiyor olacak(BUNDAN DOLAYI ACTIONS LARIN FONKSIYON OLMASI ÖNEMLİ NORMALDE BİZ OBJE DÖNDERİYORDUK RETURN İLE)
//ApplyMiddleWare ile bizim birden fazla middleware ımız olacak thunk tan başka o zaman biz thunk yanına  içerisine bir virgül atarak orda tanımlayabileceğiz applymiddleware sayesinde 
//MİddleWare//
*/
//Şimdi biz redux-thunk sistemimi kurduktan sonra hemen userAction içerisinde bir async actions işlemi yapalım 
//userAction içerisinde bir fetch işlemi yaptıktan sonra ordaki yazdığımız fonksiyonu gelip App.js içerisinde import ettikten sonra App.js içerisinde componentDidMount yaparak biz import ettğimiz getUsers fonksiyonunun dispatch işlemini yapmak için mapDispatchToProps objesi içerisinde onGetUsers:getUsers şeklinde onGetUsers properties i ni biz yazıyoruz karşısındaki value yi import ettğimiz fonksiyondan alıyoruz.. ve sonra componentDidMount içerisine geliriz ve this.props.onGetUsers() diyerek fonksiyonu çalıştırırız ve sonra console da verilerimizin geldiğini görebiliriz....
//Bu kısımda biz verilerimizi this.props.onGetUsers() ile görebilmemiz için bizim mergeProps u kaldırmamız gerekiyor biz şuna bir bakalım mergeProps u kaldırmadan biz action dan gelen sunucudan çağırdğımız istek gönderdiğmiz veriyi nasıl alırız...