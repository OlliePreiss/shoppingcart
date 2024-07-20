import classes from './ProductCard.module.css'

function ProductCard({
  product
}) {
  return(
    <div className={classes.productCardContainer}>
      <div className={classes.imageContainer}>
        <img src={product.image} alt="" className={classes.productImage}/>
      </div>
      <div className={classes.productCardInfo}>
        <p className={classes.productTitle}> {product.title} </p>
        <p className={classes.productPrice}> £{product.price.toFixed(2)} </p>
      </div>
    </div>
  )
}

export default ProductCard;
