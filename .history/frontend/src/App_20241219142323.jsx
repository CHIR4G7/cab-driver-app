import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy} from 'react'
import {ProtectedRoute} from './Pages/Protectedroute';

const HomePage = lazy(()=>import('./Pages/HomePage'))
const UserLogin = lazy(()=>import('./Pages/UserLogin'))
const UserSignUp = lazy(()=>import('./Pages/UserSignUp'))
const CaptainLogin = lazy(()=>import('./Pages/CaptainLogin'))
const CaptainsignUp = lazy(()=>import('./Pages/CaptainsignUp'))
const MapHome = lazy(()=>import('./Pages/MapHome'))
const CaptainHome = lazy(()=>import('./Pages/CaptainHome'))

const router = createBrowserRouter([
  {
    path : '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <UserLogin/>
  },
  {
    path: '/signup',
    element: <UserSignUp/>
  },
  {
    path: '/captain-login',
    element:<CaptainLogin/>
  },
  {
    path: '/captain-signup',
    element:<CaptainsignUp/>
  },
  {
    path:'/user-home',
    element:<ProtectedRoute><MapHome/></ProtectedRoute>
  },
  {
    path: '/captain-home',
    element: <ProtectedRoute><CaptainHome/></ProtectedRoute>
  }
])

const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
