import React, { useContext, useEffect } from 'react'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import {UserDataContext} from '../context/UserContext'

const UserProtectedRoute = ({children}) => {

  const navigate = useNavigate();
  const token = Cookies.get("token")
  const {user,setUser} = useContext(UserDataContext)

  useEffect(()=>{
    
  },[token])
  return children;
}

const CaptainProtectedRoute = ({children})=>{

}

export default {UserProtectedRoute,CaptainProtectedRoute}
