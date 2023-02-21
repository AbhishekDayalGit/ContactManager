const express=require('express')
const dotenv = require("dotenv").config()
const app=express()
const route=require('./routes/contactRoutes')
const connectDb=require('./config/connectDb')
const errorHandler = require('./middleware/errorhandler')
connectDb()
app.use(express.json())
app.use("/api/contacts",route)
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
const port=process.env.PORT||5000

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
