import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import BasketSidebar from '../BasketSidebar/BasketSidebar';
import classes from './Browse.module.css'

function Browse() {
  const {
    products,
    setProducts,
    handleAddItem,
    handleSubtractItem,
    handleRemoveFromBasket,
    handleAddToBasket
  } = useOutletContext()

  return(
    <div className={classes.browseContainer} >
      <div className={classes.indexContainer}>
        {products.map(product => (
          <ProductCard
            product={product}
            key={product.id}
            addToBasket={handleAddToBasket} />
        ))}
      </div>
        <BasketSidebar
          products={products}
          setProducts={setProducts}
          addItem={handleAddItem}
          subtractItem={handleSubtractItem}
          removeFromBasket={handleRemoveFromBasket} />
    </div>
  )
}

export default Browse;
