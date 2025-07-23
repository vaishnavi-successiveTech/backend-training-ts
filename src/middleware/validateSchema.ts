import { NextFunction, Response } from "express";
import Joi from "joi";
import { UserRequest } from "../interfaces/IMiddlewares";


const userSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

export class SchemaValidation{
public  validateSchema = (req: UserRequest, res: Response, next: NextFunction) => {
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    console.error("Validation failed", error.details);
    // Send only the first validation message
    return res.status(400).json({
      success: false,
      error: error.details[0].message,
    });
  }

  console.log("Validation succeeded", value);
  next();
};
}