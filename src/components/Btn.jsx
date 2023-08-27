import React from 'react'
import getRandomElemt from '../utils/getRandomElemt'


const Btn = ({setQuote, frace, setNumberBg}) => {
    const handleRandomPhrase = () => {
       setQuote(getRandomElemt(frace))
       setNumberBg(getRandomElemt([1, 2, 3, 4]))
    }

  return (
    <button onClick={handleRandomPhrase}>Fraces</button>
  )
}

export default Btn
