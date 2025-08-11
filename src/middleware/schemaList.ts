import Joi from "joi";


const student=Joi.object({
    firstName: Joi.string()
  .min(3)
  .max(30)
  .pattern(/^[a-zA-Z\s'-]+$/)
  .required(),
    lastName:Joi.string()
  .min(3)
  .max(30)
  .pattern(/^[a-zA-Z\s'-]+$/)
  .required(),
   age: Joi.number().integer().min(0).required()

})

const teacher=Joi.object({
    teacherName:Joi.string().min(3).max(30).required(),
    subject:Joi.string().required()
})

export const schemaList:{[key:string]:Joi.ObjectSchema}={student,teacher}
// helemt 