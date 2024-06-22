import classes from './BasketSidebar.module.css'
import BasketSidebarItem from './BasketSidebarItem';
import crossIcon from '../../assets/cross-svg.svg'

function BasketSidebar() {
  return(
    <div className={classes.sidebarContainer}>
      <div className={classes.headingContainer}>
        <p> Your bag </p>
        <img src={crossIcon} alt="" className={classes.crossIcon}/>
      </div>
      <BasketSidebarItem />
      <div className={classes.totalContainer}>
        <p>Total</p>
        <p>£20.00</p>
      </div>
      <div className={classes.paymentContainer}>
        <div className={classes.paymentButton}>
          <p>Checkout</p>
        </div>
        <div className={classes.paymentButton}>
          <p>ApplePay</p>
        </div>
      </div>
    </div>
  )
}

export default BasketSidebar;
