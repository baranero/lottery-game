import { useState } from 'react'
import classes from './FakeLottoForm.module.css'

const FakeLottoForm = props => {

  const [numbers, setNumbers] = useState({
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    fourthNumber: '',
    fifthNumber: '',
    sixthNumber: ''
  })

  const handleChange = event => {
    const {name, value} = event.target
    console.log(value);
    if (+value > 49 || +value < 0) {
      window.alert("Wrong number")
      setNumbers({...numbers})
    } else {
      setNumbers({...numbers, [name]: value})
    }
      
    

  }

  console.log(numbers);

  return (
    <div>
      <form action="submit" onClick={props.onSubmit}>
        <input
          type="number"
          max='49'
          min='0'
          step='1'
          name='firstNumber'
          value={numbers.firstNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          max='49'
          min='0'
          step='1'
          name='secondNumber'
          value={numbers.secondNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          max='49'
          min='0'
          step='1'
          name='thirdNumber'
          value={numbers.thirdNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          max='49'
          min='0'
          step='1'
          name='fourthNumber'
          value={numbers.fourthNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          max='49'
          min='0'
          step='1'
          name='fifthNumber'
          value={numbers.fifthNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          max='49'
          min='0'
          step='1'
          name='sixthNumber'
          value={numbers.sixthNumber}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default FakeLottoForm