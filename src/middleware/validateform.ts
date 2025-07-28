// Write a middleware function to validate user input for a registration form.
//  Check if the required fields are present and if they meet certain criteria (e.g., password strength, email format).

import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const userDetails = Joi.object({
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
});

export const validateform = (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = userDetails.validate(req.body,{ abortEarly: false });

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
};
