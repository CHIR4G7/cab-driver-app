import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your_stripe_public_key');

const CheckoutForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            console.error(error);
        } else if (paymentIntent.status === 'succeeded') {
            navigate('/captain-home');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay ₹{amount}
            </button>
        </form>
    );
};

const FinishRide = () => {
    const { finishRide } = useContext(RideDataContext)
    const [clientSecret, setClientSecret] = React.useState('');
    const amount = 19825; // Amount in paise (₹198.25)

    React.useEffect(() => {
        axios.post('/api/payment/create-payment-intent', { amount })
            .then(response => setClientSecret(response.data.clientSecret))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={`${finishRide ? '' : 'hidden'} absolute bottom-0 w-full bg-white pb-6`}>
            <div className='flex flex-col justify-center items-center py-3'>
                <span className='font-medium text-xl'>Ride Summmary</span>
            </div>

            <div className='flex flex-col w-full mt-3 gap-3 ml-2'>
                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaLocationDot /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Pickup</span>
                        <span className='text-gray-700'>Punjab Engineering College</span>
                    </div>
                </div>

                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaSquare /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>Dropoff</span>
                        <span className='text-gray-700'>Ovenfresh Sector-26</span>
                    </div>
                </div>

                <div className='flex flex-row gap-2  w-full'>
                    <span className='mt-[1.8vh]'><FaMoneyBillWave /></span>
                    <div className='flex flex-col'>
                        <span className='font-medium text-md'>₹198.25</span>
                        <span className='text-gray-700'>Cash, Car</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <div className='text-yellow-600 flex flex-row gap-2'>
                    <span className='mt-[0.9vh]'><FaExclamationCircle /></span>
                    <span>Payment Pending</span>
                </div>
                {clientSecret && (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={198.25} />
                    </Elements>
                )}
            </div>

        </div>
    )
}

export default FinishRide
