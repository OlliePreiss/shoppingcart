import classes from './Checkout.module.css'
import CheckoutItem from './CheckoutItem';

function Checkout() {
  return(
    <div className={classes.checkoutContainer}>
      <div className={classes.checkoutTitle}>
        <p> Your bag </p>
      </div>
      <CheckoutItem />
    </div>
  )
}

export default Checkout;
