import React, { useState, useRef } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

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
        <div className='absolute bottom-0 w-full bg-white flex flex-col pt-3 pb-3 justify-center items-center rounded-t-lg'>
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

            <hr className='w-[100%] mt-4' />

            {/* ride details */}
            <div className='flex flex-col mx-3 mt-3 gap-3'>
                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Pickup</span>
                        <span className='text-gray-700'>Punjab Engineering College</span>
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
    );
}

export default BeginRideOtp
