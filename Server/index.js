const express = require("express")
const app = express()

const PORT = 3001


app.get('/',(req,res)=>{
    res.send("hey user")
})

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})