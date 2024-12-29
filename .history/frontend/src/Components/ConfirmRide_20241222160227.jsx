import React from 'react'
import {Rings} from "react-loader-spinner"

const ConfirmRide = ({ confirmRide, setConfirmRide }) => {
    return (
        <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl`}>
            <span className='font-medium text-2xl'>Finding You a Driver</span>
            <div>
                <Rings
                    visible={true}
                    height="80"
                    width="80"
                    color="black"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    )
}

export default ConfirmRide
