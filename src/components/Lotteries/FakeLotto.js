import { useState } from "react"
import classes from './FakeLotto.module.css'
import FakeLottoForm from "./FakeLottoForm"

const FakeLotto = props => {

  const saveNumbersDataHandler = (enteredNumbers) => {
    const numbersData = {
      ...enteredNumbers,
      id: Math.random().toString()
    }
    props.onAddTicket(enteredNumbers)
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