import React, { useState, useRef } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import user from '../assets/user.webp'

const BeginRideOtp = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef([]);

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

    return (
        <div className='absolute bottom-0 w-full bg-white flex flex-col pt-3 pb-3  rounded-t-lg'>

            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-xl'>Get OTP to Start Ride</span>

                {/* the div with otp box and submit button */}
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
                    <button className='mt-3 border-2 border-black text-white bg-black w-[100%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'
                    >Start Ride</button>
                </div>
            </div>


            <hr className='w-[100%] mt-4' />

            {/* ride details */}
            <div className='flex flex-col'>
                <div className='flex flex-row pl-1 pr-4'>
                    <div className='flex flex-row '>
                        <img src={user} alt="" className='h-10 w-15' />
                        <span className='text-md font-medium'>Chirag Gupta</span>
                    </div>
                    <span className='font-bold text-xl'>
                        ₹200
                    </span>
                </div>

            </div>

        </div>
    );
}

export default BeginRideOtp
