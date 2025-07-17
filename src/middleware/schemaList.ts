import Joi from "joi";


const student=Joi.object({
    firstName:Joi.string().alphanum().min(3).max(30).required(),
    lastName:Joi.string().alphanum().min(3).max(30).required(),
    age:Joi.number()
})

const teacher=Joi.object({
    teacherName:Joi.string().alphanum().min(3).max(30).required(),
    subject:Joi.string().required()
})

export const schemaList:{[key:string]:Joi.ObjectSchema}={student,teacher}