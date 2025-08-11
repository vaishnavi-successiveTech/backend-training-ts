import Joi from "joi";

export const userValidation = () =>
  Joi.object({
    username: Joi.string().alphanum().min(3).max(10).required(),

    firstName: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .required(),

    lastName: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .required(),

    email: Joi.string().email().required(),

    role: Joi.string().valid("user", "admin").default("user"),

    password: Joi.string()
      .min(6)
      .pattern(/^[a-zA-Z0-9]+$/)
      .required(),
  });

  export const userLoginValidation = () =>
  Joi.object({
   

    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .pattern(/^[a-zA-Z0-9]+$/)
      .required(),
  });


export const productValidation=()=>Joi.object({
    productName:Joi.string().required().trim(),
    description:Joi.string().required().min(10).max(500),
        price:Joi.number().positive().required().precision(2),
        category:Joi.string().required().trim()
})
//  const validateSchema=(userValidation)=>{
//     return (req,res,next) =>{
//         const {error}=userValidation.validate(req.body);
//         if(error){
//          res.status(400).json(
//             {
//                 success:false,
//                 message:"Validation failed",
//                 details:error.details.map((e)=>e.message),
//             }
//          );

//         }
//         next();
//         }
//     }
//  export default validateSchema;
