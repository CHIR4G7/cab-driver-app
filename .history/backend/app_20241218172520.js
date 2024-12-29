const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const {connectToDB} = require('./utils/db')

const app = express();
dotenv.config();//configured for using any environmental variable
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));//set up server side cors for allowing requests to cross 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectToDB();

app.get('/',(request,response)=>{
    response.send("Hi")
})

// All the routes are being required and called here
app.use('/api/user',require('./routes/user.route')) // User Authentication and registration routes
app.use('/api/captain',require('./routes/captain.route')) // Captain Routes
app.use('/api/maps',require('./routes/map.route')) // map route

module.exports = app