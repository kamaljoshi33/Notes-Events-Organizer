const mongooes = require('mongoose')
const config = require('./index')

const connectionDB = async()=>{
    try{
        await mongooes.connect(config.mongoURI)
        console.log("database connected successfully")
    }catch(err){
        console.log("database not connted ", err)
    }
}

module.exports =  connectionDB
