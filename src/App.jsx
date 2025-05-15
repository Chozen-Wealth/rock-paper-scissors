import { useState } from 'react'
import './App.css'
import Score from './components/score/score'
import Jeu from './components/jeu/jeu'
import Modal from './components/modal/modal'

function App() {
  return (
    <div className='App'>
      <Score/>
      <Jeu/>
      <Modal/>
    </div>
  )
}

export default App
