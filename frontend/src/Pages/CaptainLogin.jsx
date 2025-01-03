import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import axios from 'axios';
import { apiRoutes } from '../utils/constants';
import Alert from '../Components/Alert'
import Cookies from "js-cookie";

const CaptainLogin = () => {

  const [loginerror, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const [alert,setAlert] = useState({
    type:"success",
    message:"Successfully Logged In Captain!",
    visible:false
  })
  const token = Cookies.get("captain_token")

  const navigate = useNavigate();



  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: "onChange"
    }
  )

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.loginCaptain.path}`
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      //show alert logic
      setAlert({...alert,visible:true});

      setTimeout(()=>{
        setAlert({...alert,visible:false});
        setError(false);
        navigate('/captain-home');
      },3000)
      return;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(true);
      }
    }
  }

  return (
    <>
      {/* {loading && <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      />} */}
      <div className='absolute'>
        <span className='absolute top-[3vh] text-4xl ml-2 font-semibold'>Uber</span>
      </div>
      <div className='realtive h-screen w-full flex flex-col justify-center border-2 border-black'>
        <div className='flex flex-col gap-1 ml-[7vh]' id='user'>
          <h2 className='text-2xl font-medium'>Hello Captain, Login!</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>

              <div className='flex flex-col'>
                <label className='font-medium'>Email</label>
                <input type='email' className='w-[78%] p-2 rounded-lg bg-slate-200 text-black'
                  placeholder='Email'
                  {...register('email', {
                    required: 'Please Enter Email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email Address!"
                    }
                  })} />
                <span className='text-[2vh] text-red-400'>{errors.email && <p>{errors.email.message}</p>}</span>
              </div>

              <div className='flex flex-col'>
                <label className='font-medium'>Password</label>
                <input type='password' className='w-[78%] p-2 rounded-lg bg-slate-200 text-black'
                  placeholder='Password'
                  {...register('password', {
                    required: 'Please Enter Password',
                    minLength: {
                      value: 6,
                      message: 'Password Should be greater than 6 characters!'
                    }
                  })} />
                <span className='text-[2vh] text-red-400'>{errors.password && <p>{errors.password.message}</p>}</span>
              </div>
              <div>
                {loginerror && <span className='text-[2vh] text-red-500'>Invalid Email or Password!</span>}
              </div>
              <div>
                <button className='border-2 border-black text-white bg-black w-[78%] p-2 rounded-lg flex flex-row items-center justify-center mt-4'>Login as Captain</button>
              </div>
            </form>
            <div className='flex flex-row ml-[18vh]'>
              <span className='font-bold'>OR</span>
            </div>
            <div className='flex flex-row'>
              <Link className='w-full flex flex-row ' to='/captain-signup'>
                <button className=' text-white bg-green-500 w-[78%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'>Register as Captain</button>
              </Link>
            </div>
            {alert.visible && <Alert type={alert.type} message={alert.message} onClose={()=>setAlert({...alert,visible:false})}/>}

          </div>
        </div>
      </div>
    </>
  )
}

export default CaptainLogin
