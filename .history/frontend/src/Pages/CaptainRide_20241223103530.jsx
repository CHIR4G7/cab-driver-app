import React from 'react'
import { useParams } from 'react-router-dom'
import mapimg from '../assets/mapimg.png'

const CaptainRide = () => {
     const {id} = useParams()
  return (
    <div>
      <div className='absolute top-0 text-xl font-semibold bg-white text-black w-full flex flex-row justify-between '>

      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>
      </div>
    </div>
  )
}

export default CaptainRide