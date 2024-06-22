import ProductCard from "../productCard/ProductCard";
import classes from './Browse.module.css'

function Browse() {
  return(
    <div class={classes.indexContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default Browse;
