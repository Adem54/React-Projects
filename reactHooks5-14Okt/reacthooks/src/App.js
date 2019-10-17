/* 
http://hyf-react-test.herokuapp.com/
bunun aynısını yapalım...
sabit api:https://jsonplaceholder.typicode.com/users
değişken api:https://uinames.com/api/?ext&amount=5
mini değişken api:https://uinames.com/api/?amount=5
*/

import React, { useState, useEffect } from "react";

import "./App.css";

const List = ({ personObj, index, handlePersonDetails }) => {
  return (
    <ul>
      <li>
        <h6
          onClick={() => handlePersonDetails(index)}
          className="list"
          style={{
            backgroundColor: "lightblue",
            width: "100px",
            cursor: "pointer"
          }}
        >
          {personObj.name}
        </h6>
      </li>
    </ul>
  );
};

const PersonDetails = ({ person }) => {
  console.log("Person length: ", Object.keys(person).length);
  return (
    <div>
      {Object.keys(person).length > 0 && (
        <div>
          <div><img src={person.photo} /> </div>
          <h4 style={{marginLeft:"70px",marginTop:"10px"}}>{person.name}</h4>
          <div style={{marginTop:"10px",backgroundColor:"orange",width:"240px",padding:"10px"}}>
          
          <h6>Surname:{person.surname}</h6>
          <h6>Region:{person.region}</h6>
          <h6>Phone:{person.phone}</h6>
          <h6>Gender:{person.gender}</h6>
          <h6>Email:{person.email}</h6>

          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({}); //people dizi içindeki  objelerden biri olacak bu veri ondan dolayı boş obje ile başlatıyoruz.

  const handleClickNames = async () => {
    try {
      const peopleData = await (await fetch(
        "https://uinames.com/api/?ext&amount=5"
      )).json();
      setPeople(people => peopleData);
      setLoading(loading => false);
    } catch (error) {
      setError(error => true);
      setLoading(loading => false);
    }
  };

  useEffect(() => {
    console.log("Loading: ", loading);
  }, [loading]);
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);

  //People verisini gelip gelmediğin kontrol etmek için burayı yaptık
  useEffect(() => console.log("People: ", people));
  //Ben List componenti içerisndeki bir isme tıkladığım zaman o isme ait detay obje yi almak istiyorum
  const handlePersonDetails = index => {
    //Ben eldeki ana people verisinden gitmeliyim ve people verisi üzerinde değişiklik yapamayacağım için setPeople de yapabilirim ancak bu da olmaması için eğer veri üzerinde değişiklik yapacaksam o zaman önce veriyi spread ile kopyalamam gerekecek
    const personData = people[index]; //Hangi veriye tıklandığını bulabilmek için elimizde index var onu kullanabiliriz ya da normal de people verisi içerisindeki obje properties lerinde id var mı ona bakacaktık ya da uniq id yerine kullanabileceğimiz ne var ona bakacaktık...
    setPerson(person => personData); //handlePersonDetails e tıklayınca artık person stat imiz içerisine verimiz geldi veriyi aldığımıza göre verimizi yazdırabiliriz artık
  };
  return (
    <div className="App">
      <div
        style={{
          padding: "20px",
          marginLeft: "40px",
          marginRight: "40px",
          paddingLeft: "50px",
          backgroundColor: "lightcyan"
        }}
      >
        <button onClick={handleClickNames}>Get Data!</button>
      </div>

      <div className="container" style={{marginTop:"20px"}}>
        <div className="row">
        <div className="col-md-4" style={{ marginBottom: "250px" }}>
            {" "}
            <PersonDetails person={person} />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4" style={{backgroundColor:"",paddingLeft:"150px"}}>
            {//Eğer tıklanmışsa tıklandıktan sonra burayı çalıştırmamız gerekecek

            error === true ? (
              <h3>Url niz de hata vardır tekrar kontrol ediniz...</h3>
            ) : loading === true ? (
              <h3>Veriler henüz gelmedi....</h3>
            ) : (
              people.map((personObj, index) => (
                <List
                  key={index}
                  personObj={personObj}
                  index={index}
                  handlePersonDetails={handlePersonDetails}
                />
              ))
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
