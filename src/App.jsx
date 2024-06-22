import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import BasketSidebar from './components/BasketSidebar.jsx/BasketSidebar'
import PaymentSidebar from './components/PaymentSidebar/PaymentSidebar'
import Browse from './components/Browse/Browse'
import Checkout from './components/Checkout/Checkout'
import Cover from './components/Cover/Cover'

function App() {


  return (
    <>
      <Nav />
      <Cover />
    </>
  )
}

export default App
