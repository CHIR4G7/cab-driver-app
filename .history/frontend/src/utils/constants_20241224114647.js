import car from '../assets/car.svg'
import moto from '../assets/moto.webp'
import auto from '../assets/auto.webp'

export const apiRoutes = {
    registerUser:{
        path: '/api/user/register'
    },
    loginUser:{
        path: '/api/user/login'
    },
    registerCaptain:{
        path: '/api/captain/register'
    },
    loginCaptain:{
        path:'/api/captain/login'
    },
    getUserProfile:{
        path: '/api/user/getuserprofile'
    },
    getCaptainProfile:{
        path : '/api/captain/getprofile'
    },
    logoutUser:{
        path: '/api/user/logout'
    },
    logoutCaptain:{
        path:'/api/captain/logout'
    },
    getFare:{
        path:'/api/ride/getFares'
    }
}

export const locations = [
    {
        "description" : "Elante Mall Chandigarh",
        "place_id" : "1"
    },
    {
        "description" : "Sukhna Lake Chandigarh",
        "place_id" : "1"
    },
    {
        "description" : "Punjab Engineering College Chandigarh",
        "place_id" : "1"
    },
    {
        "description" : "Sector 26 Chandigarh",
        "place_id" : "1"
    },
    {
        "description" : "Tagore Theate Chandigarh",
        "place_id" : "1"
    },
]

export const vehicles = {
    car: {
        value: 'Car',
        image: car,
        text :'Affordable,Car Rides'
    },
    auto:{
        value:'Auto',
        image: auto,
        text: 'Affordable,Auto Rides'
    },
    moto:{
        value:'MotorCycle',
        image: moto,
        text: 'Affordable,Moto Rides'
    }
}