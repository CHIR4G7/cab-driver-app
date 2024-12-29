import React, { useContext } from 'react'
import car from '../assets/car.svg'
import moto from '../assets/moto.webp'
import auto from '../assets/auto.webp'
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RideDataContext } from '../context/RideContext';
import { vehicles } from '../utils/constants';

const VehicleShowPanel = ({ fares }) => {

  const { selecting, setSelecting, booking, setBooking, confirmRide, setConfirmRide, waitingForDriver, setWaitingForDriver } = useContext(RideDataContext)
  console.log(fares)

  return (
    <div className={`fixed bottom-0 ${booking ? '' : 'hidden'} bg-white w-full rounded-2xl pt-4 pb-4 ${waitingForDriver ? 'hidden' : ''}`}>
      <div className='ml-2 pt-3 flex flex-row gap-2'>
        <span className='mt-[1vh]' onClick={(e) => {
          e.stopPropagation();
          setBooking((prev) => !prev)
          setSelecting((prev) => prev)
        }}><FaArrowLeft /></span>
        <span className='font-semibold text-2xl'>Choose Your Ride</span>
      </div>

      {vehicles.map((vehicle) => {
        return <div className='border-2 active:border-black bg-gray-100 flex flex-row gap-2 rounded-xl m-2' onClick={(e) => {
          e.stopPropagation();
          setConfirmRide((prev) => !prev)
        }}>
          <img src={vehicle.image} alt={vehicle.value} className='h-20 w-22' />
          <div className='flex flex-col'>
            <div className='flex flex-row gap-2'>
              <span className='font-medium text-xl'>{vehicle.value}</span>
              <div className='flex flex-row gap-1' >
                <FaUser className='mt-[0.8vh] ' />
                <span className='mt-[0.2vh]'>{vehicle.cap}</span>
              </div>
            </div>
            {/* <span className='font-bold'>2 mins away</span> */}
            <span className='text-gray-500 text-[2vh]'>{vehicle.text}</span>
          </div>
          <span className='mt-3 absolute right-8 font-medium'>₹{fares.car}</span>
        </div>
      })}
    </div>
  )
}

export default VehicleShowPanel
