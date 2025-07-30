import mongoose from "mongoose";
import { IuserRegister } from "../entities/IuserRegister";


const userSchema=new mongoose.Schema<IuserRegister>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:"user"}
});
export const User=mongoose.model<IuserRegister>("User",userSchema);
export type { IuserRegister };