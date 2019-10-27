import {UPDATE_USER,GET_USER_ERROR} from "../actions/user-actions";


//action={type,payload}
const userReducer = (state = "", {type,payload}) => {//bu action parametresi bir objedir ve içerisinde type ve paylad propertieleri vardır destructions yöntemi ile biz {type,payload } yazarsak artık type ve payload ı doğrudan kullanabiliriz...
    switch (type) {
      case UPDATE_USER:
        return payload.user
        case GET_USER_ERROR:
          return payload
      default:
        return state;
    }
  };

  export default userReducer;

// REDUCER LAR PURE(SAF) FONKSİYONLARDIR ANA FONKSİYONUN İÇERİĞİNE DOKUNULMAZ PARAMETREDEKİ ELEMANLAR RETURN EDİLİRKEN DEĞİŞMEMİŞ OLUR.BUNDAN DOLAYI ŞUNA ÇOK DİKKAT EDELİM EĞER REDUCER DA OBJE ÜZERİNDE DEĞİŞİKLİK YAPMAMIZ GEREKİYORSA BİZ O OBJENİN ORJİNALİNE DOKUNMAMALIYIZ O OBJENİN KOPYASINI ALIP O KOPYA ÜZERİNDE DEĞİŞİKLİK YAPMALIYIZ BU ÇOK ÖNEMLİİİİ BUNA DİKKAT EDELİM...İŞTE REDUX TA BİZ VERİLERİMİZ HER ZAMAN IMMUTABLE TUTMAMIZ VE  IMMUTABLE GELİŞTİRME YAPMAMIZ GEREKİYOR... 