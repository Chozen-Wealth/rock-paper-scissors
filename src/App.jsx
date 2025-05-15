import { useState } from 'react'
import './App.css'
import Score from './components/score/score'
import Jeu from './components/jeu/jeu'
import Modal from './components/modal/modal'

function App() {
  const [points, setPoints] = useState(0)
  const [darkmode, setDarkmode] = useState(true)

  return (
    <div className={`App ${darkmode === true ? "" : "dark"}`}>
      <Score score={points} dark={darkmode} />
      <Jeu points={points} setPoints={setPoints} dark={darkmode} />
      <Modal dark={darkmode} setDark ={setDarkmode} />
    </div>
  )
}

export default App
