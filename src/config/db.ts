import mongoose  from "mongoose";

export const connnection=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/typescript');
        console.log("connncted to db typescript ");

    }
    catch(error){
        console.log("Cannot connect to databse")
    }
}