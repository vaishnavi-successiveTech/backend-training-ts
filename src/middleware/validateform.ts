// // Write a middleware function to validate user input for a registration form.
// //  Check if the required fields are present and if they meet certain criteria (e.g., password strength, email format).

// import { NextFunction, Request, Response } from "express";
// import Joi from "joi";

// const userDetails=Joi.object({
//     name:Joi.string().alphanum().min(3).max(30).required(),
//      dob: Joi.date()
//     .less('now')                // Must be in the past
//     .iso()  ,                    // ISO format (e.g. 2000-01-01)
//     email:Joi.string().email().required(),
//      password:Joi.string().pattern(new RegExp ('^[a-zA-Z0-9]{3,30}$')).required(),
// }
// )

// export const validateform=(req:Request,res:Response,next:NextFunction)=>{
//     const {error,value}=userDetails.validate(req.body);
//     if(error){
//         console.log("Error",error);
//         res.status(501).send("Error occured");
//     }
//     else{
//         console.log("Value",value);
//         res.status(200).json({
//             succcess:"true",
//             message:"Form validation checked"
//         })
//     }

// }

import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";

import { Iuser } from "../interfaces/Iuser";
export class Validate{
    private userDetails:ObjectSchema<Iuser>=Joi.object({

    name: Joi.string()
  .min(3)
  .max(30)
  .pattern(/^[a-zA-Z\s'-]+$/)
  .required(),
  dob: Joi.date().less('now').iso(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
}
);
public validateform=(req:Request,res:Response,next:NextFunction) =>{
     const { error, value } = this.userDetails.validate(req.body,{ abortEarly: false });

     if (error) {
    console.error('Validation failed', error.details);
   
    const messages = error.details.map(detail => detail.message); // now error come in array of objects

    return res.status(400).json({
      success: false,
      message: messages, // returns all errors, not just the first
    });
  }
  console.log("Validated Data", value);
  next(); 

}
};