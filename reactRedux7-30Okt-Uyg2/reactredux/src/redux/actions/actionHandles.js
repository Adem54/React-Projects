import * as allActionTypes from "./actionTypes";


//Biz burda payload ile neyi değiştireceğiz onu düşünelim yani biz eğer eleman ekleyeceksek ve ben neyi yazarsam onu ekleyeceksem o zaman biz payload ı dışardan gelen bir veri yani parametreden gelecek bir veri yapalım ki biz but tıklama fonksiyonu oluşturup içerisinde dispatch ederken bu action ı çalıştıracğaız o fonksiyonu oluştururken o fonksiyon da orda dışardan gelecek veriyi e.target.value diye alırız ve biz ne girersek onu göndermesini sağlamış oluruz....
const addAction=(element)=>(
    {
        type:allActionTypes.ADD_ACTION,
        payload:element
    }
)

//Burda payload kullanmıyouruz çünkü bizim burda yapacağımız işlem mevcut veri içerisindeki boolean bir değeri ters çevirme işlemi yapacağız yani bu action çalıştığnda o boolean değer ters çevrilecek tıklayınca true ise false false ise true olacak
const completeAction=()=>{
    return {
        type:allActionTypes.COMPLETE_ACTION
    }
}
//Burda payload ın var olma sebebi genel olarak veriye yeni bir veri eklerken işimize yaarayacak yani biz duruma göre bu action ı kullanırız bazen hiç kullanmayız bazen de kullanırız..