import React,{useContext} from 'react'
import { RideDataContext } from '../context/RideContext';

const WaitingForDriver = () => {

    const {selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide,waitingForDriver,setWaitingForDriver} = useContext(RideDataContext)

  return (
    <div className={`${waitingForDriver ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl p-2 pb-4 `}>
        <span className='absolute left-3 top-4' onClick={(e)=>{
                      e.stopPropagation()
                      setConfirmRide((prev)=>!prev)
                  }}><FaArrowLeft/></span>
                  <span className='font-medium text-2xl'>Confirm Your Ride</span>
                  {/* <div>
                      <Rings
                          visible={true}
                          height="100"
                          width="100"
                          color="black"
                          ariaLabel="rings-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                      />
                  </div> */}
                  <img src={car} alt="car" className='h-[15vh] w-[15vh]' />
      
                  <hr className='absolute w-[100%] top-[20vh]' />
    </div>
  )
}

export default WaitingForDriver
