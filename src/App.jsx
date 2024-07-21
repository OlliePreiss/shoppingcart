import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import productSeed from './productSeed'
import './App.css'


function App() {
  const [products, setProducts] = useState(productSeed)
  const basketSize = products.reduce((sum, product) => sum + product.quantity, 0)

  function handleAddItem(id) {
    const arr = products.map(product =>
      product.id === id ? {
        ...product,
          quantity: product.quantity + 1 }
      : product
    );
    setProducts(arr)
  }

  function handleSubtractItem(id) {
    const arr = products.map(product =>
      product.id === id ?
        product.quantity > 1 ?
          {
            ...product,
              quantity: product.quantity - 1
          }
        : product
      : product,
    );
    setProducts(arr)
  }

  function handleRemoveFromBasket(id) {
    const arr = products.map(product =>
      product.id === id ? {...product,
        inBasket: false,
        quantity: 0
      }
      : product,
    );
    setProducts(arr);
  }

  function handleAddToBasket(id) {
    const arr = products.map(product =>
      product.id === id ?
        product.inBasket ? {...product, quantity: product.quantity + 1 }
          : {...product,
              inBasket: true,
              quantity: product.quantity + 1
            }
        : product,
    );
    setProducts(arr);
  }

  return (
    <div>
      <Nav basketSize={basketSize} />
      <Outlet context={{products, setProducts, handleAddItem, handleSubtractItem, handleRemoveFromBasket, handleAddToBasket}} />
    </div>
  )
}

export default App
