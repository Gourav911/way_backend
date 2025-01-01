import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
const connectDb=async ()=>{
        try{    
            const connInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log('connection sucess '+connInstance.connection.host)
        }catch(error){
            console.error(error);
            process.exit(1)
        }
    }
export default connectDb  