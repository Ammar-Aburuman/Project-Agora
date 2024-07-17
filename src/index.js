import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./store/store"
import './index.css';


import { Login } from './pages/Login/login-index';
import { Seller } from './pages/Seller/seller';
import { Buyer } from './pages/Buyer/buyer';
import { AddListing } from './pages/Buyer/Add Listing/addListing';
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
  path: "/list",
  element: <AddListing/>,
},
{
  path: "/buyer",
  element: <Buyer/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
);

