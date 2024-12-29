const {Server} = require('socket.io')
const User = require('./models/user.schema')
const Captain = require('./models/captain.model')
let io;

function initializeSocket (server){
    io = new Server(server,{
        cors:{
            origin:'http://localhost:5173',
            methods: ['GET','POST']
        }
    });

    io.on('connection',(socket)=>{
        console.log(`Client Connected: ${socket.id}`)

        socket.on('join',async (data)=>{
            const {userid,userType} = data

            if(userType=='user'){
                console.log('user',userid)
                await User.findByIdAndUpdate(userid,{
                    socketID:socket.id
                })
            }else if(userType=='captain'){
                console.log('captain',userid)
                await Captain.findByIdAndUpdate(userid,{
                    socketID:socket.id
                })
            }
        })

        socket.on('update-location-captain',async (data)=>{
            // console.log('Captain Location Updated!')
            const {captainId,location} = data;
            if(!location || !location.latitude || !location.longitude){
                return socket.emit('error',{message:'Invalid Coordinates Recieved!'})
            }
            if(captainId){
                await Captain.findByIdAndUpdate(captainId,{location:{
                    latitude:location.latitude,
                    longitude:location.longitude
                }})
            }
        })
        socket.on('change-activity',async (data)=>{
            const {captainId,status} = data;
            await Captain.findByIdAndUpdate(captainId,{status:status})
        })

        socket.on('ride-started',async (data)=>{
            const {rideId} = data
            await Ride.findByIdAndUpdate(rideId,{status:'ongoing'})
        })

        socket.on('disconnect',()=>{
            console.log(`${socket.id} disconnected!`)
        })
    })
}

function sendMessageToSocketId (socketId,messageObj){
    console.log('Sending Message to SocketId:',socketId)
    if(io){
        io.to(socketId).emit(messageObj.event,messageObj.data)
    }else{
        console.log('Socket.io not initialized!')
    }
}

module.exports = {initializeSocket,sendMessageToSocketId}
