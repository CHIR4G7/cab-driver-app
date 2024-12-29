import React, { useContext, useEffect } from 'react'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import {UserDataContext} from '../context/UserContext'
import { apiRoutes } from '../utils/constants';

const UserProtectedRoute = ({children}) => {

  const navigate = useNavigate();
  const token = Cookies.get("token")
  const {user,setUser} = useContext(UserDataContext)

  useEffect(()=>{
    if(!token)
    {
      navigate('/login')
    }
    const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getUserInfo.path}`
    axios.get()
  },[token])
  return children;
}

const CaptainProtectedRoute = ({children})=>{

}

export default {UserProtectedRoute,CaptainProtectedRoute}
