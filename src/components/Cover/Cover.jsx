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
      <div className={classes.coverContainer}>
        <div className='tagline'>
          <h1>Welcome to Grow.</h1>
        </div>
        <div className={classes.description}>
          <h3>Stylish plants for modern homes. Explore our range of timeless and exotic plans. Delivered to your door, ready to grow.</h3>
        </div>
        <Link to="browse" className={classes.coverButton}>Explore our range</Link>
      </div>
    </>
  )
}

export default Cover;
