import './App.css'
import phrases from './utils/phrases.json'
import Quote from './components/Quote'
import BtnQuote from './components/BtnQuote'
import { useState } from 'react'
import getRamdonElemArray from './utils/getRamdonElemArray'

function App() {


  const phraseRandom = getRamdonElemArray(phrases)
  const numberRandom = getRamdonElemArray([1, 2, 3, 4, 5, 6, 7, 8])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`


  }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container__title'>Your Lucky Cookie</h1>
      <Quote phrase={quote} />
      <BtnQuote
        setQuote={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}
      />
    </div>

  )
}

export default App
