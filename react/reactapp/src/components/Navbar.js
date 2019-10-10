//Navbar componenti ni de functional componetn olarak oluşturalım.User component i class olarak oluşturmuştuk
//Herzaman component oluştururken ilk işimiz react fonksiyonunu react kütüphanesi içerisinden dahil edelim

import React from 'react';

//React fonks unun react kütüphanesinden çağırıp dahil ettikten sonra fonksiyonumuzu oluşturalım
//Bu functional bir component olduğu için ve class component olmadığı için burda fonks içerisinde render fonks kullanılmayacak sadece jsx formatında geri dönmesi için return içerisinde html kodlarımız ı yazarız ve bu  şekilde functional componentin de jsx formatında yazılmasını sağlamış oluruz

const Navbar=()=>{ 
    return(
    <h3>Navbar Functional Component</h3>
    )
}

export default Navbar;//Bunu da App.js componenti içerisinde deneyelim  