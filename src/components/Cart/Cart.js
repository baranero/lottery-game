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
    />
    ))}</ul>

  return (
    // <div>
    //   {props.tickets.map((ticket) => (
    //      <div>
    //        <span>{ticket.numbers.firstNumber}</span>
    //        <span>{ticket.numbers.secondNumber}</span>
    //        <span>{ticket.numbers.thirdNumber}</span>
    //        <span>{ticket.numbers.fourthNumber}</span>
    //        <span>{ticket.numbers.fifthNumber}</span>
    //        <span>{ticket.numbers.sixthNumber}</span>
    //      </div>
    //      )
    //   )}
    // </div>



    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>total</span>
      </div>
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  )
}

export default Cart 