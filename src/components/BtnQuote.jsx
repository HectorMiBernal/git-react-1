import React from 'react'
import getRamdonElemArray from '../utils/getRamdonElemArray'


const BtnQuote = ({setQuote, phrases, setNumberBg}) => {

    const handleRandomPhrase = () => {
        setQuote(getRamdonElemArray(phrases))
        setNumberBg(getRamdonElemArray([1,2,3,4,5,6,7,8]))
    }
  return (
    <button className='container__btn' onClick={handleRandomPhrase}>Just a new phrase</button>
  )
}

export default BtnQuote