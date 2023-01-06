const CartItem = props => {
    <li className={classes['cart-item']}>
      <div>
        <h2>name</h2>
        <div>
          <span>price</span>
          <span>x amount</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>Delete</button>
      </div>
    </li>
}

export default CartItem 