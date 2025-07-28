import mongoose from "mongoose";
import { Iuser } from "../entities/Iuser";

const userSchema=new mongoose.Schema<Iuser>({
    firstName:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:"user"}
});
export const UserModel=mongoose.model<Iuser>("User",userSchema);
export type { Iuser };