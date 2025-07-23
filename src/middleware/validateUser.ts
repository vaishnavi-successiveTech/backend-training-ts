import { NextFunction ,Response,Request} from "express";
import jwt from "jsonwebtoken";
export class ValidateUsers{
public  validateUsers= (req:Request,res:Response,next:NextFunction)=>{
    const {name,password} = req.body;
    let isAuthorized=false;
    console.log("name is",name);
    console.log(password)
    if(name && password){
        isAuthorized=true;
        console.log("Login successfully")
        next();
    }
    else if(name && !password){
        console.log("Name is given but not password");
        res.status(501).send("Error occured password not present");

    }
    else if(!name && password){
        console.log("Password is given but not name");
        res.status(501).send("Error occured name not present");
    }
    else{
        console.log("some error")
    }
}
public validateUserJwt=(req:Request,res:Response,next:NextFunction)=>{
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
}