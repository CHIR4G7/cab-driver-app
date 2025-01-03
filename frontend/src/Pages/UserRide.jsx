import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mapimg from '../assets/mapimg.png'
import DriverFound from '../Components/DriverFound';
import WaitingForDriver from '../Components/WaitingForDriver';
import { apiRoutes } from '../utils/constants';
import axios from 'axios';
import { RideDataContext } from '../context/RideContext';
import { SocketContext } from '../context/SocketContext';
import LiveTracking from '../Components/LiveTracking';

const UserRide = () => {

  const {waitingForDriver,setWaitingForDriver,driverFound,setDriverFound} = useContext(RideDataContext)
    const {id} = useParams();

    const [rideDetails,setRideDetails] = useState(null)
    const {socket} = useContext(SocketContext)

    socket.on('ride-confirmed',(data)=>{
      console.log(data)
      setWaitingForDriver(false)
      setDriverFound(true)
      setRideDetails(data)
    })

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
    useEffect(() => {
      setWaitingForDriver(true)
      if (rideDetails===null) {
        fetchRideDetails()
      }
      if(rideDetails?.status === 'accepted' || rideDetails?.status==='ongoing'){
        setDriverFound(true)
        setWaitingForDriver(false)
      }
    }, [rideDetails]);

  return (
    <div>
            <span className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        {/* <img src={mapimg} alt="" className='h-screen w-screen' /> */}
        {rideDetails && <LiveTracking rideDetails={rideDetails}/>}
      </div>

      {/* Waiting for Driver */}
      {waitingForDriver && <WaitingForDriver ride={rideDetails}/>}

      {/* Driver Found */}
      {driverFound && <DriverFound ride={rideDetails}/>}
    </div>
  )
}

export default UserRide
