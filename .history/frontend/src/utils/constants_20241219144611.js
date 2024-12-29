import { logoutCaptain } from "../../../backend/controllers/captain.controller";

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
    getUserInfo:{
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
    }
}