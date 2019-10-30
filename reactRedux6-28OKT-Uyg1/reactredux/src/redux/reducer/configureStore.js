import { createStore } from "redux";
import reducers from "./index";

const configureStore = () => createStore(reducers);

export default configureStore;

/*
import {createStore} from "redux";
import reducers from "./index";

//Biz burda reducerlarımız içine yerleştirdiğimiz createStore(reducers) işlemini bir fonksiyondan return edeceğiz ki biz bu dosyayı ana index.js e import edip orda bu fonksiyonu çalıştıralım ve değişkene atayabilelim ve store u orda Provider içerisinde yazabilelim...yani configureStore index.js içerisinde sürekli çalışır halde olmalıdır...
const configureStore=()=>createStore(reducers);

//strorumuzu da burd a oluşturduktan sonra store un kendisini react a bağlammamız gerekiyor bunu da uygulamamızın ana index.js sine

export default configureStore;

//store umuzu bizim için bir state veritabanı gibi düşünebiliriz

*/
