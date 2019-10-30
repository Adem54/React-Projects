import * as AllActionTypes from "./actionTypes";

//action oluşturucu yu yaparken biz bir fonkiyon yazıyoruz sonra da fonksiyon içinde fonksiyon çağırıyoruz
export const increaseAction=()=>({
    type:AllActionTypes.INCREASE_COUNTER,
    payload:1
})

 export  const decreaseAction=()=>{
     return {
    type:AllActionTypes.DECREASE_COUNTER,
    payload:1
}}

export  const increaseByTwoAction=()=>{
    return {
        type:AllActionTypes.INCREASE_BY_TWO_COUNTER,
        payload:2
    }
}





/*

import * as allActionTypes from "./actionTypes";
//Burda biz actionTypes içerisinde 3 tane değişkeni ayrı ayrı export ettiğmiz için biz diyoruz ki actionTypes içerisindeki tüm değişkenleri al diyoruz * ile
//allActionTypes ismini biz veriyoruz yani actionTypes.js dosyası içerisindeki tüm değişkenleri bir obje içinde oluyor ve biz bu objeye isim veriyoruz burda işte biz o isme allActiontypes dedik


////Dikkat edelim bir fonksiyon return ediyoruz return kullanmadık çünkü () kullanınca o zaten bir string return ediyor gibi düşünebiliriz yani () olduğu zaman zaten return a gerek kalmıyor ondan dolayı buna dikkat edelim... 
//Bir fonksiyon la bir fonksiyon çağırıyoruz aslında
export const increaseCounter=()=>({
    type:allActionTypes.INCREASE_COUNTER,
    paylaod:1
})

export const decreaseCounter=()=>({
    type:allActionTypes.DECREASE_COUNTER,
    paylaod:1
})

export const increaseByTwoCounter=()=>({
    type:allActionTypes.INCREASE_BY_TWO_COUNTER,
    paylaod:2
})


//Biz action içerisinde action ı belirliyoruz ve bu aksiyonu biz dispatch edeceğiz dispatch edince dispatch bizim action ımızı reducer a gönderir ve orda reducer kontrol eder bizim gönderdiğimiz tipte case varsa eğer switch case yapısında sonrasında return ile aciton.payload yani state i nasıl bir değişiklik yapacaksa orda yapar ve ordan da zaten değişikliğimiz sotre a aktarılır yani ana store umuza aktarılır tüm state lerimiz orda tutulur istediğmiz heryerde anında erişebilmemiz için..
//payload aslında event türünün gönderilen ve yapılmasını istediği datası gibi örneğin biz payload lara burda 1,1,2 verdik çünkü biz payload ı 1 arttıracağız diğerini 1 azaltacağız öbürünü de 2 arttıracağımız için biz arttıramyı direk payload ları kullanarak yapacağız yani normalde direk reducer da +1 -1 ve +2 yapabilirdik aslında ama biz payloadlarla dinamik olarak kontorl etmek istiyoruz

*/