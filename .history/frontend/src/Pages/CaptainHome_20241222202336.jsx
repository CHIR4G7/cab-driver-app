import React, { useContext } from 'react'
import mapimg from '../assets/mapimg.png'
import { CaptainDataContext } from '../context/CaptainContext'
import user from '../assets/user.webp'
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import CaptainDetails from '../Components/CaptainDetails';


const CaptainHome = () => {

  const { captain, updateCaptain } = useContext(CaptainDataContext)

  if (!captain) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='absolute top-0 text-xl font-semibold bg-white text-black w-full flex flex-row justify-between px-2 h-11 pt-1'>

        <div>
          <span className='absolute mt-[0.6vh]'>Welcome Captain</span>
        </div>

        {/* Toogle Captain Active button */}
        <button className='w-20 h-9 border-2 border-black text-black rounded-md' onClick={() => {
          if (captain.status === 'Inactive') {
            updateCaptain({ ...captain, status: 'Active' })
          } else {
            updateCaptain({ ...captain, status: 'Inactive' })
          }

        }}>{captain.status}</button>
      </div>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>

      {/* First div which will render is the captains profile with his today's earnings */}
      <CaptainDetails/>
      {/* Ends here */}

      {/* Captain gets the pop up about a ride whenever rquested by user */}

    </div>
  )
}

export default CaptainHome
