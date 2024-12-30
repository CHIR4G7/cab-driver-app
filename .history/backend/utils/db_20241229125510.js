const mongoose = require('mongoose')

const connectToDB = async ()=>{
    try {
        const URL = process.env.MONGO_URL
        if(!URL)
        {
            throw new Error("Mongo URL Not present");
        }

        // await mongoose.connect(URL,{
        //     dbName: "uber-test-local"
        // },{

        // })
        await mongoose.connect(URL)
        console.log("SuccessFully Connected Mongo DB!")

    } catch (error) {
        console.log("Mongo DB Not Connected!")
        process.exit(1)
    }


    // When Someone from frontend connects
    mongoose.connection.on('connected',()=>{
        console.log('Mongo DB Connection is currently Connected!')
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("Mongo DB Server Disconnected!")
    })
    mongoose.connection.on('error',()=>{
        console.log("Mongo DB Encountered Error!")
    })
}

module.exports = {connectToDB}