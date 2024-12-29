import React from 'react'

const CaptainDetails = () => {
  return (
     <div className='absolute bg-white w-full flex flex-col bottom-0 pt-4 pb-6 rounded-2xl'>
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
    
    
            <div className='h-[16vh] m-3 bg-gray-100 text-black rounded-lg flex justify-center flex-col items-center'>
              <div className=' flex flex-row gap-4'>
                <div className='flex flex-col items-center justify-center'>
                  <span className='text-center'><FaRegClock size={20} /></span>
                  <span>-</span>
                  <span className='text-[2vh]'>HOURS ONLINE</span>
                </div>
    
                <div className='flex flex-col items-center justify-center'>
                  <span className='text-center'><IoSpeedometerOutline size={20} /></span>
                  <span>-</span>
                  <span className='text-[2vh]'>KMS COVERED</span>
                </div>
    
                <div className='flex flex-col items-center justify-center'>
                  <span className='text-center'><IoSpeedometerOutline size={20} /></span>
                  <span>-</span>
                  <span className='text-[2vh]'>HOURS ONLINE</span>
                </div>
              </div>
              <span className='text-xl font-semibold'>
                LIVE SOON!
              </span>
    
            </div>
    
          </div>
  )
}

export default CaptainDetails
