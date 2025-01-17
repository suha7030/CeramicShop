import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Component/App';
import Error from './Pages/Error';

import Home from './Pages/Home';
//import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';
import ContactUs from './Pages/ContactUs';
import ContextProvider from './Context/ThemeContext';


const About = React.lazy(()=>import('./Pages/About'));


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<Error />,
        
        children:[
            {
                 index:true,
                 path:"/home",
                element: <Home />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/product",
                element: <Product />
            },
            {
                path:"/product/:pid",
                element: <ProductDetail />
            },
            {
                path:"/about",
                element: <React.Suspense><About/></React.Suspense>
            },
            {
                path:"/contactus",
                element: <ContactUs/>
            },
            {
                path:"*", // wild Card Path
                element: <About/>
            }
        ]
    },
    

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ContextProvider>
  <RouterProvider router={router}/>
  </ContextProvider>
    
 
);


