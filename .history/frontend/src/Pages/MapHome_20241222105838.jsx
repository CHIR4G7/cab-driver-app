import React, { useRef, useState } from 'react'
import mapimg from '../assets/mapimg.png'
import { useForm } from 'react-hook-form'
import { FaArrowLeft } from "react-icons/fa";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import LocationSearchPanel from '../Components/LocationSearchPanel';
import car from '../assets/car.svg'
import moto from '../assets/moto.webp'
import auto from '../assets/auto.webp'
import { FaUser } from "react-icons/fa";

const MapHome = () => {

  const [selecting, setSelecting] = useState(false) // while selecting the dpickup, and dropoff locations
  const [booking, setBooking] = useState(false) //while selecting cab,auto,mot and their fares to be displayed

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: "onChange"
    }
  )

  const onSubmit = async (data) => {
    console.log(data)
    setBooking(true)
  }

  // useGSAP(function(){

  //   if(selecting){
  //     gsap.to(panelRef.current,{
  //       height:'100%',
  //       opacity:1
  //     })
  //     gsap.to(panelCloseRef.current,{
  //       opacity:1
  //     })
  //   }else{
  //     gsap.to(panelRef.current,{
  //       height:'0%',
  //       opacity:1
  //     })
  //     gsap.to(panelCloseRef.current,{
  //       opacity:0
  //     })
  //   }
  // })

  return (
    <div>
      <span className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>
      <div ref={panelRef} className={`absolute bg-white w-full flex flex-col gap-3 p-2  pl-6 pb-3 ${selecting ? 'top-0 mt-4 rounded-xl h-screen' : 'bottom-0 rounded-3xl pb-4'} ${booking ? 'hidden' : ''}`} onClick={() => setSelecting(true)}>
        <div className='flex flex-row gap-2'>
          {selecting && <span className='mt-2' ref={panelCloseRef} onClick={(e) => {
            e.stopPropagation();
            setSelecting((prev) => !prev)

          }}><FaArrowLeft /></span>}
          <span className='font-medium text-2xl'>Find a ride</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1 left-6 ' >
          <div className='h-11 w-1 bg-black absolute top-[11vh] left-[5vh]' />

          <div>
            {/* <div className='h-4 w-4 bg-black flex flex-col justify-center items-center absolute top-[10vh] left-[0.1vh]'>
              <div className='h-1 w-1 bg-white '></div>
            </div> */}
            <input type="text"
              placeholder='Enter Pickup Location'
              className='p-2 bg-slate-100 rounded-lg w-5/6 pl-8 focus:outline-none'
              {...register('pickup', {
                required: "Please Enter your Pickup Location!"
              })}
            />
          </div>
          <div>
            {/* <div className='h-4 w-4 bg-black flex flex-col justify-center items-center absolute top-[18vh] left-[0.1vh]'>
              <div className='h-1 w-1 bg-white '></div>
            </div> */}
            <input type="text"
              placeholder='Enter Drop Location'
              className='p-2 bg-slate-100 rounded-lg w-5/6 pl-8 focus:outline-none'
              {...register('destination', {
                required: "Please Enter your Destination!"
              })}
            />
          </div>
          <button type='submit' className={`border-2 border-black text-white bg-black w-5/6 p-2 rounded-lg flex flex-row items-center justify-center mt-4 ${selecting ? '' : 'hidden'}`}>Book a Ride</button>
        </form>
        <div className={`${!selecting ? 'hidden' : 'h-full'} flex flex-col gap-2`}>
          <LocationSearchPanel />
        </div>
      </div>

      {/* The Rides panel begins here */}
      <div className={`fixed bottom-0 ${booking ? '' : 'hidden'} bg-white w-full rounded-2xl pt-4 pb-4`}>
        <div className='ml-2 pt-3 flex flex-row gap-2'>
          <span className='mt-[1vh]' onClick={(e)=>{
            e.stopPropagation();
            setBooking((prev)=>!prev)
            setSelecting((prev)=>prev)
          }}><FaArrowLeft/></span>
        <span className='font-semibold text-2xl'>Choose Your Ride</span>
        </div>
       

        <div className='border-2 active:border-black bg-gray-100 flex flex-row gap-2 rounded-xl m-2'>
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


        <div className='border-2 active:border-black bg-slate-100 flex flex-row gap-2 rounded-xl m-2'>
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


        <div className='border-2 active:border-black bg-gray-100 flex flex-row gap-2 rounded-xl m-2'>
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
      {/* The ride panel ends here */}

    </div>
  )
}

export default MapHome
