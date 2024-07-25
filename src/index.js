import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./store/store"
// import './index.css';

import { Login } from './pages/Login/login-index';
import { Buyer } from './pages/Buyer/buyer';
import { NotFound } from './pages/404 page/NotFound';


const router = createBrowserRouter([{
  path: "/",
  element: <Login/>,
  errorElement : <NotFound/>
},
{
  path: "/buyer",
  element: <Buyer/>,
},
]);

//import Semantics UI styling 
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
);

