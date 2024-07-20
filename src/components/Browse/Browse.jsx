import { useState } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Nav from '../Nav/Nav'
import BasketSidebar from '../BasketSidebar/BasketSidebar';
import classes from './Browse.module.css'
import products from '../../products'

function Browse() {
  const [viewBasket, setViewBasket] = useState(true);

  function handleChange() {
    setViewBasket(!viewBasket)
  }

  return(
    <>
      <Nav
        handleChange={handleChange}
      />
      <div className={classes.browseContainer} >
        <div className={classes.indexContainer}>
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
        { viewBasket ?
          <BasketSidebar
            handleChange={handleChange}
          />
        :
          null
        }
      </div>
    </>
  )
}

export default Browse;
