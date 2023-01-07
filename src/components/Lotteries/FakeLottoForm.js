
import { useState } from 'react'
import classes from './FakeLottoForm.module.css'

const FakeLottoForm = (props) => {
  
    const [numbers, setNumbers] = useState({
      firstNumber: '',
      secondNumber: '',
      thirdNumber: '',
      fourthNumber: '',
      fifthNumber: '',
      sixthNumber: ''
    })
  
    const changeHandler = event => {
      const {name, value} = event.target
      console.log(value);
      if (+value > 49 || +value <= 0) {
        window.alert("Wrong number")
        setNumbers({...numbers, [name]: ''})
      } else {
        setNumbers({...numbers, [name]: value})
      }}
  
     const submitHandler = (event) => {
      event.preventDefault()
  
      const addedTicket = {
        numbers: numbers
      }

      console.log(props.onClick);


      props.onSaveNumbersData(addedTicket)
    }
    
    const removeItem = () => {
      console.log(props.id);
    }


    return (
        <form onSubmit={submitHandler}>
          <h3>{+props.id + 1}</h3>
          <input
            type="number"
            max='49'
            min='0'
            step='1'
            name='firstNumber'
            value={numbers.firstNumber}
            onChange={changeHandler}
          />
          <input
            type="number"
            max='49'
            min='0'
            step='1'
            name='secondNumber'
            value={numbers.secondNumber}
            onChange={changeHandler}
          />
          <input
            type="number"
            max='49'
            min='0'
            step='1'
            name='thirdNumber'
            value={numbers.thirdNumber}
            onChange={changeHandler}
          />
          <input
            type="number"
            max='49'
            min='0'
            step='1'
            name='fourthNumber'
            value={numbers.fourthNumber}
            onChange={changeHandler}
          />
          <input
            type="number"
            max='49'
            min='0'
            step='1'
            name='fifthNumber'
            value={numbers.fifthNumber}
            onChange={changeHandler}
          />
          <input
            type="number"
            max='49'
            min='0'
            step='1'
            name='sixthNumber'
            value={numbers.sixthNumber}
            onChange={changeHandler}
          />
          <div className={classes['button-group']}>
            <button className={classes['tickets-button']} type='submit'>Submit</button>
            <button className={classes['tickets-button']} onClick={props.onRemoveTicket} type='button'>Delete </button>
          </div>
        </form>
  )
}

export default FakeLottoForm