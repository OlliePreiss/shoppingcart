import React from 'react'
import App from './App'
import Cover from './components/Cover/Cover'
import Browse from './components/Browse/Browse'
import Checkout from './components/Checkout/Checkout'
import ErrorPage from './components/ErrorPage/ErrorPage'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Cover />
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
  },
]

export default routes;
