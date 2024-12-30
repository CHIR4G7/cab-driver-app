import React from 'react'
import { useForm } from 'react-hook-form'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {apiRoutes} from '../utils/constants'


const UserSignUp = () => {

  const { register, handleSubmit, formState: { errors },reset } = useForm(
    {
      mode: "onChange"
    }
  )
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.registerUser.path}`
      console.log(url)
      const response = await axios.post(url,data,{
        headers:{
          "Content-Type":'application/json'
        },
        withCredentials:true
      })
      // return response
      navigate('/login')
    } catch (error) {
      throw new Error(error)
    }
    reset();
  }

  return (
    <div>
      <div className='absolute'>
    <span className='absolute top-[3vh] text-4xl ml-2 font-semibold'>Uber</span>
    </div>

      <div className='absolute h-screen w-full flex flex-col gap-1 ml-[7vh] top-[10vh]' id='user'>
        <h2 className='text-2xl'>Let's Sign Up first!</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <label>First Name</label>
              <input type="text" className='w-[78%] p-2 rounded-lg bg-slate-200 text-black'
                placeholder='First Name'
                {...register('firstname', {
                  required: 'Please Enter Valid First Name',
                  minLength: {
                    value: 3,
                    message: 'First Name should be greater than 3!'
                  }
                })} />
              <span className='text-[1.5vh] text-red-400'>{errors.firstname && <p>{errors.firstname.message}</p>}</span>

            </div>

            <div className='flex flex-col'>
              <label>Last Name</label>
              <input type='text' className=' w-[78%] p-2 rounded-lg bg-slate-200 text-black'
                placeholder='Last Name'
                {...register('lastname', {
                  required: 'Please Enter Valid Last Name',
                  minLength: {
                    value: 3,
                    message: 'Last Name should be greater than 3!'
                  }
                })} />
              <span className='text-[2vh] text-red-400'>{errors.lastname && <p>{errors.lastname.message}</p>}</span>
            </div>

            <div className='flex flex-col'>
              <label>Email</label>
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
              <label>Password</label>
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
              <button className='border-2 border-black text-white bg-black w-[78%] p-2 rounded-lg flex flex-row items-center justify-center mt-4'>Register</button>

            </div>
          </form>
          <div className='flex flex-row ml-[20vh]'>
            <span className='font-bold'>OR</span>
          </div>
          <div className='flex flex-row'>
            <Link className='w-full flex flex-row ' to='/login'>
              <button className=' text-white bg-orange-500 w-[78%] p-2 rounded-lg flex flex-row items-center justify-center gap-2'>Go to Login </button>
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default UserSignUp
