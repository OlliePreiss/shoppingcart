import classes from './BasketSidebar.module.css';
import BasketSidebarItem from './BasketSidebarItem';
import crossIcon from '../../assets/cross-svg.svg';
import { Link, useOutletContext } from 'react-router-dom';

function BasketSidebar() {
  const [products, setProducts] = useOutletContext()
  const basket = products.filter(product => product.inBasket)
  const basketTotal = basket.reduce((sum, product) => sum + (product.price * product.quantity), 0)

  return(
    <div className={classes.sidebarContainer}>
      <div className={classes.headingContainer}>
        <p> Your bag </p>
        <img src={crossIcon} alt="" className={classes.crossIcon} />
      </div>
      {basket.map(product => (
          <BasketSidebarItem product={product} />
        ))}
      <div className={classes.totalContainer}>
        <p>Total</p>
        <p>£{basketTotal.toFixed(2)} </p>
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
