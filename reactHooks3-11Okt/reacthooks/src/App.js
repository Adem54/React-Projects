import React, { useState, useEffect } from "react";

import "./App.css";

//React Hooks da props gönderme ye bakalım...
//direk props yazıp props.todo ve props.index diye de alabilirdik
function Todo({ todo, index,completeTodo,removeTodo }) {
  return (//Burda css stilini bir şarta bağlıyoruz eğer ki state teki todo.isCompleted true ise bu stili uygula diyoruz...
    //Biz bu şekilde başlığıda belirleyebiliriz...
      <div style={{textDecoration:todo.isCompleted ? 'line-through': ''}} className="todo">{todo.text}
      <div>
        <button onClick={()=>completeTodo(index)}>
          {todo.isCompleted ? "Complete!":"UnFortunatelly"}
        </button>
        <button onClick={()=>removeTodo(index)}>
          RemoveTodo
        </button>
      </div>
      
      </div>
    
  );
}      

//TodoForm componenti oluşturalım...
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  console.log("Value: ",value)
//handleSubmit fonksiyonu oluşturup hemen aşağıda return içerisinde kullanacağız...
  const handleSubmit = e => {
    e.preventDefault();
    //input u kontrol edelim eğer boşsa mesaj da verebiliriz bu şekilde ya da direk return; deyip hiç birşey yapmada diyebiliriz...
    if (!value) return(alert("Hiç bir veri girmedin"));
    addTodo(value);//Buraya yazılan value aşağıdaki todos state ine eklesin yada ile birleştirilsin şeklinde bir fonks yazdık...
    setValue(""); //İşimiz bittikten sonra formu temizle...
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}//Şunu unutmayalım ki biz state değiştirme olaylarını herhangi bir event a bağlayarak ya da if li kontrol işlemlerine bağlayarak yapmalıyız......
      />
      <button>Send</button>
    </form>
  );
}

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
  ]); //Not çok önemli biz burda map kullanırken ya da bu router işlemlerinde de vardı arrow function da ok işaretinden sonra eğer süslü parantezle işlem yapacaksak  o zaman kesinlikle return kullanmalıyız ya da direk () parantez kullanırsak ok işaretinde sonra o zaman kendiliğinden return etmiş olur ki bu hata gerçekten çok  önemli bir hata buna dikkat edelim....

  const addTodo = text => {//parametreye gelen text i value olarak gönderiyor içerdeki objeye yani ekliyor ya da birleştiriyor
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  //Bu fonksiyon çalıştığı anda hangi eleman eklenirse onun isCompleted properties i true ya dönecek
  const completeTodo=index=>{
    const newTodos=[...todos];
    newTodos[index].isCompleted=true;//Dizi içindeki index i verince o index teki obje içerisine isCompleted ı true olacak şekilde eklemiş oluyor....
    setTodos(newTodos)
  }
  //Şimdi de todo yu silme kaldırma işlemi

  const removeTodo=index=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (//div todolist içerisinde map ile dolaşıtırdıkki her döndüğünde bir tane <Todo/> componenti ekleyecek biz gidip <Todo/> componentine bakarsak orda da bir div var className i todo olan bir div e sahip sonra altta da <TodoForm/> componentini çağırıyoruz ve o kısımda form input kısmımızdır 
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (//index burda çok  önemli ve ihtiyacımız olacak neden dolayı biz hangi veya kaçıncı veriyi ekliyorsak o veri nin indexi işte o index olacak ondan dolayı...
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
      {console.log("Todos: ",todos)}
    </div>
  ); //addTodo={addTodo} TodoForm a props gönderiyor ancak addTodo yu oluşturmamız gerkiyor
}

export default App;

//2 tane component oluşturuyoruz 1)Todo component i burda todos stateini ekrana basmak için veya tarayıcı da göstermek için ve map ile obje kısmını props ile Todo componentine gönderiyoruz 
// 2)TodoForm componenti bu component e de props olarak addTodo adında bir fonksiyon gönderiyoruz ki bu fonksiyonu da hemen oluşturuyoruz bu fonksiyon  parametre alıyor ve parametreye aldığı text i  todos stateine ekliyor bu işlevi görüyor biz bu fonksiyonu props olarak TodoForm componentine gönderiyoruz ve o todoForm componenti içerisinde bir form oluşturacağız ve o Form componentinde bir state value oluşturacağız ilk önce boş olacak ve bu state value yi form içerisinde oluşturduğumuz input  value ye bağlayacağız ve onChange olayı ile de setState ile valueSet ile hangi değeri girersek onunla value değişsin diye de e.target.value yi veriririz ve bu girilen valueyi todos a eklemesi için de addTodo fonskiyonunu prop olarak alıp içerisine parametre olarak statevalue yi veririz ve ayrıca kontrol etmek içinde eğer değer girilmeden onSubmit yapılırsa diye kontrol koyarız ve her eklemeden sonra da formu temizleriz   