import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from '../src/Composants/Contact'
import Page_erreur from './Composants/Page_erreur';
import Services from './Composants/Services';
import About from './Composants/About';
import Paiement from './Composants/Paiement';

const Route = createBrowserRouter([{
  path: "/", element: <App />
}, {
  path: '/Contact',
  element: <Contact />
},{
  path:'/About',
  element:<About/>
},{
  path: '/Services',
  element: <Services />
},{
  path: '/Paiement',
  element: <Paiement />
}, {
  path: "*",
  element: <Page_erreur />
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
