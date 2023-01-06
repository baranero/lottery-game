import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import FakeLotto from './components/Lotteries/FakeLotto';
import MainPage from './components/MainPage/MainPage';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
  const [tickets, setTickets] = useState([])

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const addTicketHandler = (ticket) => {
    setTickets((prevTickets => {
      return [...prevTickets, ticket]
    }))
  }
console.log(tickets);
  return (
    <div className="App">
      {cartIsShown && <Cart tickets={tickets} onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <MainPage/>
      <FakeLotto onAddTicket={addTicketHandler} />
    </div>
  );
}

export default App;
