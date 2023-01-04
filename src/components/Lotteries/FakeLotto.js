import { useState } from "react"

const FakeLotto = props => {
  
  const [numbersArray, setNumbersArray] = useState([])
  
  
  const drawNumbers = () => {
    if (numbersArray.length === 6) {
      setNumbersArray([])
    }
    for (let i = 0; i < 6; i++) {
      let numbers = Math.floor(Math.random() * 49 + 1)
      setNumbersArray(prevArray => [...prevArray, `${numbers} `])
    }

  }
console.log(numbersArray);

  const [] = useState()

  return (
    <section>
      <h3>Try Yourself and get rich!</h3>
      <button type="button">Get ticket</button>
    </section>
  )
}

export default FakeLotto