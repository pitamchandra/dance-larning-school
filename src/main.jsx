import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Error from './Pages/Error/Error.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
