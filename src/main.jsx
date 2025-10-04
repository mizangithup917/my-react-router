import { Component, StrictMode, Suspense } from 'react'
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
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';



const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index:true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'about', Component: About},
      {path: 'services', Component:Services},
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
     },
     {
      path:'users2', 
      element: <Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>

      </Suspense>
     },
     {
      path:'users/:userId',
      loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component: UserDetails
     }
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
