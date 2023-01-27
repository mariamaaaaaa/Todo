import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tache from './Compenentes/Tache'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Tache></Tache>
    </div>
  )
}

export default App
