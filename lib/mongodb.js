import mongoose from "mongoose";

export const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB.URI);
        console.log("Connect to mongodb");
    }catch(error){
        console.log("Error connecting to mongodb", error)
    }
}   