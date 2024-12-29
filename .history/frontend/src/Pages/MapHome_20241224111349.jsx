import React, { useContext, useRef, useState, useCallback } from 'react'
import mapimg from '../assets/mapimg.png'
import { useForm } from 'react-hook-form'
import { FaArrowLeft } from "react-icons/fa";
import LocationSearchPanel from '../Components/LocationSearchPanel';
import VehicleShowPanel from '../Components/VehicleShowPanel';
import ConfirmRide from '../Components/ConfirmRide';
import { RideDataContext } from '../context/RideContext';
import {apiRoutes,locations} from '../utils/constants'
import axios from 'axios';


const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};


const MapHome = () => {

  const { selecting, setSelecting, booking, setBooking, confirmRide, setConfirmRide } = useContext(RideDataContext)
  const [suggestions, setSuggestions] = useState([])

  const pickupRef = useRef('')
  const destinationRef = useRef('')

  const [activeRef, setActiveRef] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: "onChange"
    }
  )

  const onSubmit = async () => {
    const data = {
      pickup : pickupRef.current.value,
      destination:destinationRef.current.value
    }
    console.log(data)
    

    //create a new ride in backend
    try {
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}${apiRoutes.getFare.path}`
      const response = await axios.post(url,data,{
        headers:{
          "Content-Type": 'application/json'
        },
        withCredentials:true
      })
      console.log(response)
      setBooking((prev)=>!prev)
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  // Here a lot of api calls are to made for autocomplete so implementing DEBOUNCING concept
  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    try {
      // Simulate an API call
      const response = locations.filter((location) =>
        location.description.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(response);
    } catch (error) {
      console.log(error.message);
    }

  };

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 1000), []);

  const handleDestinationChange = async (e) => {
    setActiveRef(destinationRef)
    debouncedFetchSuggestions(e.target.value);
  }

  const handlePickupChange = async (e) => {
    setActiveRef(pickupRef)
    debouncedFetchSuggestions(e.target.value)
  }


  const handleLocationClick = async (ref,value) => {
    ref.current.value = value
    setSuggestions([])
  }

  return (
    <div>
      <span className='absolute top-[3vh] text-4xl ml-4 font-semibold'>Uber</span>
      <div className='h-screen w-screen'>
        {/* <Map/> */}
        <img src={mapimg} alt="" className='h-screen w-screen' />
      </div>
      <div className={`absolute bg-white w-full flex flex-col gap-3 p-2  pl-6 pb-3 ${selecting ? 'top-0 mt-4 rounded-xl h-screen' : 'bottom-0 rounded-3xl pb-6'} ${booking ? 'hidden' : ''} ${confirmRide ? 'hidden' : ''}`} onClick={() => setSelecting(true)}>
        <div className='flex flex-row gap-2'>
          {selecting && <span className='mt-2' onClick={(e) => {
            e.stopPropagation();
            setSelecting((prev) => !prev)

          }}><FaArrowLeft /></span>}
          <span className='font-medium text-2xl'>Find a ride</span>
        </div>

        <div className='flex flex-col gap-1 left-6 ' >
          <div className='h-11 w-1 bg-black absolute top-[11vh] left-[5vh]' />

          <div>
            {/* <span className='absolute top-[10vh] left-[1.5vh]'><FaLocationDot/></span> */}
            <input type="text"
              placeholder='Enter Pickup Location'
              className='p-2 bg-slate-100 rounded-lg w-5/6 pl-8 focus:outline-none'
              {...register('pickup', {
                required: "Please Enter your Pickup Location!"
              })}
              onChange={handlePickupChange}
              ref={pickupRef}
              autoComplete='off'
            />
          </div>
          <div>
            {/* <span className='absolute left-[1.5vh] top-[17vh]'><FaSquare/></span> */}
            <input type="text"
              placeholder='Enter Drop Location'
              className='p-2 bg-slate-100 rounded-lg w-5/6 pl-8 focus:outline-none'
              {...register('destination', {
                required: "Please Enter your Destination!"
              })}
              onChange={handleDestinationChange}
              ref={destinationRef}
              autoComplete='off'
            />
          </div>
          <button type='submit' className={`border-2 border-black text-white bg-black w-5/6 p-2 rounded-lg flex flex-row items-center justify-center mt-4 ${selecting ? '' : 'hidden'}`} onClick={onSubmit}>Book a Ride</button>
        </div>
        <div className={`${!selecting ? 'hidden' : 'h-full'} flex flex-col gap-2 mt-3`}>
          {/* <LocationSearchPanel /> */}
          {suggestions?.map(({ description, place_id }) => {
            return <LocationSearchPanel key={place_id} description={description} place_id={place_id} onClick={() => {
              handleLocationClick(activeRef,description)
            }} />
          })}

        </div>
      </div>

      {/* The Rides panel begins here */}
      <VehicleShowPanel />
      {/* The ride panel ends here */}

      {/* Confirm Ride Panel */}
      <ConfirmRide confirmRide={confirmRide} setConfirmRide={setConfirmRide} />

    </div>
  )
}

export default MapHome
