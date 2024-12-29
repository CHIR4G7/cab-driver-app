import React,{useContext} from 'react'
import { RideDataContext } from '../context/RideContext';
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

const DriverFound = () => {

     const { confirmRide, setConfirmRide, waitingForDriver, setWaitingForDriver,driverFound,setDriverFound } = useContext(RideDataContext)
    

      return (
          <div className={`${driverFound ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col rounded-xl p-2 pb-4 `}>
              {/* <span className='absolute left-3 top-4' onClick={(e) => {
                  e.stopPropagation()
                  setDriverFound((prev) => !prev)
              }}><FaArrowLeft /></span> */}
              <span className='font-medium text-xl'>Meet at the PickUp Location</span>
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
  
              <hr className='absolute w-[100%] top-[20vh]' />
              <div className='flex flex-col w-full mt-3 gap-3'>
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
      )
}

export default DriverFound
