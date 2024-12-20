const express = require("express")
const db = require("./config/db")
const UserRouter = require("./Routes/Router")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.set("view engine","ejs")

app.use("/User",UserRouter)
app.use(express.static('public'));



app.listen(8120,()=>{
    console.log("app is running");
})