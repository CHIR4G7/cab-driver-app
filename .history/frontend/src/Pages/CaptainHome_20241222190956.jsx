import React from 'react'
import mapimg from '../assets/mapimg.png'

const CaptainHome = () => {
  return (
    <div>
            <div className='absolute top-0 text-xl font-semibold bg-black text-white w-full'>
              
              </div>
            <div className='h-screen w-screen'>
              {/* <Map/> */}
              <img src={mapimg} alt="" className='h-screen w-screen' />
            </div>
    </div>
  )
}

export default CaptainHome
