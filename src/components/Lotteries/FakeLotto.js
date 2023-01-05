import { useState } from "react"
import classes from './FakeLotto.module.css'
import FakeLottoForm from "./FakeLottoForm"

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
  

  const [ticket, setTicket] = useState([])

   const addTicket = () => {
    setTicket(prevTickets => [...prevTickets])
   }

   const submitHandler = event => {
    return event.preventDefault()
   }

  return (
    <section>
      <h3>Try Yourself and get rich!</h3>
      <button onClick={addTicket} type="button">Get ticket</button>
      <FakeLottoForm onAddTicket={addTicket} onSubmit={submitHandler}/>
    </section>
  )
}

export default FakeLotto