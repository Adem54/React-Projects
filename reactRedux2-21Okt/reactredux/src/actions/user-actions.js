//Öncelikle bir tip tanımlaması yapıp onu değişkene atayarak type ı dinamik olarak atayalım..

const UPDATE_USER = "UPDATE-USER";
const GET_USER_ERROR="GET_USER_ERROR";
//updateUser action oluşturucu ,actioncreater ımız hazır
const updateUser = newUser => {
  //action ımızı return ile yazıyoruz
  return {
    type: UPDATE_USER,
    payload: {
      //payload taşıyacağı veri olarak da parametredeki newUser ı veririz...
      user: newUser
    }
  };
};

//Eğer birden fazla elemanı biz dışa aktaracaksak o zaman export default a gerek yok default olmadan aktaralım...
export { UPDATE_USER, updateUser,GET_USER_ERROR };
//Bunu export ile gönderdikten sonra bu action ın gideceği userReducer.js de burayı import ederiz ve burdaki dinamik olarak verdiğimiz type ı uderReducer.js içinde kullanabiliriz.
//Ayrıca bu sayfadan updateUser action oluşturucuyu da App.js e göndeririz ora da kullanmak

///FETCH İŞLEMİ ERROR İÇİN OLUŞTURUYORUZ BU KISMI DA
//Öncelikle burası için buraya özel bir tip oluşturup onu değişkene atar ve o değişkeni de userReducer s a göndeririz ordaki switch case yapısı içine göndererek action sayfamızda showError da yazdığımız type ve payload ı orda switch case yapısı arasına yerleştiririz daha sonra biz getUsers ile fetch işlemi yapmaya çalışrken hata alma durumunda kullanmak içinde bunu biz fetch yaparken ki kullandığımız catch işlemi içerisine dispatch yazarak o dispatch içerisinde showError fonksiyonun göndeririz....
const showError=()=>{
return {
  type:GET_USER_ERROR,
  payload:"ERRROR!!!"
}
}



///ASYNC-AWAIT İLE FETCH YAPARKEN BU ŞEKİLDE OLUŞTURMALIYIIZ FONKSİYONUMUZU...
//Dikkat edelim biz burda fonksiyon olarak yazdığımızda redux-thunk ipleri bizim yerimize eline alacak ve işini bitirdikten sonra bize haber verecek
const getUsers = () => {
  return async dispatch => {//dispatch burda parametre olark aldığmız için istediğimiz gibi fonksiyon içerisinde kullanabiliyoruz...
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const dataUser = await response.json();
      console.log("getDataUser:", dataUser);
      //dispatch() i burda kullanabiliriz ki dispatch içerisine parametre olarak action alıyordu biz de buraya action olarak üstteki updateUser ı gönderirsek o zaman tarayıcıda bizim fetch yaptıktan sonra getirdğimiz veriyi alacağız çünkü biz updateUser a parametre olarak fetch den getirdiğimiz verinin name ini verdik ondan dolayı componentDidMount yaptığı zaman tarayıcı ya fetch ten aldığmız obje nin name properteis inin values i gelecektir..
      dispatch(updateUser(dataUser.name))
    } catch (error) {
      dispatch(showError());
      console.log("error", error);
    }
  };
};
//Şidmi biz verimizi çağırdık api den ve bundan sonra biz App.js e gidip App.js de gönderdiğmiz foksiyonu import etmemiz gerekiyor user-actions.js içerisinde yazdığım getUsers fonksiyonun çalıştırabilmem için App.js içerisinde componentDidMount yazacağız

//tek veri gönderirsek export default ile birden fazla ise export ile ve obje içerisinde göndeririz
export default getUsers;

//Biz dispatch() leri sanki normal reacttaki setState ler gibi düşünebiliriz ki dispatch() lerin varlık sebepleri action ları göndermektir ve güncelleme yapmaktır actionmn type kısmını reducer a göndererek orda switch case içerisinde kullanırken action ın asıl kısmını ise hangi compponent içerisinde güncelleme yapılacaksa oraya gönderir çünkü biz component tte connect ve mapStateToProps işlemi yaptıktan sonra tüm state leri bir obje içinde gelirken dispathc te o obje içerisinde geliyor ve bu şekilde biz istediğimiz component te hem tüm state leri alıyoruz hem de state güncellemelerini yapabiliyoruz biz dispatch dediğmizde bizim aklımıza setState mantığı gelmeli...
//Biz action içerisinde action ı direk yazmıyoruz action creator içerisinde yani bir action oluşturucu fonksiyon içerisinde action ı mızı oluşturruz...