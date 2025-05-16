import { useState } from 'react'
import './App.css'
import Score from './components/score/score'
import Jeu from './components/jeu/jeu'
import Modal from './components/modal/modal'

function App() {
  const [points, setPoints] = useState(0)
  const [darkmode, setDarkmode] = useState(true)
  const [start, setStart] = useState(false)
  const [affichagePC, setAffichagePC] = useState(false)

  return (
    <div className={`App ${darkmode === true ? "" : "dark"}`}>
      <Score score={points} dark={darkmode} setScore={setPoints} setStart={setStart} setAffichagePC={setAffichagePC}/>
      <Jeu points={points} setPoints={setPoints} dark={darkmode} start={start} setStart={setStart} affichagePC={affichagePC} setAffichagePC={setAffichagePC} />
      <Modal dark={darkmode} setDark ={setDarkmode} />
    </div>
  )
}

export default App
