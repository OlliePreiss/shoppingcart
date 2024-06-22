import classes from './CheckoutItem.module.css'

function CheckoutItem() {
  return(
    <div className={classes.itemContainer}>
      <img src='' alt="" className={classes.imagePlaceholder}/>
      <div className={classes.itemInfo}>
        <p className='productTitle'> The Samina </p>
        <p className='price'> £20.00</p>
        <div className={classes.quantityContainer}>
          <p className='quantity'> x1 </p>
          <img src='' alt="" className={classes.deleteIcon}/>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem;
