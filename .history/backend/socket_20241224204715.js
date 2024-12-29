const socketIo = require('socket.io')

let io;

function initializeSocket (server){
    io = socketIo(server,{
        cors:{
            origin:'*',
            methods: ['GET','POST']
        }
    });

    io.on('connection',(socket)=>{
        console.log(`Client Connected: ${socket.id}`)


        socket.on('disconnect',()=>{
            console.log(`${socket.id} disconnected!`)
        })
    })
}
