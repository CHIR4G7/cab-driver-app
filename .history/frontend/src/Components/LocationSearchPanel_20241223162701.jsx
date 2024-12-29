import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = ({description,place_id}) => {
  return (
    <div className='flex flex-row gap-2  cursor-pointer'>
        <div className='mt-[0.3vh] h-6 w-6 rounded-full bg-gray-200 flex justify-center items-center'><FaLocationDot size={15}/></div>
        <div className='flex flex-col'>
        <div className='font-semibold text-sm'>{description}</div>
        <span>{place_id}</span>
        </div>
      
    </div>
  )
}

export default LocationSearchPanel
