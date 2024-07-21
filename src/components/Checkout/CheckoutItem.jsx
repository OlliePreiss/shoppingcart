import classes from './CheckoutItem.module.css'

function CheckoutItem({
  product
}) {

  return(
    <div className={classes.itemContainer}>
      <img src='' alt="" className={classes.imagePlaceholder}/>
      <div className={classes.itemInfo}>
        <p className='productTitle'> {product.title} </p>
        <p className='productDescription'> {product.description} </p>
        <p className='price'> £{product.price.toFixed(2)}</p>
        <div className={classes.quantityContainer}>
          <p className='quantity'> x{product.quantity} </p>
          <img src='' alt="" className={classes.deleteIcon}/>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem;
