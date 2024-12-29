import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = () => {
  return (
    <div className='flex flex-row gap-2'>
        <span><FaLocationDot /></span>
        <div></div>
    </div>
  )
}

export default LocationSearchPanel