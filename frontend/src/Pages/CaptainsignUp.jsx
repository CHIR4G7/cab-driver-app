import React from 'react'
import { useForm } from 'react-hook-form'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { apiRoutes } from '../utils/constants';
import axios from 'axios';

const CaptainsignUp = () => {

  const capacityOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const vehicleTypeOptions = ['', 'Car', 'Motorcycle', 'Auto']

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: "onChange"
    }
  )

  const onSubmit = async (data) => {
    try {
      const captainData = {
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.password,
        vehicle:{
          color:data.color,
          plate:data.platenumber,
          capacity:data.capacity,
          typeVehicle:data.typevehicle
        }
      }
      console.log(captainData)
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.registerCaptain.path}`
      const response = await axios.post(url, captainData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials:true
      })
      // console.log(response.data.token)
      return response;
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
    reset();
  }

  return (
    <div>
      <div className='absolute'>
        <span className='absolute top-[3vh] text-4xl ml-2 font-semibold'>Uber</span>
      </div>
      <div className='absolute h-screen w-full flex flex-col gap-1 ml-[7vh] top-[10vh]' id='user' >
        <h2 className='text-2xl font-medium'>Want to become a captain!</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>

            <div className='flex flex-row gap-2'>
              <div className='flex flex-col w-[40%]'>
                <label className='font-medium'>First Name</label>
                <input type="text" className='w-full p-2 rounded-lg bg-slate-200 text-black'
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

              <div className='flex flex-col w-[40%]'>
                <label className='font-medium'>Last Name</label>
                <input type='text' className=' w-full p-2 rounded-lg bg-slate-200 text-black'
                  placeholder='Last Name'
                  {...register('lastname', {
                    required: 'Please Enter Valid Last Name',
                    minLength: {
                      value: 3,
                      message: 'Last Name should be greater than 3!'
                    }
                  })} />
                <span className='text-[1.5vh] text-red-400'>{errors.lastname && <p>{errors.lastname.message}</p>}</span>
              </div>
            </div>


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
              <span className='text-[1.5vh] text-red-400'>{errors.email && <p>{errors.email.message}</p>}</span>
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
              <span className='text-[1.5vh] text-red-400'>{errors.password && <p>{errors.password.message}</p>}</span>
            </div>
            <div>
              <span className='font-medium'>Vehicle Details</span>
            </div>



            <div className='flex flex-row gap-2'>
              <div className='flex flex-col w-[40%]'>
                <label className='font-medium'>Color</label>
                <input type="text" className='w-full p-2 rounded-lg bg-slate-200 text-black'
                  placeholder='Vehicle Color'
                  {...register('color', {
                    required: 'Please Enter a Color',
                    minLength: {
                      value: 3,
                      message: 'Color should be greater than 3!'
                    }
                  })} />
                <span className='text-[1.5vh] text-red-400'>{errors.color && <p>{errors.color.message}</p>}</span>

              </div>

              <div className='flex flex-col w-[40%]'>
                <label>Plate Number</label>
                <input type='text' className=' w-full p-2 rounded-lg bg-slate-200 text-black'
                  placeholder='AB 00 XY 0000'
                  {...register('platenumber', {
                    required: 'Please Enter Valid Plate Number',
                    minLength: {
                      value: 3,
                      message: 'Plate Number should be greater than 3!'
                    }
                  })} />
                <span className='text-[1.5vh] text-red-400'>{errors.platenumber && <p>{errors.platenumber.message}</p>}</span>
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <div className='flex flex-col w-[40%]'>
                <label>Capacity</label>
                <select id='capacity' className='w-full p-2 rounded-lg bg-slate-200 text-black'

                  {...register('capacity', {
                    required: 'Please Enter Capacity!',
                    min: {
                      value: 1,
                      message: 'Capacity should be grater than 1!'
                    }
                  })} >
                  {capacityOptions.map((capacity) => {
                    return <option key={capacity}>{capacity}</option>
                  })}
                </select>
                <span className='text-[1.5vh] text-red-400'>{errors.capacity && <p>{errors.capacity.message}</p>}</span>

              </div>

              <div className='flex flex-col w-[40%]'>
                <label>Type of Vehicle</label>
                <select className=' w-full p-2 rounded-lg bg-slate-200 text-black'

                  {...register('typevehicle', {
                    required: 'Please Choose a Valid Vehicle Type!',
                    minLength: {
                      value: 3,
                      message: 'Plate Number should be greater than 3!'
                    }
                  })} >
                  {vehicleTypeOptions.map((vehicle) => {
                    return <option key={vehicle}>{vehicle}</option>
                  })}
                </select>
                <span className='text-[1.5vh] text-red-400'>{errors.typevehicle && <p>{errors.typevehicle.message}</p>}</span>
              </div>
            </div>

            <div>
              <button className='border-2 border-black text-white bg-black w-[78%] p-2 rounded-lg flex flex-row items-center justify-center mt-4'>Register</button>

            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default CaptainsignUp
