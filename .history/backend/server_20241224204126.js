const http = require('http');
const app = require('./app')
const { Server } = require('socket.io');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000
const io = new Server(server); 

server.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})