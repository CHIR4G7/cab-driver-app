import React from 'react'
import mapimg from '../assets/mapimg.png'

const CaptainHome = () => {
  return (
    <div>
            <div className='absolute top-0 text-4xl font-semibold bg-black text-white w-full'>
              Uber
              </div>
            <div className='h-screen w-screen'>
              {/* <Map/> */}
              <img src={mapimg} alt="" className='h-screen w-screen' />
            </div>
    </div>
  )
}

export default CaptainHome
