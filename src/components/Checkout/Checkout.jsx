import classes from './Checkout.module.css'
import CheckoutItem from './CheckoutItem';
import Nav from '../Nav/Nav'
import PaymentSidebar from '../PaymentSidebar/PaymentSidebar';

function Checkout() {
  return(
    <>
      <Nav />
      <div className={classes.checkoutContainer}>
        <div className={classes.basketContainer}>
          <div className={classes.basketTitle}>
            <p> Your bag </p>
          </div>
          <CheckoutItem />
        </div>
        <PaymentSidebar />
      </div>
    </>
  )
}

export default Checkout;
