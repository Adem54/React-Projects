import React, { useState, Component, useEffect } from "react";

import "./App.css";

class ClassApp extends Component {
  state = {
    test: true
  };

  componentDidMount() {
    //İlk başlangıç ta tüm componentleri bir kez render ederek başlar...İlk başlarken sadece componentDidMount çalışır sonrasındaki her render olayında componentdidUpdate çalışacak.ComponentDidMount un tekrar çalışabilmesi için bu component in ortadan kaldırılması gerekir çalışırken yani bir if olayında mesela bir şart verilir eğer şöyle olursa bunu çalşıtırma o zaman şarta uymayann durumda bu component kaldırılır ki tekrar gelirken işte didMount ile gelir ilk gelişte componentDidMount çalışarak gelir...ComponentDidMount tan sonraki tüm render ya da güncelleme işlemleri componentDidUpdate ile yapılır ancak ilk başlangıçta ilk defa component gelirken sadece componentDidMount ile gelir yani ilk component gelirken componentDidmOunt gelirken yanında componentUpdate ile gelmez...
    console.log("Componentdidmount çalıştı...");
  }

  //İlk component çalışırken ki componentDidMount bir kere çalıştıktan sonra bu component kaldırılana kadar her setState değişikliğinde burası da çalışacaktır..xxc
  componentDidUpdate() {
    console.log("ComponentDidUpdate çalıştı....");
  }

  //Biz bazı state ler değiştiğinde render etmesini istemeyebiliriz sadece belli durumlarda render etmesini isteyebiliriz bu tarz durumlarda biz burda return karşısına yazacağımız koşul true olursa render yapacaktır ama false çıkarsa render yapmayacaktır..
  //Ayrıca burdaki güzel imkan şudur ki biz değişen state in değiştikten sonra ki durumu ile değişmeden önceki durumunu kıyaslayıp değişmeden önceki ve değiştikten sonraki state arasında bir kontrol yapabilme imkanı buluyoruz ki bu gayet kullanışlı birşey...
 
 /* return false geldiğince componentDidUpdate in çalışmasına müsade etmiyor ama return true geldiğinde componentUpdate çalışır ayrıca shouldComponentDidUpdate false geldiği zaman arka tarafta setState değişir ama bu tarayıcı tarafına yansımaz bunu orada göremeyiz...  */
 //shouldComponentUpdate state ya da props değiştiğinde çalışacak eventtir.Dönüşü boolean dır boolean dönüşüne göre render olup olmayacağı dönülür....
  shouldComponentUpdate(NextProps,NextState){
    console.log("shouldComponentUpdate çalıştı...")
    return this.state.test !== NextState.test//Burası ister false ister true gelsin her harükarda shouldComponent çalışacaktır ancak ture gelirse içinde bulundğu component in render olmasına izin verir ama false gelirse içinde bulunduğu componentin render edilmesine izin vermeyecektir
  }


  render() {
    console.log("ClassApp class componenti render a başladı...");

    return (
      <div>
        <h3>Burası Class Compoenentidir...</h3>
        <button
          onClick={() =>
            this.setState({ test: !this.state.test }, () =>
              console.log("this.state.test", this.state.test)
            )
          }
        >
          {this.state.test ? "ClassApp-testState" : "ClassApp-testSetState"}
        </button>
      </div>
    );
  }
}

function FunctionApp() {
  console.log("FunctionApp componenti çalıştı...");
  const [test, testSet] = useState(true);

  //Burası da componentDidMount gibi component ilk defa çalışırken bir kere çalışacaktır...
  useEffect(() => {//Bağılmılığı boş dizi olarak verince componentDidMount olarak çalışacaktır..
    console.log("UseEffect-ComponentDidMount çalıştı....");
  }, []);

  //Bu componentDidUpdate gibi çalışan useEffect in componentDidUpdate ten farkı şudur ki compoentDidUpdatin görevini yapan useEffect component ilk defa çalıştığında componentDidMount useEffecti ile beraber inde bu da çalışır ancak normal class componentindeki componentDidUpdate te bu yoktur componentDidMount olurken class componentindeki componentDidUpdate çalışmaz ancak ilk component geldikten sonra ki işlevleri aynıdır her setState değişiminde componentDidUpdate görevini yapan useEffect çalışacaktır..
  useEffect(() => {//hiçbir bağımlılık vermeyince componentDidUpdate işlemi yapacaktır..
    console.log("useEffect-componentUpdate çalıştı...");
  });

  //useEffect shouldComponentUpdate kısmı ilk componentin çalışması esnasında yani useEffectComponnentDidMount çalışırken onunla beraber ilk çalışmada da çalışacaktır bu şekilde çalışması class componentindeki shouldComponentUpdate den farklıdır çünkü shouldComponentUpdate componentDidMount çalışırken çalışmaz daha sonra çalışır
  //Burası da shouldcomponentUpdate gibi çalışacak çünkü biz state ya da props u değiştirip  burda bağımlılık kısmına koyarız ve eğer bağımlılık kısmına yazdığımız props ya da state değişmisşse o zaman burası güncellenecektir yani burda mantık bizim bağımlılık kısmına koyduğumuz useEffect in ikinci parametresi değiştiği zaman render işlemi gerçekleşecektirr
  //Eğer useEffectshouldComponent second parametresi bağımlılığı içerisine yazdığıımız state ya da props değişmemişse useEffect işlemi hiç çalışmayacaktır yani biz consolda görmek için  yazdığıımız console("useEffectshouldComponent çalıştı") ibaresini de göremeyiz ama normal shouldComponentUpdate te içerisindeki return içerisindeki boolean değer false ya da true de dönse shouldComponentUpdate çalışır ancak true dönerse hangi component içinde ise onun render edilmesine izin verir false gelirse içinde bulundğu componenntin render edileisine izin vermez ancak her harükarda shuldComponent in çalıştığını görebiliriz..
  useEffect( ()=>{
console.log("useEffect-shouldComponentUpdate işlemi çalıştı...")
  },[test] )

  return (
    <div>
      <h3>Burası Fonksiyon Componentidir...</h3>
      <button onClick={() => testSet(test)}>
        {test ? "FunctApp-testState" : "FunctionApp.testSetState"}
      </button>
    </div>
  );
}

function App() {
  const [change, setChange] = useState(true);

  return (
    <div className="App">
      <button
        style={{ backgroundColor: change ? "cyan" : "orange" }}
        onClick={() => setChange(change => !change)}
      >
        {change ? "ClassApp" : "FunctionApp"}
      </button>
      {change ? (
        <div>
          <ClassApp />
        </div>
      ) : (
        <div>
          {" "}
          <FunctionApp />{" "}
        </div>
      )}
    </div>
  );
}

export default App;

//useEffect shouldComponent Mantığı 
// Biz eğer useEffect içerisinde bir fonksiyon çalıştıracaksak ve o fonksiyon parmetre olarak state veya props alıyorsa biz o state veya props u useEffect e bağımlılık olarak koymak zorundayız yani useEffect in ikinci parametresi olarak koymalıyız...
//Ayrıca useEffect içerisinde çalıştıracağımız fonksiyon eğer state ya da props kullanıyorsa bizim o fonksiyonu useEffect dışında değilde içerisinde oluşturmamız daha mantıklıdı çünkü props ve state lere içerde daha rahat ulaşabilmek ve daha kolay takip edebilmemiz için....
//Eğer useEffect içerisinde çalıştıracağımız fonksiyon parametresinde props ya da state kullanmıyorsa o zaman o fonksiyon dışarda tanımlanabilir ve dependencies vermeye de gerek kalmaz o zaman 

//Bazı durumlarda fonksiyon dışarda tanımlanabilir:
// 1)Ya fonksiyonu başka bir işlem için daha kullanıyoruzdur ve başka işlem in de ulaşması için scope olayından dolayı fonksiyonumuz useEffect dışında olması gerekebilir....
// 2)Ya da props tan geliyordur yani props olarak geliyordur ki o zaman içerde tanımlayamazsın çünkü o ancak o zaman
//Eğer useEffecti miz state ya da props kullanmıyorsa içerde ya da dışarda tanımlayabiliriz önemli değil ve state ve props kullanmadan yazdığımız fonksiyonda artık  ne döndürüyorsak o döndürdüğümüz değeri dependencies de kullanabiliriz..İşte eğer bu şekilde state ve props kullanmadan bir fonksiyon yazıp o fonksiyonu biz useEffect içerisinde kullanacaksak o zaman Pure fonksiyon olarak kullanmalıyız...

//PURE FONKSİYONLAR NELERDİR....
//Aynı girdiler için her zaman aynı çıktıları üreten fonksiyonlara Pure(saf) fonksiyonlar denir. Parametre olarak gelen girdiler üzerinde herhangi bir değişiklik yapılmaz, yani fonksiyonun yan etkileri yoktur.
//function sum(a, b) {  return a + b; }
//Pure fonksiyonlar belli bir girdi verildiğinde hep aynı çıktıyı üreten fonksiyonlardır.
//Pure fonksiyonlar argümanlarının değerlerini değiştirmezler bunun yerine yeni bir değer döndürürler return ile
//Pure fonksiyon kendi argümanlarının değerlerine bağlı olarak yeni bir fonksiyon üretirler
//Veri tabanı ya da api işlevleri gibi yan etkileri olan işlevler içermezler..
//Bir fonksiyonun pure fonks olduğunu anlamak için argümanlarını birden fazla kez çağırırsak hep aynı değeri döndürecektir...
//Örneğin  name parametresi bir array olduğunu farzedelim... function test(name){ name.map(green=>{  })  } burda map işlevi name array ini değiştirmez yeni bir dizi oluşuturur işte bu fonksiyon pure(saf) fonksiyondur.Buraya dikkat edelim map kullanıyor ancak parametre yi biz .map diye kullanınca name array imizi değiştirmiyor burası önemli... 
 
//Öte yandan impure fonksiyonlar ı veri tabanıı veya ağbağlanıtısı yapabiliir api işlemleri yapabiliri yan etkiler yapabilir dom u güncelleyebilir ve kendi ürettikeri değerleri argümanların üzerlerine yazabilirler..

//ÖNEMLİ...USECALLBACK KULLANMA
//Eğer hem state kullanmak zorundayız  hem de dışarda tanımlamak zorunda isek o zaman useCallback kullanmalıyız...
//-------------------------------------------------------------ÖNEMLİİ------------------------------------------------
//NOTTT:HOOKS LARIN useEffect methodu başlı başına ayrıca çok detaylı incelenmesi gereken bir methoddur ve ayrıca şuna çok dikkat edelim hooks larda herhangi bir state değiştirirken o state içerisinde iki farklı yazım şekli var biri direk yeni değeri yazma şeklinde
//  setValue(e.target.value) mesela bu şekilde bir diğeri ise bir fonksiyonla beraber yazma setCount(c => c + 1); bu şekilde işte bu yazma şekilleri bazen hayati önem taşıyor doğru şekilde kullanmazsak hata alabiliyoruz ve bizi ciddi uğraştırabiliyor bu meseleye daha sonra detaylı birşekilde bakmalıyız.Codesandbox da iki ayrı kullanmla alakalı birer örnek var yanlış kullanımda  hata verdiği ile ilgili bunları daha sonra detaylıca incelemeliyiz...