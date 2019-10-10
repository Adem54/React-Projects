import React from 'react'
//PropTypes fonksiyonunu prop-types kütüphanesinden ekleriz kısa yol olarak da impt tab dersek karşımıza otomatik gelir zaten ama bunun için prop kullanıyor olmamız gerekir
import PropTypes from 'prop-types'


 const Sosial=(props)=> {
  return (
      //Burda verimizi dinamik almak için bizim app.js de props ile gönderdiğmiz veriler buraya obje olarak geliyor 
    <div>
        
      <h3>{props.prop}</h3>
    </div>
  )
}


//Sosial.PropTypes bir obje olacak
//Burda biz bu işlemi yaparak şunu yapmış olduk biz eğer prop ları kullanacaksak keyword u burda prop isminde kullandığımız için prop isminde olmalı mutlaka string(string) olmalı ve kesinlikle kullanılmalı(isRequired) demiş oluyoruz.Özzellikle mutlaka kullanılmalı(isRequired) dediğimiz için eğer biz props kullanmazsak da hata verecektir

Sosial.propTypes = {
    prop:PropTypes.string.isRequired
}

Sosial.defaultProps={
    prop:"Bu gelen Sosial componentinin default verisidir"
}
export default Sosial;