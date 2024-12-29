const http = require('http');
const app = require('./app')
const {initializeSocket} = require('./socket')

const server = http.createServer(app);
const PORT = process.env.PORT || 3000

initializeSocket(server)

server.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})