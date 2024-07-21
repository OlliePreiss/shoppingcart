import classes from './ProductCard.module.css'
import basketIcon from '../../assets/bag-svg.svg'

function ProductCard({
  product,
  addToBasket
}) {
  return(
    <div className={classes.productCardContainer}>
      <div className={classes.imageContainer}>
        <img src={product.image} alt="" className={classes.productImage}/>
      </div>
      <div className={classes.productCardInfo}>
        <p className={classes.productTitle}> {product.title} </p>
        <div className={classes.priceContainer} >
          <p className={classes.productPrice}> £{product.price.toFixed(2)} </p>
          <img src={basketIcon} alt="" className={classes.basketIcon} onClick={() => addToBasket(product.id)} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
