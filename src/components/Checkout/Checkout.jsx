import classes from './Checkout.module.css'
import CheckoutItem from './CheckoutItem';
import PaymentSidebar from '../PaymentSidebar/PaymentSidebar';
import { useOutletContext } from 'react-router-dom'

function Checkout() {
  const [products, setProducts] = useOutletContext()
  const basket = products.filter(product => product.inBasket)
  const basketTotal = basket.reduce((sum, product) => sum + (product.price * product.quantity), 0)

  return(
    <>
      <div className={classes.checkoutContainer}>
        <div className={classes.basketContainer}>
          <div className={classes.basketTitle}>
            <p> Your bag </p>
          </div>
          {basket.map((product) =>
            <CheckoutItem product={product} />
          )}
        </div>
        <PaymentSidebar basketTotal={basketTotal} />
      </div>
    </>
  )
}

export default Checkout;
