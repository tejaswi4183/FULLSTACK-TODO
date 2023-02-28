const express=require("express")
const mongoose=require("mongoose")
const routes=require('./routes/todo')
const cors=require('cors')
require('dotenv').config()

const app=express()
const PORT=process.env.PORT || 5000
const MONGO_URL=process.env.MONGODB_URL
app.use(express.json())
app.use(cors())

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL).then(()=>{
    console.log("connected")
}).catch((err)=>[
    console.log(err)
])
app.use(routes)
app.listen(PORT,()=>[
    console.log(`Server is running on ${PORT}`)
])