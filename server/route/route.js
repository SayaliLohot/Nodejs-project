const route = require("express").Router()
const dataroute = require("./dataroute/dataroute")
route.get('/',dataroute)
// route.get("/", (req,res)=>{
//     res.send({msg:"hello"})
//     // res.send("bollywood")
// })

module.exports = route

