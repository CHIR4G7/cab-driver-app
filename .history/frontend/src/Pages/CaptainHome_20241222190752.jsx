import React from 'react'
import mapimg from '../assets/mapimg.png'

const CaptainHome = () => {
  return (
    <div>
            <div className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</div>
            <div className='h-screen w-screen'>
              {/* <Map/> */}
              <img src={mapimg} alt="" className='h-screen w-screen' />
            </div>
    </div>
  )
}

export default CaptainHome
