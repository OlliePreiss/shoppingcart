import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import BasketSidebar from '../BasketSidebar/BasketSidebar';
import classes from './Browse.module.css'

function Browse() {
  const [products, setProducts] = useOutletContext()

  return(
    <div className={classes.browseContainer} >
      <div className={classes.indexContainer}>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
        <BasketSidebar />
    </div>
  )
}

export default Browse;
