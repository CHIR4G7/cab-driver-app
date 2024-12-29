import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mapimg from '../assets/mapimg.png'
import DriverFound from '../Components/DriverFound';
import WaitingForDriver from '../Components/WaitingForDriver';
import { apiRoutes } from '../utils/constants';
import axios from 'axios';

const UserRide = () => {
    const {id} = useParams();
    console.log(id)

    const [rideDetails,setRideDetails] = useState(null)

    const fetchRideDetails = async ()=>{
      try {
        const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getRideInfo.path}`
        const data = {
          id:id
        }
        
        const response = await axios.post(url,data,{
          headers:{
            "Content-Type": 'application/json'
          },
          withCredentials:true
        })
        
        setRideDetails(response.data.ride)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    }

    useEffect(()=>{
      fetchRideDetails();
    },[id])
  return (
    <div>
            <span className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>

      {/* Waiting for Driver */}
      <WaitingForDriver/>

      {/* Driver Found */}
      <DriverFound />
    </div>
  )
}

export default UserRide
