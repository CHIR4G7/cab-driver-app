import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = () => {
  return (
    <div className='flex flex-row gap-2'>
        <span className='mt-2'><FaLocationDot size={15}/></span>
        <div className='font-sans text-md'>this is a sample locatio</div>
    </div>
  )
}

export default LocationSearchPanel
