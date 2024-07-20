import React from 'react'
import Cover from './components/Cover/Cover'
import Browse from './components/Browse/Browse'
import Checkout from './components/Checkout/Checkout'
import ErrorPage from './components/ErrorPage/ErrorPage'

const routes = [
  {
    path: '/',
    element: <Cover />,
    errorElement: <ErrorPage />
  },
  {
    path: 'browse',
    element: <Browse />
  },
  {
    path: 'checkout',
    element: <Checkout />
  }
]

export default routes;
