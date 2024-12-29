import React from 'react'
import mapimg from '../assets/mapimg.png'
import { useForm } from 'react-hook-form'

const MapHome = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: "onChange"
    }
  )

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div>
      <span className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>
      <div className='absolute bg-white bottom-0 w-full flex flex-col gap-3 p-2 rounded-xl pl-4'>
        <span className='font-medium text-2xl'>Find a ride</span>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 left-6'>
          <div>
            {/* <div className='h-4 w-4 bg-black flex flex-col justify-center items-center absolute top-[10vh] left-[0.1vh]'>
              <div className='h-1 w-1 bg-white '></div>
            </div> */}
            <input type="text"
              placeholder='Enter Pickup Location'
              className='p-2 bg-slate-100 rounded-lg w-4/5 pl-4'
            />
          </div>
          <div>
          {/* <div className='h-4 w-4 bg-black flex flex-col justify-center items-center absolute top-[18vh] left-[0.1vh]'>
              <div className='h-1 w-1 bg-white '></div>
            </div> */}
            <input type="text"
              placeholder='Enter Drop Location'
              className='p-2 bg-slate-100 rounded-lg w-4/5 pl-4'
            />
          </div>

        </form>
      </div>
    </div>
  )
}

export default MapHome
