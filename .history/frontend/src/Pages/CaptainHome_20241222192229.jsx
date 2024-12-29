import React, { useContext } from 'react'
import mapimg from '../assets/mapimg.png'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainHome = () => {

  const {captain,updateCaptain} = useContext(CaptainDataContext)
  console.log(captain)

  return (
    <div>
            <div className='absolute top-0 text-xl font-semibold bg-black text-white w-full'>
              
              {/* Toogle Captain Active button */}
              <div className='h-10 w-20 border-4 border-white rounded-3xl p-1'>
                {captain.status==='Inactive' ? <span className='h-4 w-4 rounded-full bg-blue-500'></span> : <></>}
              </div>
              </div>
            <div className='h-screen w-screen'>
              {/* <Map/> */}
              <img src={mapimg} alt="" className='h-screen w-screen' />
            </div>
    </div>
  )
}

export default CaptainHome
