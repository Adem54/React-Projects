
import './App.css';
//hooks işlemleri için useState ve useEffect nesnelerini burda tanımlarız
import React, { Component,useState,useEffect } from 'react'
//Class Componenti
 class Appclass extends Component {
  state={
    count:0,
    toggle:false,
    message:"Welcome!"
  }
  toggleClick=()=>{
this.setState({
  count:this.state.count+1
})
  }

  render() {
    return (
      <div>
      <h2>Class Componenti ile Count İşlemi</h2>
         <div>{this.state.count} {this.state.message} </div>
    
        <button onClick={this.toggleClick}>Count!</button>
       
      </div>
    )
  }
}

//ReactHooks İşlemleri
//Öncelikle React kütüphanesinden useState ve useEffect nesnelerini import ederiz..
//Hooks özelliği bir herhangi bir class yazmadan fonksiyonlar yardımıyla React’teki state ve lifecycle özelliklerinin kullanılmasını sağlar. Hook’lar class’lar içerisinde çalışmadığı için fonksiyon component’ı içerisinde yer almalıdırlar.

const initalState={text:"Hey",no:10,logged:true}

function Appfunc() {
  //Hooks da state ve setState ismi değişebilir bunlar değişkendir ve bize bağlıdır biz sadece bunların class componentinde ki state içine yazdığımız değer  ve setState i temsil ettiğini belirtmek için bu adları verdik ancak bunlar classcomponentinde sabit isimlerdir değişmez...
  const [state,setState]=useState(0);
  console.log("HooksState: ",state);
  const [firstState,changeState]=useState(initalState);
  console.log("firstState: ",firstState)
  //Burda useState(0) içerisine atadığımız 0 değeri state in başlangıç değeri olarak atanıyor ki bu değere biz obje de atayabiliriz ya da dizi de atayabiliriz ayrıca bu değeri biz component dışında bir değişkene atayıp o değişkeni de useState içine yazabiliriz
  //Ayrıca şuna iyi dikkat edelim setState i temsil eden ikinci değişken bir fonksiyondur....
 //setState içinde veriyi değiştirirken setState(yenideğer) ya da setState(state=>state+1) şeklinde değiştirebiliriz...ŞURAYA ÇOK DİKKAT EDELİM BAZI YERLERDE setState KULLANIM ŞEKLİ ÇOK ÖNEMLİ OLACAK BAZI YERLERDE DİREK SETSTATE İÇERİSİNE DEĞER GİRECEĞİZ BAZI YERLERDE İSE ARROW FUNCTION İLE KULLANACAĞIZ BU DETAYA İLERDE DETAYLI İNCELEYELİM HANGİ DURUMLARDA ARROW OLARAK HANGİ DURUMLARDA DİREK KULLANALIM DİYE...
 //ReactHooks un bize getirdiği bir güzellik biz sürekli olarak state leri this.state.logged şeklinde kulllanmak zorunda değiliz direkmen state ismi ile kullanabiliyourz..aşağıdaki örnekteki gibi...
 //ReactHooks ile birlikte biz functional componentlerde state kullanabiliyouruz ve daha basit bir yazımla işimizi halledebiliyoruz..
 //ReactHooks olumsuz yönü ise state içerisinde tuttuğumuz object’i birleştiremiyor (Object.assign) olmamız.
 //ÖNEMLİ.....
 //ReactHooks da ki setState in class componentindeki setState den önemli bir farkı , this.setStatefonksiyonunda state eski state ile birleştirilir, değiştirme fonksiyonunda ise birleştirme yerine değiştirme (replace) işlemi uygulanır.Bunda dolayı normalde state içinde tanımladığımız birden fazla state varsa ve biz sadece birini değiştiriyorsak setState işleminden sonra hiçbirdeğişiklik yapmadığımmız diğer state ler silinecektir sanki biz sadece değişiklik yaptıığmız state i tanımlamışız gibi karşımıza gelecektir setState den sonra bunu çözmek için ise spread yöntemi ile ...state i setState içinde ki değişiklikte ekleriz ve birleştirme yi kendmiz yapmaya çalışırız...
 //ÖNEMLİ....
 //Şuna dikkat edelim bizim burda dizi içinde tanımladığımız ilk değer classcomponentindeki state içerisinde tanımlanan state değerini temsil ediyor yani direk state i temsil ediyor dersek yanlış olacaktır bundan dolayı biz eğer birden fazla state değeri vermek istiyorsak ya dizi içerisindeki state değerimize ilk değer olarak bir obje veririrz ki burda da şuna dikkat edelim o obje içinde ki değerlerden birini değiştirince hooks un birleşitrme yerine sadece replace yapmasından dolayı diğer değerler silinecektir buna çözüm olarak da spread ile biz o obje içine state değerimiz i yazarsak o zaman eski obje elemanlarımızın tamamı setState den sonra da karşımıza 
 //Birde Hooks daki setState yerine kullandığımz değişkende class componentinde kullandığımız setState gibi state değiştirdikten sonra virgül koyup  callback fonksiyonu ile devam edemiyoruz...
 //setState({ ...state, logged: !state.logged })
 //Bu arada şuna dikkat edelim herhangi bir objeyi ekrana direk yazdırmaya kalkarsak hata alırız ondan dolayı ya Json.stringify içinde yazdırırız yada obje.property şeklinde yazdırmaya çalışmalıyız....
 //Ayrıca normalde class componentinde biz bir fonksiyon yazarken direk fonksiyonu herhangi bir değişkenle tanımlamadan yazarız daha sonra o fonksiyonu çalıştırırken this.function şeklinde çalıştırırdık burda dikkat edelim normal javascript içerisinde yaptığımız gibi değişkenle fonksiyon tanımlıyoruz ve çalıştıracağımız zamanda direk ismini yazarak çalışıtırıyoruz...

 const changeClick1=()=>changeState({text:"Merhaba"})
 const changeClick2=()=>changeState({...firstState,text:"Merhaba"})
//Ayrıca biz fonksiyonu direk onClick olayının karşısına da yazabiliriz
  return (
    <div>
      <button  onClick={changeClick1} >Tıkla1</button>
      <button  onClick={changeClick2} >Tıkla2</button>
      <h2>ReactHooks ile Count İşlemi</h2>
      <h2>{state}|| {JSON.stringify(firstState)} </h2>
      <button onClick={()=>setState(state+1)}> HooksTıkla </button>
    </div>
  )
}
//useEffect ile class componentinde yaptığımız ComponentDidMount,ComponentDidUpdate,ComponentShouldUpdate,ComponentWillUnMount gibi işlemleri tek bir fonksiyon çatısı altında gerçekleştirebilmemizi sağlar...
function CokluStateOrnegi() {
  // Birden fazla state değişkeninin atanması
  console.log("usestate: ",useState(0));
  const [yas, yasAta] = useState(42);
  const [meyve, meyveAta] = useState('muz');
  const [blog, blogAta] = useState([{ baslik: 'Hooks nedir?' }]);
  // ...
  
  return(
    <div>
      <button onClick={()=>blogAta([{baslik:"Hooks öğreniyoruz..."}])}>Clickhere</button>
      <h3>{JSON.stringify(blog)}</h3>
      <h3>{yas}</h3>
      <h3>{meyve}</h3>


    </div>
  )
}

function App() {
  return (
    <div className="App">
     <Appclass/>
     <hr></hr>
     <Appfunc/>
     <hr></hr>
<CokluStateOrnegi/>
    </div>
  );
}

export default App;
