import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import user from '../assets/user.webp'
import { FaLocationDot } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { RideDataContext } from '../context/RideContext';
import { useNavigate } from 'react-router-dom';
import { FaCar } from "react-icons/fa";
import { apiRoutes } from '../utils/constants';
import axios from 'axios';

const RideAlert = ({ride}) => {

    const {rideFound,setRideFound,setConfirmRideCaptain} = useContext(RideDataContext)
    const navigate = useNavigate();
    if(!ride)
    {
        return <div>Loading...</div>
    }

    const handleAccept = async (e)=>{
        e.stopPropagation();
        console.log(ride)
        try {
            const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.confirmRideCaptain.path}`
            const data = {
                rideId: ride?._id
            }
            const response = await axios.post(url,data,{
                headers:{
                    "Content-Type": 'application/json'
                },
                withCredentials:true
            })
            console.log(response.data)
            navigate(`/captain-ride/${response.data.ride._id}`)
        } catch (error) {
            console.log(error)
        throw new Error(error)
        }
        setRideFound(false)
        setConfirmRideCaptain((prev)=>!prev)
        setConfirmRideCaptain((prev)=>!prev)
    }

    const handleIgnore = async (e)=>{
        e.stopPropagation();
        setRideFound(false)
    }

    return (
        <div className={`${rideFound ? '' : 'hidden'} absolute bg-gray-100 w-full flex flex-col bottom-0 pt-4 pb-6 rounded-t-2xl`}>
            <span className='pl-3 font-medium text-xl pb-2'>New Ride Nearby!</span>
            <div className='flex flex-row justify-between pl-1 pr-4'>
                <div className='flex flex-row '>
                    <img src={user} alt="" className='h-10 w-15' />
                    <span className='text-md font-medium'>{ride.user.fullName.firstName} {ride.user.fullName.lastName}</span>
                </div>
                <span className='font-bold text-xl'>
                    ₹{ride.fare}
                </span>
            </div>

            <div className='flex flex-col mt-4 bg-white mx-2'>

                <div className='flex flex-row gap-2 mx-3 bg-white'>
                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Pickup</span>
                        <span className='text-gray-700'>{ride.pickup}</span>
                    </div>
                </div>
                <hr />
                <div className='flex flex-row gap-2 mx-3 bg-white'>
                    <span className='mt-[1.8vh]'><FaSquare /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Dropoff</span>
                        <span className='text-gray-700'>{ride.destination}</span>
                    </div>
                </div>
                <hr/>
                <div className='flex flex-row gap-2 mx-3 bg-white'>
                    <span className='mt-[1.8vh]'><FaCar /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Vehicle</span>
                        <span className='text-gray-700'>{ride.vehicleType}</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row-reverse gap-3 mr-4'>
            <button className='mt-3 border-2 border-black text-white bg-black w-[20%] p-1 rounded-lg flex flex-row items-center justify-center gap-2' 
            onClick={handleAccept}
            >Accept</button>
            <span className='mt-4 font-medium text-gray-600' onClick={handleIgnore}>Ignore</span>
               
            </div>

        </div>
    )
}

export default RideAlert
