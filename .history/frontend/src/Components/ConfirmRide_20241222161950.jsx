import React from 'react'
import {Rings} from "react-loader-spinner"
import car from '../assets/car.svg'
import { FaLocationDot } from "react-icons/fa6";

const ConfirmRide = ({ confirmRide, setConfirmRide }) => {
    return (
        <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl p-2`}>
            <span className='font-medium text-2xl'>Confirm Your Ride</span>
            {/* <div>
                <Rings
                    visible={true}
                    height="100"
                    width="100"
                    color="black"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div> */}
            <img src={car} alt="car" className='h-[15vh] w-[15vh]'/>

            <hr className='absolute w-[100%] top-[20vh]'/>

            {/* The details of the selected ride. */}
            <div className='flex flex-col w-full mt-4'>
                <div className='flex flex-row gap-1  w-full'>
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

export default ConfirmRide
