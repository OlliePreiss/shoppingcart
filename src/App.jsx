import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import routes from './routes'
import products from './products'

const router = createBrowserRouter(routes)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
