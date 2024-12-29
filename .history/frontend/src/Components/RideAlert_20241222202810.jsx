import React,{useContext} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const RideAlert = () => {
    
  return (
    <div className='absolute bg-white w-full flex flex-col bottom-0 pt-4 pb-6 rounded-t-2xl'>
      <div className='flex flex-row justify-between px-2'>
        <div>
            user info
        </div>
        <span>
            fare
        </span>
      </div>
    </div>
  )
}

export default RideAlert
