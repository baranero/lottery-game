import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'
import CartItem from "./CartItem";



const Cart = props => {

  const priceOfElements = props.tickets.map(item => item.price)
  const totalAmount = priceOfElements.reduce((partialSum, a) => partialSum + a, 0)
  
  const cartItems = <ul className={classes['cart-items']}>{props.tickets.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      first={item.numbers.firstNumber}
      second={item.numbers.secondNumber}
      third={item.numbers.thirdNumber}
      fourth={item.numbers.fourthNumber}
      fifth={item.numbers.fifthNumber}
      sixth={item.numbers.sixthNumber}
      onRemove={props.onRemove}
    />
    ))}</ul>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  )
}

export default Cart 