import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext';
import { FaArrowLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { Rings } from "react-loader-spinner"

const WaitingForDriver = ({ride}) => {

    const { selecting, setSelecting, booking, setBooking, confirmRide, setConfirmRide, waitingForDriver, setWaitingForDriver } = useContext(RideDataContext)

    return (
        <div className={`${waitingForDriver ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl p-2 pb-4 `}>
            <span className='absolute left-3 top-4' onClick={(e) => {
                e.stopPropagation()
                setWaitingForDriver((prev) => !prev)
            }}><FaArrowLeft /></span>
            <span className='font-medium text-2xl'>Finding You a Driver</span>
            <span className='font-medium text-md'>OTP to Start Your Ride : <span>{ride.otp}</span></span>
            <div></div>
            <div>
                <Rings
                    visible={true}
                    height="100"
                    width="100"
                    color="black"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

            <hr className='absolute w-[100%] top-[21vh]' />
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
                        <span className='text-gray-700'>Ovenfresh Sector-26</span>
                    </div>
                </div>

                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaMoneyBillWave /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>₹198.25</span>
                        <span className='text-gray-700'>Cash, Car</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WaitingForDriver
