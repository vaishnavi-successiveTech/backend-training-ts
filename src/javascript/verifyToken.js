
import jwt from "jsonwebtoken"
import Person from "../models/RegisterUser.js";

export const verifyToken= async(req,res,next)=>{
    try{
        const token=req.cookies.token;
        // const authHeader=req.headers.authorization;
         if (!token) {
      return res.status(401).json({ message: "Access Denied. Token missing" });
    }

// ''
//         if(!authHeader  || !authHeader.startsWith("Bearer ")){
//             return res.status(400).json({
//                 message:"Token Missing"
//             });
//         }

        // const token =authHeader.split(" ")[1];

        //verify token

        const decoded=jwt.verify(token,process.env.JWT_SECRET || "secret");
        req.decoded=decoded;
        
         next();
    }
    catch(error){
      return res.status(401).json({
      message: "Invalid or expired token",
      error: error.message,

    })}
}

export const isAdmin = async(req, res, next) => {
  
try {
    const findUser = await Person.findById(req.decoded._id);
    if(!findUser){
      return res.status(400).json({
        message:"User does not exist"
      })
    }
    if(findUser.role === "admin"){
     return  next();
    }
    
} catch (error) {
  next(error);
}
};