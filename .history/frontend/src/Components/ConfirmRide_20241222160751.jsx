import React from 'react'
import {Rings} from "react-loader-spinner"
import car from '../assets/car.svg'

const ConfirmRide = ({ confirmRide, setConfirmRide }) => {
    return (
        <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl p-2`}>
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
            <img src={car} alt="car" className='h-[10vh] w-[10vh]'/>
            <hr width='100%'/>
            {/* The details of the selected ride. */}
            <div>

            </div>
        </div>
    )
}

export default ConfirmRide
