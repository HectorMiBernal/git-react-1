import React from 'react'

const Quote = ({phrase}) => {
  return (
    <p className= 'container__phrase'> {phrase.phrase}
    <div className= 'container__author'> {phrase.author}</div>
    </p>
    )
}

export default Quote