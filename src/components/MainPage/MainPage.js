import classes from "./MainPage.module.css"

const MainPage = props => {
  return (
    <section className={classes.summary}>
      <h2>Take the chance to change your life</h2>
      <p>Fake Lottery is a fake web application inspired by the most popular games</p>
      <button onClick={props.onShowLotto} className={classes['start-button']}>Start now!</button>
    </section>
  )
}

export default MainPage