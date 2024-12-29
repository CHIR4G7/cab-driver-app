import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = () => {
  return (
    <div className='flex flex-row gap-2'>
        <span><FaLocationDot /></span>
        <div className='font-bold text-xl'>this is a sample locatio</div>
    </div>
  )
}

export default LocationSearchPanel
