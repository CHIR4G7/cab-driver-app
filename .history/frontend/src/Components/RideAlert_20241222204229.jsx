import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import user from '../assets/user.webp'
import { FaLocationDot } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";

const RideAlert = () => {

    return (
        <div className='absolute bg-gray-100 w-full flex flex-col bottom-0 pt-4 pb-6 rounded-t-2xl'>
            <div className='flex flex-row justify-between pl-1 pr-4'>
                <div className='flex flex-row '>
                    <img src={user} alt="" className='h-10 w-15' />
                    <span className='text-md font-medium'>Chirag Gupta</span>
                </div>
                <span className='font-bold text-xl'>
                    ₹200
                </span>
            </div>

            <div className='flex flex-col mt-4 bg-white mx-2'>

                <div className='flex flex-row gap-2 mx-3 bg-white'>
                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Pickup</span>
                        <span className='text-gray-700'>Punjab Engineering College</span>
                    </div>
                </div>
                <hr />
                <div className='flex flex-row gap-2 mx-3 bg-white'>
                    <span className='mt-[1.8vh]'><FaSquare /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Dropoff</span>
                        <span className='text-gray-700'>Ovenfresh Sector-26</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row-reverse'>
                <span>Ignore</span>
                <button className='mt-3 border-2 border-black text-white bg-black w-[85%] p-2 rounded-lg flex flex-row items-center justify-center gap-2' >Accept</button>
            </div>

        </div>
    )
}

export default RideAlert
