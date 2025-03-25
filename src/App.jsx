import Login, {secretKey, SignIn} from "./Login"
// import {Login} from "./Login"

function App() {
  return (
    <div>
      <h1>Importing and exporting components</h1>
      <Login/>
      <SignIn/>
      <h4>{secretKey}</h4>
    </div>
  )
}

export default App
