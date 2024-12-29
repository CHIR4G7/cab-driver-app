import React, { useContext, useEffect } from 'react'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext'
import {CaptainDataContext} from '../context/CaptainContext'
import { apiRoutes } from '../utils/constants';
import axios from 'axios';

const UserProtectedRoute = ({ children }) => {

  const navigate = useNavigate();
  const token = Cookies.get("token")
  const { user, setUser } = useContext(UserDataContext)

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return;
    }
    const fetchUserProfile = async ()=>{
      try {
        const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getUserProfile.path}`
        const response = await axios.get(url,{
          withCredentials:true
        })
        if(response.status===200)
        {
          console.log(response.data);
          setUser(response.data)
          navigate('/user-home')
        }else
        {
          navigate('/login')
        }
      } catch (error) {
        console.error(err.message);
        navigate('/login');
      }
    }
    fetchUserProfile();
  }, [token,navigate,setUser])
  return children;
}

export const CaptainProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookies.get("token")
  const {captain,setCaptain} = useContext(CaptainDataContext)

  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
      return
    }

    const fetchCaptainProfile = async ()=>{
      try {
        
      } catch (error) {
        console.error(err.message);
        navigate('/captain-login');
      }
    }
  }, [token])
  return children;
}

export default UserProtectedRoute