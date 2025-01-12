import dotenv from 'dotenv'
import connectDb from './db/index.js'
import { app } from './app.js'
dotenv.config({
    path: './.env'
})

connectDb()
.then(
    app.listen(process.env.PORT ||8000,()=>{
    console.log(`Server is running on Port: ${process.env.PORT}`);
    }
)
)
.catch((err)=>{
    console.log("Mongo db connection failed !!!!",err)  
})