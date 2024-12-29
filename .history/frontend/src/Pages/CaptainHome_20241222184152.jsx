import React from 'react'

const CaptainHome = () => {
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

export default CaptainHome
