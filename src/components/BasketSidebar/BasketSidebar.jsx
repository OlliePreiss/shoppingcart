import classes from './BasketSidebar.module.css';
import BasketSidebarItem from './BasketSidebarItem';
import crossIcon from '../../assets/cross-svg.svg';
import { Link } from 'react-router-dom';

function BasketSidebar({
  handleChange
}) {

  return(
    <div className={classes.sidebarContainer}>
      <div className={classes.headingContainer}>
        <p> Your bag </p>
        <img src={crossIcon} alt="" className={classes.crossIcon} onClick={handleChange}/>
      </div>
      <BasketSidebarItem />
      <div className={classes.totalContainer}>
        <p>Total</p>
        <p>£20.00</p>
      </div>
      <div className={classes.paymentContainer}>
        <div className={classes.paymentButton}>
          <Link to='/checkout' className={classes.paymentText}>
            Checkout
          </Link>
        </div>
        <div className={classes.paymentButton}>
          <Link to='/checkout' className={classes.paymentText}>
            ApplePay
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BasketSidebar;
