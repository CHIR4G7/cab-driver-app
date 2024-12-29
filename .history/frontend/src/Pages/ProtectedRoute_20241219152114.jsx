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
    }
    const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getUserProfile.path}`

    axios.get(url, {
      withCredentials: true
    }).then((response) => {
      if (response.status === '200') {
        console.log(response.data)
        setUser(response.data)
        navigate('/user-home')
      }
    }).catch((err) => {
      navigate('/login')
    })
  }, [token])
  return children;
}

export const CaptainProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookies.get("token")
  const {captain,setCaptain} = useContext(CaptainDataContext)

  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
    }
    const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getCaptainProfile.path}`

    axios.get(url, {
      withCredentials: true
    }).then((response) => {
      if (response.status === '200') {
        setCaptain(response.data)
        navigate('/captain-home')
      }
    }).catch((err) => {
      navigate('/captain-login')
    })
  }, [token])
  return children;
}

export default UserProtectedRoute
