import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart = props => {
  const cartCtx = useContext(CartContext)

  return (
    <div>
      <p>Total amount {`${cartCtx.totalAmount}`}</p>
    </div>
  )
}