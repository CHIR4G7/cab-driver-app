import React from 'react'
import { useParams } from 'react-router-dom'

const CaptainRide = () => {
     const {id} = useParams()
  return (
    <div>
      <div className='absolute top-0 text-xl font-semibold bg-white text-black w-full flex flex-row justify-between px-2 h-11 pt-1'>

      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>
      </div>
    </div>
  )
}

export default CaptainRide
