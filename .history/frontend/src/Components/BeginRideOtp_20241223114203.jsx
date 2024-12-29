import React, { useState, useRef } from 'react'

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

            <hr className=' w-[100%] top-[24vh]' />

        </div>
    );
}

export default BeginRideOtp