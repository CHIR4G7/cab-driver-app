import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import mapimg from '../assets/mapimg.png'
import { CaptainDataContext } from '../context/CaptainContext'
import BeginRideOtp from '../Components/BeginRideOtp'
import RideStart from '../Components/RideStart'
import FinishRide from '../Components/FinishRide'
import { apiRoutes } from '../utils/constants';
import { RideDataContext } from '../context/RideContext'
import axios from 'axios'
import LiveTracking from '../Components/LiveTracking'
import { SocketContext } from '../context/SocketContext'

const CaptainRide = () => {

  const { id } = useParams()
  const { captain } = useContext(CaptainDataContext)
  const {confirmRideCaptain,setConfirmRideCaptain,rideStarted,setRideStarted,finishRide,setFinishRide} = useContext(RideDataContext)
  const {socket} = useContext(SocketContext)
  const [rideDetails, setRideDetails] = useState(null)

  socket.on('ride-ended',async (data)=>{
    
  })

  const fetchRideDetails = async () => {
    try {
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getRideInfo.path}`
      const data = {
        id: id
      }
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": 'application/json'
        },
        withCredentials: true
      })
      setRideDetails(response.data.ride)
      console.log(response.data.ride)
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  useEffect(() => {
    setConfirmRideCaptain(true)
    if (rideDetails === null) {
      fetchRideDetails()
    }
  }, [rideDetails]);

  if (!captain || !rideDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='absolute top-0 text-xl font-semibold bg-white text-black w-full flex flex-row justify-between px-2 h-11 pt-1'>
        <div>
          <span className='absolute mt-[0.6vh]'>Welcome Captain</span>
        </div>

        {/* Toogle Captain Active button */}
        <button className='w-20 h-9 border-2 border-black text-black rounded-md' >{captain.status}</button>
      </div>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        {/* <img src={mapimg} alt="" className='h-screen w-screen' /> */}
        <LiveTracking/>
      </div>
      {console.log(rideDetails)}
      {/* Get Otp Component */}
      {confirmRideCaptain && rideDetails.status==='accepted' && <BeginRideOtp ride={rideDetails}/>}

      {/* Ride has Started now all the info is in this component */}
      { <RideStart ride={rideDetails}/>}

      {/* This id the final page with ride summaray and ayment status for captain */}
      <FinishRide />
    </div>
  )
}

export default CaptainRide
