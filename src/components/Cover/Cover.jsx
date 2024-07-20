import classes from './Cover.module.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import BasketSidebar from '../BasketSidebar/BasketSidebar'
import PaymentSidebar from '../PaymentSidebar/PaymentSidebar'
import Browse from '../Browse/Browse'
import Checkout from '../Checkout/Checkout'
import { useEffect } from 'react'

function Cover() {

  return(
    <>
      <Nav />
      <div className={classes.coverContainer}>
        <div className='tagline'>
          <h1>Stylish plantpots for modern homes</h1>
        </div>
        <div className={classes.description}>
          <h3>Explore our range of handmade, ceramic platpots and saucers, expertly crafted to enhance your home aesthetic</h3>
        </div>
        <Link to="browse" className={classes.coverButton}>Explore our range</Link>
      </div>
    </>
  )
}

export default Cover;
