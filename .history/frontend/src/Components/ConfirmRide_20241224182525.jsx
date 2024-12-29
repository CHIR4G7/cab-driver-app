import React, { useContext } from 'react'
import { Rings } from "react-loader-spinner"
import Car from '../assets/car.svg'
import Moto from '../assets/moto.webp'
import Auto from '../assets/auto.webp'
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { RideDataContext } from '../context/RideContext';
import { useNavigate } from 'react-router-dom';

const ConfirmRide = ({ride}) => {

    const {selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide,waitingForDriver,setWaitingForDriver} = useContext(RideDataContext)
    const navigate = useNavigate();

    const handleConfirmRide = async (e)=>{
        e.stopPropagation();
        setWaitingForDriver((prev)=>!prev)
        console.log(ride)
        // navigate('/user-ride/1')
    }

    return (
        <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl p-2 pb-4 ${waitingForDriver ? 'hidden' : ''}`}>
            <span className='absolute left-3 top-4' onClick={(e)=>{
                e.stopPropagation()
                setConfirmRide((prev)=>!prev)
            }}><FaArrowLeft/></span>
            <span className='font-medium text-2xl'>Confirm Your Ride</span>
            
            <img src={Car} alt="car" className='h-[15vh] w-[15vh]' />

            <hr className='absolute w-[100%] top-[20vh]' />

            {/* The details of the selected ride. */}
            <div className='flex flex-col w-full mt-3 gap-3'>
                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Pickup</span>
                        <span className='text-gray-700'>{ride.pickup}</span>
                    </div>
                </div>

                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaSquare /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Dropoff</span>
                        <span className='text-gray-700'>{ride.destination}</span>
                    </div>
                </div>

                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaMoneyBillWave /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>₹{ride.fare}</span>
                        <span className='text-gray-700'>Cash, {ride.name}</span>
                    </div>
                </div>
            </div>
            <button className='mt-3 border-2 border-black text-white bg-black w-[85%] p-2 rounded-lg flex flex-row items-center justify-center gap-2' onClick={handleConfirmRide}>Confirm</button>
        </div>
    )
}

export default ConfirmRide
