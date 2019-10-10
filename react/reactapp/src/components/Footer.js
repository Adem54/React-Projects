//Eğer vs code ye ES7 React/Redux/GraphQL/React-Native snippets eklentisini eklemişsek functional component i   rfc yazıp tab a basarsak otomatik bize funcitonal component oluşturacaktır
//class component i oluşturmak için ise rcc kısa yolu ve tab a basınca class component kalıbı otomatik gelecektir 
//rcc=> React Class Component in kısa yazılışı
//rfc=>React Functional Component in kısa yazılışı

import React from 'react'

const Footer = (props) => {
    return ( 
        <div>
       
       <h1> { props.property } </h1> 
       </div>
    )
}

export default Footer;