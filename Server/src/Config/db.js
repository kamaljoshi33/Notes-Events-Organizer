const mongooes = require('mongoose')
const config = require('./index')

const connectDB = async()=>{
    try{
        await mongooes.connect(config.mongoURI)
        console.log("database connected successfully")
    }catch(err){
        console.log("database not connected ", err)
        process.exit(1);
    }
}

module.exports =  connectDB
