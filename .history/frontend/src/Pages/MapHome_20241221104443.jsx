import React from 'react'
import mapimg from '../assets/mapimg.png'


const MapHome = () => {
  return (
    <div>
      <span className='absolute top-[3vh] text-4xl ml-2 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen'/>
      </div>
      <div className='absolute bg-white top-0 w-full'>
        <span className='font-medium'>Find a ride</span>
      </div>
    </div>
  )
}

export default MapHome
