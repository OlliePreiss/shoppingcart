import classes from './CheckoutItem.module.css'
import { useOutletContext } from 'react-router-dom'
import deleteIcon from '../../assets/delete-svg.svg'

function CheckoutItem({
  product,
  addItem,
  subtractItem,
  removeItem
}) {

  return(
    <div className={classes.itemContainer}>
      <img src='' alt="" className={classes.imagePlaceholder}/>
      <div className={classes.itemInfo}>
        <p className='productTitle'> {product.title} </p>
        <p className='productDescription'> {product.description} </p>
        <p className='price'> £{product.price.toFixed(2)}</p>
        <div className={classes.quantityContainer}>
          <button className={classes.subtractButton} onClick={() => subtractItem(product.id)} > - </button>
          <p className='quantity'> {product.quantity} </p>
          <button className={classes.addButton} onClick={() => addItem(product.id)} > + </button>
          <img src={deleteIcon} className={classes.deleteIcon} onClick={() => removeItem(product.id)} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem;
