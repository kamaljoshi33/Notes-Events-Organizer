const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json());
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


app.post('/login',(req,res)=>{
    const {userName, passwords} = req.body
      if (!userName || !passwords) {
        return res.status(400).json({ message: "Please provide valid username and password." });
    }

    try {
        if (userName =="data" && passwords === 'admin') {
            return res.status(200).json({ message: "Successfully logged in!" });
        } else {
            return res.status(401).json({ message: "Invalid username or password." });
        }
    } catch (err) {
        console.error("Login error:", err); // Log the actual error for debugging
        return res.status(500).json({ message: "An internal server error occurred during login." });
    }
}) 


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})