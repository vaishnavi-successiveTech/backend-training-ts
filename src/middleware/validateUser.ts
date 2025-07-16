import { NextFunction ,Response,Request} from "express";
import jwt from "jsonwebtoken";

export const validateUsers= (req:Request,res:Response,next:NextFunction)=>{
    const {name,password} = req.body;
    let isAuthorized=false;
    console.log("name is",name);
    if(name && password){
        isAuthorized=true;
        console.log("Login successfully")
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