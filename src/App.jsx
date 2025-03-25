

function App() {
  const name = "Hassaan";
  const x = 10;
  const y = 20;
  return (
    <div>
      <h1>Writing markup with JSX</h1>

      <h4>Hey {name}</h4>
      <h5>{10+20+30}</h5>
      <h5>{x+y}</h5>
      <button onClick={()=>{alert("Hello")}}> this is the btn</button>
    </div>
  )
}

export default App
