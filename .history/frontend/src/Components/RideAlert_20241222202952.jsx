import React,{useContext} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import user from '../assets/user.webp'

const RideAlert = () => {
    
  return (
    <div className='absolute bg-white w-full flex flex-col bottom-0 pt-4 pb-6 rounded-t-2xl'>
      <div className='flex flex-row justify-between pl-1 pr-4'>
        <div className='flex flex-row'>
            <img src={user} alt="" className='h-10 w-15'/>
        </div>
        <span>
            fare
        </span>
      </div>
    </div>
  )
}

export default RideAlert
