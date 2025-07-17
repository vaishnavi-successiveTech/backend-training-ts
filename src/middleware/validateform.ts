// Write a middleware function to validate user input for a registration form.
//  Check if the required fields are present and if they meet certain criteria (e.g., password strength, email format).

import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const userDetails=Joi.object({
    name:Joi.string().alphanum().min(3).max(30).required(),
     dob: Joi.date()
    .less('now')                // Must be in the past
    .iso()  ,                    // ISO format (e.g. 2000-01-01)
    email:Joi.string().email().required(),
     password:Joi.string().pattern(new RegExp ('^[a-zA-Z0-9]{3,30}$')).required(),
}
)

export const validateform=(req:Request,res:Response,next:NextFunction)=>{
    const {error,value}=userDetails.validate(req.body);
    if(error){
        console.log("Error",error);
        res.status(501).send("Error occured");
    }
    else{
        console.log("Value",value);
        res.status(200).json({
            succcess:"true",
            message:"Form validation checked"
        })
    }

}