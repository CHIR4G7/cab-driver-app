import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = () => {
  return (
    <div className='flex flex-row gap-2'>
        <div className='mt-[0.4vh] h-6 w-6 rounded-full bg-gray-200 flex justify-center items-center'><FaLocationDot size={15}/></div>
        <div className='font-bold text-md'>this is a sample location</div>
    </div>
  )
}

export default LocationSearchPanel
