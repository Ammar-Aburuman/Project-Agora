import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import './index.css';


import { Login } from './pages/Login/login-index';
import { Seller } from './pages/Seller/seller';
import { Buyer } from './pages/Buyer/buyer';
import { NotFound } from './pages/404 page/NotFound';


const router = createBrowserRouter([{
  path: "/",
  element: <Login/>,
  errorElement : <NotFound/>
},
{
  path: "/seller",
  element: <Seller/>,
},
{
  path: "/buyer",
  element: <Buyer/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

