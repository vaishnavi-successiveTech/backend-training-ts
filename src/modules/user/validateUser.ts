import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const userValidationSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Z]/)
    .required(),
    
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "admin").default("user"),
});

export const validateUserData = (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = userValidationSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors: errorMessages,
    });
  }
  console.log("Validated value:", value);
  req.body = value; // <-- use validated data
  next();
};


