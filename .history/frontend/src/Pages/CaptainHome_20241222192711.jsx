import React, { useContext } from 'react'
import mapimg from '../assets/mapimg.png'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainHome = () => {

  const {captain,updateCaptain} = useContext(CaptainDataContext)
  console.log(captain)

  return (
    <div>
            <div className='absolute top-0 text-xl font-semibold bg-black text-white w-full'>

              <div>
                <span>hey ,</span>
              </div>
              
              {/* Toogle Captain Active button */}
             <button className='w-10 h-10'>Active</button>
              </div>
            <div className='h-screen w-screen'>
              {/* <Map/> */}
              <img src={mapimg} alt="" className='h-screen w-screen' />
            </div>
    </div>
  )
}

export default CaptainHome