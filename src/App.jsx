function App() {
 function callFun(){
  alert("function called");
 }
  return (
    <div>
      <h1>Anil Sidhu Todos</h1>
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKWxvNYHcce6skb2t0z5zlYmBETHLMl0h6g&s"
      alt="Anil Sidhu"
       />
       <ul>
        <li>Invent new traffic lights</li>
        <li>Reherse a movie scene</li>
        <li>Improve the specturm tech</li>
       </ul>
       <button onClick={callFun}>Click Me</button>
    </div>
  )
}

export default App
