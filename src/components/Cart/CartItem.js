import classes from './CartItem.module.css'
const CartItem = props => {

  return (
    <li className={classes['cart-item']}>
      <div>
        <div className={classes.numbers}>
          <span className={classes['number-item']}>{props.first}</span>
          <span className={classes['number-item']}>{props.second}</span>
          <span className={classes['number-item']}>{props.third}</span>
          <span className={classes['number-item']}>{props.fourth}</span>
          <span className={classes['number-item']}>{props.fifth}</span>
          <span className={`${classes['number-item']} ${classes['last-number']}`}>{props.sixth}</span>
        </div>
      </div>
      <div>
        <button value={props.item.id} onClick={props.onRemove}>Delete</button>
      </div>
    </li>
  )

}

export default CartItem 

