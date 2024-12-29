import React, { useContext } from 'react'
import mapimg from '../assets/mapimg.png'
import { CaptainDataContext } from '../context/CaptainContext'
import user from '../assets/user.webp'

const CaptainHome = () => {

  const { captain, updateCaptain } = useContext(CaptainDataContext)

  if (!captain) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='absolute top-0 text-xl font-semibold bg-white text-black w-full flex flex-row justify-between px-2 h-11 pt-1'>

        <div>
          <span className='absolute mt-[0.6vh]'>Hey, {captain.fullName.firstName}</span>
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
      <div className='absolute bg-white w-full flex flex-col bottom-0 pt-4 pb-4'>
        <div className='flex flex-row justify-between px-2'>
          <div className='flex flex-col'>
            <span className='font-bold text-xl'>Your Details : </span>
            <div className='flex flex-row gap-1'>
              <img src={user} alt="" className='h-7 w-9 mt-5' />
              <div className='flex flex-col'>
                <span className='text-md'>{captain.fullName.firstName} {captain.fullName.lastName}</span>
                <span className='text-sm text-gray-500'>{captain.vehicle.typeVehicle}</span>
                <span className='text-sm text-gray-500'>{captain.vehicle.plate}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-xl'>Today's Earnings</span>
            <span className='font-medium text-2xl'>₹0</span>
          </div>
        </div>
      </div>
{/* Ends here */}
<hr className='absolute w-[100%] top-[20vh]' />

{/* Stat display box */}
<div>
  
</div>

    </div>
  )
}

export default CaptainHome
