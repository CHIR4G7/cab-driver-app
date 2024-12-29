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

            <hr width='100%'/>

            {/* The details of the selected ride. */}
            <div className='flex flex-col'>
                <div className='flex flex-row gap-1 border-2 border-black w-full'>
                    <span className='mt-[0.6vh]'><FaLocationDot /></span>
                    <div>
                    <span className='text-xl font-bold'>Pickup</span>
                    <span>Punjab Engineering College</span>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default ConfirmRide
