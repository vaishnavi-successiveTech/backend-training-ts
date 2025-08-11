import { userLoginValidation, userValidation } from "./validateSchema.js";

export const userMiddleware=(req,res,next)=>{
 const {error,value}=userValidation().validate(req.body,{abortEarly:false});
 if(error){
    return res.status(400).json({
        success:"false",
        message:"Validation error",
        errors:error.details.map(e=>e.message)
    })
 }
 req.body=value;
 next();
}
export const userLoginMiddleware=(req,res,next)=>{
 const {error,value}=userLoginValidation().validate(req.body,{abortEarly:false});
 if(error){
    return res.status(400).json({
        success:"false",
        message:"Validation error",
        errors:error.details.map(e=>e.message)
    })
 }
 req.body=value;
 next();
}