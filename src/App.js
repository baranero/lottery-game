import { Fragment, useContext, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import FakeLotto from './components/Lotteries/FakeLotto';
import MainPage from './components/MainPage/MainPage';
import AuthContext from './store/auth-context'

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
  const [tickets, setTickets] = useState([])
  const [lottoIsShown, setLottoIsShown] = useState(false)
  const [mainPageIsShown, setMainPageIsShown] = useState(true)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const showLotto = () => {
    setLottoIsShown(prevState => !prevState)
    setMainPageIsShown(false)
  }

  const addTicketHandler = (ticket) => {
    setTickets((prevTickets => {
      return [...prevTickets, ticket]
    }))
  }

  const removeTicketHandler = (event) => {
  setTickets(current =>
    current.filter(ticketsItem => {
      return +ticketsItem.id !== +event.target.value
    }))
  }

  const ctx = useContext(AuthContext)
  console.log(ctx.onLogout);
  return (
   <Fragment>
        {cartIsShown && <Cart tickets={tickets} onClose={hideCartHandler} onRemove={removeTicketHandler}/>}
        <Header onShowCart={showCartHandler} tickets={tickets} onShowLotto={showLotto} />
        {!ctx.isLoggedIn && <Login />}
        {mainPageIsShown && <MainPage onShowLotto={showLotto}/>}
        {ctx.isLoggedIn && lottoIsShown && <FakeLotto onAddTicket={addTicketHandler} />}
    </Fragment>
  );
}

export default App;
