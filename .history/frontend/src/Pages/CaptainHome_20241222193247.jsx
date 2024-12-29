import React, { useContext } from 'react'
import mapimg from '../assets/mapimg.png'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainHome = () => {

  const {captain,updateCaptain} = useContext(CaptainDataContext)
  console.log(captain)

  return (
    <div>
            <div className='absolute top-0 text-xl font-semibold bg-white text-black w-full flex flex-row justify-between px-2 h-11 pt-1'>

              <div>
                <span>hey ,{captain.fullName.firstName}</span>
              </div>
              
              {/* Toogle Captain Active button */}
             <button className='w-20 h-9 border-2 border-white rounded-xl bg-blue-200'>{captain.status}</button>
              </div>
            <div className='h-screen w-screen'>
              {/* <Map/> */}
              <img src={mapimg} alt="" className='h-screen w-screen' />
            </div>
    </div>
  )
}

export default CaptainHome
