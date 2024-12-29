import React,{useContext} from 'react'
import { RideDataContext } from '../context/RideContext';
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import car from '../assets/car.svg'
import user from '../assets/user.webp'
import { useNavigate } from 'react-router-dom';

const DriverFound = ({ride}) => {

     const { confirmRide, setConfirmRide, waitingForDriver, setWaitingForDriver,driverFound,setDriverFound } = useContext(RideDataContext)
    const navigate = useNavigate();

    if(!ride){
        return <div>Loading..</div>
    }

      return (
          <div className={`${driverFound ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col rounded-xl p-2 pb-4 pl-2`}>

              <span className='font-bold text-xl'>Meet at the PickUp Location</span>
              <span className='font-medium text-md'>Ride OTP : {ride.otp}</span>

              {/* drivers details */}
               <div className='flex flex-row justify-between mt-4'>
                <div className='flex'>
                <img src={car} alt="image" className='h-[15vh] w-[15vh] rounded-full border-2 border-black'/>
                <img src={user} alt="image" className='h-[15vh] w-[22vh] absolute left-5'/>
                </div>
                  
                  <div className='flex flex-col text-right'>
                    <span className='text-lg font-medium'>{ride.captain.fullName.firstName} {ride.captain.fullName.firstName}</span>
                    <span className='text-xl font-semibold'>{user.captain.vehicle.plate}</span>
                    <span className='text-sm text-gray-600'>{user.captain.vehicle.typeVehicle}</span>
                  </div>
              </div> 
  
              <hr className='absolute w-[100%] top-[24vh]' />

              <div className='flex flex-col w-full mt-4 gap-3'>
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
                          <span className='text-gray-700'>{ride.destination}</span>
                      </div>
                  </div>
  
                  <div className='flex flex-row gap-2  w-full'>
                      <span className='mt-[1.8vh]'><FaMoneyBillWave /></span>
                      <div className='flex flex-col'>
                          <span className='font-medium text-md'>₹{ride.fare}</span>
                          <span className='text-gray-700'>Cash, {ride.captain.vehicle.typeVehicle}</span>
                      </div>
                  </div>
              </div>
              <button className='mt-3 border-2 border-black text-white bg-black w-[100%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'
              onClick={()=>{
                navigate('/user-home')
              }} >Pay</button>
          </div>
      )
}

export default DriverFound
