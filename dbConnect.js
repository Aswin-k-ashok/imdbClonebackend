const mongoose = require('mongoose')
const  dbConnect = ()=>{
    console.log(process.env.DB)
    const connectionParms = {useNewUrlParser:true};
    mongoose.connect(process.env.DB, connectionParms);

    mongoose.connection.on("connected",()=>{
        console.log("connected to database")
    })

    mongoose.connection.on("error",(error)=>{
        console.log(`tini tam this is wraang ${error}`)
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("connection gone")
    })
}

module.exports= dbConnect
