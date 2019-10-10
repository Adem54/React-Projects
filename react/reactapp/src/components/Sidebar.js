import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class Sidebar extends Component {
     //Sadece class componentlerimizde oluşturabileceğimiz state lerimiz componentimizin o anki durumunu belirtiyordu ve biz burda bir isVisible tanımladık ve gidip aşağıda bazı html elementlerini isVisible durumuna göre göster veya gösterme diyeceğiz  
state={
    isVisible:false
}


    //defaultProps ları biz class ın altında da static defaultProps şeklinde de kullanabiliriz
    static defaultProps = {
        country:"No",
        city:"Neii",
        population:"Bilinmeyen"
     }
     onClickEvent=(number,e)=>{
        console.log(e.target);
        console.log("Event işlemi gerçekleşti");
        console.log(this);
        console.log(number);
         this.setState({
             isVisible:!this.state.isVisible//Burda şunu demiş oluyoruz click olayı gerçekleşince isVisible değişkeni tersine dönsün demiş oluyoruz yani yeni bir isVisible yapıyoruz artık isVisible buna göre çalışacak ve bu da her tıklanmada tersine çevrilecek yani tıklayınca gösterecek tıklayınca gizleyecek
         })

         
          }
        
  
    render() {
        const {country,city,population}=this.props;
        const {isVisible}=this.state;
        return (//Biz li elementinin içerisinde onclick eventini oluşturup ona bir method atıyoruz bu methodları burda verdikten sonra yukarda bu methodu oluşturuyoruz zaten biz bu şekilde verince javascript otomatik olarak bir tane event objesini onClickEvent methoduna gönderir ve biz bunu yakalamak içinde parametreye e ya da event yazarak yakalayabiliriz
                        <div>
                <ul>
                    <li onClick={this.onClickEvent.bind(this,34)}>country:{country}</li>
{                     isVisible ?      
                    <li>city:{city}</li> :null   }
                    <li>population:{population}</li>
               

                </ul>
                
            </div>
        )
    }
}

Sidebar.propTypes={
    country:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    population:PropTypes.string.isRequired
}

Sidebar.defaultProps = {
    country:"Unknown",
    city:"Ukjent",
    population:"Bilinmeyen"
}
//Aynı zamanda bu default props ları biz class içerisinde static defaultProps  olarak da yazabiliriz 
export default Sidebar;