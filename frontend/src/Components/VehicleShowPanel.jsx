import React, { useContext, useState } from 'react'
import car from '../assets/car.svg'
import moto from '../assets/moto.webp'
import auto from '../assets/auto.webp'
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RideDataContext } from '../context/RideContext';
import { vehicles } from '../utils/constants';

const VehicleShowPanel = ({ fares,ride,setRide }) => {

  const { selecting, setSelecting, booking, setBooking, confirmRide, setConfirmRide, waitingForDriver, setWaitingForDriver } = useContext(RideDataContext)
  const [loading,setLoading] = useState(false)

  const handleVehicleClick = (fare,typeVehicle,name,)=>{
    // console.log(fare,typeVehicle,name)
    setRide({...ride,fare:fare,typeVehicle:typeVehicle,name:name})
    setTimeout(()=>{
      console.log(ride)
      setConfirmRide((prev) => !prev)
    },1000)
    // setBooking((prev) => !prev)
  }

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
        return <div key={vehicle.value} className='border-2 active:border-black bg-gray-100 flex flex-row gap-2 rounded-xl m-2' onClick={(e) => {
          e.stopPropagation();
          handleVehicleClick(fares[vehicle.value],vehicle.value,vehicle.name)
        }}>
          <img src={vehicle.image} alt={vehicle.name} className='h-20 w-22' />
          <div className='flex flex-col'>
            <div className='flex flex-row gap-2'>
              <span className='font-medium text-xl'>{vehicle.name}</span>
              <div className='flex flex-row gap-1' >
                <FaUser className='mt-[0.8vh] ' />
                <span className='mt-[0.2vh]'>{vehicle.cap}</span>
              </div>
            </div>
            <span className='text-gray-500 text-[2vh]'>{vehicle.text}</span>
          </div>
          <span className='mt-3 absolute right-8 font-medium'>₹{fares[vehicle.value]}</span>
        </div>
       
      })}
    </div>
  )
}

export default VehicleShowPanel
