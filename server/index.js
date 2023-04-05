const express = require("express")
const app = express()
const route = require('./route/route')
const cors = require("cors")
const PORT = process.env.PORT || 3400


app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(route)

app.listen(PORT, ()=>{
    console.log("server running")
})