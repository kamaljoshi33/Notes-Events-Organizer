const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

const PORT = 3001



app.get('/',(req,res)=>{
    res.send("hey user")
})

app.get('/data', (req,res)=>{
    const data = {
        name : "kamal",
        lastname : "joshi",

    }
    res.send(data)
})

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})