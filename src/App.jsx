import { useEffect, useState } from 'react'
import './App.css'
import Score from './components/score/score'
import Jeu from './components/jeu/jeu'
import Modal from './components/modal/modal'

function App() {
  const [points, setPoints] = useState(()=>{
    return parseInt(localStorage.getItem("points")) || 0
  })
  const [darkmode, setDarkmode] = useState(()=> {
    return localStorage.getItem("darkmode") === "true"
  })
  const [start, setStart] = useState(false)
  const [affichagePC, setAffichagePC] = useState(false)


  useEffect(()=>{
    localStorage.setItem("points", points)
  },[points])

  useEffect(()=>{
    localStorage.setItem("darkmode", darkmode)
  },[darkmode])

  return (
    <div className={`App ${darkmode === true ? "" : "dark"}`}>
      <Score score={points} dark={darkmode} setScore={setPoints} setStart={setStart} setAffichagePC={setAffichagePC}/>
      <Jeu points={points} setPoints={setPoints} dark={darkmode} start={start} setStart={setStart} affichagePC={affichagePC} setAffichagePC={setAffichagePC} />
      <Modal dark={darkmode} setDark ={setDarkmode} />
    </div>
  )
}

export default App
