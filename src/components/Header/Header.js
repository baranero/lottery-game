import logo from '../../images/logo.png'
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"
import LogInIcon from './LogInIcon'
import SignInIcon from './SignIcon'



const Header = (props) => {
  return (
    <header>
      <div className={classes.navigation}>
        <a href="/"><img src={logo} /></a>
        <ul>
          <li onClick={props.onShowLotto}>Fake Lotto</li>
          <li>Fake Jackpot</li>
          <li>Fake Multi</li>
        </ul>
      </div>
      <div className={classes.icons}>
        <HeaderCartButton tickets={props.tickets} onClick={props.onShowCart}/>
        <span className={classes.icon}><LogInIcon/></span>
        <span className={classes.icon}><SignInIcon /></span>
      </div>
    </header>
  )

}

export default Header