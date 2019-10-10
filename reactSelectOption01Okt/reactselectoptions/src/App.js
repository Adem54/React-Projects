import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
		countries: [],
		colours: {}
  };
  
  componentDidMount() {
    this.setState({
      countries: [
        {id: 'AFG', name: 'Afghanistan'},
        {id: 'ALA', name: 'Aland Islands'},
        {id: 'ALB', name: 'Albania'}
      ]
    });
  }

  render(){
 
    const { countries } = this.state;

	let countriesList = countries.length > 0
		&& countries.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.name}</option>
		)
  }, this);//map methodunu ilk parametresi callback fonksiyonudur ikinci paremetresi ise isteğe bağlı olarak koyulan callback fonksiyonu çalıışırken kullanacağı this değeridir
  //map fonksiyonu geriye dizi döndürür

	return (
		<div>
			<select>
				{countriesList}
			</select>
		</div>
	);

}
}

export default App;
