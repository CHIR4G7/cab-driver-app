import React from 'react'
import homeimg from '../assets/homepgimg.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HomePAge = () => {
    return (
        <>
        <div className='block md:hidden'>
            <div className='h-screen w-full flex flex-col gap-1'>
                <div className='h-[85%] w-screen relative'>
                    <img src={homeimg} alt="" className='h-full w-full' />
                    <span className='absolute top-[3vh] text-4xl ml-2 font-semibold'>Uber</span>
                </div>

                <div className='flex flex-col gap-2 mx-1'>
                    <div className='flex flex-row items-center justify-center'>
                    <h2 className='font-bold text-2xl font-sans'>Get Started with Uber!</h2>
                    </div>
                   
                    <div className='flex items-center justify-center'>
                        <Link className='w-full flex flex-row items-center justify-center' to='/login'>
                        <button className='border-2 border-black text-white bg-black w-[85%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'>Continue <span><FaLongArrowAltRight color='White' className='mt-1'/></span></button>
                        </Link>
                        
                    </div>

                </div>
            </div>
        </div>
        <div className='sm:hidden block'>
        <div className='h-screen w-3/4 flex flex-col m-4 '>
            <span className='text-4xl'>
            This is PWA Application. Please Follow the Steps and download the PWA Application to use this app Thank You!
            </span>

        </div>
        </div>
     
        </>
    )
}

export default HomePAge
