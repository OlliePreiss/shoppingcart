import classes from './ProductCard.module.css'

function ProductCard() {
  return(
    <div className={classes.productCardContainer}>
      <div className={classes.imagePlaceholder}></div>
      <div className={classes.productCardInfo}>
        <p className={classes.productTitle}> The Samina </p>
        <p className='productDescription'> Premium ceramic glazed pot and saucer </p>
        <p className='price'> £20.00 </p>
      </div>
    </div>
  )
}

export default ProductCard;
