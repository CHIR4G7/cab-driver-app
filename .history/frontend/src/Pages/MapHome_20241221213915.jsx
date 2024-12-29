import React, { useRef, useState } from 'react'
import mapimg from '../assets/mapimg.png'
import { useForm } from 'react-hook-form'
import { FaArrowLeft } from "react-icons/fa";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';

const MapHome = () => {

  const [selecting,setSelecting] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: "onChange"
    }
  )

  const onSubmit = async (data) => {
    console.log(data)
  }

  useGSAP(()=>{
    
    if(selecting){
      gsap.to(panelRef.current,{
        height:'70%'
      })
      gsap.to(panelRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%'
      })
    }
  })

  return (
    <div>
      <span className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>
      <div ref={panelRef} className={`absolute bg-white w-full flex flex-col gap-3 p-2  pl-6 pb-3 ${selecting ? 'top-0 mt-4 rounded-xl h-screen' : 'bottom-0 rounded-3xl'}`} onClick={()=>setSelecting(true)}>
        <div className='flex flex-row gap-2'>
        {selecting && <FaArrowLeft className='mt-2' ref={panelCloseRef}/>}
        <span className='font-medium text-2xl'>Find a ride</span>
        </div>
       
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 left-6' >
          <div className='h-11 w-1 bg-black absolute top-[11vh] left-[5vh]'/>
          
          <div>
            {/* <div className='h-4 w-4 bg-black flex flex-col justify-center items-center absolute top-[10vh] left-[0.1vh]'>
              <div className='h-1 w-1 bg-white '></div>
            </div> */}
            <input type="text"
              placeholder='Enter Pickup Location'
              className='p-2 bg-slate-100 rounded-lg w-4/5 pl-8 focus:outline-none'
              {...register('pickup',{
                required:"Please Enter your Pickup Location!"
              })}
            />
          </div>
          <div>
          {/* <div className='h-4 w-4 bg-black flex flex-col justify-center items-center absolute top-[18vh] left-[0.1vh]'>
              <div className='h-1 w-1 bg-white '></div>
            </div> */}
            <input type="text"
              placeholder='Enter Drop Location'
              className='p-2 bg-slate-100 rounded-lg w-4/5 pl-8 focus:outline-none'
              {...register('destination',{
                required:"Please Enter your Destination!"
              })}
            />
          </div>

        </form>
      </div>
     
    </div>
  )
}

export default MapHome
