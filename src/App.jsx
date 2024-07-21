import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import productSeed from './productSeed'
import './App.css'


function App() {
  const [products, setProducts] = useState(productSeed)
  const basketSize = products.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <div>
      <Nav basketSize={basketSize} />
      <Outlet context={[products, setProducts]} />
    </div>
  )
}

export default App
