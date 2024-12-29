import React from 'react'
import { Rings } from "react-loader-spinner"
import car from '../assets/car.svg'
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ConfirmRide = ({ confirmRide, setConfirmRide }) => {
    return (
        <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl p-2`}>
            <span className='absolute left-0'><FaArrowLeft/></span>
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
            <img src={car} alt="car" className='h-[15vh] w-[15vh]' />

            <hr className='absolute w-[100%] top-[20vh]' />

            {/* The details of the selected ride. */}
            <div className='flex flex-col w-full mt-3 gap-2'>
                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Pickup</span>
                        <span className='text-gray-700'>Punjab Engineering College</span>
                    </div>
                </div>

                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Dropoff</span>
                        <span className='text-gray-700'>Ovenfresh Sector-26</span>
                    </div>
                </div>

                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaMoneyBillWave /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>₹198.25</span>
                        <span className='text-gray-700'>Cash</span>
                    </div>
                </div>
            </div>
            <button className='mt-3 border-2 border-black text-white bg-black w-[85%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'>Confirm</button>
        </div>
    )
}

export default ConfirmRide
