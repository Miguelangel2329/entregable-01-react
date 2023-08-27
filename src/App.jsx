import { useState } from 'react'
import './App.css'
import Btn from './components/Btn'
import Quote from './components/Quote'
import frace from "./utils/phrases.json"
import getRandomElemt from './utils/getRandomElemt'

function App() {
  
  const [quote, setQuote] = useState(getRandomElemt(frace))
  const [numberBg, setNumberBg] = useState(getRandomElemt([1, 2, 3, 4]))

  const bgStyle ={
    backgroundImage: `url(/fondo${numberBg}.png)`
  }
  
  return (
    <>
    <main style={bgStyle}>
      <div className='quoteclas'>
        <h1> Entregable 01 </h1>
        <Quote fraces={quote}/>
        <Btn frace= {frace} setQuote = {setQuote} setNumberBg={setNumberBg}/>
      </div>
      </main>  
    </>
  )
}

export default App
