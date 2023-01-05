import React, { useContext } from "react";


const Cart = props => {

  return (
    <div>
      {props.tickets.map((ticket) => (
         <div>
           <span>{ticket.numbers.firstNumber}</span>
           <span>{ticket.numbers.secondNumber}</span>
           <span>{ticket.numbers.thirdNumber}</span>
           <span>{ticket.numbers.fourthNumber}</span>
           <span>{ticket.numbers.fifthNumber}</span>
           <span>{ticket.numbers.sixthNumber}</span>
         </div>
         )
      )}
    </div>
  )
}

export default Cart