import mongoose  from "mongoose";

export const connnection=async()=>{

    try{
        const mongo_url=process.env.MONGO_URI!;
        await mongoose.connect(mongo_url);
        console.log("connncted to db typescript ");
    }
    catch(error){
        console.log("Cannot connect to databse")
    }
}