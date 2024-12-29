import Car from '../assets/car.svg'
import Moto from '../assets/moto.webp'
import Auto from '../assets/auto.webp'

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
    },
    createNewRide:{
        path: '/api/ride/create'
    },
    getRideInfo:{
       path: '/api/ride/getRideInfo'
    },
    getAutoCompleteSuggestions:{
        path: '/api/maps/autocomplete'
    },
    confirmRideCaptain:{
        path: '/api/ride/confirm'
    },
    endRide:{
        path: '/api/ride/end-ride'
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

export const vehicles = [
    {
        name: 'Car',
        image: Car,
        text :'Affordable,Car Rides',
        cap: 4,
        value : 'car'
    },
    {
        name:'Auto',
        image: Auto,
        text: 'Affordable,Auto Rides',
        cap: 3,
        value : 'auto'
    },
    {
        name:'Motorcycle',
        image: Moto,
        text: 'Affordable,Moto Rides',
        cap: 1,
        value: 'motorcycle'
    }
]