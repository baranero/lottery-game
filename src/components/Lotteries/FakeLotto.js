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

  const saveNumbersDataHandler = (enteredNumbers) => {
    const numbersData = {
      ...enteredNumbers,
      id: Math.random().toString()
    }
  }
  
  const [isShownTicket, setIsShowTicket] = useState(false)
  const [formList, setFormList] = useState([])

  const addForm = () => {
    setFormList(formList.concat(<FakeLottoForm key={formList.length} onSaveNumbersData={saveNumbersDataHandler} />))
  }

  const showTicket = () => {
    setIsShowTicket(true)
  }

  return (
    <section>
      <h3>Try Yourself and get rich!</h3>
      <button onClick={addForm} type="button">Get ticket</button>
      {formList}
    </section>
  )
}

export default FakeLotto