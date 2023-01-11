import { Fragment, useContext } from 'react'
import logo from '../../images/logo.png'
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"
import LogInIcon from './LogInIcon'
import SignInIcon from './SignIcon'
import AuthContext from '../../store/auth-context'
import Button from '../UI/Button/Button'



const Header = (props) => {
  const ctx = useContext(AuthContext)
  return (
    <header>
      <div className={classes.navigation}>
        <a href="/"><img src={logo} /></a>
        {ctx.isLoggedIn && (
                  <ul>
                  <li onClick={props.onShowLotto}>Fake Lotto</li>
                  <li>Fake Jackpot</li>
                  <li>Fake Multi</li>
                </ul>

        )}

</div>
              <div className={classes.icons}>
                <HeaderCartButton tickets={props.tickets} onClick={props.onShowCart}/>
                {ctx.isLoggedIn ? <Fragment><Button onClick={ctx.onLogout}>Logout</Button> </Fragment> :
                                 <Fragment>
                                   <span className={classes.icon}><LogInIcon/></span>
                                    <span className={classes.icon}><SignInIcon /></span>
                                 </Fragment>
                                  
                }
                </div>
    </header>
  )

}

export default Header