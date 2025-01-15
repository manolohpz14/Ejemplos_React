import './App.css'
import User from "./User.jsx"

function App() {

  // const user1 = {
  //   colorFondo: "red",
  //   src: "../imgs/Mario_Soto.png",
  //   username: "Mario Soto"
  // }

  // const user2 = {
  //   src: "../imgs/Ana_Gomez.png",
  //   username: "Ana Gomez"
  // }

  // const user3 = {
  //   username: "Anonimo"
  // }

  return (
    <div>
      <User colorFondo="red" src="/imgs/Mario_Soto.png" username="Mario Soto" />
      <User src="/imgs/Ana_Gomez.png" username="Ana Gomez" />
      <User username="Anonimo" />
    </div>
  )
}

export default App
