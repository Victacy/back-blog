const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const http=require('http')
const Port=process.env.port
const server=http.createServer(app)
const userRouter=require('./controllers/owner')


const config={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

app.use(cors());

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI,config)
.then(() => {
    console.log("Connected successfully")
})

.catch(err => {
    console.log("A problem occurred",err)
})

app.use(userRouter)

server.listen(Port, () =>{
    console.log("Express server is working")
})

