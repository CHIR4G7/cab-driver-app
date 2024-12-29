import React, { useContext, useEffect } from 'react'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext'
import {CaptainDataContext} from '../context/CaptainContext'
import { apiRoutes } from '../utils/constants';
import axios from 'axios';

const UserProtectedRoute = ({ children }) => {

  const navigate = useNavigate();
  const token = Cookies.get("user_token")
  const { user, setUser } = useContext(UserDataContext)

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return;
    }else if(token===null){
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
          // console.log("user",response.data);
          setUser(response)
          // if(!response.data){
          //   fetchUserProfile();
          // }
        }else
        {
          navigate('/login')
        }
      } catch (error) {
        console.error(err.message);
        navigate('/login');
      }
    }
    if(!user){
      console.log('undefiend user')
      fetchUserProfile();
    }
  }, [token,navigate])
  return <>{children}</>;
}

export const CaptainProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookies.get("captain_token")
  const {captain,setCaptain} = useContext(CaptainDataContext)

  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
      return
    }

    const fetchCaptainProfile = async ()=>{
      try {
        const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getCaptainProfile.path}`
        const response = await axios.get(url,{
          withCredentials:true
        })

        if(response.status===200)
        {
          // console.log("captain",response.data)
          setCaptain(response.data);
        }else{
          navigate('/captain-login')
        }
      } catch (error) {
        console.error(err.message);
        navigate('/captain-login');
      }
    }
    fetchCaptainProfile();
  }, [token,setCaptain,navigate])
  return <>{children}</>;
}

export default UserProtectedRoute
