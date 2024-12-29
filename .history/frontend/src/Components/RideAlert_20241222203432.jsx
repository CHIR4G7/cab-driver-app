import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import user from '../assets/user.webp'

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

            <div>
                <div className='flex flex-col w-full mt-3 gap-3'>
                                <div className='flex flex-row gap-2  w-full'>
                                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                                    <div className='flex flex-col'>
                                        <span className='font-medium text-md'>Pickup</span>
                                        <span className='text-gray-700'>Punjab Engineering College</span>
                                    </div>
                                </div>
                
            </div>
        </div>
    )
}

export default RideAlert
