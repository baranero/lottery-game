import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import AuthContext from '../../store/auth-context'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import Input from '../UI/Input/Input'
import Modal from '../UI/Modal'
import classes from './Login.module.css'

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier =  setTimeout(() => {
      console.log('Check');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500)

    clearTimeout()

    return () => {
      console.log('clean');
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })

    setFormIsValid(event.target.value.includes('@') && passwordState.isValid)
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    )
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value)
    } else if (!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  }

  return (
    <Card className={classes.login} >
    <Modal onClose={props.onClose}>

        <form onSubmit={submitHandler}>
          <Input
            ref={emailInputRef}
            id='email'
            label='E-mail'
            isValid={emailIsValid}
            type='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <Input
            ref={passwordInputRef}
            id='password'
            label='Password'
            isValid={passwordIsValid}
            type='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <div className={classes.actions}>
            <Button type='submit' className={classes.btn}>
              Login
            </Button>
          </div>
        </form>
        </Modal>
      </Card>

  )
}

export default Login