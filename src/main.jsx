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
import Register from './Pages/Login/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Instructors from './Pages/Instructors/Instructors';
import Classes from './Pages/Classes/Classes';
import Dashboard from './Layout/Dashboard';
import AllUser from './Pages/Dashboard/AllUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddClass from './Pages/Dashboard/Instructor/AddClass';
import MyClass from './Pages/Dashboard/Instructor/MyClass';
import Private from './Private/Private';
import UserSelectedClass from './Pages/Dashboard/Users/UserSelectedClass';
import SelectedClass from './Pages/Dashboard/Student/SelectedClass/SelectedClass';
import Update from './Pages/Dashboard/Instructor/Update';
import ManageClass from './Pages/Dashboard/Users/ManageClass';
import Payment from './Pages/Dashboard/Student/SelectedClass/Payment';
const queryClient = new QueryClient()

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
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Private><Dashboard></Dashboard></Private>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "allUser",
        element: <Private><AllUser></AllUser></Private>
      },
      {
        path: "addClass",
        element: <Private><AddClass></AddClass></Private>
      },
      {
        path: "myClass",
        element: <Private><MyClass></MyClass></Private>
      },
      {
        path: "userSelectedClass",
        element: <UserSelectedClass></UserSelectedClass>
      },
      {
        path: 'selectedClass',
        element: <SelectedClass></SelectedClass>
      },
      {
        path:"myclass/:id",
        element:<Update/>,
        loader:({params}) => fetch(`https://dance-learning-school-server-ochre.vercel.app/addClass/${params.id}`)
      },
      {
        path: 'manageClass',
        element: <ManageClass></ManageClass>
      },
    {
        path:"payment/:id",
        element: <Payment></Payment>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto'>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)