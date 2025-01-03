import React, { useState, useRef, useContext } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import user from '../assets/user.webp'
import { useNavigate } from 'react-router-dom';
import { RideDataContext } from '../context/RideContext';

const BeginRideOtp = ({ride}) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("")
    const inputs = useRef([]);
    const navigate = useNavigate();
    const {rideStarted,setRideStarted,confirmRideCaptain,setConfirmRideCaptain} = useContext(RideDataContext)

    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return; // Only allow numbers
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input if a digit is entered
        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleSubmit = async () => {

        const otpString = otp.join("");
        if (otpString.length !== 4) {
            setError("Invalid OTP!")
            return
        }
        setError("")
        console.log(otpString)
        if(otpString===ride.otp){
            setRideStarted((prev)=>!prev)
            setConfirmRideCaptain((prev)=>!prev)
        }else{
            setError("Incorrect OTP!")
        }
    }

    const handleCancel = async () => {
        navigate('/captain-home')
    }

    if(!ride){
        return <div>Loading...</div>
    }

    return (
        <div className={`${confirmRideCaptain ? '' : 'hidden'} absolute bottom-0 w-full bg-white flex flex-col pt-3 pb-3  rounded-t-lg`}>

            {/* the div with otp box and submit button */}
            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-xl'>Get OTP to Start Ride</span>


                <div className='flex flex-col'>
                    <div className="flex gap-4 justify-center mt-8">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputs.current[index] = el)}
                                className="w-12 h-12 text-center border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            />
                        ))}
                    </div>
                    {error && <span className='font-medium text-sm text-red-500'>{error}</span>}
                    <button className='mt-3 border-2 border-black text-white bg-black w-[100%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'
                        onClick={handleSubmit}
                    >Start Ride</button>

                </div>
            </div>

            <hr className='w-[100%] mt-4' />

            {/* ride details */}
            <div className='flex flex-col mt-3'>
                <div className='flex flex-row pl-1 pr-4 justify-between'>
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

                    <div className='flex flex-row gap-2 mx-3 bg-white'>
                        <span className='mt-[1.8vh]'><FaSquare /></span>
                        <div className='flex flex-col'>
                            <span className='font-medium text-md'>Dropoff</span>
                            <span className='text-gray-700'>{ride.destination}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <button className='mt-3  text-black bg-gray-400 w-4/5 p-2 rounded-lg flex flex-row items-center justify-center gap-2'
                        onClick={handleCancel}

                    >Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default BeginRideOtp
