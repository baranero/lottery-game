import { useState } from "react"
import classes from './FakeLotto.module.css'
import FakeLottoForm from "./FakeLottoForm"

const FakeLotto = props => {

  const saveNumbersDataHandler = (enteredNumbers) => {
    const numbersData = {
      ...enteredNumbers,
      id: Math.random().toString(),
      price: 2,
      
    }
    props.onAddTicket(numbersData)
  }
  
  const [formList, setFormList] = useState([])

  

  const addForm = () => {

        setFormList(formList.concat(
            <FakeLottoForm onRemoveTicket={removeTicket} id={formList.length} key={formList.length} onSaveNumbersData={saveNumbersDataHandler} />
))
    }
    

    const removeTicket = () => {
      setFormList(current =>
        current.filter(formListItem => {
          return +formListItem.key !== formList.length
        }))

    }
  

  return (
    <section>
      <h3>Try Yourself and get rich!</h3>
      <button className={classes['get-button']} onClick={addForm} type="button">Get ticket</button>
      <ol>
        {formList.map((item) => {
          return <li key={item.key}>{item}</li>}
        )}
      </ol>


    </section>
  )
}

export default FakeLotto