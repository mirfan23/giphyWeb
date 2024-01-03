import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IronManGiphy from './container/ironmanGiphy';
import SearchGiphy from './container/searchGiphy';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>{<App />}</div>
  },
  {
    path:"/ironman",
    element: <div>{<IronManGiphy />}</div>
  },
  {
    path:"/search",
    element: <div>{<SearchGiphy />}</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
