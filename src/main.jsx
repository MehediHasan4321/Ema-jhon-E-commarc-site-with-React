import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Order from './Components/Oreder/Order'
import OrderReciew from './Components/OrderReview/OrderReciew'
import Inventory from './Components/Inventory/Inventory'
import LogIn from './Components/LogIn/LogIn'
import Main from './Components/main/Main'
import cartProdcutLodaded from './CustomLoder/CustomLoder'
import SignUp from './Components/SignUp/SignUp'
import AuthProvider from './AuthProvider/AuthProvider'
import CheckOut from './Components/CheckOut/CheckOut'
import PrivetRoute from './PrivetRoute/PrivetRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'order',
        element: <Order />,
        loader: cartProdcutLodaded
      },
      {
        path: 'orderReview',
        element: <OrderReciew />
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'logIn',
        element: <LogIn />
      },
      {
        path: 'products',
        element: <Main />
      },
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path:'/checkOut',
        element:<PrivetRoute><CheckOut/></PrivetRoute>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
