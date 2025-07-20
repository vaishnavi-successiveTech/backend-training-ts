import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const userSchema=Joi.object({
    name:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp ('^[a-zA-Z0-9]{3,30}$')).required(),
});

export const validateSchema=(req:Request,res:Response,next:NextFunction)=>{

    const{error,value} = userSchema.validate(req.body); // postman se data jaegaa iske ander

    if(error){
        console.error('Validation failed',error.details);
        // res.status(501).send("some  validation need to be followed(error)");
        return next(new Error(error.details[0].message)); //  to send it to the errorHandler
    }
    else{
        console.log('Validation succeded',value);
        next(); // // Continue to controller if validation passes
        // res.status(200).json(
        //     {
        //         success:"true",
        //         message:"Validation fullfilled"
        //     }
        // )
    }
 
}