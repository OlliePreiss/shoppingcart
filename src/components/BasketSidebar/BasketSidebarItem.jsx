import classes from './BasketSidebarItem.module.css'
import deleteIcon from '../../assets/delete-svg.svg'

function BasketSidebarItem({
  product
}) {

  return (
    <div className={classes.itemContainer}>
    <img src='' alt="" className={classes.imagePlaceholder}/>
    <div className={classes.itemInfo}>
      <p className='productTitle'> {product.title} </p>
      <p className='price'> £{product.price.toFixed(2)} </p>
      <div className={classes.quantityContainer}>
        <p className='quantity'> {product.quantity} </p>
        <img src={deleteIcon} alt="" className={classes.deleteIcon}/>
      </div>
    </div>
  </div>
  )
}

export default BasketSidebarItem;
