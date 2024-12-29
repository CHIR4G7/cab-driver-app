import React,{useState,useRef} from 'react'

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
        <div className='absolte bottom-0 w-full bg-white flex flex-col'>
            <span>Get OTP to Start Ride</span>
        </div>
    );
}

export default BeginRideOtp
