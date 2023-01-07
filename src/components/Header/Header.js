
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <header>
      <h1>
        Fake Lottery
      </h1>
      <div className={classes.navigation}>
        <ul>
          <li>Fake Jackpot</li>
          <li>Fake Lotto</li>
          <li>Fake Multi</li>
        </ul>
        <HeaderCartButton tickets={props.tickets} onClick={props.onShowCart}/>
      </div>
    </header>
  )

}

export default Header