import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { apiRoutes } from '../utils/constants'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const UserLogin = () => {

  const navigate = useNavigate();
  const [loginerror, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: "onChange"
    }
  )


  const onSubmit = async (data) => {
    try {
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.loginUser.path}`
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      setTimeout(()=>{
        setError(false);
        navigate('/user-home');
      },2000)
      toast('Logged In Successfully!')
      return;
    } catch (error) {
      console.log(error)
      if (error.response && error.response.status === 401) {
        setError(true);
      }
    }

  }
  return (
    <>
      <div className='absolute'>
        <span className='absolute top-[3vh] text-4xl ml-2 font-semibold'>Uber</span>
      </div>
      <div className='relative h-screen w-full flex flex-col justify-center border-2 border-black'>

        <div className='flex flex-col gap-1 ml-[7vh]' id='user'>
          <h2 className='text-2xl font-medium'>Already a member, Login!</h2>
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
                <button className='border-2 border-black text-white bg-black w-[78%] p-2 rounded-lg flex flex-row items-center justify-center mt-4'>Login as User</button>

              </div>
            </form>
            <div className='flex flex-row ml-[18vh]'>
              <span className='font-bold'>OR</span>
            </div>
            <div className='flex flex-row'>
              <Link className='w-full flex flex-row ' to='/signup'>
                <button className=' text-white bg-orange-400 w-[78%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'>Go to Register </button>
              </Link>
            </div>
            <hr className='m-4 border-t-2' />
            <div id='captain' className='flex flex-col gap-2'>
              <span className='text-2xl font-medium'>Login as Captain!</span>
              <Link className='w-full flex flex-row ' to='/captain-login'>
                <button className=' text-white bg-green-500 w-[78%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'>Login as Captain!</button>
              </Link>
            </div>
            <ToastContainer position='bottom-center' theme='colored'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLogin
