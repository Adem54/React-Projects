import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    people: [],
    index: 0,
    loading: true, //yükleniyor yani yüklenmemiş yüklenince false olacak
    error: false,
    male: ["Fatma", "Zehra", "Zeynep", 123, 345, 987, 479, 721, 873],
    female: [1, 3, 5, 7, "Hasan", "Serhat", 34, 45, "Kazım", 65],
    gender: ""
  };
  handleKeypress = (e, name) => {
    //Sadece tıklandığında name verisini alacak ondan sonra klavye space e basınca name i alamadığı için dolayısı ile ilk olarak yaptığı name ==="Male" karşılaştırmasını yapamayacak...Bende varsayılan olarak
    //const arr=[];
    //if (typeof name !== 'undefined'){arr.push(name)}
    //name = (typeof name !== 'undefined') ?  name : arr[arr.length-1]
    if (typeof name !== "undefined") {
      this.setState(
        { gender: name },
        () => (name = typeof name !== "undefined" ? name : this.state.gender)
      );
    }

    console.log("2.space basmada gender:", this.state.gender);
    console.log("NAME:", name);
    name === "Male"
      ? this.setState(
          {
            people: this.state.male
          },
          () => {
            console.log(this.state.people);
          }
        )
      : this.setState(
          {
            people: this.state.female
          },
          () => console.log(this.state.people)
        );

    console.log("index:  ", this.state.index);
    e.code === "Space"
      ? console.log("Evet space e bastınız")
      : console.log("Hayır space e basmadınız");
    console.log("PEOPLE STATE:", this.state.people);
    e.code === "Space" && this.state.index < this.state.people.length - 1 //Burda eğer length den küçük dersek o zaman örneğin length 10 burda en son 9 gelecek sonra aşağıda bir artacak 10 olacak ve devam edip altta 10.eleman sorulacak ama 10.eleman yok en fazla people[10] yok en fazla people[9] var ondan dolayı length den 1 çıkarmamız gerekecek
      ? this.setState(
          {
            index: this.state.index + 1
          },
          () => console.log(this.state.index)
        )
      : this.setState(
          {
            index: 0
          },
          () => console.log("index0:", this.state.index)
        );
  };

  handleClickMale = e => {
    console.log(e.target.value);
    window.addEventListener("keypress", this.handleKeypress(e, e.target.value));
  };

  handleClickFemale = e => {
    console.log(e.target.value);
    window.addEventListener("keypress", this.handleKeypress(e, e.target.value));
  };
  componentDidMount() {
    window.addEventListener("keypress", this.handleKeypress); //Burda handleKeypress fonksiyonunu çağırdığımız için this.diye yazmalıyız ama tanımlarken direk başına function yazmadan ismi ile tanımlayabiliriz
  }
  render() {
    const { people, index } = this.state;
    return (
      <div className="App">
        Eleman: <h2 style={{ backgroundColor: "cyan" }}>{people[index]}</h2>
        <input type="button" onClick={this.handleClickMale} value="Male" />
        <input type="button" onClick={this.handleClickFemale} value="Female" />
      </div>
    );
  }
}

export default App;

//Birde state olarak obje olan bir verimiz olduğunu varsayarak Object.keys ya da Object.values ile işlem yamayı deneyelim
