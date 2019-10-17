import React, { useState } from "react";

import "./App.css";
const TodosForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  console.log(value);
  //string text verisi eklenecek buraya ve buraya yazılan veri her işlem yapıldığında todos verisine eklenecek..
  const onhandleSubmit = e => {
    //Eklenen veri yani value nin todos a eklenme işini yap diyeceğiz
    //İlk önce preventDefault yapalım
    e.preventDefault();
    if (!value || value.length < 3) return    //alert("Lütfen yeterli karakter giriniz...  "); //eğer value boş ise hibirşey yapma da diyebiliriz return yazdıp hiçbirşey yazmassak hiçbirşey dönme demiş oluruz..
    //Normalde biz input a eklenen veriyi direk burada ekleyebilirdik todos verisini buraya
    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={onhandleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Adınızı giriniz..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <ul>
      <li style={{ textDecoration: todo.isCompleted ? "line-through" : "", listStyleType:"none" }}>
        {todo.text}
        <button
          style={{ marginLeft: "30px" }}
          onClick={() => completeTodo(index)}
        >
          {todo.isCompleted ? "Completed" : "NonCompleted"}
        </button>
        <button onClick={() => removeTodo(index)}>RemoveTodo</button>
      </li>
    </ul>
  );
};

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Built really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const copyTodos = [...todos, { text }]; //Burda {text:text} diye düşünebiliriz ikisi de aynı ise birini yazmamız yeterlidir
    setTodos(copyTodos);
  };
  //biz kaçıncı index e tıklarsak o index i bulunması için hangi metot la döndürmüşsek orda her dönüşte bir index alır
  const completeTodo = index => {
    const copyTodos = [...todos];
    copyTodos[index].isCompleted = true;
    setTodos(copyTodos);
  };

  const removeTodo = index => {
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };
  return (
    //Not eğer map içerisinde işlem yapıyorsak uniq key vermeeyi unutmayalım ayrıca eğer map fonks arrow ile  süslü parantez kullanmışsak dönecek olan veriyi return ile çağırmalıyız ya da süslü parantez yerine () normal parantezle döndürmemiz gerekir ki o zaman return e gerek kalmaz..
    <div className="App">
      <div>
        {todos.map((
          todo,
          index //props göndeririz bu şekilde...
        ) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <div>
        {" "}
        <TodosForm addTodo={addTodo} />{" "}
      </div>
      {console.log("Todos:", todos)}
    </div>
  );
}

export default App;

//Yol Haritamız biz şimdi bir component daha yazacağız bu komponentin içerisinde form olacak ve biz bu form elemanın içerisine input koyacağız input içerisine girdiğimz değer i biz todos state ine ekleyeceğiz dolayısı ile biz bu component içerisinde bir state kullanacağız ya da boş bir state başlatacağız..
////Bir form olayında onSubmit olayı herhangi bir klavye tuşuna basınca ya da o form içerisinde oluşturduğumuz bir button ile tıklayınca gerçekleşir normalde form içerisine girdiğimiz verileri başka bir sayfaya gönderir ki o sayfa da veritabanına ile kontrollü bir şekilde girilen verileri aktarır  yani normalde tıklayınca eğer bir action yazmamışsak o zaman tıklamamız ile hata alırız işte bunun olmaması için biz de event.preventdefault u kullanırız ki onSubmit eventinin default özelliklerini kaldırmış oluruz sadece tıklayınca veya herhangi bir tuşa basınca sayfa yenilenecektir...
//Biz de bu form olayınca öncelike bir şart sunulur girilecek veri ile ilgili ve eğer veri girilmeden butona ya da tuşa tıklanırsa yani onSubmit yapılırsa ne yapmak gerekir onları da planlayabiliriz ve yine önemli birşey veri girilip onSubmit olduktan sonra 2.bir veri gireceğiz o zaman da input umuz karşımıza temizlenmiş olarak gelmesini istiyoruz o kısmıda halletmemiz gerrkecek...
//Ve sonrasında biz eklenen veriyi alıp todos verisine todos dizisi içerisindeki objeye dahil etmeliyiz ki girdiğimiz veri todos state i içindeki verileri map ile yazdırdığımız için input a girdiğimiz veri de todos a eklenirse otomatik olarak o da yazdırılıcaktır...
//Burda biz normalde gidip todosForm componenti içerisine props olarak bir fonksiyon gönderdik ki bu fonksiyon un görevi fonksiyona parametre olarak verilen bir text i todos dizi si içerisine bir obje olarak göndermekti ki biz bu fonks TodosForm componentine props olarak gönderdik ve TodosForm componentinin state i ni props olarak gönderdiğimiz fonksiyona parametre olarak verdik ve bu şekilde biz aslında todosForm componenti içerisinde App componentinin state ine eleman eklemiş olduk ki bu çok mantıklı bir yöntem yani biz normal de bir component içerisinde başka bir component in state in i direk doğrudan değiştiremeyiz ancak bu şekilde props olarak bir fonksiyon göndeririz ve o fonksiyon a parametre olarak gönderdiğimiz component içerisinde state i vererek o state i de  biz bir olaya bağlayınca bu şekilde işlemimizi halletmiş oluyoruz...
//Genel olarak şuna dikkat edelim Todos componentine gönderdiğimiz props fonksiyonlarda da fonksiyonları dışarda yazdık ve bu fonksiyonların her birisinin parametreleri var ki o parametreler olmadan biz o işlemleri yapamayız ve o fonksiyonları props olark todos componentine göndeririz ve daha sonra gönderdiğimiz fonksiyonların parametresini todos componentinden alarak işlemimizi yapabiliriz.... Biz bu işlemlerin benzerlerini class componentler de farklı farklı componentler üzerinden yapmıştık....
//Bu fonksiyonların benzerlerini yapmıştık dikkat edelim yine yapabiliiriz...Apiden veri çekerek yaptığımız ödevlerin biz hooks kullanarak da yapabiliriz....
