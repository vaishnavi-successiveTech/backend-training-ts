import { NextFunction ,Response,Request} from "express";
import jwt from "jsonwebtoken";
import { json } from "stream/consumers";
export const validateUsers= (req:Request,res:Response,next:NextFunction)=>{
    const {name,password} = req.body;
    
    console.log("calling");
    console.log("name is",name);
    if(name == "Nayan" && password=="2486"){
        console.log("I have checked")
        next();
    }else{
        console.log("pending")
    }
}
export const validateUserJwt=(req:Request,res:Response,next:NextFunction)=>{
    try{
        const token : any = req.headers.authorization; // has to set header in the header to verify it 

        const secret = process.env.SECRET_KEY || "asdrg";
        const decoded=jwt.verify(token,secret);  // 
        res.json({
            data:decoded
        })
        next();
    }catch(err){
        console.log("Something went wrong ",err);

    }
}