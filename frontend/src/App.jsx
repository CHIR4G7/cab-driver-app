import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy} from 'react'
import UserProtectedRoute,{CaptainProtectedRoute} from './Pages/ProtectedRoute';
import Map from './Components/Map';
import UserRide from './Pages/UserRide';
import CaptainRide from './Pages/CaptainRide';
import GoogleMapsProvider from './context/GoogleMapsProvider';

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
    element:<UserProtectedRoute><MapHome/></UserProtectedRoute>
  },
  {
    path: '/captain-home',
    element: <CaptainProtectedRoute><CaptainHome/></CaptainProtectedRoute>
  },
  {
    path: '/user-ride/:id',
    element : <UserProtectedRoute>
      
        <UserRide/>
        
        </UserProtectedRoute>
  },
  {
    path: '/captain-ride/:id',
    element : <CaptainProtectedRoute><CaptainRide/></CaptainProtectedRoute>
  },
])

const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
