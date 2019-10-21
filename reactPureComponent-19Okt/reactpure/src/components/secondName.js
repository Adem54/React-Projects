import React, { Component,PureComponent } from 'react'

 class SecondName extends PureComponent {
     //App componentinde ki componentDidMount içerisindeki setInterval da firstName state inin değişmesinden dolayı secondName componenti de herhangi bir değişiklikle alakası olmamasına rağmen çalışıyordu bunu durdurmak için secondProps içine gönderilen props yani App daki secondName state i props olarak gönderiliyor App componenti içindeki secondName state i render olmasını eğer değişirse render olsun diyerek secondName componentinin kendisi ile alakası olmayan şeylerde render edilmesini engelleyebiliriz... NextProp.secondName !== this.props.secondName koşulunu shouldComponentUpdate içerisine yazarak
/*
    shouldComponentUpdate(NextProp,NextState){
        console.log("secondcomponent içindeki shuldComponentUpdate başladı..")
        return NextProp.secondName !== this.props.secondName 
      }
      */
     /* Normalde biz componentlerin state yada props larında bir değişiklik olduğunda setState yapıldığında render edilmesini bekleriz ama bazı durumlarda kendi state ve props unda değişiklik olmamasına rağmen component render edilebilir bizim örneğimizde olduğu gibi işte PureComponent eğer component render edilecekse onun state ve props larını kendi içerisinde karşılaştırır yani arka planda render eder aslında ama biz göremeyiz ve sonuç olarak eğer state ler ya da props larında render dan sonra değişiklik yoksa render öncesi ve sonrası props ve state ler eşit ise o zaman render yapılmasının önüne geçer ve izin vermez ki sadece kendi state ve props ları değiştiğinde render edilmesine izin verir... */
      //Normalde biz bu işlemi shouldComponent ile çözdük ancak bu işlemi kendisi defaul olarak yapan ve shouldComponent içerisindeki return den sonra ki props lar yada state lerin değişmişse render etsin diye yaptığımız karşılaştırmayı shallow equal karşılaştırması ile yaparak secondName componentinin gereksiz yere çalışmasını önleyen PureComponet ile yapabiliyoruz..PureComponent shouldComponentUpdate eventinin yaptığı işlemi ve karşılaştırmayı bizim için yapıyor

      //Not:PureComponent le biz işimizi çözüyoruz ancak purecomponent i heryerde kullanmamamlıyız sadece çok stratejik bazı yerlerde kullanmalıyız bu önemli buna dikkat edelim yani state ya da props ları önceki ile sonrasını default olarak shallow karşılaştırması yaparak eğer değişiklik olmuşsa render etmesini sağlamaya yarıyor...
    render() {
        console.log("SecondName compoent render başladı....")
        const {secondName}=this.props
        return (
            <div>
               secondName: {JSON.stringify(secondName)}
            </div>
        )
    }
}


export default SecondName;