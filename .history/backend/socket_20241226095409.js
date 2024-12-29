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
                await User.findByIdAndUpdate(userid,{
                    socketID:socket.id
                })
            }else if(userType=='captain'){
                await Captain.findByIdAndUpdate(userid,{
                    socketID:socket.id
                })
            }
        })

        socket.on('disconnect',()=>{
            console.log(`${socket.id} disconnected!`)
        })
    })
}

function sendMessageToSocketId (socketId,message){
    if(io){
        io.to(socketId).emit('message',message)
    }else{
        console.log('Socket.io not initialized!')
    }
}

module.exports = {initializeSocket,sendMessageToSocketId}
