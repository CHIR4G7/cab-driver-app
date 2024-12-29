import React from 'react'
import { useParams } from 'react-router-dom'

const UserRide = () => {
    const {id} = useParams();
  return (
    <div>
            <span className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>
    </div>
  )
}

export default UserRide
