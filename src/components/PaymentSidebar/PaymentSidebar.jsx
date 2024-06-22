import classes from './PaymentSidebar.module.css'
import downArrow from '../../assets/down-arrow-svg.svg'

function PaymentSidebar() {
  return(
    <div className={classes.sidebarContainer}>
      <div className={classes.discountCodeContainer}>
        <p>Add a discount code</p>
        <img src={downArrow} alt="" className={classes.downArrow}/>
      </div>
      <div className={classes.summaryContainer}>
        <div className={classes.subtotal}>
          <p>Subtotal:</p>
          <p>£20.00</p>
        </div>
        <div className={classes.shipping}>
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <hr className={classes.lineBreak}/>
        <div className={classes.total}>
          <p>Total:</p>
          <p>£20.00</p>
        </div>
        <div className={classes.paymentContainer}>
          <div className={classes.paymentButton}>
            <p>Checkout</p>
          </div>
          <p>or</p>
          <div className={classes.paymentButton}>
            <p>ApplePay</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSidebar;
