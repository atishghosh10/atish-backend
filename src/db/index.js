import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB CONNECTED!! DB HOST : ${conectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGO DB CONNNECTION ERROR", error);
        process.exit(1)
        
    }
}

export default connectDB