import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const userSchema=Joi.object({
    name:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp ('^[a-zA-Z0-9]{3,30}$')).required(),
});

export const validateSchema=(req:Request,res:Response,next:NextFunction)=>{

    const{error,value} = userSchema.validate(req.body,{ abortEarly: false }); // postman se data jaegaa iske ander 
    // aboutEarly:false is used to present each error.


  if (error) {
    console.error('Validation failed', error.details);
   
    const messages = error.details.map(detail => detail.message); // now error come in array of objects

    return res.status(400).json({
      success: false,
      message: messages, // returns all errors, not just the first
    });
  }
    else{
        console.log('Validation succeded',value);
        res.status(200).json(
            {
                success:"true",
                message:"Validation fullfilled"
            }
        )

    }
 
}