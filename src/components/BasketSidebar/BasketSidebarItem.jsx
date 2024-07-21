import classes from './BasketSidebarItem.module.css'
import deleteIcon from '../../assets/delete-svg.svg'

function BasketSidebarItem({
  product,
  addItem,
  subtractItem,
  removeItem
}) {

  return (
    <div className={classes.itemContainer}>
    <img src='' alt="" className={classes.imagePlaceholder}/>
    <div className={classes.itemInfo}>
      <p className='productTitle'> {product.title} </p>
      <p className='price'> £{product.price.toFixed(2)} </p>
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

export default BasketSidebarItem;
