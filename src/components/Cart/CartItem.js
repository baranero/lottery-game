const CartItem = props => {

  return (
    <li>
      <div>
        <h2>{props.first} {props.second}</h2>
        <div>
          <span>price</span>
          <span>x amount</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>Delete</button>
      </div>
    </li>
  )

}

export default CartItem 

