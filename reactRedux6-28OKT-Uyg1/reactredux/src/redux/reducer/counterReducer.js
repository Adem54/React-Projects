import * as allActionTypes from "../actions/actionTypes";


const reducerCount=(state=10,{type,payload})=>{
 let InitalState;
  switch (type) {
    case allActionTypes.INCREASE_COUNTER:
        console.log("payload",payload);
      return InitalState=state+payload;
      case allActionTypes.DECREASE_COUNTER:
        console.log("payload",payload);
        console.log("Type: ",type);
        return InitalState=state-payload;
        case allActionTypes.INCREASE_BY_TWO_COUNTER:
            console.log("payload",payload);
      return state=state+payload;
  
    default:
      return state;
  }
}


export default reducerCount;








/* 

import * as allActionTypes from "../actions/actionTypes";
let InitalState=10 
//Bizim action a göre state belirlediğmiz ayarladığımz yer tam olarak burasıdır burası önemlidir.State leri ayarladığmız yer burasıdır...
const counterReducer = (state = InitalState, action) => {

  switch (action.type) {

    case allActionTypes.INCREASE_COUNTER:
      return (state = state + action.payload);
    case allActionTypes.DECREASE_COUNTER:
      return (state = state - action.payload);
    case allActionTypes.INCREASE_BY_TWO_COUNTER:
      return (state = state + action.payload);

    default:
      return state;
  }
};


export default counterReducer;
//componentler bizim reducer larımızdan faydalanacak ve reducer larımız pure(saf) fonksiyonlardır yan etkisi olan veritabanına bağlanma gibi veya dışardan bir değişkene bağlanma gibi işlemler olmayan fonksiyon demektir yani burda bizim array ve ya objemiz komple değiştirilmez içerisinde ekleme veya çıkarma vs olabilir ama komple değiştirilmez örneğin map kullanılabilir çünkü map methodu orjinal diziye dokunmaz yeni bir dizi içerisine yazar verileri yani parametredeki değerler değişitirlmez pure fonksiyonlarda


//Bizim normalde birden fazla reducerımız olur countreReducer,ProductReducer,cartReducer gibi reducerlarımız olacaktır  ve biz reducerları birleştirmemiz gerekecek onları combinereducerla birleştirdikten sonra tek bir değişkken halinde store içerisine alırız ondan dolayı index.js olujşturup reducer ları orda birleştirebiliriz

*/