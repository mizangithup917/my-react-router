import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index:true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'about', Component: About},
      {path: 'services', Component:Services}
    ]

  },
  {
    path:"about",
    element: <div>About me here</div>
  },
  {
    path:"blog",
    element: <div>All my Blogs</div>
  },
  {
    path:"app",
    Component:App
  },
  {
    path: "home",
    element: <dov>This is Home</dov>
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
