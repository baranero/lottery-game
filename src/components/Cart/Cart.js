import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'
import CartItem from "./CartItem";



const Cart = props => {

  const cartItems = <ul className={classes['cart-items']}>{props.tickets.map((item) => (
    <CartItem
      //key={item.id}
      first={item.numbers.firstNumber}
      second={item.numbers.secondNumber}
      third={item.numbers.thirdNumber}
      fourth={item.numbers.fourthNumber}
      fifth={item.numbers.fifthNumber}
      sixth={item.numbers.sixthNumber}

    />
    ))}</ul>

console.log(props.tickets);
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${props.tickets.length}</span>
      </div>
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  )
}

export default Cart 