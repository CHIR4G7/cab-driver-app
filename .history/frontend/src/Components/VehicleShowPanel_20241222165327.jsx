import React,{useContext} from 'react'
import car from '../assets/car.svg'
import moto from '../assets/moto.webp'
import auto from '../assets/auto.webp'
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RideDataContext } from '../context/RideContext';

const VehicleShowPanel = () => {

    const {selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide} = useContext(RideDataContext)

  return (
     <div className={`fixed bottom-0 ${booking ? '' : 'hidden'} bg-white w-full rounded-2xl pt-4 pb-4`}>
           <div className='ml-2 pt-3 flex flex-row gap-2'>
             <span className='mt-[1vh]' onClick={(e)=>{
               e.stopPropagation();
               setBooking((prev)=>!prev)
               setSelecting((prev)=>prev)
             }}><FaArrowLeft/></span>
           <span className='font-semibold text-2xl'>Choose Your Ride</span>
           </div>
          
   
           <div className='border-2 active:border-black bg-gray-100 flex flex-row gap-2 rounded-xl m-2' onClick={(e)=>{
            e.stopPropagation();
            setConfirmRide((prev)=>!prev)
           }}>
             <img src={car} alt="car" className='h-20 w-22' />
             <div className='flex flex-col'>
               <div className='flex flex-row gap-2'>
                 <span className='font-medium text-xl'>Car</span>
                 <div className='flex flex-row gap-1' >
                   <FaUser className='mt-[0.8vh] ' />
                   <span className='mt-[0.2vh]'>4</span>
                 </div>
               </div>
               <span className='font-bold'>2 mins away</span>
               <span className='text-gray-500 text-[2vh]'>Affordable,Compact Rides</span>
             </div>
             <span className='mt-3 absolute right-8 font-medium'>₹193.24</span>
           </div>
   
   
           <div className='border-2 active:border-black bg-slate-100 flex flex-row gap-2 rounded-xl m-2' onClick={(e)=>{
            e.stopPropagation();
            setConfirmRide((prev)=>!prev)
           }}>
             <img src={auto} alt="car" className='h-[11vh] w-[13vh]' />
             <div className='flex flex-col'>
               <div className='flex flex-row gap-2'>
                 <span className='font-medium text-xl'>Auto</span>
                 <div className='flex flex-row gap-1' >
                   <FaUser className='mt-[0.8vh] ' />
                   <span className='mt-[0.2vh]'>3</span>
                 </div>
               </div>
               <span className='font-bold'>5 mins away</span>
               <span className='text-gray-500 text-[2vh]'>Affordable,Auto Rides</span>
             </div>
             <span className='absolute right-8 mt-3 font-medium'>₹133.89</span>
           </div>
   
   
           <div className='border-2 active:border-black bg-gray-100 flex flex-row gap-2 rounded-xl m-2' onClick={(e)=>{
            e.stopPropagation();
            setConfirmRide((prev)=>!prev)
           }}>
             <img src={moto} alt="motorcycle" className='h-[11vh] w-[13vh]' />
             <div className='flex flex-col'>
               <div className='flex flex-row gap-2'>
                 <span className='font-medium text-xl'>Moto</span>
                 <div className='flex flex-row gap-1' >
                   <FaUser className='mt-[0.8vh] ' />
                   <span className='mt-[0.2vh]'>1</span>
                 </div>
               </div>
               <span className='font-bold'>5 mins away</span>
               <span className='text-gray-500 text-[2vh]'>Affordable,MotoCycle Rides</span>
             </div>
             <span className='mt-3 absolute right-8 font-medium'>₹90.89</span>
           </div>
   
         </div>
  )
}

export default VehicleShowPanel
