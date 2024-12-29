import React from 'react'
import Rings from "react-loader-spinner"

const ConfirmRide = ({ confirmRide, setConfirmRide }) => {
    return (
        <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col`}>
            <span className='font-medium text-xl'>Finding You a Driver</span>
            <div>
                <Rings
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    )
}

export default ConfirmRide
