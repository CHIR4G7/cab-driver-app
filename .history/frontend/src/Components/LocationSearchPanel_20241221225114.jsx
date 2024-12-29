import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = () => {
  return (
    <div className='flex flex-row gap-2'>
        <span className='mt-[0.7vh] h-6 w-5 rounded-full bg-gray-200'><FaLocationDot size={15}/></span>
        <div className='font-bold text-md'>this is a sample location</div>
    </div>
  )
}

export default LocationSearchPanel
